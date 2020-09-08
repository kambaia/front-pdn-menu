import Styled from "styled-components";

export const WrapSideBar = Styled.section`
    width: 250px;
    box-sizing: content-box;
    border-right: 1px solid #ccc;
    display: flex;
    margin-right: 5px;
    float: left;
    height: 100%;
    position:fixed;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.26);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.26);
    box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.26);
    z-index: 2;
`;
export const Content = Styled.div`
    flex: 1;
    margin-top:60px;
`;
export const SectionBar = Styled.h2`
    color: #222;
    font-weight: "bold";
    border-bottom: 1px solid #ccc;
    padding: 12px 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const MenuContainer = Styled.div`
    
`;
export const Menu = Styled.li`
    color: #444;
    padding: 8px 32px;
    border-bottom: 1px solid #c5c5c5;
    display:block;
    cursor: pointer;
    :hover{
        color: cyan;
        background: #1e1e1e;
        border-left-color: cyan;
       
    }
    >.active{
   
    }
    
`;
