// import App from 'next/app'
import 'nprogress/nprogress.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { GoogleAnalytics } from '../Utils'
import { GlobalStyle, GlobalContainer, NavigationHeader, LogoType } from '../components/Util'

// configure progress bar on top off app
NProgress.configure({ trickleSpeed: 50 })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
  NProgress.inc(.24)
})

Router.events.on('routeChangeComplete', (url: string) => {
  NProgress.done()
  GoogleAnalytics.pageView(url)
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>jundialwan - Personal Blog</title>
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_ID',
          url: 'https://jundialwan.id/',
          site_name: 'jundialwan - Personal Blog',
        }}
        twitter={{
          handle: '@ja_alwan',
          site: '@ja_alwan',
          cardType: 'summary',
        }}
      />
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
        </NavigationHeader>
        <hr/>
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