import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderChild = styled.header`
  background:#000;
  opacity:1;
/*::::::::::::::::::::::::::*/
  width:100%;
  height: 70px;
  
/*:::::::::::::::::::::::::::*/
  display:flex;
  justify-content: flex-end;
  align-items:center;
/*:::::::::::::::::::::::::::*/
  position:fixed;
/*:::::::::::::::::::::::::::*/
  border-bottom: 1px solid #ff9;
/*:::::::::::::::::::::::::::*/
.Conteiner {
    display:flex;
    align-items:center;
    flex-direction:row;
    background-color:#000;
    color:#fff;
    width:100%;
    height:60px;
    #first {
      font-size:20px;
      transition:.8s ease-out;
       
      animation: offOn1 infinite 3s ease-out;
  }
    #Second {
      color:#ff9;
      font-size:25px;
      transition:.8s ease-in-out;
      
      animation: offOn2 infinite 3s ease-out;
    }
    &:hover{
        #first{
            color:#ff9;
            transition:.8s ease-in-out;
            text-decoration:underline 5px #fff; 
        }
        #Second {
        color:#fff;
        transition:.8s ease-in-out;
        font-size:25px;
        text-decoration:underline 5px #ff9;
    }
    @keyframes offOn1 {
        from{
            color:#ff9;
            
        }
        to{
            color:#fff;
             
        }
    }
    @keyframes offOn2 {
        from{
            color:#fff;
             
        }
        to{
            color:#ff9;
            
        }
    }
   }
}
.ConteinerFormSearch {
    width:50%;
}

`
export default HeaderChild;