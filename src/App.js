import { Link, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PostList from './pages/posts/PostList';
import ReadPost from './pages/read/ReadPost';
import Register from './pages/Register';
import { HomeIcon, PlusCircleIcon, ArchiveIcon } from '@heroicons/react/outline';
import WritePost from './pages/write/WritePost';
import ManagePost from './pages/manage/ManagePost';

import styled from 'styled-components';
import palette from './lib/palette';
import { Helmet } from 'react-helmet-async';
import SearchPosts from './pages/search/SearchPosts';
import Profile from './pages/profile/Profile';
const NavigateBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 0;

  ul {
    list-style: none;
    background-color: #fff;
    box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.06);
    max-width: 3rem;
    padding: 2rem;
    display: none;
    @media screen and (max-width: 1000px) {
      display: block;
    }
  }
  li {
    margin-bottom: 1.2rem;
  }
  .icon {
    width: 2.4rem;
    height: 2.4rem;
    stroke: ${palette.orange[5]};
    &:hover {
      stroke: ${palette.orange[7]};
    }
  }
`;

function App() {
  return (
    <>
      <Helmet>
        <title>Cat Blog Post</title>
      </Helmet>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<PostList />}></Route>
        <Route path='/write' element={<WritePost />}></Route>
        <Route path='/manage' element={<ManagePost />}></Route>
        <Route path='/search' element={<SearchPosts />}></Route>
        <Route path='/profile' element={<Profile />}></Route>

        {/* <Route path='/@:username/:postId' element={<ReadPost />}></Route> */}
        <Route path='/read/:postId' element={<ReadPost />}></Route>
      </Routes>
      <NavigateBlock>
        <ul>
          <li>
            <Link to='/'>
              <HomeIcon className='icon' />
            </Link>
          </li>
          <li>
            <Link to='/write'>
              <PlusCircleIcon className='icon' />
            </Link>
          </li>
          <li>
            <Link to='/manage'>
              <ArchiveIcon className='icon' />
            </Link>
          </li>
        </ul>
      </NavigateBlock>
    </>
  );
}

export default App;
