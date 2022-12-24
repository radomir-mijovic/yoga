import {createGlobalStyle} from "styled-components";

export const HomePageGlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  h1, h2, h3 {
    padding: 0;
    margin: 0;
  }
`