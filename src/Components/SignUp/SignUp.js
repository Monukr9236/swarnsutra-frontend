import React, { useState } from "react";
import { useFormik } from "formik"; 
import Schema from "./validation";
import avtar from '../../images/avatar.svg'
import {FaUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const SignUp = () => {

    const intialFormVlue = {
        email:"",
        password:"",
        confirm_password:""
     }
     

    const formik = useFormik({
        initialValues:intialFormVlue,
        validationSchema: Schema, // jo hamne file banai hai formschema ke liye
        onSubmit: (data,action)=>{
            console.log(data);
        
            action.resetForm();
        }
    });
    const {
        values,
        touched,
        errors,
        handleChange,
        handleReset,
        handleBlur,
        handleSubmit,
      } = formik;

    return (
      <div className='login'>
         <div className='image-login'>
           <h2>Welcome, Back!</h2>
           <p>Signup to explore our website</p>
         </div>
         <div className='login-form'>
            <form onSubmit={handleSubmit}>
              <img className="avtar" src={avtar} alt="avtar" />

              <div className='form-field'>
                <FaUserCircle className='usericon'/>
                 <input type="text" name='email' placeholder='Enter your Email' value={values.email} onChange={handleChange}/>
                 <small>{errors.email}</small>
              </div>

              <div className='form-field'>
                <RiLockPasswordFill className='passicon'/>
                <input type="text" name='password' placeholder='Enter Password' value={values.password} onChange={handleChange}/>
                <small >{errors.password}</small>
              </div>

              <div className='form-field'>
                <RiLockPasswordFill className='passicon'/>
                <input type="text" name='confirm_password' placeholder='Confirm Password' value={values.confirm_password} onChange={handleChange}/>
                <small >{ errors.confirm_password}</small>
              </div>

              <button className='btn login-btn' type="submit">Sign Up</button>
            </form>
  
            <div className='afterform'>
                <p>Already have an account?</p>
                <Link to='/login' >Login</Link>
            </div>
         </div>
      </div>
    )
  }
  export default SignUp;


  