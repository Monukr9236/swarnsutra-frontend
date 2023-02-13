import React, { useState } from 'react'
import './Login.css'
import avtar from '../../images/avatar.svg'
import {FaUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate , Link } from 'react-router-dom'
import { toast } from 'react-toastify'
 const Login = () => {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();
    const sendUserData=(e)=>{
        e.preventDefault();
        const data = {email, password};
        if(email && password)
        {
         localStorage.setItem("userInfo", JSON.stringify(data));
         navigate('/products')
        //  window.location.reload();
         toast.info("Internal server error, Please try again later",{
          position:"top-center",
         })
        }

        //reseting form
        document.getElementById("form").reset();
        
    }

  return (
    <div className='login'>
       <div className='image-login'>
         <h2>Welcome, Back!</h2>
         <p>Login to explore our website</p>
       </div>
       <div className='login-form'>
          <form onSubmit={(e)=>sendUserData(e)} id="form">
            <img className="avtar" src={avtar} alt="avtar" />
            <div className='form-field'>
              <FaUserCircle className='usericon'/>
               <input type="text" name='email' placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='form-field'>
              <RiLockPasswordFill className='passicon'/>
            <input type="text" name='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className='btn login-btn' type='submit'>Login</button>
            <p style={{margin:"0"}}>or</p>
            <div className='loginwithgoogle'>
              <FcGoogle/>
              <p>Log in with Google</p>
            </div>
          </form>

          <div className='afterform'>
              <p >Don't have an account?</p>
              <Link to='/signup' >Register</Link>
          </div>
       </div>
    </div>
  )
}
export default Login;


/*
 <div className='main-div'>
      <div className='category'>
      <h3>filter</h3>
      <div className='category-size'>
        <p>Category</p>
          <div>
             <input type="checkbox" name="category" value="M"/>
             <label htmlFor='M'>M</label>
          </div>
          <div>
             <input type="checkbox" name="category" value="M"/>
             <label htmlFor='M'>M</label>
          </div>
          <div>
             <input type="checkbox" name="category" value="M"/>
             <label htmlFor='M'>M</label>
          </div>
      </div>
      </div>
      




       <div className='products-container'>
       <input type="text" placeholder="search your products" className='searchInput'/>
       <div className='product_list'>
       
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
       </div>
       </div>
    </div>
*/
