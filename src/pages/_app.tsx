import '../styles/global.css';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import GlobalStyle from '../styles/global';


import { AppInitialProps, AppProps } from 'next/app';

import usePersistedState from '../utils/usePersistedState'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import React from 'react';

function MyApp({ Component, ...pageProps }: 
  AppInitialProps & { Component: any; session: any; toggleTheme: void }): JSX.Element {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = (): void => setTheme(theme.title === 'light' ? dark : light)
  const sessionApp = pageProps.session

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} toggleTheme={toggleTheme}/>
      </ThemeProvider>
  )
}

export default MyApp
