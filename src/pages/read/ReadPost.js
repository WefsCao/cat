import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../../components/comments/Comment';
import { CommentBlock } from '../../components/comments/CommentElements';
import Details from '../../components/commentsDetails/Details';
import Header from '../../components/Header';
import { getComments } from '../../slices/commentSlice';
import { readPost } from '../../slices/postSlice';
import { PostBlock, ReadPostBlock } from './ReadPostElements';

function ReadPost() {
  const { postId } = useParams();
  const { data } = useSelector((state) => state.post.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);
  return (
    <>
      <Helmet>
        <title>Cat--Read</title>
      </Helmet>
      <Header />
      <ReadPostBlock>
        {data && (
          <PostBlock>
            <p className='title'>{data.title}</p>
            {data.tags && data.tags.map((tag, index) => <span key={index} className='tag'>{`#${tag} `}</span>)}
            <p dangerouslySetInnerHTML={{ __html: `${data.body}` }} className='body'></p>
          </PostBlock>
        )}
      </ReadPostBlock>
      <Comment />
      <Details />
    </>
  );
}
export default ReadPost;
