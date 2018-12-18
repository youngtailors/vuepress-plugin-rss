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

|               <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a>                |                 <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a>                 |                 <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a>                 |
| :-----------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| [![Core plugin](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) |
|       <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a>        |         <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a>         |         <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a>         |

License MIT
