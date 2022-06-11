import styled from 'styled-components';
import palette from '../../lib/palette';
export const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 350px);
  gap: 32px;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    max-width: 40rem;
  }
`;
export const List = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.05);
  transform: translateY(160px);
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
  h3,
  .date,
  .auth {
    -ms-user-select: none;
    user-select: none;
  }
  h3 {
    font-size: 2rem;
    min-height: 5rem;
    max-width: 200px;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* số dòng hiển thị */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    font-weight: bold;
  }

  .auth {
    font-size: 14px;
    color: ${palette.gray[8]};
  }
  .date {
    font-size: 11px;
    color: ${palette.gray[6]};
  }
  .btn {
    position: absolute;
    padding: 5px 10px;
    font-size: 12px;
    right: 30px;
    bottom: 40px;
  }
  .icon {
    width: 18px;
    height: 18px;
    stroke: ${palette.orange[4]};
  }
  .info {
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;
export const SearchBarContainer = styled.div`
  padding: 8rem;
  text-align: right;
  transform: translateY(8rem);
`;
export const SearchBar = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 4px;
  height: 3rem;
  max-width: 20rem;
`;
export const SearchBtn = styled.button`
  position: absolute;
  display: inline-block;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 0 2px 2px 0;
  top: 0;
  right: 0;
  height: 100%;
  color: #fff;
  background-color: ${palette.orange[4]};
  .icon {
    width: 2rem;
    height: 2rem;
    color: #fff;
    cursor: pointer;
  }
`;
export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 1rem 6rem 1rem 1rem;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 4px 0 0 4px;
`;
