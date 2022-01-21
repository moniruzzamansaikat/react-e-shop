import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function Private({ children, ...rest }) {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default Private;
