import Styled from 'styled-components';

export const Container = Styled.div`
  .header{
    width:100%;
    height: 60px;
    background-color: var(--secondary);
    border-bottom: solid 1px #ddd;
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
  }

    .menu{
        width:80%;
        display: flex;
        margin-left: 1rem;
        align-items: center;
        padding-right: 1em;
    }

    .logo, img{
      width: 30px;
      height: 35px;
      size:cover;
    }
    
    .menu_link{
      text-decoration: none;
      color: black;
      margin: 0 1rem 0 1rem;
      opacity: 0.8;
    }

    .menu_link:focus{
      color: #000;
      font-weight: 100;
      opacity: 1;
    }

    .extra_links{
      display: flex;
      align-items: center;
      margin-left: 5px;
    }

    .icon{
      margin: 0 5px 0 5px;      
      opacity: 0.8;
    }
    .icon_hover:hover{
      color: #000;
      opacity: 0.5;
    }
`;