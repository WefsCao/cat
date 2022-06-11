import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../lib/palette';
import Button from './common/Button';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { logout } from '../slices/authSlice';
import { initUser } from '../slices/userSlice';

const HeaderContainer = styled.div`
  position: relative;
  max-width: 100vw;
  height: 100%;
  margin: 0 auto;
`;

const List = styled.div`
  display: flex;
  li {
    text-decoration: none;
    list-style: none;
    margin-right: 30px;
  }
  a {
    font-size: 18px;
    &:hover {
      color: ${palette.orange[5]};
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const HeaderBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  height: 8.5rem;
  width: 100%;
  box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  padding: 30px;
  @media screen and(max-width: 512px) {
    background-color: #f00;
  }
  .logo {
    font-size: 36px;
  }
  .navLink {
    font-size: 1.5rem;
    &:hover {
      color: ${palette.orange[5]};
    }
  }

  h1 {
    letter-spacing: 5px;
    font-size: 36px;
    cursor: pointer;
  }
  .btn {
    transform: translateY(-9px);
  }
  a {
    cursor: pointer;
    padding: 10px 20px;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
      max-width: 10rem;
    }
  }
  .btnLogin {
    margin-right: 20px;
    background-color: transparent;
    color: #000;
    box-shadow: inset 0 0 0 1px ${palette.orange[4]};
    &:hover {
      background-color: ${palette.orange[4]};
      border: none;
      color: #fff;
    }
  }
  .userName {
    display: inline-block;
    max-width: 10rem;
    margin-right: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    transform: translate(-2rem, -1rem);
    cursor: pointer;
  }
  .avatar {
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #dadada;

    transform: translateY(1.2rem);
  }
  .userName,
  .avatar {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .icon {
    position: absolute;
    fill: ${palette.orange[4]};
    width: 15px;
    height: 15px;
    right: 0;
    bottom: -2px;
    cursor: pointer;
  }
  .btnLogin,
  .btnSignup {
    @media screen and (max-width: 600px) {
      padding: 0.2rem 0.4rem;
      font-size: 1rem;
    }
  }
`;
const Header = () => {
  const { username } = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(initUser({ key: 'userInfo', value: '' }));
    dispatch(logout());
  };
  return (
    <HeaderContainer>
      <HeaderBlock>
        <h1>
          <Link to='/' className='logo'>
            Kitten
          </Link>
        </h1>
        <List>
          <li>
            <NavLink
              className='navLink'
              to='/'
              style={({ isActive }) => ({
                color: isActive ? `${palette.orange[5]}` : `#000`,
                borderBottom: isActive ? `2px solid ${palette.orange[5]}` : 'none',
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navLink'
              to='/write'
              style={({ isActive }) => ({
                color: isActive ? `${palette.orange[5]}` : `#000`,
                borderBottom: isActive ? `2px solid ${palette.orange[5]}` : 'none',
              })}
            >
              Write new post
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navLink'
              to='/manage'
              style={({ isActive }) => ({
                color: isActive ? `${palette.orange[5]}` : `#000`,
                borderBottom: isActive ? `2px solid ${palette.orange[5]}` : 'none',
              })}
            >
              My posts
            </NavLink>
          </li>
        </List>
        <div className='button'>
          {username ? (
            <Button className='btn btnLogin'>
              <Link to='/' onClick={handleLogout}>
                Log out
              </Link>
            </Button>
          ) : (
            <Button className='btn btnLogin'>
              <Link to='/login'>Log in</Link>
            </Button>
          )}

          {!username && (
            <Button className='btn btnSignup'>
              <Link to='/register'>Sign up</Link>
            </Button>
          )}
          <div>
            {username && (
              <div style={{ marginLeft: '40px' }}>
                <p className='avatar'>
                  <PlusCircleIcon className='icon' />
                </p>
                <Link to='/profile' className='userName'>
                  {username}
                </Link>
              </div>
            )}
          </div>
        </div>
      </HeaderBlock>
    </HeaderContainer>
  );
};
export default Header;
