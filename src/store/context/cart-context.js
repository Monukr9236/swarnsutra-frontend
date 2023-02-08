import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
const CartContext = createContext();

const initialState = {
    cartItems:localStorage.getItem("cartItems")?
    JSON.parse(localStorage.getItem("cartItems")):
    [],
    cartTotalQuantity:0,
    cartTotalAmount:0
}
const CartProvider = ({children}) =>{

    const[state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(()=>{
        dispatch({type:"GET_CART_TOTAL"})
    },[state.cartItems]);

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext=()=>{
    return useContext(CartContext);
}
export {CartProvider, useCartContext};

