import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 1024px;
    min-height: 100vh;
    margin: 0;
    font-family: 'IBM Plex Sans Thai', sans-serif;
    background: url('${process.env.NEXT_PUBLIC_BASE_PATH}/images/result-bg.png');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
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
      <Head>
        <title>คนละครึ่ง</title>
      </Head>
      <GlobalStyle />
      <GlobalFont />
      <Component {...pageProps} />
    </>
  )
}

export default App
