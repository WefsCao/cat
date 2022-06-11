import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import Header from '../../components/Header';
import Tag from '../../components/posts/tag/Tag';
import TextEditor from '../../components/posts/textEditor/TextEditor';
import { setShowModal } from '../../slices/modalSlice';
import { updatePost } from '../../slices/writeSlice';
import { changePostContent } from '../../slices/writeSlice';
import { LoginRequireBlock } from '../manage/ManagePostElements';
import { ButtonGroup, Container } from './WriteElement';

function WritePost({ showModal }) {
  const { title, body, tags } = useSelector((state) => state.write);
  const { userInfo } = useSelector((state) => state.user);
  const { visible } = useSelector((state) => state.modal);
  const { originalPost } = useSelector((state) => state.write);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = useCallback(
    (payload) => {
      dispatch(changePostContent(payload));
    },
    [dispatch],
  );

  const handleUpdateClick = useCallback(() => {
    const id = originalPost._id;
    dispatch(
      updatePost({
        id,
        title,
        body,
        tags,
      }),
    );
    navigate('/manage');
  }, [dispatch, navigate, title, body, tags, originalPost]);

  const handleClick = useCallback(() => {
    dispatch(setShowModal());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Cat--Add New Post</title>
      </Helmet>
      <Header />
      {!userInfo ? (
        <LoginRequireBlock>
          新しいポストを追加には
          <Link to='/login' className='login'>
            ログイン
          </Link>
          する必要があります。
        </LoginRequireBlock>
      ) : (
        <Container>
          <TextEditor title={title} body={body} onChange={onChange} originalPost={originalPost} />
          <Tag originalPost={originalPost} />
          <ButtonGroup>
            <Button gray className='btn cancel'>
              <Link to='/'>Cancel</Link>
            </Button>
            {originalPost._id ? (
              <Button className='btn save' onClick={handleUpdateClick}>
                Update
              </Button>
            ) : (
              <Button className='btn save' onClick={handleClick}>
                Post
              </Button>
            )}
          </ButtonGroup>
        </Container>
      )}
      {visible && <Modal showModal={showModal} modalTitle='Add new post' desc='ポストを公開しますか？' type='write' />}
    </>
  );
}
export default WritePost;
