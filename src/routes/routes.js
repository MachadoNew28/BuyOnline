import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../Components/Header/index'
import Barner from '../Components/Barner/index.jsx'
import Cadastro from '../Pages/Cadastro/index'

const Routes = () =>(
  <BrowserRouter>
    
    <Route component =  { Header }  ></Route>
    <Route component =  { Barner }  ></Route>
    
    <Switch>
      <Route component =  { Cadastro }  path ='/cadastro' ></Route>
    </Switch>
  </BrowserRouter>

)
export default Routes;
