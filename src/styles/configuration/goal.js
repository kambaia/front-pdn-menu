import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-y: hidden;
  width:100%;
  margin: 0 18px;

  .table {
    width: 100%;
    display: table;
  }
  @media screen and (max-width: 580px) {
    .table {
      display: block;
    }
  }

  .row {
    display: table-row;
    background: #fff;
  }

  .cell button{
    background: transparent;
    margin: 0 5px;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .row.header {
    height: 45px;
    color: #555;
    background: #ddd;
  }

  @media screen and (max-width: 580px) {
    .row {
      padding: 14px 0 7px;
      display: block;
    }
    .row.header {
      padding: 0;
      height: 6px;
    }
    .row.header .cell {
      display: none;
    }
    .row .cell {
      margin-bottom: 10px;
    }
    .row .cell:before {
      margin-bottom: 3px;
      content: attr(data-title);
      min-width: 98px;
      font-size: 10px;
      line-height: 10px;
      font-weight: bold;
      text-transform: uppercase;
      color: #969696;
      display: block;
    }
  }

  .cell {
    display: flex;
    align-items: center;
    padding: 14px 30px;
    display: table-cell;
  }
  @media screen and (max-width: 580px) {
    .cell {
      padding: 2px 16px;
      display: block;
    }
  }

  .icons {
    color: #555;
    margin-left: 7px;
    cursor: pointer;
  }
`;

export const Forms = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 18px;

  .input-grup {
    width: 100%;
    display: flex;
    > input {
      width: 30%;
      padding: 0 15px;
      height: 35px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #555;
    }
    > form {
      width: 75%;
      > input {
        width: 18rem;
        padding: 0 15px;
        height: 35px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #555;
        margin-left: 20px;
      }
    }
  }

  .btn-grup {
    display: flex;
    width: 70%;
    margin-left: 20px;

    .btn-number {
      width: 50%;
      .button-check {
        padding: 8px;
        width: 10rem;
        background-color: var(--blue);
        height: 35px;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #fff;
        margin-left: 1rem;
        cursor: pointer;
      }
      .button_add {
        padding: 8px;
        width: 10rem;
        margin-right: 10px;
        background-color: var(--green);
        height: 35px;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #fff;
        margin-left: 1rem;
        cursor: pointer;
      }
    }
  }
`;

