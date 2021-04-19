import React from 'react'
import { Link } from 'react-router-dom'
import FormChild from './styled'

const Form = (props) =>(
 <FormChild>
     {props.Input}
 </FormChild>
)
export default Form;