import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        color: ${theme.black};
        letter-spacing: 0.075em;
    }

    body {
        padding: 0;
        margin: 0;
        background-color: ${theme.green300};
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;
