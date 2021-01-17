import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #343475;
  }

  a {
    text-decoration: none;
    color: var(--blue);
  }

  body {
    padding: 1rem 0;
    background: #fff;
  }
`;

export default GlobalStyles;
