import styled from 'styled-components';

const ItemChild = styled.li `
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
/*::::::::::::::::::::::::::::::::*/
  color : #fff; 
  font-size:18px;
  font-weight:bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
/*::::::::::::::::::::::::::::::::*/
  padding: 4px 14px;
/*::::::::::::::::::::::::::::::::*/
  &:hover {
      color:#ff9;
      .CircleConteiner {
          visibility:visible;
          
          .CircleTopItem {
            transition: ease-out .8s;
              opacity:1;
              margin:0px 4px  ;

          }
      }
  }
/*::::::::::::::::::::::::::::::::*/
`
export default ItemChild;