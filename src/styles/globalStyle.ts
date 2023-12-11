import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
${reset}
* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
