import styled from "styled-components";
import palette from "../../lib/palette";

export const InputBlock = styled.input`
  display: inline-block;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 15px;
  padding: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid #dadada;
  &:focus {
    border-bottom: 1px solid ${palette.orange[4]};
  }
`;
export const FormBlock = styled.div`
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 20px;
  width: 250px;
  height: auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 10px 20px 10px rgb(0, 0, 0, 0.05);
  h2 {
    letter-spacing: 2px;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  .footer {
    font-size: 14px;
  }
  .link {
    color: ${palette.orange[4]};
    margin-left: 10px;
    font-weight: bold;
  }
  .register,
  .login {
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    &:hover {
      border-bottom: 1px solid transparent;
      color: ${palette.orange[6]};
    }
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .icon {
    width: 18px;
    height: 18px;
    stroke: ${palette.orange[4]};
  }
`;
export const ErrorBlock = styled.div`
  color: #f00;
  font-size: 14px;
`;
