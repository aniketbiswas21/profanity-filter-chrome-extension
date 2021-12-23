import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
    width: 500px;
    height: fit-content;
    border-radius: 10px;
  }
  `;
