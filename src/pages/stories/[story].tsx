import { BlogJsonLd } from 'next-seo'
import ReactMarkdown from 'react-markdown'
import stories, { Story } from '../../stories-md'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { formatDate } from '../../Utils'
import Link from 'next/link'

const StoryBody = styled.div({
  '& pre': {
    border: '1px solid #000',
    padding: '16px',
    backgroundColor: '#fff111',

    '& code': {
      whiteSpace: 'pre-wrap'
    } 
  },

  '& img': {
    width: '100%'
  }
})

const StoryTitle = styled.h1({
  fontSize: '1.4em',
  margin: '8px 0'
})

const StoryDate = styled.span({
  fontSize: '0.8rem',
  fontStyle: 'italic'
})

const BackToTopNav = styled.div({
  padding: '16px',
  textAlign: 'center'
})

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
            <StoryDate>
              {formatDate(typeof window === 'undefined' ? story.createdAt : new Date(story.createdAt))}
            </StoryDate>
            <StoryBody>
              <ReactMarkdown escapeHtml={true} source={story.md}/>
            </StoryBody>

            <BackToTopNav>
              <Link href="/">
                <a title="back to home">
                  &lt;&lt; back to home 🏠
                </a>
              </Link>
            </BackToTopNav>
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