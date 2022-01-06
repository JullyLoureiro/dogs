import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import PasswordLost from './PasswordLost';
import ResetPassword from './ResetPassword';
import { UserContext } from '../../providers/UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<PasswordLost />} />
          <Route path="/resetar" element={<ResetPassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
