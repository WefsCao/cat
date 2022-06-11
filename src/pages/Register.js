import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import Header from '../components/Header';

import { changeInputValue, initialInputValue, register } from '../slices/authSlice';

function Register() {
  const [error, setError] = useState('');
  const REGISTER_TYPE = 'register';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password, confirmpassword } = useSelector((state) => state.auth.register);
  const { authInfo } = useSelector((state) => state.auth.auth);
  // const { userInfo } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //入力チェック
    if ([username, password, confirmpassword].includes('')) {
      setError('すべての項目を入力してください。');
      return;
    }
    //相関チェック
    if (password !== confirmpassword) {
      setError('パスワードが一致しません。');
      dispatch(
        changeInputValue({
          formType: REGISTER_TYPE,
          inputName: 'password',
          value: '',
        }),
      );
      dispatch(
        changeInputValue({
          formType: REGISTER_TYPE,
          inputName: 'confirmpassword',
          value: '',
        }),
      );
      return;
    }

    const res = await dispatch(register({ username, password }));
    const result = unwrapResult(res);
    if (result.response.status && result.response.status === 409) {
      setError(result.response.data.message);
    }
  };
  const handleChange = (e) => {
    setError('');
    const { name, value } = e.target;
    dispatch(
      changeInputValue({
        formType: REGISTER_TYPE,
        inputName: name,
        value,
      }),
    );
  };

  //　初期化
  useEffect(() => {
    dispatch(initialInputValue({ formType: 'register' }));
    return () => {
      dispatch(initialInputValue({ formType: 'register' }));
    };
  }, [dispatch]);

  useEffect(() => {
    if (authInfo) {
      console.log(`${authInfo}登録成功でしたよ😄`);
    }
  }, [authInfo]);

  useEffect(() => {
    if (authInfo) {
      // console.log(`${authInfo} is checked ok!!!`);
      // localStorage.setItem("register", JSON.stringify(authInfo));
      navigate('/login');
    }
  }, [authInfo, navigate]);

  // UI
  return (
    <>
      <Helmet>
        <title>Cat--Register</title>
      </Helmet>
      <Header />
      <AuthTemplate>
        <AuthForm type='register' handleSubmit={handleSubmit} handleChange={handleChange} error={error} />
      </AuthTemplate>
    </>
  );
}
export default Register;
