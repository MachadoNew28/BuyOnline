import React from 'react'
import { Link } from 'react-router-dom'
import HeadeChild from './styled'
import ItemsContent from './data.js'
import Item from '../Item/index'
import Conteiner from '../Conteiner/index'
import Logo from '../../Assets/AngoBUSNESS.png'
import Image   from '../Image/index'
import Form from '../Form/index'
import Input from '../Form/Input/index'
import Title from './Title'

const Header = ()=>(
  <HeadeChild>
   
   <Conteiner
      Content = {
      <>
        <Title 
            Identify ="first" 
            Content ="Ango"  >
       </Title> 
       <Title 
            Identify ="Second" 
            Content ="Busness"  >
     </Title> 
      </>
      
    } Identify ="Conteiner"/>
     
    
   <Conteiner Content = {
       ItemsContent.map((item,index) =>
         <Link to = {item.path}>
              <Item key = {index}  Content = {item.title}/>
          </Link>
          )
       } Identify ="Conteiner"/>
    

  </HeadeChild>
  
);

export default Header;