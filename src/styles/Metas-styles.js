import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  align-items: center;
  width: 100%;
  height: 50px;

  .btn_back {
    width: 20%;
    >button{
      width: 110px;
      height: 35px;
      display: flex;
      font-weight: 100;
      align-items: center;
      cursor: pointer;
      border-radius: 4px;
      color: var(--orange);
      border: 1px solid #ddd;
      background: var(--secondary);
      font-size: 13px;
      &:hover{
        opacity: 0.8;
      }
    }
  }

  .title_container {
    width: 60%;
    >h1 {
      font-size: 1.4rem;
      text-align: center;
      color: var(--orange);
    }
  }

  .search_container {
    width: 20%;
    >input {
      width: 14.5rem;
      height: 34px;
      padding: 0 1rem;
      background-color: #fff;
      border-radius: 5px;
      font-size: 15px;
      border: 1px solid #ddd;
      outline: none;
      color: #1c1c1c;
      font-weight: normal;
      &::placeholder {
        opacity: 0.8;
        font-size: 13px;
        color: #555;
        font-weight: 100;
      }
    }
  }
`;

export const TableContainer = styled.div`
  height: 58vh;
  overflow-y: scroll;
  padding: 10px 0; 

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

.row.header {
  height: 45px;
  color: #ffffff;
  background: var(--orange);
  
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


.icons{
  color: #555;
  margin-left: 7px;
  cursor: pointer;
}
`;

