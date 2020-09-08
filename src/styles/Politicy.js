
import styled from 'styled-components'
const Container = styled.div `
    display: flex;
    width:100%;
    .content{
            display: block;
            box-shadow:0px 0px 2px rgba(0,0,0,0.5);
            width:100%;
            padding-bottom:10px;
            margin:2% auto;
    }
    .card-body {
        width:96%;
        margin:auto;
    }
    .cart-section-select{
        width:100%;
        display:flex;
        padding:30px;
        justify-content:space-between;
        margin-top:10px;
    }

        .select-polity{
            width:40%;
             >select{
                padding:8px;
                width:100%;
                border: 1px solid #ddd;
                border-radius:5px;
                color:#282729;
        }
        >label{
            padding:10px 0px;
            margin-bottom:5px
        }
        
    }
   
   .cart-input{
       width:65%;
      >input{
        padding:8px;
            width:100%;
            border: 1px solid #ddd;
            border-radius:5px;
            color:#282729;
      }
   }
   .btn-number{
    width:25%;
        >button{
            padding:8px;
            width:100%;
            border: 1px solid #ddd;
            border-radius:5px;
            color:#fff;
            border-style:node;
            background-color: var(--blue);
        }
   }
   .cart-section-list{
       >ul {
           width:100%;
           padding:10px;
           >li{
            padding:10px;
            border-bottom:1px solid #ddd;
           }
       }
   }
    
`



export {
    Container
}