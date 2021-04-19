import React from 'react'
import TitleChilden from './styled'

const Title = (props)=>(
    <TitleChilden id = {props.Identify}>
        {props.Content} 
    </TitleChilden>
);
export default Title;