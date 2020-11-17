import { AppProps } from 'next/app'
import { FC } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 1024px;
    margin: 0;
    font-family: 'IBM Plex Sans Thai', sans-serif;
  }
`

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Sans Thai Bold';
    src: url('${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/IBMPlexSansThai-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'IBM Plex Sans Thai SemiBold';
    src: url('${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/IBMPlexSansThai-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'IBM Plex Sans Thai';
    src: url('${process.env.NEXT_PUBLIC_BASE_PATH}/fonts/IBMPlexSansThai-Regular.woff2') format('woff2');
  }
`

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <GlobalFont />
      <Component {...pageProps} />
    </>
  )
}

export default App