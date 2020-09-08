import styled from 'styled-components';

export const Container = styled.div`

    .main_container {
        display: flex;
        justify-content: space-between;
        margin: 10% auto;
        background: #fff;
        overflow: hidden;
        width:626px;
        height: 350px;
        border: 1px solid #ddd;
        
    }

    .box_left {
        background: var(--primary);
        width: 70%;
        border-right: 1px solid #ddd;
        >img {
            width: 85px;
            height: 97px;
            margin: 6rem auto 1rem auto;
            text-align: center;
            display: block;
        }

        >h1 {
            text-align: center;
            font-weight: 400;
            font-size: 13px;
        }

        >h6 {
            margin-top: 10px;
            font-size: 11px;
            margin-left: 5px;
        }
    }

    .box_right {
             padding: 10px 40px;
             position: relative;
        >form {
            margin-top: 40%;
            
         >input {
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 100%;
            height:33px;
            padding: 0 15px ;
            margin: 10px 0;
            &::placeholder{
                font-size:12px;
                opacity:0.8;
            }
        }
        >button{
            background-color: var(--orange);
            padding: 0 15px;
            border: 1px solid transparent;
            border-radius: 4px;
            margin-bottom: 10px;
            color:white;
            height:33px;
            width: 100%;
            cursor: pointer;
            :hover{
               opacity: 0.9;
            }
        }
        .user_data{
            font-weight: 400;  
        }
        
        .LabelLink{
            color: #1c1c1c;
            width:100%;
            font-size: 10.5px;
            text-align: center;
            margin-top:-2px;
        }
        .Fpassword{
            margin-left:0.4em;
            color:#29adf5 ;
        }
        .LabelLink2{
            color: #1c1c1c;
            width:100%;
            font-size: 10.5px;
            text-align: right;
        }
    } 
}

.recover_aside {
    width: 94%;
    overflow: hidden;
}

`;

export const MessageError = styled.h5`
    color: #000;
    text-align: center;
    font-weight: 400;
    position: absolute;
    font-size: 16px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
`;