import Styled from 'styled-components'

const HeaderStyled = Styled.header `
    /**CONFIGURAÇÃO PARA TELAS MENORES */
    /*Dimensão*/
    height:60px;
    width:100%;
    padding:0 40px 0 40px;
    /*Cores e bordras*/
    z-index:2;
    border-bottom:1px solid #168bed;
    background-color:#fff;
    /*Alinhanemto*/
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    /**********************/

  }
   
    #icon-menu-show {
        
    }
    /** */
    /**CONFIGURAÇÃO PARA TELAS MAIORES */
  @media screen and (min-width:1000px){
    /*Dimensão*/
    height:60px;
    width:100%;
    padding:0 20px 0 40px;
    /*Cores e bordras*/
    border-bottom:2px solid #168bed;;
    background-color:#fff;
    /*Alinhanemto*/
    display:flex;
    align-items:center;
    justify-content:space-around;
    position:initial;
    /**********************/

  }
   
    #icon-menu-show {
        display:none;
    }
`
export default HeaderStyled;
  
 
export const Nav = Styled.nav`
    /**CONFIGURAÇÃO PARA TELAS MENORES */
    height:700px;
    width:100%;
    /*Alinhanemto*/
    display:flex;
    align-items:center;
    justify-content:initial;
    flex-direction:column;
    position:absolute;
    right:0;
    top:134%;

    /**********************/
    border:none;
    Background-color:#fff;
    /** */

    #link {
        /** */
        width:100%;
        padding:20px 0;
        margin-bottom:12px;
        /** */
        color:#1e2a2ad2;;
        /*Alinhanemto*/
        display:flex;
        align-items:center;
        justify-content:center;
        
        /**********************/
         
         .class-circle {
            border:none;
            transition: ease .2s ;
            /*Alinhanemto*/
             display:flex;
             align-items:center;
             justify-content:center;
             visibility:hidden;
             #circle {
                font-size:6px;
                margin:0;
                transition: ease-in .4s;
                opacity:0.2;
                color:#168bed;
            }
            }

            #item {
                color:#168bed;
                color:#181b1fe1;
                font-family:Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                border:none;
                font-size:20px;
                margin:0 22px;
                border-top:1px solid #eee;
            }
        }
        

    /**CONFIGURAÇÃO PARA TELAS MAIORES */
    @media screen and (min-width:1000px){
        /*Dimensão*/
        height:40px;
        width:40%;
        /*Alinhanemto*/
        display:flex;
        align-items:center;
        flex-direction:row;
        justify-content:flex-end;
        position:initial;
        /**********************/
        border:none;
        #link {
            width:16%;
            /**Bordas e cores */
             border:none;
             color:#1e2a2ad2;;
            /** */
            margin:0 14px;
            transition: ease-in 2s ;
            padding:0;
            /*Alinhanemto*/
            display:flex;
            align-items:center;
            flex-direction:column;
            height:35px;
            --visibilidade:${({click}) => (click== true ? 'visible': 'hidden' )};
            /**********************/
            .class-circle {
                border:none;
                transition: ease .2s ;
                /*Alinhanemto*/
                display:flex;
                align-items:center;
                justify-content:center;
                visibility:var(--visibilidade);
                #circle {
                font-size:6px;
                margin:0;
                transition: ease-in .4s;
                opacity:0.2;
                color:#168bed;
            }
            }

            #item {
                color:#1e2a2ad2;
                font-family:Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                border:none; padding:0 4px;
            }
        }
            
        #link:hover {
            transition: ease-in 2s ;
            color:#1e2a2ad2;
             width:16%;
            .class-circle {
                /*Alinhanemto*/
                visibility:visible;
                transition: ease-in 2s ;
                #circle {
                width:initial;
                margin: 0 10px;
                position:relative;
                animation: cor   ease-in;
                opacity:1;
                }
            }
            
            #item {
                    color:#168bed;
                    
            }
            }
        }
    }
    
`
export const Logo = Styled.img`
  /**CONFIGURAÇÃO PARA TELAS MAIORES */
    /*Dimensão*/
    width:100px;
    height:25px;
    /*Alinhanemto*/
    display:flex;
    align-items:center;
 @media screen and (min-width:1000px){
    /*Dimensão*/
    width:200px;
    height:35px;
    /*Alinhanemto*/
    display:flex;
    align-items:center;
 }
`
export const Item = Styled.li`
  color:#168bed;
`;