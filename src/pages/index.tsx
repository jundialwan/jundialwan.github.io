import Link from 'next/link'
import stories, { Story } from '../stories-md'
import { formatDate } from '../Utils'
import { NextPage, NextPageContext } from 'next'
import styled from 'styled-components'

const PageTitle = styled.h1({
  fontSize: '1.6rem',
  margin: '8px 0'
})

const StoryDate = styled.div({
  fontSize: '1rem',
  fontStyle: 'italic'
})

const Home: NextPage<{ allStories: Story[] }>  = ({ allStories }) => {
  return (
    <>
      <PageTitle>Latest story</PageTitle>
      {
        allStories.map(s => (
          <div key={s.url}>
            <Link key={s.url} href="/stories/[story]" as={`/stories/${s.url}`}>
              <a>{s.title}</a>
            </Link>
            <StoryDate>{typeof window === 'undefined' ? formatDate(s.createdAt) : formatDate(new Date(s.createdAt))}</StoryDate>
          </div>
        ))
      }
    </>
  )
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const sortedLatestStories = stories.sort((s1, s2) => {
    let story1 = s1.createdAt
    let story2 = s2.createdAt

    if (typeof window !== 'undefined') {
      story1 = new Date(s1.createdAt)
      story2 = new Date(s2.createdAt)
    }

    return -1 * (story1.getTime() - story2.getTime())
  })

  return { allStories: sortedLatestStories }
}

export default Home