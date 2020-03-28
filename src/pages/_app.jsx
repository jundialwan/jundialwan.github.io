// import App from 'next/app'
import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

const GlobalStyle = createGlobalStyle({
  html: {
    width: '100%'
  },
  body: {
    fontFamily: `serif`,
    backgroundColor: '#EEE',
    color: '#212121',
    textAlign: 'start',
    margin: 0,
    width: '100%'
  }
})

const GlobalContainer = styled.div({
  width: 'calc(50% - 32px)',
  padding: '16px',
  margin: 'auto',
  
  [`@media ${device.mobileS}`]: {
    width: 'calc(100% - 32px)',
    fontSize: '1rem'
  },

  [`@media ${device.mobileM}`]: {
    width: 'calc(100% - 32px)',
    fontSize: '1.4rem',
    lineHeight: '2.6rem'
  },

  [`@media ${device.laptop}`]: {
    width: 'calc(50% - 32px)',
    fontSize: '1.4rem',
    lineHeight: '2.2rem'
  },
})

const NavigationHeader = styled.div({
  display: 'flex',
  flexDirection: 'row'
})

const LogoType = styled.div({
  padding: '4px 8px',
  backgroundColor: '#DDD',
  fontWeight: 'bolder',
  marginRight: '4px'
})


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>jundialwan - Personal Blog</title>
      </Head>
      <GlobalContainer>
        <NavigationHeader>
          <LogoType>
            <Link href="/">
              <a title="back to home">
                jundialwan
              </a>
            </Link>
          </LogoType> 
          <LogoType>
            <a href="https://twitter.com/ja_alwan">
              TW
            </a>
          </LogoType> 
          <LogoType>
            <a href="https://medium.com/jundialwan">
              MD
            </a>
          </LogoType>
          <LogoType>
            <a href="https://github.com/jundialwan">
              GH
            </a>
          </LogoType>
          <LogoType>
            <a href="mailto:jundi.alwan@gmail.com">
              MAIL
            </a>
          </LogoType>
        </NavigationHeader>
        <Component {...pageProps} />
      </GlobalContainer>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp