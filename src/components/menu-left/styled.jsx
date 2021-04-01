import styled from 'styled-components';

const DivMain = styled.div`
  background-color : #fff;
  /************************* */
  padding:10px;
  /************************* */
  height : 566px;
  width : 17%;
  /************************* */
  /************************* */
  /************************* */
`;
export default DivMain;

export const Header = styled.div`
  /************************* */
   border-bottom : 1px solid #eee;
  /************************* */
   Display : flex;
   align-items : center;
   justify-content : center;
   flex-direction : column;
  /************************* */
  
  /************************* */
  height : 140px;
  /************************* */
`;
export const Logo = styled.div`
   display : flex;
   align-items : center;
   justify-content :flex-start;
  /************************* */
   width : 100%;
 
  /************************* */
   background-color: #fff;
  /************************* */
   padding : 20px;
  /************************* */
  /************************* */
`;

export const H1 = styled.h3`

   Color : #fff;
   font-size : 12px;
   font-weight:0;
   font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   background-color : blue;
  /************************* */
   border-radius : 100%;
   /************************* */
   padding :10px;
   margin-right : 10px;
   /************************* */
   width : 30px;
   height : 30px;
   /************************* */
   display : flex;
   align-items : center;
   justify-content : center;
  /************************* */
  /************************* */
`;


export const Text = styled.h5`
  background-color : #fff;
  color : blue;
  font-size : 14px;
 font-weight:0;
  font-family :-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /************************* */
   
  /************************* */
  height : 25px;
  /************************* */
  display : flex;
  align-items : center;
  justify-content : center;
  /************************* */
  /************************* */
`;

export const Add = styled.div`
  background-color : #e9fafa71;
  /************************* */
   border-radius :10px;
  /************************* */
  height : 47px;
  width : 85%;
  /************* */
  margin : 30px  0;
  /************************* */
  display : flex;
  align-items : center;
  justify-content : space-around;
  /************************* */
  /************************* */
 #icon-add {
     color : #fff;
     font-size : 17px; 
     background-color : blue;
     /************************** */
     width : 35px;
     height : 35px;
     /********************** */
     padding :12px;
     /***************** */
     border-radius : 100%;
    }

`;

export const List = styled.div`
    
  /************************* */
   border-bottom :1px solid #eee;
  /************************* */
  width : 100%;
  /************************* */
  padding : 14px 0;
  
     /************************* */
   
  /************************* */
`;


export const Li = styled.div`
  width : 100%;
  padding:12px;
  /************************* */
  display : flex;
  /************************* */
  font-size :14px;
  /************************* */
  &:hover {
      color : blue;
  }
  #icon-list {
   margin-right : 10px;

 }
`;
export const Div = styled.div`
   display : flex;
   align-items :center;
   flex-direction : column;
   justify-content : center;
  /************************* */
   border-bottom :1px solid #eee;
  /************************* */
  width : 100%;
  
  /************************* */
  padding : 14px 0;
  /************************* */
  /************************* */
  #text {
      font-size : 12px;
      color : #353638d8;
      margin:0;
      width : 100%;
  }
`;

export const Footer = styled.div`
  background-color : #e9fafa71;
  /************************* */
   
   border-radius : 12px;
   /************************* */
  height : 170px;
  margin : 28px 0;
  padding : 12px;
  width : 80%;
  /**************************** */
  display : flex;
  align-items : center ;
  flex-direction : column;
  /************************* */
  #icon-folder-footer {
    font-size :50px;
    color : blue;
  }
  #texte {
    text-align :center;
    color :#000;
    font-size : 11px;
    padding-right:4px;
    background-color: transparent;
  }
  /************************* */
  /************************* */
`;
 
export const Free = styled.div`
  background-color : #ddd;
  /************************* */
   border-bottom :1px solid #eee;
   border-radius : 12px;
   /************************* */
  height : 10px;
  width : 90%;
  /************************* */
  /************************* */
  margin-top :20px;
  /************************* */
`;

export const Full = styled.div`
  background-color :#fa73b2d8;
  /************************* */
   border-bottom :1px solid #eee;
   border-radius :12px;
   /************************* */
  height : 10px;
  width : 70%;
  /************************* */
  /************************* */
  /************************* */
`;
export const Button = styled.button`
  background-color : blue;
  color : #fff;
  /************************* */
    border-radius :14px;
    border : 0; 
    padding :10px;
  /************************* */
  text-align :center;
  width : 90%;
  /************************* */
  margin:12px;
  /************************* */
  /************************* */
`;