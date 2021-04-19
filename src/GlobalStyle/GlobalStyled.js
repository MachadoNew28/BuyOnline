import { createGlobalStyle } from 'styled-components';
 import background from '../Assets/background.jpg'
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
   html,body, #root {
    min-width:100%;

   }

   body {
      
      background-size: cover;
   }
   #root{
     
    
   }
  
 `;
