import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import CreateUser from './CreateUser';
import PasswordLost from './PasswordLost';
import ResetPassword from './ResetPassword';
import { UserContext } from '../../providers/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<CreateUser />} />
        <Route path="/perdeu" element={<PasswordLost />} />
        <Route path="/resetar" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
