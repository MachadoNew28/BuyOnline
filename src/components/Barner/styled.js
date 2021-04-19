import styled from 'styled-components';
import BackgroundImage from '../../Assets/Blog_Ganhe_Dinheiro_Revenda-01.png'
import Slide1 from './data'
const BarnerChild = styled.div `
    min-width:100%;
    height:600px;
    background: #000 no-repeat;
    animation:Slide infinite ease-in-out 3s;
    background-image:url(${({slidding})=>Slide1[slidding].image});
    background-size:cover;
    @keyframes Slide {
        
        from {
            background-position:0px ;
            background-image:url(${({slidding})=>Slide1[slidding].image});
        }
        4%{
        
            background-position:1px;
            background-image:url(${({slidding})=>Slide1[slidding].image});
        }
    }
`
export default BarnerChild ;