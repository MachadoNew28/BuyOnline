import React, { memo } from 'react'
import DivMain from './styled'
import MenuL from '../menu-left/index'
import MenuR from '../menu-right/index'
import Main from '../component-centrer/index'

function Home (){

    return (
        <DivMain>
         <MenuL></MenuL>
         <Main></Main>
         <MenuR></MenuR>
        </DivMain>
    )
}
export default  memo(Home);