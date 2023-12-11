import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>매너장착</h1>
    </ThemeProvider>
  );
}

export default App;
