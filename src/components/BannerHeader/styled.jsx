import Styled from 'styled-components'
import slistSlider from './listSlider'
const Barner = Styled.div `
    background-image:url(${({start})=> slistSlider[start].slider});
    background-size:cover;
    height:700px;
`;
export default Barner;

export const ConteinerOpacity = Styled.div`
    width:100%;
    height:700px;
    background-color:#0e1418ed;;

    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Title = Styled.h1`
   font-size: 60px;
   color: #168bed;
   color: #fff;
   font-family:Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                
`;