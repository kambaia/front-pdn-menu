import styled from 'styled-components';

export const Container = styled.div`
  .main_container {
    width: 80%;
    height: 60vh;
    background: #fff;
    border: 1px solid #ddd;
    margin: 90px auto;
  }

  .main_content {
    display: flex;
    margin-top: 4rem;
    justify-content: space-between;
    padding: 10px 50px;
    >.aside_left,
    >.aside_right {
      >input {
        width: 369px;
        height: 38px;
        border: 1px solid #ddd;
        padding: 0 10px;
        border-radius: 4px;
        ::placeholder {
          opacity: 0.8;
          font-size: 13px;
        }
      }
    }
  }

  .btn_container {
    margin-top: 3rem;
    padding: 10px 50px;
    >button {
      width: 146px;
      border-radius: 4px;
      height: 35px;
      background: var(--blue);
      border: 1px solid transparent;
      color: #fff;
      &:last-child {
        margin-left: 9px;
      }
    }
  }
`;
