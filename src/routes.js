 import React from 'react'
 import {  BrowserRouter, Route, Switch} from 'react-router-dom'
 import Home from './components/home/index'
 const Routes = () => (
   <BrowserRouter>
    <Switch>
      <Route path="/" component = {Home} />
    </Switch>

   </BrowserRouter>
 );
 export default  Routes;