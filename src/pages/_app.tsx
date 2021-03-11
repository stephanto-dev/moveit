import '../styles/global.css';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../styles/global';

import useToggleTheme from '../hooks/useToggleTheme';

function MyApp({ Component, pageProps }) {
  const {theme} = useToggleTheme();

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>

  )
}

export default MyApp
