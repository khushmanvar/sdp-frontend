import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Ahome() {

  if(!localStorage.getItem('COND_TOK')) {
    return <Navigate to={"/admin/login"} />
  } else {  return (
    <div>
      admin pannel here
    </div>
  ) } 
}
