var plugins = [{
      plugin: require('C:/Users/Boneluv/Desktop/CHEMA/WEB/bone 04-10-19/boneluv.com/node_modules/gatsby-plugin-netlify-identity/gatsby-ssr'),
      options: {"plugins":[],"url":"https://www.boneluv.com/"},
    },{
      plugin: require('C:/Users/Boneluv/Desktop/CHEMA/WEB/bone 04-10-19/boneluv.com/node_modules/gatsby-plugin-crisp-chat/gatsby-ssr'),
      options: {"plugins":[],"websiteId":"6d863b44-dff8-42fd-8bd0-dbac3fe730d3","enableDuringDevelop":true,"defer":false,"enableImprovedAccessibility":false},
    },{
      plugin: require('C:/Users/Boneluv/Desktop/CHEMA/WEB/bone 04-10-19/boneluv.com/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-boneluv","short_name":"boneluv","start_url":"/","theme_color":"#ff187c","icon":"src/boneicono.png"},
    },{
      plugin: require('C:/Users/Boneluv/Desktop/CHEMA/WEB/bone 04-10-19/boneluv.com/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Boneluv/Desktop/CHEMA/WEB/bone 04-10-19/boneluv.com/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n  \n            allSitePage {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n        }"},
    },{
      plugin: require('C:/Users/Boneluv/Desktop/CHEMA/WEB/bone 04-10-19/boneluv.com/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-102351162-2"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
