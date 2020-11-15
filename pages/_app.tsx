import { AppProps } from 'next/app'
import { FC } from 'react'
import Layout from '../components/Layout'
import { createGlobalStyle } from 'styled-components'

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Sans Thai Bold';
    src: url('/fonts/IBMPlexSansThai-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'IBM Plex Sans Thai SemiBold';
    src: url('/fonts/IBMPlexSansThai-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'IBM Plex Sans Thai';
    src: url('/fonts/IBMPlexSansThai-Regular.woff2') format('woff2');
  }
`

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <GlobalFont />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App