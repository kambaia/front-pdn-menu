import styled from "styled-components";
const Container = styled.section`
    margin: 16px;
    padding: 0 0 16px;
    float: left;
    max-width: 1200px;
    width: 80%;
    background-color: #f2f2f2;
  
  .list_activity {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid #ddd;
  }

  .lessMargin{
      margin-top: -20px;
    }

  .buttons{
      display: flex;
      margin-top: 10px;
      justify-content: flex-end;
    }

  .cart-section-select {
    padding: 0 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .cart-input {
    width: 65%;
    > input {
      width: 100%;
      padding: 0 15px;
      height: 35px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #555;
    }
  }
  .btn-number{
      width: 10rem;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      border-radius:4px;
      color:#fff;
      background-color: var(--blue);
      margin: 8px 0;
   }


   .button_add {
      width:10rem;
      height: 35px;
      border: 1px solid transparent;
      border-radius:4px;
      justify-content: center;
      display: flex;
      align-items: center;
      color:#fff;
      background-color: var(--green);
      margin: 8px 12px;

   }
  .cart-section-list {
    padding: 0 16px;
    > ul {
      width: 100%;
      > li {
        border-bottom: 1px solid #ddd;
      }
    }

  }

  .btnDelete,
  .btnEdit{
    float: right;
    margin: 0 5px;
    bordeR: 1px solid transparent;
    cursor: pointer;
  }
`;

export { Container };
