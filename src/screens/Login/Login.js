import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import CreateUser from './CreateUser';
import PasswordLost from './PasswordLost';
import ResetPassword from './ResetPassword';

const Login = () => {
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
