import React, { useState } from 'react'
import BarnerChild from './styled.js'
import Opacity from '../Opacity/index.js'
import Title  from '../Header/Title/index'
import Slides from './data'

function Barner (props)
 {
    const [slidding,setSlidding]= useState(0)
    const length = Slides.length-1;

    function ChanginValue (){
       {
         var count=0;
         for(;count<= length+1;count++){
            setSlidding(count); 
            if( count ===length ){
                count=0;
                setSlidding(0); 
            }
         }
        } 
           

    }
     console.log(slidding)
     
   return (
    <BarnerChild slidding={slidding}>
    <Opacity Content ={
        <>
           <Title Identify ="Title1" Content = {Slides[slidding].title}/>
           

        </>
    }/>
  </BarnerChild>
   )
 }
;
export default Barner;