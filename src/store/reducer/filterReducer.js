
const reducerFunc=(state, action)=>{
    switch(action.type){
        case "LOAD_PRODUCTS":
            let priceArr = action.payload.map((currElem) => currElem.price);
            let maxPrice = Math.max(... priceArr);
        
            return{
                ...state,
                products:[...action.payload],
                all_products:[...action.payload],
                maxPrice,
                price:maxPrice
            }

        case "SORTING":
            let newSortProducts;
            let newProducts = [...state.products];
            

            const sortProducts=(item1, item2)=>{
                if(action.payload == "LTH"){
                    return item1.price - item2.price;
                }
                if(action.payload == "HTL"){
                    return item2.price - item1.price;
                }
            }

            newSortProducts = newProducts.sort(sortProducts);
            // console.log("newProd-", newSortProducts);
            return{
                ...state,
                products: newSortProducts
            }
        // case "FILTER_PRODUCTS_BY_CATEGORY":
        //     return{
        //         ...state,
        //         products:action.payload
        //     }
        case "Sort_By_Category" :
            
            let new_Prod = state.all_products;
            let products_by_category = [...new_Prod];
            let cat_type = action.payload;
            const get_Products_By_Category=(Products, cat_type)=>{
                if(cat_type == "Men"){
                   const sortedProducts = Products.filter((product)=>
                      product.category === cat_type
                   )

                   return sortedProducts;
                }
                else if(cat_type == "Women"){
                    const sortedProducts = Products.filter((product)=>
                     product.category === cat_type
                  )

                  return sortedProducts;
                }
                else{
                    return new_Prod;
                }
                
            }
            products_by_category = get_Products_By_Category(new_Prod, cat_type);
            // console.log("item",products_by_category);
            return{
                ...state,
                products:products_by_category
            }
    
        case "Sort_By_Size":
         

            return{
                ...state,
                size:action.payload.check ? 
                [...state.size, action.payload.type] :
                state.size.length > 0 ? state.size.filter((sizeVal)=>
                    sizeVal !== action.payload.type
                ): [],

                // products:new_Products
            }

        case "FILTER_PRODUCTS":
            
            let {products, size} = state;
            let new_Products = [...products];
            // console.log("new_Products", new_Products);

            const filterBySize=(products, sizeArr)=>{
                const filteredProducts = products.filter((product)=>
                     sizeArr.length > 0 ? sizeArr.includes(product.size) : product
                );
                return filteredProducts;
            }

            new_Products = filterBySize(new_Products, size);
            console.log("size-filter:", new_Products)
            return{
                ...state,
                products:new_Products
            }
        
        case "FILTER_BY_RANGE":
            let Items = state.all_products;
            Items = Items.filter((item)=> item.price <= action.payload)
            return{
                ...state,
                products:Items,
                price:action.payload
            }

        case "SEARCH_ITEM":
            
            let {all_products} = state;
            let tempFilterProducts = [...all_products];
            let search_val = action.payload;
            if(search_val){
                tempFilterProducts = tempFilterProducts.filter((curElem)=>{
                    return curElem.title.toLowerCase().includes(search_val)
                });
            }
            
            return{
                ...state,
                products: tempFilterProducts
            }
        case "CLEAR_FILTERS":
            return{
                ...state,
                size:[],
                category:[]
            }

        default:
            return state;
    }
}

export default reducerFunc;