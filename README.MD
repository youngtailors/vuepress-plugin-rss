# Vuepress Plugin RSS

<a href="https://www.npmjs.com/package/vuepress-plugin-rss"><img src="https://img.shields.io/npm/v/vuepress-plugin-rss.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-rss"><img src="https://img.shields.io/npm/l/vuepress-plugin-rss.svg" alt="License"></a>

> RSS Plugin for Vuepress

## Install

```
> yarn add vuepress-plugin-rss -D
# or
> npm i vuepress-plugin-rss -D
```

## Config for your site

- Update your `.vuepress/config.js`

```js
module.exports = {
    ...
    plugins: [
      [
        'vuepress-plugin-rss',
        {
          base_url: '/', // required
          site_url: 'https://procollab.com', // required
          copyright: '2018 Young Tailors', // optional
          // filter some post
          filter: (frontmatter) => { return [true|false] },
          // How much articles
          count: 20
        }
      ]
    ]
}
```

## Contributors

- Core Plugin - [dacsang97](https://github.com/dacsang97)
- Support Vuepress 1.0 - [tomieric](https://github.com/tomieric)

---

License MIT
