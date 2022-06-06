import React from 'react';
import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';
export const RequireAuth = ({children}) => {
  const auth = useAuth();


  if(!auth.user){
return (<Navigate to='/login' /> );

  }

  return children;
};