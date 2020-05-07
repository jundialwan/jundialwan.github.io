import Link from 'next/link'
import stories, { Story } from '../stories-md'
import { formatDate } from '../Utils'
import { NextPage, NextPageContext, GetServerSideProps } from 'next'
import styled from 'styled-components'

const PageTitle = styled.h1`
  font-size: larger;
  font-weight: 900;
  margin: 8px 0;
`

const StoryDate = styled.span`
  font-size: smaller;
  color: #586069;
`

const StoryLink = styled.span`
  font-weight: 900;
  cursor: pointer;
`
const StoryTeaser = styled.span`
  color: #586069;
  font-size: smaller;
`

const Home: NextPage<{ allStories: Story[] }>  = ({ allStories }) => {
  return (
    <>
      <PageTitle>Latest story</PageTitle>
      <ul style={{ paddingInlineStart: '20px'}}>
        {
          allStories.map(s => (
            <Link key={s.url} href="/stories/[story]" as={`/stories/${s.url}`} passHref>
              <li key={s.url} style={{marginBottom: '12px'}}>
                <StoryLink>{s.title}</StoryLink>
                &nbsp;&nbsp;
                <StoryDate>{formatDate(new Date(s.createdAt))}</StoryDate>
                <br/>
                <StoryTeaser>{s.description} </StoryTeaser>
              </li>
            </Link>
          ))
        }
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const sortedLatestStories = stories.sort((s1, s2) => {    
    const story1 = new Date(s1.createdAt)
    const story2 = new Date(s2.createdAt)

    return -1 * (story1.getTime() - story2.getTime())
  })

  return {
    props: {
      allStories: sortedLatestStories
    }
  }
}

export default Home