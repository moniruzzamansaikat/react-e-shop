import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../context/userContext';

function Private({ children, ...rest }) {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default Private;
