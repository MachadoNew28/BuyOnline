import React, { useState } from 'react'
import logo from './img/Soft-Life.jpg'
import HeaderStyled,{Nav,Logo} from './styled'
import MenuItems from './menuItems.js'
import Item from './styled'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {FaCircle,FaListAlt} from 'react-icons/fa'

function Header () {

 const [clickItemMenu,setClickItemMenu] = useState (false);
 const [clickMenuShow,setClickMenuShow] = useState (false);

 function HadleClickItemMenu () {
    setClickItemMenu (!clickItemMenu);
    console.log(clickItemMenu)
 }

 function HadleClickMenuShow () {
    setClickMenuShow (!clickMenuShow);
    console.log(clickMenuShow + 'menu')
 }

    return(
        <HeaderStyled>
            <Logo src = {logo}></Logo>
            <FaListAlt onClick = {HadleClickMenuShow} click = {clickMenuShow} id = 'icon-menu-show'></FaListAlt>
            <Nav>
           

                { MenuItems.map((item,index)=>
                 <Link onClick = {HadleClickItemMenu} click = {clickItemMenu}   id ="link" to = {item.path}  key = {index}>
                    <div  className = 'class-circle'>
                        <FaCircle id = 'circle'></FaCircle>
                        <FaCircle id = 'circle'></FaCircle>
                        <FaCircle id = 'circle'></FaCircle>
                    </div>
                   <Item  id = 'item' key = {index} >{item.title}</Item>
                 </Link>
                
                )}
            </Nav>
        </HeaderStyled>
    )
   
}
export default Header;