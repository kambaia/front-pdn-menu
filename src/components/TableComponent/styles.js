import Styled from "styled-components";

export const TableContainer = Styled.div`
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


.icons{
  color: #555;
  margin-left: 7px;
  cursor: pointer;
}
`;