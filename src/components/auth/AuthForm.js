import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { ErrorBlock, FormBlock, InputBlock } from "./AuthElements";
import { MailIcon, KeyIcon, LockOpenIcon } from "@heroicons/react/outline";

function AuthForm({ type, handleSubmit, handleChange, error }) {
  // 処理
  const mapText = {
    login: "LOG IN",
    register: "REGISTER",
  };
  const btnContent = mapText[type];

  // UI
  return (
    <FormBlock>
      <h2>{btnContent}</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <MailIcon className='icon' />
          <InputBlock
            name='username'
            placeholder='Enter your name'
            onChange={handleChange}
          />
        </div>

        <div className='input'>
          <KeyIcon className='icon' />
          <InputBlock
            onChange={handleChange}
            name='password'
            type='password'
            placeholder='Enter password'
          />
        </div>
        {btnContent === "REGISTER" && (
          <div className='input'>
            <LockOpenIcon className='icon' />
            <InputBlock
              onChange={handleChange}
              name='confirmpassword'
              type='password'
              placeholder='Confirm password'
            />
          </div>
        )}
        {error && <ErrorBlock>{error}</ErrorBlock>}
        <Button fullWidth onClick={handleSubmit}>
          {btnContent}
        </Button>

        {btnContent === "REGISTER" ? (
          <p className='footer'>
            Have account
            <Link to='/login' className='link login'>
              Login &rarr;
            </Link>
          </p>
        ) : (
          <p className='footer'>
            Not yet member?
            <Link to='/register' className='link register'>
              Register
            </Link>
          </p>
        )}
      </form>
    </FormBlock>
  );
}
export default AuthForm;
