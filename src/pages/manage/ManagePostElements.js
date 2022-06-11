import styled from "styled-components";
import palette from "../../lib/palette";

export const OwnPostContainer = styled.div`
  max-width: 80rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 350px);
  gap: 32px;
  margin: 0 auto;
  padding: 80px;
  @media screen and (max-width: 900px) {
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }
`;
export const OwnPostList = styled.div`
  background-color: #fff;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.05);
  transform: translateY(160px);

  padding: 3rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  h3 {
    font-size: 2rem;
    padding-bottom: 2rem;
    max-width: 20rem;
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
    font-size: 1.4rem;
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
    width: 1.6rem;
    height: 1.6rem;
    stroke: ${palette.orange[4]};
  }
  .info {
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;
export const EditGroup = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  bottom: 2rem;
  right: 2rem;
  .edtIcon {
    width: 2.4rem;
    height: 2.4rem;
    stroke: ${palette.gray[5]};
    cursor: pointer;
    &:hover {
      stroke: ${palette.orange[5]};
    }
  }
`;
export const LoginRequireBlock = styled.p`
  transform: translate(20rem, 20rem);
  display: inline-block;
  font-size: 1.8rem;
  color: #f00;
  .login {
    font-weight: 600;
    border-bottom: 1px solid #f00;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
`;
