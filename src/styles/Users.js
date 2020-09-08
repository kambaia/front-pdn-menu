import styled from "styled-components";

/*li:hover {
    background-color: var(--orange);
    color: white;
  }*/

export const RegForm = styled.form`
margin-top: 6%;
.card-main{
  width: 50%;
  margin: auto;
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    height: 33px;
    padding: 0 15px;
    margin: 10px 0;
    &::placeholder {
      font-size: 12px;
      opacity: 0.8;
    }
  }

  option {
    width: 100%;
  }

  select {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    height: 33px;
    padding: 0 15px;
    margin: 10px 0;
  }

  button {
    background-color: var(--green);
    padding: 0 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-bottom: 10px;
    color: white;
    height: 33px;
    width: 50%;
    cursor: pointer;
  }

  label {
    color: grey;
    font-size: 14px;
  }
}
`;
export const MessageError = styled.h5`
    color: #000;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    left: 0;
    right: 0;
    padding: 10px;
`;

export const EditForm = styled.form`
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 50%;
    height: 33px;
    padding: 0 15px;
    margin: 10px 0;
    &::placeholder {
      font-size: 12px;
      opacity: 0.8;
    }
  }

  option {
    width: 100%;
  }

  select {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 50%;
    height: 33px;
    padding: 0 15px;
    margin: 10px 0;
  }

  button {
    background-color: var(--blue);
    padding: 0 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-bottom: 10px;
    color: white;
    height: 33px;
    width: 50%;
  }

  label {
    color: grey;
    font-size: 14px;
  }
`;
