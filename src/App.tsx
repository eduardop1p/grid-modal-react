import Home from './templates/home';

import { ThemeProvider } from 'styled-components';

import GlobalStyled from './global-styles/index.ts';
import { myTheme } from './global-styles/theme.ts';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyled />
      <Home />
    </ThemeProvider>
  );
}

export default App;
