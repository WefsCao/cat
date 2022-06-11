import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import palette from "../../lib/palette";
const ButtonBlock = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${palette.orange[4]};
  color: #fff;
  font-weight: bold;
  font-size: 1.4rem;
  display: block;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${palette.orange[5]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      background-color: ${palette.orange[4]};
    `}
  ${(props) =>
    props.gray &&
    css`
      background-color: gray;
      &:hover {
        background-color: ${palette.gray[7]};
      }
    `}
`;
const Button = ({ children, ...rest }) => {
  return <ButtonBlock {...rest}>{children}</ButtonBlock>;
};
export default Button;
