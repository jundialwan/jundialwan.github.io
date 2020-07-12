import { BlogJsonLd } from 'next-seo'
import ReactMarkdown from 'react-markdown'
import stories, { Story } from '../../stories-md'
import { NextPage, NextPageContext, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { formatDate } from '../../Utils'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

const StoryTitle = styled.h1`
  font-size: 1.4em;
  margin: 8px 0;
  font-weight: 600;
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
  const router = useRouter()

  return (
    <>
      <Head>
        {
          !router.isFallback && story === undefined ?
          (
            <title>Story not found - jundialwan</title>
          ):
          (
            <title>{story.title} - jundialwan</title>
          )
        }
      </Head>
      {
        !router.isFallback && story === undefined ?
        (
          <div>Story not found</div>
        ) :
        (
          router.isFallback ?
            <div>Loading...</div>
            :
            <>
              <BlogJsonLd 
                url={`https://jundialwan.id/stories/${story.url}`}
                title={story.title}
                datePublished={(new Date(story.createdAt)).toString()}
                dateModified={(new Date(story.updatedAt)).toString()}
                description={story.description}
                authorName="Jundi Alwan"
                images={[]}
              />
              
              <StoryTitle>
                {story.title}
              </StoryTitle>
              <StoryDate>
                {formatDate(new Date(story.createdAt))}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const story = params?.story as string
  let selectedStory

  if (story) {
    selectedStory = stories.filter(f => f.url === story)[0]
  }

  return {
    props: {
      story: selectedStory
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: stories.map(s => ({ params: { story: s.url } })),
    fallback: false
  }
}

export default StoryPage