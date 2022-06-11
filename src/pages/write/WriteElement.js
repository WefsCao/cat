import styled from "styled-components";
import palette from "../../lib/palette";

export const Container = styled.div`
  transform: translateY(120px);
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  .btn {
    padding: 10px 20px;
    display: inline-block;
    margin-right: 10px;
  }
  .cancel {
    &:hover {
      background-color: ${palette.gray[7]};
    }
  }
`;
export const ButtonGroup = styled.div`
  margin-left: 40px;
  padding-bottom: 100px;
`;
