import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { initShowModal, setShowModal } from '../../slices/modalSlice';
import { deletePost } from '../../slices/postSlice';
import { setInitWriteField, writePost } from '../../slices/writeSlice';
import Button from './Button';
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBlock = styled.div`
  position: relative;

  background-color: #fff;
  border-radius: 5px;
  width: 20rem;
  height: 20rem;
  padding: 2.4rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.8rem;
    text-align: center;
  }
  p {
    font-size: 1.4rem;
    text-align: center;
    margin-top: 3rem;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    position: absolute;
    right: 2rem;
    bottom: 4rem;
  }
  .btn {
    padding: 0.3rem 0.6rem;
    font-size: 1.2rem;
    /* display: inline-block; */
  }
`;
const Modal = ({ modalTitle, desc, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags } = useSelector((state) => state.write);
  const { deletedPostId } = useSelector((state) => state.post);

  const handleClick = useCallback(() => {
    type === 'write' ? dispatch(writePost({ title, body, tags })) : dispatch(deletePost(deletedPostId._id));

    navigate('/');

    type === 'login' ? navigate('/read') : navigate('/');
    dispatch(initShowModal());
  }, [dispatch, navigate, title, body, tags, type, deletedPostId]);

  const handleCancel = useCallback(() => {
    dispatch(initShowModal());
    dispatch(setInitWriteField());
  }, [dispatch]);
  return (
    <ModalBackground>
      <ModalBlock>
        <h3>{modalTitle}</h3>
        <p>{desc}</p>
        <div className='btns'>
          <Button gray className='btn cancel' onClick={handleCancel}>
            Cancel
          </Button>
          <Button className='btn confirm' onClick={handleClick}>
            Confirm
          </Button>
        </div>
      </ModalBlock>
    </ModalBackground>
  );
};
export default Modal;
