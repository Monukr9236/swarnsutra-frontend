import { createContext, useContext, useEffect, useReducer } from "react";
import reducerFunc from "../reducer/filterReducer";
import productsdata from '../../Components/Products/productsdata'

const initialState = {
    products:[],
    all_products:[],
    sort:"",
    category:[],
    size:[],
    maxPrice:0,
    price:0,
    minPrice:0
    

}
//create Context
const FilterContext = createContext();

//create Provider
const FilterProvider = ({children}) =>{
    
    const[state, filterDispatch] = useReducer(reducerFunc, initialState );

    // setting the products to the state when we refresh the page
    useEffect(()=>{
        filterDispatch({
            type:"LOAD_PRODUCTS",
            payload:productsdata
        });

        filterDispatch({
            type:"FILTER_PRODUCTS",
        })
    },[ state.category, state.size, state.sort])


    return(
        <FilterContext.Provider value={{state, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    );
}

//custom hook
const useFilter=()=>{
    return useContext(FilterContext);
}

export {FilterProvider, useFilter};