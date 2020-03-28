// import App from 'next/app'
import 'nprogress/nprogress.css'
import styled, { createGlobalStyle } from 'styled-components'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { NextPage } from 'next'

// configure progesrs bar on top off app
NProgress.configure({ trickleSpeed: 50 })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
  NProgress.inc(.24)
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

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
  marginRight: '4px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '& a': { color: '#212121', textDecoration: 'none' },
  '& a:hover': { color: '#212121' },
  '& a:visit': { color: '#212121' },
  '& a:active': { color: '#212121' }
})

const SiteMenu = styled.div({
  padding: '0 8px',
  backgroundColor: '#DDD',
  fontWeight: 'bolder',
  marginRight: '4px',
  fontSize: '1rem',

  '& a': { color: '#212121' },
  '& a:hover': { color: '#212121' },
  '& a:visit': { color: '#212121' },
  '& a:active': { color: '#212121' }
})


const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>jundialwan - Personal Blog</title>
      </Head>
      <div id="top"></div>
      <GlobalContainer>
        <NavigationHeader>
          <LogoType>
            <Link href="/">
              <a title="back to home">
                jundialwan
              </a>
            </Link>
          </LogoType>
          {/* <LogoType>
            <a href="https://twitter.com/ja_alwan" target="jundialwan__twitter">
              TW
            </a>
          </LogoType> 
          <LogoType>
            <a href="https://medium.com/@jundialwan" target="jundialwan__medium">
              MD
            </a>
          </LogoType>
          <LogoType>
            <a href="https://github.com/jundialwan" target="jundialwan__github"> 
              GH
            </a>
          </LogoType>
          <LogoType>
            <a href="mailto:jundi.alwan@gmail.com" target="jundialwan__mailto">
              MAIL
            </a>
          </LogoType> */}
        </NavigationHeader>
        <hr/>
        
        {/* <NavigationHeader>
          <SiteMenu>
            <Link href="/stories">
              <a title="see all stories">
                all stories
              </a>
            </Link>
          </SiteMenu>
        </NavigationHeader>
        <hr/> */}
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