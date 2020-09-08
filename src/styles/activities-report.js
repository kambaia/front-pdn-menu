
import styled from 'styled-components'
const Container = styled.div`
         display: flex;
         width:100%;
    .content{
        display: block;
        box-shadow:0px 0px 2px rgba(0,0,0,0.5);
        width:94%;
        padding-bottom:5px;
        margin:2% auto;
        .card-body {
            width:96%;
            margin:auto;
         }
    }
    .List-indicator{
        >h3{
            color:#555;
            padding:10px 5px;
        }

    .cont-indicador{
            width: 100%;
            margin:auto;
            height:90px;
            padding:5px 5px;
            overflow-y: scroll;
            >ul li{
                padding:10px 0px;
                border-bottom:1px solid #ddd;

            }
        }
        .cont-indicador::-webkit-scrollbar{
            width: 2px;
            padding:1px solid#ccc;
            border:1px solid #ccc;
            background-color: #f80;
        }
        .cont-indicador::-webkit-scrollbar-thumb{
            background: var(--orange);
        }
    }
    .main_content {
        display:flex;
        .select-program{
            width: 45%;
        }
        .select-object{
            width: 28%;
            margin-left:10px;
        }
        .select-activity{
            width: 25%;
            margin-left:10px;
        }
    >.aside_left,
    >.aside_right {
        width: 50%;
      >input {
        width: 100%;
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

    .main_form{
        display: flex;
        justify-content: space-between;
        width: 100%;
        >.aside_left,
        >.aside_right {
            width: 48%;
            height:200px;
    }
    .metas, .actividade{
        border-radius: 4px;
        border: 1px solid #ddd;  
        height:170px;
        padding:10px 5px;
        position:relative;
       
    }
       
        .input{
            position:absolute;
            bottom:20px;
            width: 98%;
            text-align:center;
            >input {
            width: 96%;
            height: 38px;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding:5px 5px;
            ::placeholder {
            opacity: 0.8;
            font-size: 13px;
            
            }
        }
    }
    textarea{
        height:150px;
        border:none;
        width: 100%;
        padding:5px 5px;
        ::placeholder {
            opacity: 0.8;
        }
        :focus{
            outline: none; 
            border:none
        }
    }
  }
  }

  .btn-container {
      padding:20px 0px;
        button {
            width: 146px;
            border-radius: 4px;
            height: 35px;
            border: 1px solid transparent;
            color: #fff;
                &:last-child {
                    margin-left: 9px;
                }
                :focus{
                outline: none; 
                border:none
            }
        }
        button:nth-child(1){
            background: var(--green);
        }
        button:nth-child(2){
            background: var(--blue);
            margin-left:10px;
        }
        button:nth-child(3){
            background: var(--blue);
            margin-left:10px;
        }
        button:nth-child(4){
            background: var(--red);
        }
        
    }


    .table{
    border:1px solid #ddd;
     width:100%;
}
.table-indicadores {
        border-spacing: none;
        border-collapse:collapse;
        width:100%;
        
    }
    .table-indicadores tbody {
        display: block;
        width: 100%;
        height: 100px;
        overflow-y: scroll;
    }
    .table-programas  td {
            padding:8px 5px;
    }
    .table-indicadores tbody::-webkit-scrollbar{
        width: 1px;
        background-color: #ddd;
        padding:1px solid#ccc
    }

    .table-indicadores td, th{
        padding: 5px 8px;
        border-bottom:1px solid #ddd;
        text-align:left;
        color:#555
    }
    .table-indicadores tr {
        width: 100%;
        display: table; 
        table-layout: fixed;  
    }
    .table-indicadores th:nth-child(1){
        width:10%
    }
    .table-indicadores th:nth-child(2){
        width:55%
    }
    .table-indicadores th:nth-child(3){
        width:10%
    }
    
    
    .table-indicadores td:nth-child(1){
        width:10%;
    }
    .table-indicadores td:nth-child(2){
        width:50%;
    }
    .table-indicadores td:nth-child(3){
        width:5%;
    }
    .table-indicadores td:nth-child(4){
        width:5%;
    }
    .table-indicadores td:nth-child(5){
        width:5%
    }
    .table-programas td:nth-child(2){
        width:30%
    }
   
    
    .table-programas td:nth-child(3){
        width:30%
    }
   
    .table-programas td:nth-child(4){
        width:5%
    }
    .table-programas td:nth-child(5){
        width:10%
    }

   @media (max-width:500px){
     .table thead{
           display:none;
       }
       .table, .table tbody, .table tr, .table td{
           width:100%;
           display:block;
       }
       .table tr {
           padding-bottom:20px;
       }
       .table td{
           position: relative;
           text-align: right;
           padding-left:10px;
       } 
       .table td::before{
           content: attr(data-label);
           position:absolute;
           text-align:justify;
           left:0;
           width:40%;
           padding-left:15px;
           font-size:15px;
           font-weight: bold;
       }
       .table-indicadores td:nth-child(3), .table td:nth-child(4), .table td:nth-child(5){
            display: none;
       }
   }
   @media screen and (max-width: 580px) {
    .main_form{
        display: block;
        justify-content: space-between;
        width: 100%;
        >.aside_left,
        >.aside_right {
            width: 100%;
            height:200px;
        }
    }

    .btn-container {
      padding:20px;
        button {
            width: 100%;
            border-radius: 4px;
            height: 35px;
            border: 1px solid transparent;
            margin-top:10px;
        }
        button:nth-child(1){
            background: var(--green);
        }
        button:nth-child(2), button:nth-child(3),  button:nth-child(4){
            background: var(--blue);
            margin-left:0px;
             }
        }
    .main_content {
   >.aside_left,
   >.aside_right {
       width: 100%;
     >input {
       width: 100%;
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
`
/***********************************************Fim*********************************** */
export {
    Container
}