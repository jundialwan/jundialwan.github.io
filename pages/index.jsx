import Link from 'next/link'

const Home = ({ userAgent }) => {
  return (
    <>
      <h1>Hello world! - user agent: {userAgent}</h1>
      <Link href="/about">
        <a>about page</a>
      </Link>      
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Home