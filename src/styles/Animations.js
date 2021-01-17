import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export default Animations;
