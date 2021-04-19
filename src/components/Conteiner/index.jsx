import React from 'react'
import ConteinerChild from './styled'

const Conteiner = (props)=>(
  <ConteinerChild className ={props.Identify}> {props.Content} </ConteinerChild>
);
export default Conteiner;