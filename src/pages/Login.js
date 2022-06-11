import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import Header from '../components/Header';
import { changeInputValue, initialInputValue, login } from '../slices/authSlice';
import { check } from '../slices/userSlice';

function Login({ children }) {
  //処理
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const LOGIN_TYPE = 'login';
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.auth.login);
  const { authInfo, authError } = useSelector((state) => state.auth.auth);
  const { userInfo } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(authError);
    // 1. 入力チェック
    if ([username, password].includes('')) {
      setError('すべての項目を入力してください。');
      return;
    }

    // 3. dispatch
    try {
      const res = await dispatch(login({ username, password }));
      const result = unwrapResult(res);
      if (result.response.status && result.response.status === 401) {
        setError('IDまたはパスワードが間違っています。');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    dispatch(
      changeInputValue({
        formType: LOGIN_TYPE,
        inputName: name,
        value,
      }),
    );
  };

  //初期化
  useEffect(() => {
    dispatch(initialInputValue({ formType: 'login' }));
    return () => {
      dispatch(initialInputValue({ formType: 'login' }));
    };
  }, [dispatch]);

  useEffect(() => {
    // 論理チェック
    if (authError) {
      setError('IDまたはパスワードを確認してください。');
      dispatch(initialInputValue({ formType: 'auth' }));
      return;
    }
  }, [dispatch, authError]);

  useEffect(() => {
    // chek is logged in
    if (authInfo) {
      const { username } = authInfo;
      dispatch(check({ username }));
    }
  });

  useEffect(() => {
    if (userInfo) {
      console.log(`${userInfo} is checked ok!!!`);
      localStorage.setItem('user', JSON.stringify(userInfo));
      navigate('/');
    }
  }, [userInfo, navigate]);

  // UI
  return (
    <>
      <Helmet>
        <title>Cat--Login</title>
      </Helmet>
      <Header />
      <AuthTemplate>
        <AuthForm type='login' handleSubmit={handleSubmit} handleChange={handleChange} error={error} />
      </AuthTemplate>
    </>
  );
}
export default Login;
