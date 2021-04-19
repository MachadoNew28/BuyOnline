import React from 'react'
import { FaCircle } from 'react-icons/fa'
import CircleChild from './styled'

const Circle = (props)=>(
 <CircleChild className ={props.Class} >
      <FaCircle className ="CircleTopItem"></FaCircle>
      <FaCircle className ="CircleTopItem"></FaCircle>
      <FaCircle className ="CircleTopItem"></FaCircle>
 </CircleChild>
)
export default Circle;