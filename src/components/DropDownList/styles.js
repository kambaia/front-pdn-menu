import Styled from 'styled-components';

export const DropDown = Styled.section `
    width: ${props => props.size}%;
    -webkit-user-select: none;
    -moz-user-select: none;
    position: relative;
`;

export const Placeholder = Styled.div `
    padding: 8px;
    margin: 8px 0;
    background-color: #fff;
    border: 1px solid #ddd;
    color: ${props => props.colorSelected};
    display: flex;
    width: ${props => props.size}px;
    justify-content: space-between;
`;

export const ListView = Styled.ul `
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    position: absolute;
    max-height: 200px;
    overflow: auto;
    left: 0;
    right:0;
    background-color: #fff;
    z-index: 100;
`;

export const Option = Styled.li `
    border-bottom: 1px solid #ddd;
    padding: 10px;
    list-style: none;
    cursor: pointer;

    :hover {
        background-color: #eee;
    }
`;