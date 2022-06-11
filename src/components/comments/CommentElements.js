import styled from 'styled-components';
import palette from '../../lib/palette';

export const CommentContainer = styled.div`
  position: relative;
  border-top: 1px solid ${palette.gray[5]};
  max-width: 80rem;
  margin: 10rem auto;
  h4 {
    font-size: 2rem;
    color: #112a46;
  }
`;
export const Heading = styled.div`
  display: inline-block;
  position: relative;
  span {
    display: inline-block;
    position: absolute;
    background-color: grey;
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 1rem;
    color: #fff;
    top: 1.5rem;
    left: 100%;
    -ms-user-select: none;
    user-select: none;
  }
`;
export const CommentBlock = styled.input`
  background-color: transparent;
  box-sizing: border-box;
  outline: none;
  border: none;
  display: inline-block;
  padding: 1rem 10rem 1rem 1rem;
  border-radius: 10px;
  height: 10rem;
  width: 100%;
  font-size: 1.8rem;
`;
export const CommentInner = styled.div`
  position: relative;
  border: 1px solid #112a46;
  border-radius: 3px;
  .add {
    position: absolute;
    cursor: pointer;
    display: inline-block;
    border: none;
    outline: none;
    background-color: ${palette.gray[8]};
    color: #fff;
    border-radius: 3px;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem 2rem;
  }
`;
