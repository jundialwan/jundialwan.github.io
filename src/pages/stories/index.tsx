import stories, { Story } from '../../stories-md'
import Link from 'next/link'
import { formatDate } from '../../Utils'
import { NextPage, NextPageContext } from 'next'

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
                <span>{typeof window === 'undefined' ? formatDate(story.createdAt) : formatDate(new Date(story.createdAt))}</span>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

Stories.getInitialProps = async (ctx: NextPageContext) => {
  return {
    allStories: stories
  }
}

export default Stories