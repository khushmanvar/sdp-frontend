import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Alogin from './pages/admin/alogin';

import Home from './pages/onlyAuth/home';

export default function App(){
    return (
      <Routes>
        <Route path="/" element={<CheckSession />} />
        <Route path="/landing" element={<Landing />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/admin/login" element={<Alogin />}/>

        <Route path="/home" element={<Home />}/>
      </Routes>
    );
}

function CheckSession() {
  if(!localStorage.getItem('AUTH_TOK')) {
    return <Landing />
  } else {  return <Home /> }
}
