const glob = require('glob')
const path = require('path')

const markdownPaths = ['vjlp3']

var getDynamicRoutes = function() {
  return [].concat(
    glob
      .sync('*.md', { cwd: 'assets/content/landing-page' })
      .map((filepath) => `/vjlp3/${path.basename(filepath, '.md')}`),
  )
}

function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'assets/content/landing-page' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`);
    })
  );
}

export default {
  generate: {
    routes: getDynamicRoutes
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, 'assets/content/landing-page'),
          loader: 'frontmatter-markdown-loader',
      });
    }
  }
  
}
