import React from 'react'
import { useParams } from 'react-router-dom';
import { useFilter } from '../../store/context/filter-context';
export const SingleProduct = () => {
    const{id} = useParams();
    console.log(id);
    const {state:{all_products} } = useFilter();
    const singleProduct = all_products.filter((item)=> {
      return item.id == id;
    });
    
  return (
    <div className='single-product' style={{display:"flex", padding:"1rem"}}>
        {singleProduct.length>0?
           singleProduct.map((item)=>{
          return(
            <>
              <div className='image-container' key={item.id} style={{flex:2, border:"2px solid #f0f0f0"}}>
                  <img src={item.image} alt= {item.title} style={{width:"100%", height:"400px",objectFit:"contain"}}/>
              </div>
              <div style={{flex:3}}>
                  <h3>{item.title}</h3>
                  <h3 style={{color: "#212121",fontWeight:"600"}}>price: Rs {item.price}/-</h3>
                  <h3>Size: {item.size}</h3>
                  <button className='btn' >Add to cart</button>
              </div>
            </>
          )
         })
         :
         <div><p>No products found</p></div>
       }
        
    </div>
  )
}
export default SingleProduct;