import styled from "styled-components";
import palette from "../../../lib/palette";
export const TagBlock = styled.div`
  margin-top: 20px;
  span {
    margin-right: 10px;
    font-size: 1.4rem;
    margin-left: -1rem;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${palette.gray[5]};
  border-radius: 3px;
  padding: 5px 10px;
`;

export const TagList = styled.div`
  ul {
    margin-top: 10px;
  }
  li {
    list-style: none;
    display: inline-block;
    margin-right: 10px;
    background-color: ${palette.orange[3]};
    font-weight: bold;
    color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
  }
`;
