import React from 'react'
import Home from './pages/Home';
import Signin from './pages/SignIn';
import { Switch, Route } from 'react-router-dom';

export default function App(){
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
}