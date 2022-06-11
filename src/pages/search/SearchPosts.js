import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Header from '../../components/Header';
import { Container, List } from '../posts/PostListElements';
import { CalendarIcon, IdentificationIcon } from '@heroicons/react/outline';
import moment from 'moment';
import { SearchResult } from './SearchPostsElements';

function SearchPosts() {
  const { searchResult } = useSelector((state) => state.search);

  return (
    <>
      <Header />
      {console.log(searchResult)}
      {!searchResult ? (
        <SearchResult>このユーザのポストが存在しないです。</SearchResult>
      ) : (
        <>
          <SearchResult>{`${searchResult.length}件が見つかりました。`}</SearchResult>
          <Container>
            {searchResult &&
              searchResult.map((post) => (
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
      )}
    </>
  );
}
export default SearchPosts;
