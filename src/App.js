import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

import Alogin from './admin/pages/alogin';
import Ahome from './admin/pages/ahome';
import LandingPage from './user/pages/landingPage';
import HomePage from './user/pages/homePage';
import LiveBook from './user/pages/liveBook';
import Prebook from './user/pages/prebook';
import SearchBuses from './user/pages/searchBus';
import Signin from './user/components/signin';
import Signup from './user/components/signup';
import VerifyEmail from './user/components/verifyEmail';
import VerifyPhone from './user/components/verifyPhone';
import Contact from './user/pages/contact';
import Payment from './user/pages/payment';

export default function App(){
    return (
      <Routes>
        <Route path="/" element={<CheckSession />} />
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verifyEmail" element={<VerifyEmail/>}/>
        <Route path="/verifyPhone" element={<VerifyPhone/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/payment" element={<Payment/>} />
        
        <Route path="/admin" element={<Ahome />}/>
        <Route path="/admin/login" element={<Alogin />}/>

        <Route path="/prebook" element={<Prebook />}/>
        <Route path="/livebook" element={<LiveBook/>}/>
        <Route path="/searchbus" element={<SearchBuses/>}/>
      </Routes>
    );
}

function CheckSession() {
  if(!localStorage.getItem('AUTH_TOK')) {
    return <LandingPage/>
  } else {  return <SearchBuses /> }
}
