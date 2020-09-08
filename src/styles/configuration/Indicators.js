
import styled from 'styled-components'
const Container = styled.section`
    margin: 16px;
    padding: 0 0 16px;
    float: left;
    max-width: 1200px;
    width: 80%;
    background-color: #f2f2f2;

    .lessMargin{
      margin-top: -20px;
    }

    .buttons{
      display: flex;
      margin-top: 10px;
      justify-content: flex-end;
    }


    .card-body {
        width:100%;
        height: 80vh;
        margin:auto;
        border: 0;
    }
    .cart-section-select{
        width:100%;
        margin: 0 18px;
        display:flex;
        padding: 10px 0 10px 0;
        margin-top:10px;
        .input-description {
          width: 40.5rem;
        }
        >input {
          width: 15rem;
          padding: 12px;
          border: 1px solid #ddd;
          background-color: #fff;
          border-radius: 4px;
          margin: 16px 10px;
          max-width: 1200px;
          &:first-child {
            margin-left: 0;
          }
        }
    }

        .select-objective{
            width:40%;
             >select{
                padding:10px;
                width:100%;
                border: 1px solid #ddd;
                border-radius:5px;
                color:#555;
                margin-top: 10px;
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

   .aside_right {
     margin: 0 18px 26px 18px;
    input {
      width: 15rem;
          padding: 12px;
          border: 1px solid #ddd;
          background-color: #fff;
          border-radius: 4px;
          margin: 5px 6px;
          max-width: 1200px;
          &:first-child {
            margin-left: 0;
          }
    }
    
   }
    
`;

export {
  Container
}