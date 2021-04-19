import React from 'react'
import { Link } from 'react-router-dom'
import InputChild from './styled'

const Input = (props) =>(
 <InputChild Id = {props.Identify} type = {props.Designation}/>
)
export default Input;