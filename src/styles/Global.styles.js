import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

/* html {
  font-size: 62.5%;
} */

body {
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
    box-sizing: border-box;
}



a {
    color: inherit;
    text-decoration: none;
}

`;

export default GlobalStyles;
