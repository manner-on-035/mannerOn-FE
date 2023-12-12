import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
${reset}
* {
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  font-family: 'Pretendard', sans-serif;
  line-height: 1.5;
}
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}
`;

export default GlobalStyle;
