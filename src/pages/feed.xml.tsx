import { NextPageContext } from 'next'
import React from 'react'
import Stories, { Story } from '../stories-md'
import SEO from '../../next-seo.config'
import { formatRFC822Date } from '../Utils'

export default class Feed extends React.Component<{}> {
  static writeRSSFeed(stories: Story[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
          <title>${SEO.openGraph.title}</title>
          <link>${SEO.openGraph.url}</link>
          <description>${SEO.openGraph.description}</description>
          <atom:link href="https://jundialwan.id/feed.xml" rel="self" type="application/rss+xml" />
          <image>
            <url>${SEO.openGraph.images[0].url}</url>
            <title>${SEO.openGraph.title}</title>
            <link>${SEO.openGraph.url}</link>
          </image>
          ${stories.map(({ title, url, description, createdAt }) => (`
            <item>
              <title>${title}</title>
              <link>${`https://jundialwan.id/stories/${url}`}</link>
              <description>${description}</description>
              <author>jundi.alwan@gmail.com (Jundi Alwan)</author>
              <pubDate>${formatRFC822Date(new Date(createdAt))}</pubDate>
              <guid>${`https://jundialwan.id/stories/${url}`}</guid>
            </item>
          `)).join('')}
        </channel>
      </rss>
    `
  }

  static getInitialProps({ res }: NextPageContext) {
    res?.setHeader('Content-Type', 'application/xml')
    res?.write(this.writeRSSFeed(Stories))
    res?.end()
  }

  render() {
    return null
  }
}