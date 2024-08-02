import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JetBrains Mono';
    src: url('/fonts/JetBrainsMono-VariableFont_wght.ttf') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --font-sans: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }
`;

export default GlobalStyle;
