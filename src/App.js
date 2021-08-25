import { Suspense } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { appRoutes } from './routers/app-routes';
import GlobalStyles from './styles/global/_global';

const App = () => {
  const theme = createTheme({});

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>{appRoutes}</Suspense>
    </MuiThemeProvider>
  );
};

export default App;
