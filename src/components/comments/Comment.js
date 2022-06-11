import React, { useState } from 'react';
import Modal from '../common/Modal';

import { CommentBlock, CommentContainer, CommentInner, Heading } from './CommentElements';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addComments, getComments } from '../../slices/commentSlice';
import { setShowModal } from '../../slices/modalSlice';

function Comment() {
  const [comment, setComment] = useState('');
  const { postId } = useParams();
  const { commentResult } = useSelector((state) => state.comments);
  const { userInfo } = useSelector((state) => state.user);
  const { visible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleAddComment = () => {
    if (comment === '') return;
    if (!userInfo) {
      dispatch(setShowModal());
      return;
    }
    dispatch(addComments({ content: comment, postId }));
    setComment('');
    dispatch(getComments(postId));
  };

  return (
    <>
      <CommentContainer>
        <Heading>
          <h4>Comments</h4>
          <span>{commentResult.data ? commentResult.data.length : 0}</span>
        </Heading>
        <CommentInner>
          <CommentBlock onChange={handleChange} value={comment} placeholder='Write comment...' />
          <button className='add' onClick={handleAddComment}>
            Add
          </button>
        </CommentInner>
      </CommentContainer>
      {visible && <Modal modalTitle='Add new comment' desc='コメントをするにはログインする必要があります。' />}
    </>
  );
}
export default Comment;
