import React, { useState }from 'react'
import './FilterPage.css'
// import products from '../Products/productsdata';
import { useFilter } from '../../store/context/filter-context';
export const FilterPage = () => {
    const{state:{size,price, maxPrice, minPrice} ,filterDispatch} = useFilter();
    console.log("size:",size);

    const handleSort=(e,sortby)=>{
          filterDispatch({
            type:"SORTING",
            payload:sortby
         })
    }
  // const[data, setData] = useState(products);
  const getProductsByCategory=(e)=>{

    // if(e.target.checked){
    //   const result = products.filter((currData)=>{
    //     return currData.category === e.target.id;
    //   })
      // setData(result);
      // console.log(data);
      // let check = e.target.checked;
      // console.log("check", check)
      
      //       let {products, category} = state;
      //       const filteredProducts = products.filter((product)=>
      //       category.length > 0 ? category.includes(product.category) : product
      //  );
      
      //  console.log("Category-filter:", filteredProducts);


      filterDispatch({
        type:"Sort_By_Category",
        payload:e.target.value,
     })
    }
   
    // const[s, setS] = useState([]);
    const sortBySize=(e)=>{
      //  if(e.target.checked){
      //      setS([...s, e.target.value]);
      //  }
      //  else{
      //     let remSize = e.target.value;
      //     if(s.length>0){
      //       const res = s.filter((currSize)=>{
      //             return currSize !== remSize;
      //       })

      //       setS(res);
      //     }
      //  }

      filterDispatch({
        type:"Sort_By_Size",
        payload:{
          type:e.target.value,
          check:e.target.checked
        }
      })
    }

    // console.log("Sizefilter", s)
  
  return (
    <div className='filter-section'>
            <h3>Filter</h3>

            {/* category */}
            <div className='category'>
              <p className="category-title">Category</p>
              <div className='category-item'>
                <input type="radio" name="category"  id="All" value="All" onChange={(e)=>getProductsByCategory(e)}/>
                <label className="linkname" htmlFor="All">All</label>
              </div>
              <div className='category-item'>
                <input type="radio" name="category" id="Men" value="Men" onChange={(e)=>getProductsByCategory(e)}/>
                <label className="linkname" htmlFor="Men">Men</label>
              </div>
              <div className='category-item'>
                <input type="radio" name="category" id="Women" value="Women" onChange={(e)=>getProductsByCategory(e)}/>
                <label className="linkname" htmlFor="Women">Women</label>
              </div>
            </div>
            
            {/* sort by */}
            <div className='category'>
              <p className="category-title">Sort By</p>
              <div className='category-item'>
                <input type="radio" name="sortby"  value="LTH" onChange={(e)=>handleSort(e,"LTH")}/>
                <label className="linkname" htmlFor="LTH">Low to High</label>
              </div>
              <div className='category-item'>
                <input type="radio" name="sortby" value="HTL" onChange={(e)=>handleSort(e,"HTL")}/>
                <label className="linkname" htmlFor="HTL">High to Low</label>
              </div>
            </div>

            {/* Size */}
            <div className='category'>
              <p className="category-title">By Size</p>
              <div className='category-item'>
                <input type="checkbox" name="size"  value="S" onChange={(e)=>sortBySize(e)}/>
                <label className="linkname" htmlFor="S">S</label>
              </div>
              <div className='category-item'>
                <input type="checkbox" name="size" value="M" onChange={(e)=>sortBySize(e)}/>
                <label className="linkname" htmlFor="M">M</label>
              </div>
              <div className='category-item'>
                <input type="checkbox" name="size" value="L" onChange={(e)=>sortBySize(e)}/>
                <label className="linkname" htmlFor="L">L</label>
              </div>
              <div className='category-item'>
                <input type="checkbox" name="size" value="XL" onChange={(e)=>sortBySize(e)}/>
                <label className="linkname" htmlFor="XL">XL</label>
              </div>
              <div className='category-item'>
                <input type="checkbox" name="size" value="XXL" onChange={(e)=>sortBySize(e)}/>
                <label className="linkname" htmlFor="XXL">XXL</label>
              </div>
            </div>

            {/* Price Slider */}
            <div className='category'>
              <p className="category-title">Price</p>
              <div className='category-item'>
                <p>{price}</p>
                <input className='price-slider' type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={(e)=>filterDispatch({type:"FILTER_BY_RANGE", payload:e.target.value})}/>
              </div>
            </div>

            <button onClick={()=> filterDispatch({
              type:"CLEAR_FILTERS"
            })}>Clear</button>
       </div>
  )
}

export default FilterPage;
