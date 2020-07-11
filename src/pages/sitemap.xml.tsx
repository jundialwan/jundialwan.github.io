import { NextPageContext } from 'next'
import React from 'react'
import Stories, { Story } from '../stories-md'

export default class Sitemap extends React.Component<{}> {
  static writeSitemap(stories: Story[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://jundialwan.id</loc>
          <priority>0.6</priority>
        </url>
        <url>
          <loc>https://jundialwan.id/about</loc>
        </url>
        <url>
          <loc>https://jundialwan.id/stories</loc>
        </url>
        ${stories.map(({ url, updatedAt, priority }) => (`
          <url>
            <loc>${`https://jundialwan.id/stories/${url}`}</loc>
            <lastmod>${updatedAt}</lastmod>
            ${priority ? `<priority>${priority}</priority>` : ''}
          </url>
        `)).join('')}
      </urlset>
    `
  }

  static getInitialProps({ res }: NextPageContext) {
    res?.setHeader('Content-Type', 'text/xml')
    res?.write(this.writeSitemap(Stories))
    res?.end()
  }

  render() {
    return null
  }
}