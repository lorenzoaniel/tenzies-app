import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        height: 100vh;
        min-width: 530px;
    }

    body {
        background-color: #0b2434;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;
 
export default GlobalStyle;