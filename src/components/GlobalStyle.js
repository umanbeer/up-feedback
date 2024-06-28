import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-width: 320px;
    color: #382E2D;
    font-size: 16px;
    font-family: 'Arsenal', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #382E2D;
  }

  ::placeholder {
    color: #382E2D
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  svg {
    transition: 200ms ease;
    transition-property: color;
  }

  input:not([type="radio"]):not([type="checkbox"]),
  select,
  textarea,
  .custom-select-container {
    width: 256px;
    max-width: 100%;
    background-color: #ffffff;
    border: 1px solid #382E2D;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      width: 344px;
      font-size: 16px;
    }
  }

  input:not([type="radio"]):not([type="checkbox"]),
  select {
    padding: 5px 11px;

    @media screen and (min-width: 768px) {
      padding: 9px 18px;
    }
  }

  select {
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  select option:hover { box-shadow: 0 0 10px 100px #1882a8 inset }
  option:hover {
      background-color: yellow;
    }
  option:checked {
    background-color: #382E2D; 
    color: #ffffff; 
    font-weight: bold;
  }

  textarea {
    resize: none;
    height: 111px;
    padding: 7px 17px;
  }
`;
