import React from 'react'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Alogin from './pages/admin/alogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin/login" component={Alogin} />
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </Router>
    );
}