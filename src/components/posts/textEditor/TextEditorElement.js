import styled from "styled-components";
import palette from "../../../lib/palette";
export const TextEditorBlock = styled.div`
  max-width: 800px;
  padding: 2rem;
`;
export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  .icon {
    color: #f08c00;
    width: 20px;
    height: 20px;
    transform: translateY(-8px);
    margin-top: 20px;
  }
`;
export const TitleInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  background-color: transparent;
  border-bottom: 1px solid #f08c00;
  width: 100%;
  margin: 0 0 20px 0;
  padding-top: 20px;
  font-size: 18px;
  margin-top: 20px;
`;
export const QuillWrapper = styled.div`
  .ql-toolbar {
    margin-top: 30px;
    border: 1px solid ${palette.gray[5]};
  }
  .ql-editor {
    min-height: 320px;
    background-color: #fff;
  }
  .ql-header {
    color: ${palette.gray[5]};
  }
  .ql-container {
    border-radius: 3px;
    border: 1px solid ${palette.gray[5]};
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  /* height: 100vh; */
`;
