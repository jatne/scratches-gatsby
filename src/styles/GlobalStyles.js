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
    padding: 0 0 1rem;
    background: #fff;
  }

  .scratch-off-container {
    position: relative;
    width: 90vw;
    height: 100%;
  }

  .scratch-off-canvas {
    position: absolute;
  }
`;


export default GlobalStyles;
