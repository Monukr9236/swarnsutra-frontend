import { toast } from "react-toastify";
const cartReducer = (state, action) =>{
     switch(action.type){
        case "ADD_TO_CART":
            const{cartItems} = state;
            const cartProducts = [...cartItems];
            // const addToCart = ()=>{
                //the item that we are trying to add in cartItems already existing or not
                const itemIndex = cartProducts.findIndex(item => item.id === action.payload.id);
                // console.log("itemIndex", itemIndex);
                //if the item does not exit in cartItems, then itemIndex will be -1, otherwise itemIndex >= 0
                if(itemIndex >= 0){ // that means we already have that item in our cartItems
                    cartProducts[itemIndex].cartQuantity += 1;
                    toast.info(`increased ${cartProducts[itemIndex].title} cart quantity`,{
                        position:"bottom-left"
                    })
                }
                else{
                    const tempProduct = {...action.payload, cartQuantity:1};
                    cartProducts.push(tempProduct);
                    toast.success(`${action.payload.title} added to cart`,{
                        position:"bottom-left"
                    })
                }
                localStorage.setItem("cartItems", JSON.stringify(cartProducts));
            // }
            
            // addToCart();
            return{
                ...state,
                cartItems:cartProducts
            }

        case "REMOVE_FROM_CART":
            const filterProducts = state.cartItems.filter((item)=> item.id != action.payload);
            toast.success(`product removed from the cart`,{
                position:"bottom-left"
            })
            localStorage.setItem("cartItems", JSON.stringify(filterProducts));
            return{
                ...state,
                cartItems:filterProducts,
                cartTotalQuantity:0,
                cartTotalAmount:0
            }

    
            // case "UPDATE_QUANTITY":
            //    const {item, value} = action.payload;

            //    if(value ==="increase"){
            //      // increase the quantity
            //      item.cartQuantity += 1;
            //    }
            //    else if(value === "decrease"){
            //      // decrease the quantity
            //         if(item.cartQuantity > 1){
            //             item.cartQuantity -= 1;
            //         }
            //         // remove from the cart
            //         else if(item.cartQuantity === 1){
            //             const filterProducts = state.cartItems.filter((cartItem)=> cartItem.id !== item.id);
            //             state.cartItems = filterProducts;
            //         }
            //    }
            //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            //   return{
            //     ...state,
            //   }  

        case "DECREMENT_QUANTITY":
            let updatedProduct = state.cartItems.map((currElem)=>{
                if(currElem.id === action.payload){
                    let decQuantity = currElem.cartQuantity - 1;
                    toast.success(`${currElem.title} quantity decreased`,{
                        position:"bottom-left"
                    })
                    if(decQuantity <=1 ){
                        // const filterProduct = state.cartItems.filter((cartItem)=> cartItem.id !== action.payload);
                        // return{
                        //     ...state,
                        //     cartItems:filterProduct
                        // }
                        decQuantity = 1;
                        toast.info(`product ${currElem.title} must be atleast 1`,{
                            position:"bottom-left"
                        })
                    }
                    return{
                        ...currElem,
                        cartQuantity:decQuantity
                    }
                }
                else{
                    return currElem;
                }
            })

            // console.log("updatedItem", updatedProduct)
            localStorage.setItem("cartItems", JSON.stringify(updatedProduct))
            return{
                ...state,
                cartItems:updatedProduct
            }
            case "INCREMENT_QUANTITY":
                let updatedProducts = state.cartItems.map((currElem)=>{
                    if(currElem.id === action.payload){
                        let incQuantity = currElem.cartQuantity + 1;
                        toast.success(`${currElem.title} quantity increased`,{
                            position:"bottom-left"
                        })
                        return{
                            ...currElem,
                            cartQuantity:incQuantity
                        }
                    }
                    else{
                        return currElem;
                    }
                })
    
                // console.log("updatedItem", updatedProducts)
                localStorage.setItem("cartItems", JSON.stringify(updatedProducts))
                return{
                    ...state,
                    cartItems:updatedProducts
                }
    
        case "GET_CART_TOTAL":
            let{total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const{price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                
                return cartTotal;
            },
            {
                total:0,
                quantity:0,
            }
            );

            console.log(quantity, total);
            return{
                ...state,
                cartTotalQuantity:quantity,
                cartTotalAmount:total
            }
            
        case "CLEAR_CART":
            localStorage.clear();
            toast.success(`cart is cleared`,{
                position:"bottom-left"
            })
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state;
     }
}

export default cartReducer;