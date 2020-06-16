import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0055fb",
    secondary: "#fd8d5d",
    base: "#ffffff",
  },
  spacing: {
    sm: "30em",
    md: "50em",
    lg: "70em",
  },
  margin: {
    sm: "1.5em",
    md: "2em",
    lg: "3em",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
      position: absolute;
      margin: 0;
      top: 0;
      padding: 0;
      border: 0;
      bottom: 0;
      left: 0;
      right: 0;
      font-family: 'Open Sans', sans-serif;
    }
    img {
      position: relative;
      heigth: auto;
    }

    .primary-button {
      background: ${theme.colors.primary};
      color: white;
      border-radius: 1em;
      padding: 0.5em;
      width: 200px;
      cursor: pointer;
      text-decoration: none;
    }
`;
