const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = ['/']

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://marviuz.github.io', paths }),
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: paths,
      })
    ]
  }
}
