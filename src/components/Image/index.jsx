import React from 'react'
import ImageChild from './styled';

const Image = (props)=>(
  <ImageChild src = {props.image} id ={props.identify}></ImageChild>
)
export default Image;