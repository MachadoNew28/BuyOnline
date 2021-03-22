import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home/index'
import Header from './components/Header/index'

const Routes = () =>(
    <BrowserRouter>
     <Route component = {Header}></Route>
        <Switch>
            <Route exact path ='/' component = {Home}></Route>
        </Switch>
    </BrowserRouter>
)
export default Routes;