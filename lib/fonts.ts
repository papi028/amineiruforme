import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JetBrains Mono';
    src: url('/fonts/JetBrainsMono-VariableFont_wght.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --font-sans: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }
`;

export default GlobalStyle;
