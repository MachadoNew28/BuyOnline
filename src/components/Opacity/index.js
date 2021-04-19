import React from 'react'
import OpacityChild from './styled'
import Header from '../Header/index'

const Opacity = ( props ) =>(
   <OpacityChild className = {props.Identify}>
       {props.Content}
   </OpacityChild>
)
export default Opacity;