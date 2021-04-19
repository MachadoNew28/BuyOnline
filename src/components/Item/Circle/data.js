import React from 'react'
import { FaCircle } from 'react-icons/fa'

function ShowItemCircleContent(props){
    for(let conteger = 1; conteger >= props.Quantity; conteger++){
      return  <FaCircle className ={ props.Identify }></FaCircle> 
    } 
};
export default ShowItemCircleContent