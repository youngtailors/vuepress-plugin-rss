const path = require('path')
const fs = require('fs-extra')
const RSS = require('rss')

module.exports = (pluginOptions) => async (options) => {
  const feed = new RSS({
    title: options.siteData.title,
    description: options.siteData.description,
    feed_url: `${pluginOptions.site_url}/rss.xml`,
    site_url: `${pluginOptions.site_url}`,
    copyright: `${pluginOptions.copyright ? pluginOptions.copyright : 'Coralo 2018'}`,
    language: 'en',
  })

  options.siteData.pages
    .filter(page => page.path.startsWith(pluginOptions.base_url))
    .map(page => ({...page, date: new Date(page.frontmatter.date)}))
    .sort((a, b) => b.date - a.date)
    .map(page => ({
      title: page.title,
      description: page.frontmatter.description,
      url: `${pluginOptions.site_url}${page.path}`,
      date: page.date,
    }))
    .forEach(page => feed.item(page))

  await fs.writeFile(
    path.resolve(options.outDir, 'rss.xml'),
    feed.xml()
  )
}