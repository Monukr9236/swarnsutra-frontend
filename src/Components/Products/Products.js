import React, { useEffect, useState } from 'react'
import { useFilter } from '../../store/context/filter-context';
import { useCartContext } from '../../store/context/cart-context';
import FilterPage from '../FilterPage/FilterPage';
import './Products.css'
import { Link } from 'react-router-dom';
// import products from './productsdata';

 const Products = () => {
  
  const{state:{products} , filterDispatch} = useFilter();
  const{state:{cartItems}, dispatch} = useCartContext();
  console.log("products-", products);
  // const[data, setData] = useState(products);

//   const sortedProducts=(products, cateArr)=>{
//     const filteredProducts = products.filter((product)=>
//          cateArr.length > 0 ? cateArr.includes(product.category) : product
//     );
//     return filteredProducts;
    
// }

// let filterProducts = sortedProducts(state.products, state.category);
// console.log("Category-filter:", filterProducts)


  return (
    <div className='main-div'>
       {/* Filter */}
       <FilterPage/>

       {/*Products  */}
       <div className='product-section'>
         <input type="text" placeholder="search your products" className='searchInput'
         onChange={(e)=>filterDispatch({
              type:"SEARCH_ITEM",
              payload:e.target.value.trim().toLowerCase()
         })}
         />
          <div className='product-container'>
          {products.length>0?
           products.map((item)=>{
          return(
            
              <div className='items' key={item.id}>
                <Link to={`/singleproduct/${item.id}`}>
                  <img src={item.image} alt= "" />
                  <h5>{item.title}</h5>
                  <p>price: Rs {item.price}/-</p>
                  </Link>
                  <button className='btn'  onClick={()=>dispatch({type:"ADD_TO_CART", payload:item})}>Add to cart</button>
              </div>
          
          )
         })
         :
         <div><p>No products found</p></div>
       }
          </div>
       </div>
    </div>
  )
}

export default Products;

/**
 <div className='category'>
        <div><input type="checkbox" name="l1l3nestedcategory" id="All" value="All" onClick={(e)=>setData(products)}/>
        <label className="linkname" htmlFor="All">All</label>
        </div>
        <div><input type="checkbox" name="l1l3nestedcategory" id="Men" value="Men" onClick={(e)=>filterResult(e)}/>
        <label className="linkname" htmlFor="Men">Men</label>
        </div>
        <div><input type="checkbox" name="l1l3nestedcategory" id="Women" value="Women" onClick={(e)=>filterResult(e)}/>
        <label className="linkname" htmlFor="Women">Women</label>
        </div>
        <div><input type="checkbox" name="l1l3nestedcategory" id="Girl" value="Girl" onClick={(e)=>filterResult(e)}/>
        <label className="linkname" htmlFor="Girl">Girl</label>
        </div>
        <div><input type="checkbox" name="l1l3nestedcategory" id="Kid" value="Kid" onClick={(e)=>filterResult(e)}/>
        <label className="linkname" htmlFor="Kid">Kid</label>
        </div>
       
      </div>


      {data.length>0?
         data.map((item)=>{
          return(
            <div className='items' key={item.id}>
                <img src={item.image} alt= "" />
                <h5>{item.title}</h5>
                <p>price: Rs {item.price}/-</p>
                <button className='btn'>Add to cart</button>
            </div>
          )
         })
         :
         <div><p>No products found</p></div>
       }
 */
