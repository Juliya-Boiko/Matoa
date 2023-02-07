import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Taviraj', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    box-sizing: border-box;
    background-color: #F7F6F4;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
  }
`;