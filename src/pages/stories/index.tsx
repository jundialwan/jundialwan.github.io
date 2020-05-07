import stories, { Story } from '../../stories-md'
import Link from 'next/link'
import { formatDate } from '../../Utils'
import { NextPage, NextPageContext, GetServerSideProps } from 'next'

const Stories: NextPage<{ allStories: Story[] }> = ({ allStories }) => {
  return (
    <>
      <h1>List of all Stories</h1>
      <ul>
        {
          allStories.map(s => {
            const story = s
            return (
              <li key={story.url}>
                <Link href="/stories/[story]" as={`/stories/${story.url}`}>
                  <a>{story.title}</a>
                </Link><br/>
                <span>{formatDate(new Date(story.createdAt))}</span>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      allStories: stories
    }
  }
}

export default Stories