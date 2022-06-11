import styled from 'styled-components';
import palette from '../../lib/palette';

export const ReadPostBlock = styled.div`
  max-width: 80rem;
  min-height: 60rem;

  padding-bottom: 9.6rem;
  transform: translateY(200px);
  margin: 0 auto;
  color: ${palette.gray[9]};
`;
export const PostBlock = styled.div`
  .title {
    font-size: 32px;
    margin-top: 0;
  }
  .tag {
    display: inline-block;
    font-size: 14px;
    margin-left: 2rem;
    transform: translateY(-1rem);
    color: ${palette.orange[8]};
    font-weight: 600;
  }
  .body {
    font-size: 18px;
    margin-top: 60px;
    line-height: 1.6;
  }
`;
