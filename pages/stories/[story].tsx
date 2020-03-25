import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import stories from '../../stories-md'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const MarkdownRender = styled.div({
  fontFamily: 'sans-serif',
  lineHeight: '2.0rem',
  '& pre': {
    border: '1px solid #000',
    padding: '16px',
    backgroundColor: '#fff111'
  }
})

const Story: NextPage<{}> = () => {
  const router = useRouter()
  const selectedStory: string = router.query['story'] as string
  const story = stories[selectedStory]
  
  return (
    <>
      <Head>
        <title>{story.title}</title>
      </Head>
      <h1>
        {story.title}
      </h1>
      <Link href="/stories">
        <a>&lt;&lt; Back to list of stories</a>
      </Link>
      <MarkdownRender>
        <ReactMarkdown escapeHtml={true} source={story.md}/>
      </MarkdownRender>
    </>
  )
}

Story.getInitialProps = async (context) => {

  return {
    props: true
  }
}

export default Story