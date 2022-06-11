import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/common/Button';
import moment from 'moment';
import Header from '../../components/Header';
import { readAllPost } from '../../slices/getAllPostSlice';
import { CalendarIcon, IdentificationIcon, SearchIcon } from '@heroicons/react/outline';
import { Link, useNavigate } from 'react-router-dom';
import { Container, List, SearchBar, SearchBarContainer, SearchBtn, SearchInput } from './PostListElements';

import { searchPostsByUsername } from '../../slices/searchSice';

function PostList() {
  // 処理
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readAllPost());
  }, [dispatch]);

  const { data } = useSelector((state) => state.all.posts);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(searchPostsByUsername(search));
    navigate('/search');
  };

  // UI
  return (
    <>
      <div>
        <Header />
      </div>
      <SearchBarContainer>
        <SearchBar>
          <SearchInput placeholder='user name' onChange={handleSearchChange} />
          <SearchBtn>
            <SearchIcon className='icon' onClick={handleSearchClick} />
          </SearchBtn>
        </SearchBar>
      </SearchBarContainer>
      <Container>
        {data &&
          data.map((post) => (
            <List key={post._id}>
              <h3>{post.title}</h3>

              <div className='info'>
                <IdentificationIcon className='icon' />
                <p className='auth'>{`By: ${post.user.username}`}</p>
              </div>
              <div className='info'>
                <CalendarIcon className='icon' />
                <p className='date'>{`Published: ${moment(post.publishedDate).format('YYYY年MM月DD日')} `}</p>
              </div>
              <Button className='btn'>
                <Link to={`/read/${post._id}`}>Read</Link>
              </Button>
            </List>
          ))}
      </Container>
    </>
  );
}
export default PostList;
