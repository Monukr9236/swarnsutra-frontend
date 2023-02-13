import React,{useState, useEffect} from 'react'
import './About.css'
 const About = () => {
  const[products, setProducts] = useState([]);
useEffect(()=>{
  fetchProducts();
},[]);

const fetchProducts = async()=>{
  const res = await fetch("http://localhost:5000/product")
  const data = await res.json()
  console.log("response",data);
  setProducts(data);
}
  return (
    <div>
      {
      products.map((item)=>{
        return(
          <div key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>{item.sale_price}</h3>
          </div>
        )
      })
      }
    </div>
  )
}

export default About;
