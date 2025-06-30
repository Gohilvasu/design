import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

 
const Navigation = ({children , name}) => {
  const data =  localStorage.getItem("user");
  return data ?  children : <Navigate to="/"/>
}

export default Navigation
