import React from 'react'
import { useState } from 'react';
import './headerex.css'
import { AiOutlineDown,AiOutlineShoppingCart,AiFillCaretDown } from "react-icons/ai";
import { MdOutlineMarkEmailUnread } from "react-icons/md";



const Headerex = () => {
  const [open,setOpen] = useState(false)

  return (

    <div className='main-header-part'>
    <div className='header'>
      
     <div className='header_center'>
        <ul className='header_list'>
            <li className='en_language'>
              <a href="#"><img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/google_translate_logo.png" alt="eng image"/> 
              <span>En</span>
             {/* <AiOutlineDown className='arrow'/> */}
             </a>
      </li>
            <li className='msg'><a href='#'> <sup>2</sup><MdOutlineMarkEmailUnread className="message_icon" /></a></li>
           <li className='cart'><a href="#"> <sup>2</sup><AiOutlineShoppingCart className='cart_icon'/></a></li>
             {/* drop_down */}
              <div className='header_centerMenu'>
                <button onClick={()=>{setOpen(!open)}}>
                  <ul className='inner_login_details'>
             <li><AiFillCaretDown /></li>
              <li>
              <p className='admin_details'> Admin Panel</p>
              <p className='admin_login_details'><strong>Master Admin</strong></p>
            </li>
            <li className='profile-inner'><img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg" className='profile' alt="profile"/><sub>g</sub></li> 
        </ul> </button>
                <div className={`dropDown_header ${open ? 'active' : 'inactive'}`}>
                <a href='#'>
                 <div className='login_form'>
                <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"/>
                <div> <div>Admin </div> <div>admin@admin.com</div> </div>
                </div>
                 </a>
                 <hr/>
                <a href='#'> Sign out</a> 
                <br/> <hr/>
                <a href='#'> Settings</a>
                </div>
            </div>
        </ul>
     </div>
    
    </div>
    </div>
  )
}

export default Headerex
