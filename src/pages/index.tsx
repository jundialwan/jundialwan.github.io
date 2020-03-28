import Link from 'next/link'
import stories, { Story } from '../stories-md'
import { formatDate } from '../Utils'
import { NextPage, NextPageContext } from 'next'

const Home: NextPage<{ featured: Story[] }>  = ({ featured }) => {
  return (
    <>
      <h3>Featured</h3>
      {
        featured.map(f => (
          <div key={f.url}>
            <Link href="/stories/[story]" as={`/stories/${f.url}`}>
              <a>{f.title}</a>
            </Link><br/>
            <span>{typeof window === 'undefined' ? formatDate(f.createdAt) : formatDate(new Date(f.createdAt))}</span>
          </div>
        ))
      }
    </>
  )
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const featured = stories.filter(s => s.featured)
  return { featured }
}

export default Home