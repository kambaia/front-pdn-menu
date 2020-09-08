import styled from 'styled-components'

const Container = styled.section`
    margin: 16px;
    padding: 0 0 16px;
    float: left;
    max-width: 1200px;
    width: 80%;
    background-color: #f2f2f2;

    /* Código para auxiliar o container do definition - Jucira Oliveira */
    .items {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
        align-items: center;
    }

    .axeButton{
        padding: 32px;
    }
`;

const ContentDropDownList = styled.section`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 32px;
    display: flex;
`;

const WrapList = styled.div`
    flex: 1;
    padding: 16px;

    .input {
      padding: 12px;
      border: 1px solid #ddd;
      background-color: #fff;
      border-radius: 4px;
      margin: 16px 0;
      width: 15rem;
      /* width: ${props => props.size}%; */
    }
`;

const BodyContent = styled.section`
    margin: 0 32px;
`;

const ContentAxesFields = styled.section`
    justify-content: space-between;
    display: grid;
    grid-template-columns: auto auto;
`;

const WrapAxesFields = styled.div`
    padding: 16px;
`;

const InputBox = styled.input.attrs(props => ({
    type: "text"
}))`
    padding: 12px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 4px;
    margin: 16px 0;
    max-width: 1200px;
    width: ${props => props.size}%;

`;

const Button = styled.button`
    background-color: var(--blue);
    border: none;
    color: #fff;
    padding: 12px; 
    border-radius: 5px;
    width: 15%;
    margin: 0 ${props => props.size}%;

    :hover {
        cursor: pointer;
    }
    :active {
        transform: scale(.99)
    }
`;

const CheckBox = styled.section`
    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 18px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        background: #fff;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    .container input:checked ~ .checkmark {
        background-color: #2196F3;
        border-color: transparent;

    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }

    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }`;

export {
    Container,
    ContentDropDownList,
    WrapList,
    BodyContent,
    CheckBox,
    InputBox,
    Button,
    ContentAxesFields,
    WrapAxesFields,
}