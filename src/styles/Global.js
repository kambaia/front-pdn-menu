import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  .Toastify__toast--success {
    background: #3DC477;
    color: #fff;
  }

  .Toastify__toast--error {
    background: #CB291E;
    color: #fff;
  }

  body{
    background-color: var(--primary);
    color: #1c1c1c;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    overflow-x: hidden;
    height: 100%;
  }

  ul,
  ol {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  textarea {
    font-family: inherit;
  }

  :root {
    --primary: #fafafa;
    --secondary: #fff;
    --blue: #2C6CB3;
    --red: #CB291E;
    --green: #3DC477;
    --orange: #EF530F;
  }

  #root {
    height: 100%; /* remove this line to see div.app is no more 100% height */
  }
`;
