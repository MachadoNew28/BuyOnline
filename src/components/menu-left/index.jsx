import React, { memo } from 'react'
import {FaAd, FaFile, FaPlus,FaEdit,FaDeskpro, FaFolder} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import DivMain ,{ Header,Logo,H1,Text,Add,List,Li,Div,Footer, Free,Full,Button} from './styled'


function MenuL (){

    return (
         <DivMain>
              <Header>
                  <Logo>
                    <H1>D</H1>
                    <Text>Dline-Code</Text>
                  </Logo>
                 <Add>
                     Add New File
                     <FaPlus id ="icon-add"></FaPlus>
                 </Add>
              </Header>
              <List>
                     <Link><Li><FaAd id ="icon-list"></FaAd> DashBoard</Li></Link>
                    <Link> <Li><FaEdit  id ="icon-list"></FaEdit> Content</Li></Link>
                     <Link><Li><FaDeskpro  id ="icon-list"></FaDeskpro> Settings</Li></Link>
                 </List>
             <Div>
                 <Text id = "text">espaço utitlizado 29.4GB</Text>
                 <Text id = "text" > espaço disponível 12.4GB</Text>
                 <Free><Full></Full></Free>
                 <Footer>
                     <FaFolder id ="icon-folder-footer"></FaFolder>
                     <Text id = "texte">Actualize para  <Link>Pro</Link></Text>
                     <Text id = "texte">para espaço ilimitado</Text>
                     <Button>Obter Primiun</Button>
                </Footer>
             </Div>
            
             
         </DivMain>
    )
};
export default  memo(MenuL);