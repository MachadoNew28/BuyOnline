import { createGlobalStyle } from 'styled-components';
import fundo from './ground.jpg'
import BgImg from './bginicio.jpg'
import BgImg2 from './fundoP.jpg'
 
export const Global = createGlobalStyle`
  *{
     font-family:Arial, Helvetica, sans-serif;
      outline:none;
      box-sizing:border-box;
      margin:0;
      padding:0;
      text-decoration:none;
      list-style:none;

  }
   
  body{
 overflow:none;
  }
     
  body::-webkit-scrollbar{
}
body::-webkit-scrollbar-thumb{
     
}

 `;
