const glob = require('glob')
const path = require('path')

const markdownPaths = ['marketing/vjlp1', 'marketing/vjlp3', 'marketing/vjlp4', 'marketing/iclp1', 'marketing/iclp2', 'marketing/iclp3']

function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'assets/content/landing-page/' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`);
    })
  );
}

export default {
  generate: {
    routes: dynamicMarkdownRoutes
  },
  /*
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/home/',
        component: resolve(__dirname, 'pages/marketing/vjhp')
      })
    }
  },
  */
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'robots', name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/marketing/gamesys-favicon.ico' },
    ],
    style: [
      { cssText: '.async-hide { opacity: 0 !important }', type: 'text/css' },
    ],
    script: [
      { src: '/marketing/js/page-hide.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [ ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ga.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-MFD3NKM',
    pageTracking: true,
    layer: 'dataLayer',
    autoInit: true,
    respectDoNotTrack: true,
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-lazy-load'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'assets/content/landing-page/marketing'),
        loader: 'frontmatter-markdown-loader',
      });
    },
    publicPath: process.env.NODE_ENV == 'production' ? 'marketing/_nuxt' : ''
  }
}