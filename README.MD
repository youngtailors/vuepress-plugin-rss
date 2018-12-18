# Vuepress Plugin RSS

> RSS Plugin for Vuepress

## Install

```
> yarn add vuepress-plugin-rss -D
# or
> npm i vuepress-plugin-rss -D
```

## Config for your site

* Update your `.vuepress/config.js`
``` js
module.exports = {
    ...
    plugins: [
      ['vuepress-plugin-rss',
        {
          base_url: '/', // required
          site_url: 'https://coralo.io', // required
          copyright: '2018 Coralo', // optional
          // filter some post
          filter: (frontmatter) => { return [true|false] },
          // How much articles
          count: 20
        }
      ]
    ]
}
```

License MIT