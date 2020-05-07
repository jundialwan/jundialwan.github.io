import { BlogJsonLd } from 'next-seo'
import ReactMarkdown from 'react-markdown'
import stories, { Story } from '../../stories-md'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { formatDate } from '../../Utils'
import Link from 'next/link'

const StoryBody = styled.div`
  color: #000;
  & pre {
    border: 1px solid #000;
    padding: 16px;
    background-color: #fff111;

    & code {
      white-space: pre-wrap;
    } 
  }

  & img {
    width: 100%;
  }
`

const StoryTitle = styled.span`
  font-size: 1.4em;
  margin: 8px 0;
  font-weight: 900;
`

const StoryDate = styled.span`
  font-size: smaller;
  color: #586069;
`

const BackToTopNav = styled.div`
  cursor: pointer;
  width: fit-content;
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  padding: 10px;
  margin: 0 auto;
  text-align: center;

  & a {
    text-decoration: none;
  }
`

const StoryPage: NextPage<{ story: Story }> = ({ story }) => {
  
  return (
    <>
      <Head>
        {
          story === undefined ?
          (
            <title>Story not found - jundialwan</title>
          ):
          (
            <title>{story.title} - jundialwan</title>
          )
        }
      </Head>
      {
        story === undefined ?
        (
          <div>Story not found</div>
        ) :
        (
          <>
            <BlogJsonLd 
              url={`https://jundialwan.id/stories/${story.url}`}
              title={story.title}
              datePublished={typeof window !== 'undefined' ? (story.createdAt).toString() : (new Date(story.createdAt)).toString()}
              dateModified={typeof window !== 'undefined' ? (story.updatedAt).toString() : (new Date(story.updatedAt)).toString()}
              description={story.description}
              authorName="Jundi Alwan"
              images={[]}
            />
            
            <StoryTitle>
              {story.title}
            </StoryTitle>
            <br/>
            <StoryDate>
              {formatDate(typeof window === 'undefined' ? story.createdAt : new Date(story.createdAt))}
            </StoryDate>
            <StoryBody>
              <ReactMarkdown escapeHtml={false} source={story.md}/>
            </StoryBody>

            <Link href="/" passHref>
              <BackToTopNav>
                <a title="back to home">
                  &lt;&lt; back to home 🏠
                </a>
              </BackToTopNav>
            </Link>
          </>
        )
      }
      
    </>
  )
}

StoryPage.getInitialProps = async (ctx: NextPageContext) => {
  const story = ctx.query['story'] as string
  const selectedStory = stories.filter(f => f.url === story)[0]

  return {
    story: selectedStory
  }
}

export default StoryPage