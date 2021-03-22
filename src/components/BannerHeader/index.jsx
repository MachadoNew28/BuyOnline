import React, { useState } from 'react'
import Barner,{ ConteinerOpacity,Title} from './styled'
import listSlider from './listSlider.js'

function BarnerHeader (){
    const [start, setStart] = useState(0)
    function HandleStartSlider () {

        const length = listSlider.length;
        start == length-1 ?setStart(0)
        : 
        setTimeout (setStart(start+1),5000*2)    
    }   
    console.log(start)
    setTimeout (HandleStartSlider,2000*2)
    return (
        <Barner start = {start} >
            <ConteinerOpacity>
              <Title>
                  Seja Bem-vido a Soft Life
              </Title>
            </ConteinerOpacity>
        </Barner>
    );
}
export default BarnerHeader;