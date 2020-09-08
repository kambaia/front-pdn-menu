import styled from 'styled-components';

export const ControlButton = styled.button`
background-color:#ffffff;
height: 80%;
font-size:100px;
border-bottom: solid 1px #ddd;
`;

export const Container=styled.div`
display:flex;
`;

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition:0.3s;
width:100%;
&:hover {
    background-color:var(--green);
}
`;

export const CardContainer = styled.div`
padding:2px 16px;
`;