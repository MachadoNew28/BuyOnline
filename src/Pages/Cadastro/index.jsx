import React from 'react'
import CadastroChild from './styled'
import Form from '../../Components/Form/index'
 
function Cadastro (props){

    return(
        <CadastroChild>
            <Form Input ={
                <>
                    <div className = "img">
                
                </div> 

                 <input placeholder ="nome do Produto"/>
                  kk
                 <input placeholder ="id"/>
                  
                 <input placeholder ="Preço"/>

                 <input placeholder ="Categoria do produto"/>
                  <button value ="cadastrar"></button>
                </>
            }>
                
            </Form>
        </CadastroChild>
    )

}
export default Cadastro;