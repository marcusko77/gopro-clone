import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import Description from './components/Description'
import Account from './components/Account'

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/description/:id' component={Description}/>
        <Route path='/account' component={Account}/>
        
     </Switch>         
)