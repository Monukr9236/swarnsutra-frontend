import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../store/context/cart-context';
import './Cart.css'
export const Cart = () => {
  const{state, dispatch} = useCartContext();
  const{cartItems, cartTotalAmount, cartTotalQuantity} = state;
  console.log("cartItems",cartItems)

  // useEffect(()=>{
  //    dispatch({
  //     type:"GET_TOTAL"
  //    })
  // },[cartItems])
  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {
          cartItems.length === 0 ? (
            <div className='cart-empty'>
              <p>Your Cart is empty!</p>
              <p>Add a few products and come back here to checkout.</p>
              <div className='start-shopping'>
                   <Link to='/products'>
                        <button className='start-shpping-btn'>Start Shopping</button>
                   </Link>
              </div>
            </div>
          ): (
            <div>
                <div className='titles'>
                  <h3 className='product-title'>Product</h3>
                  <h3 className='price'>Price</h3>
                  <h3 className='Quantity'>Quantity</h3>
                  <h3 className='total'>Total</h3>
                </div>
                <div className='cart-items'>
                {
                    cartItems.length > 0 &&
                    cartItems.map((item)=>{
                      return(
                        <div className='cart-item' key={item.id}>
                          <div className='cart-product'>
                            <img src={item.image} alt= {item.title} />
                            <div className='product-desc'>
                               <p>{item.title}</p>
                               <button onClick={()=>dispatch({type:"REMOVE_FROM_CART", payload:item.id})}>Remove</button>
                            </div>
                          </div>
                          <div className='product-price'>
                            <p>Rs {item.price}/-</p>
                          </div>
                          <div className='product-quantity'>
                            <button onClick={()=>dispatch({type:"DECREMENT_QUANTITY", payload: item.id})}>-</button>
                            <p className='count'>{item.cartQuantity}</p>
                            <button onClick={()=>dispatch({type:"INCREMENT_QUANTITY", payload:item.id})}>+</button>
                          </div>
                          <div className='product-total-price'>
                             <p>Rs {item.cartQuantity * item.price}/-</p>
                          </div>
                        </div>
                      )
                    }) 
                }   
                </div>

                <div className='cart-summary'>

                    <button className='clear-cart' onClick={()=>dispatch({type:"CLEAR_CART"})}>Clear Cart</button>
                    <div className='cart-checkout'>
                       <div className='subtotal'>
                        <span>Subtotal</span>
                        <span className='amount'>Rs {cartTotalAmount}/-</span>
                       </div>
                       <p>Taxes and shipping calculated at checkout</p>
                       <button className='checkout-btn'>Check Out</button>
                       <div className='start-shopping'>
                          <Link to='/products'>
                              <button className='start-shpping-btn'>Continue Shopping</button>
                          </Link>
                       </div>
                    </div>
                    
                </div>
                
            </div>
          )
      }
      
    </div>
  )
}
export default Cart;

/*
{/* <div className='cart_header'>
        <p>Products</p>
        <p>Price</p>
        <p>Quantity</p>
      </div>
          <>
            {
              cart_products.length > 0 ?
              cart_products.map((item)=>{
                return(
                  <div className='cart_item'>
                    <div className='cart-image'>
                    <img src={item.image} alt= "" />
                    <p>{item.title}</p>
                    </div>
                    <div className='price'>
                      <p>Rs {item.price}/-</p>
                    </div>
                    <div className='quantity_update'>
                      <button>-</button>
                      <p>1</p>
                      <button>+</button>
                    </div>
                
                  </div>
                )
              })
              :
               <div className='cart-empty'>
                   <p>Your cart is empty</p>
                   <p>Add the products to the cart and come back.</p>
               </div>
            }
          </> 


*/
