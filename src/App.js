import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Alogin from './admin/pages/alogin';
import HomePage from './user/pages/HomePage';
import Home from './user/pages/home'

export default function App(){
    return (
      <Routes>
        <Route path="/" element={<CheckSession />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/admin/login" element={<Alogin />}/>
      </Routes>
    );
}

function CheckSession() {
  if(!localStorage.getItem('AUTH_TOK')) {
    return <HomePage />
  } else {  return <Home /> }
}
