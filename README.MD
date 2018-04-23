# Vuepress Plugin RSS

> RSS Plugin for Vuepress

# Config for your site

* Update your `.vuepress/config.js`
``` js
module.exports = {
    ...
    plugins: [
      {
        resolve: 'vuepress-plugin-rss',
        options: {
          base_url: '/', // required
          site_url: 'https://coralo.io', // required
          copyright: '2018 Coralo' // optional
        }
      }
    ]
}
```

License MIT