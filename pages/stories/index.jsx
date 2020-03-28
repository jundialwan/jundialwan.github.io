import stories from '../../stories-md'
import Link from 'next/link'

const Stories = () => {
  return (
    <>
      <h1>List of all Stories</h1>
      <ul>
        {
          Object.keys(stories).map(s => {
            const story = stories[s]  
            return (
              <li key={story.url}>
                <Link href="/stories/[story]" as={`/stories/${story.url}`}>
                  <a>{story.title}</a>
                </Link><br/>
                <span>Published: {story.createdAt.toString()}</span>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Stories