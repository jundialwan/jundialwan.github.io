import Link from 'next/link'
import stories, { Story } from '../stories-md'
import { formatDate } from '../Utils'
import { NextPage, NextPageContext } from 'next'
import styled from 'styled-components'

const PageTitle = styled.h1({
  fontSize: '1.6rem',
  margin: '8px 0'
})

const StoryDate = styled.span({
  fontSize: '.72rem',
  fontStyle: 'italic'
})

const Home: NextPage<{ allStories: Story[] }>  = ({ allStories }) => {
  return (
    <>
      <PageTitle>Latest story</PageTitle>
      <ul style={{ paddingInlineStart: '20px'}}>
        {
          allStories.map(s => (
            <li key={s.url} style={{marginBottom: '12px'}}>
              <Link key={s.url} href="/stories/[story]" as={`/stories/${s.url}`}>
                <a>{s.title}</a>
              </Link>
              &nbsp;&nbsp;
              <StoryDate>{typeof window === 'undefined' ? formatDate(s.createdAt) : formatDate(new Date(s.createdAt))}</StoryDate>
            </li>
          ))
        }
      </ul>
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