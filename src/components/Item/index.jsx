import React from 'react'
import ItemChild from './styled'
import Circle from './Circle/index'
const Item = ( props )=>(
    <>
     <ItemChild>
          <Circle  Class = "CircleConteiner"/> 
        { props.Content }
     </ItemChild>
    </>
) 
export default Item;