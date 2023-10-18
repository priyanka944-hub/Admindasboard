import React, { useState } from 'react'
import {NavLink} from 'react-router-dom' ;
import { AiOutlineDown,AiOutlineUp } from "react-icons/ai";

const MenuItem = (props) => {
const {name,subMenus,icon,heading,to} =props;
const [expand, setExpand] = useState(false)
  return (
    <> 
         {heading && heading.length >0 ? (
          <span > <h6 className='heading_li'>{heading}</h6></span>
                       
                      ):"" }  
       <li onClick={props.onClick}>         
                   
                <NavLink to={to} onClick={()=> setExpand(!expand)} className='menu-item'>
                
                    <div className='menu-icon'><i className={icon}></i> </div>
                    <span>{name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {subMenus && subMenus.length > 0 ? <span onClick={()=>setExpand(!expand)}>{expand ?  <AiOutlineUp className='drop_down_icon'/>
                     :
                     <AiOutlineDown className='drop_down_icon'/>} </span> :  ""} </span>


                        {subMenus && subMenus.length > 0 ?(
                            <ul className={`sub-menu ${expand ? "active" : ""}`}>
                                {subMenus.map((menu,index)=>(
                                    <li key={index}>
                                    <NavLink to={menu.to}>{menu.name}</NavLink>
                                    </li>
                                ))}                                
                            </ul>
                        ):null} 
                    
                </NavLink>
            </li>
        
    </>
  )
}

export default MenuItem
