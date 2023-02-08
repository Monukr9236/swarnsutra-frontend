import React from 'react'
import './Footer.css'
import {BsFacebook,BsTwitter,BsLinkedin,BsInstagram} from "react-icons/bs"
 const Footer = () => {
  return (
    <div className='footer_container'>
       <div className='ftr_body'>
           <div className='ftr-item1'>
               <h3>Quick Links</h3>
               <a href='#' target='_self' title='Home'>Home</a>
               <a href='#' target='_self' title='About us'>About us</a>
               <a href='#' target='_self' title='Blogs'>Blogs</a>
               <a href='#' target='_self' title='Products'>Products</a>
           </div>
           <div className='ftr-item2'>
               <h3>Social Links</h3>
               <div>
                  <BsFacebook/>
                  <a href='https://www.facebook.com' target='_self' title='Facebook'>Facebook</a>
               </div>
               <div>
                  <BsTwitter/>
                  <a href='https://www.twitter.com' target='_self' title='Twitter'>Twitter</a>
               </div>
               <div>
                  <BsLinkedin/>
                  <a href='https://www.linkedin.com' target='_self' title='Linkedin'>Linkedin</a>
               </div>
               <div>
                  <BsInstagram/>
                  <a href='https://www.instagram.com' target='_self' title='Instagram'>Instagram</a>
               </div>
           </div>
           
       </div>
       <div className='ftr_btm'>
         <p> &copy; {new Date().getFullYear()} Swarnsutra Copyright Reserved</p>
         <h3>-- This website is under development --</h3>
       </div>
       
    </div>
  )
}

export default Footer;
