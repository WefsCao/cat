import styled from 'styled-components';
import palette from '../../lib/palette';

export const DetailsContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;
export const DetailsInner = styled.div`
  border-bottom: 1px solid ${palette.gray[5]};
  margin-top: 2rem;

  .icon {
    width: 2.4rem;
    height: 2.4rem;
    stroke: ${palette.gray[8]};
    cursor: pointer;
    display: inline-block;
    padding: 1rem;
  }
  .reply {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${palette.gray[8]};
  }
  .reactions {
    margin-left: 2rem;
  }
`;
export const DetailsAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  span {
    width: 4rem;
    height: 4rem;
    display: inline-block;
    border-radius: 50%;
    background-color: #888;
  }
  .username {
    font-size: 1.8rem;
    font-weight: 600;
    transform: translateY(1.3rem);
  }
  .date {
    font-size: 1rem;
    color: ${palette.gray[6]};
  }
`;
export const DetailsContent = styled.div`
  position: relative;
  font-size: 1.8rem;
  line-height: 1.5;
  background-color: #ccc;
  color: #080808;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 1rem;
  .reactions {
    display: inline-block;
    position: absolute;
    right: 3rem;
    bottom: -1rem;
  }
  .reaction {
    margin-left: -2px;
  }
  .total {
    font-size: 1.4rem;
  }
`;
export const ReactionsBar = styled.div`
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
`;
