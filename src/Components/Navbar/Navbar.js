import React, { useState } from 'react'
import { Link , NavLink} from 'react-router-dom';
import logo from '../../images/logo1.jpg'
import './Navbar.css'
import {FaShoppingCart, FaTimes} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import { useCartContext } from '../../store/context/cart-context';
const activeLink = ({isActive}) =>
   (isActive ? 'active' : '');

 const Navbar = () => {
   const{state:{cartItems}} = useCartContext();
   const [showMenu, setShowMenu] = useState(false);
   const toggleMenu = () =>{
      setShowMenu(!showMenu);
   }
   const hideMenu = () =>{
      setShowMenu(false);
   }
   const user = localStorage.getItem("userInfo");
   // console.log(JSON.parse(user));
  return (
    <div className='main_nav'>
        <div className='nav_logo'>
           <Link to='/'><img src={logo} alt='logo' /></Link>
        </div>
       <div>
          <ul className={showMenu ? 'show-nav activeNav' : 'nav_menu'}
          onClick={hideMenu}
          >
            <li><NavLink to='/' className={activeLink}>Home</NavLink></li>
            <li><NavLink to='/products' className={activeLink}>Products</NavLink></li>
            <li><NavLink to='/blogs' className={activeLink}>Blogs</NavLink></li>
            <li><NavLink to='/aboutus' className={activeLink}>About Us</NavLink></li>
            {
               user? 
               <li onClick={()=>localStorage.removeItem("userInfo")}><Link>Logout</Link></li>
               :
               <li><NavLink to='/logIn' className={activeLink}>Login</NavLink></li>
            }
            <li><Link to='/cart'>
            <FaShoppingCart/>
             <small className='cart-count'>{cartItems.length}</small>
            </Link>
            </li>
          </ul>
          
       </div>
       <div className='mobile' onClick={toggleMenu}>
         {
            showMenu? <FaTimes/> : <GoThreeBars/>
         }
       </div>
    </div>
  )
}

export default Navbar;
