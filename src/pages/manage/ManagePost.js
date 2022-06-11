import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { EditGroup, LoginRequireBlock, OwnPostContainer, OwnPostList } from './ManagePostElements';
import { CalendarIcon, IdentificationIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { setOriginalPost } from '../../slices/writeSlice';
import { setShowModal } from '../../slices/modalSlice';
import Modal from '../../components/common/Modal';
import { setDeletedPostId } from '../../slices/postSlice';
import { Helmet } from 'react-helmet-async';

function ManagePost() {
  const { userInfo } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.all.posts);
  const { visible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleEdt = useCallback(
    (_id, title, body, tags) => {
      dispatch(
        setOriginalPost({
          _id,
          title,
          body,
          tags,
        }),
      );
    },
    [dispatch],
  );

  const handleDelete = useCallback(
    (id) => {
      dispatch(setShowModal());
      dispatch(setDeletedPostId(id));
    },
    [dispatch],
  );

  return (
    <>
      <Helmet>
        <title>Cat--Manage Posts</title>
      </Helmet>
      <div>
        <Header />
      </div>
      {!userInfo ? (
        <LoginRequireBlock>
          投稿を表示するには
          <Link to='/login' className='login'>
            ログイン
          </Link>
          する必要があります。
        </LoginRequireBlock>
      ) : (
        <OwnPostContainer>
          {data &&
            data.map(
              (post) =>
                post.user.username === userInfo.username && (
                  <OwnPostList key={post._id}>
                    <h3>{post.title}</h3>
                    <div className='info'>
                      <IdentificationIcon className='icon' />
                      <p className='auth'>By: you</p>
                    </div>
                    <div className='info'>
                      <CalendarIcon className='icon' />
                      <p className='date'>{`Published: ${moment(post.publishedDate).format('YYYY年MM月DD日')} `}</p>
                    </div>

                    <EditGroup>
                      <Link to={'/write'} onClick={() => handleEdt(post._id, post.title, post.body, post.tags)}>
                        <PencilAltIcon className='edtIcon' />
                      </Link>
                      <Link to='#'>
                        <TrashIcon className='edtIcon' onClick={() => handleDelete(post._id)} />
                      </Link>
                    </EditGroup>
                  </OwnPostList>
                ),
            )}
        </OwnPostContainer>
      )}
      {visible && <Modal type='delete' modalTitle='Delete post' desc='削除されたポストは復旧できません。' />}
    </>
  );
}
export default ManagePost;
