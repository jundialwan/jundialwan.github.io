import stories, { Story } from '../../stories-md'
import Link from 'next/link'
import { formatDate } from '../../Utils'
import { NextPage, GetStaticProps } from 'next'
import { PageTitle, StoryLink, StoryDate, StoryTeaser } from '..'

const Stories: NextPage<{ allStories: Story[] }> = ({ allStories }) => {
  return (
    <>
      <PageTitle>List of All story</PageTitle>
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

export const getStaticProps: GetStaticProps = async () => {
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

export default Stories