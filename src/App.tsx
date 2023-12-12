import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import { Router } from '@shared/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
