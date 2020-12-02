import * as path from 'path'
import * as glob from 'glob'

const markdownPaths = [
  'marketing/vjlp1',
  'marketing/vjlp3',
  'marketing/vjlp4',
  'marketing/vjlp5',
  'marketing/vjlp6',
  'marketing/iclp1',
  'marketing/iclp2',
  'marketing/iclp3'
]

function dynamicMarkdownRoutes () {
  return [].concat(
    ...markdownPaths.map((mdPath) => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'assets/content/landing-page/' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`)
    })
  )
}

export default {
  generate: {
    routes: dynamicMarkdownRoutes,
    exclude: ['/marketing/admin']
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'home',
        path: '/home/',
        component: resolve(__dirname, 'pages/marketing/vjhp')
      })
    }
  },
  // mode: 'universal',
  target: 'static',
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
      { rel: 'icon', type: 'image/x-icon', href: '/marketing/gamesys-favicon.ico' }
    ],
    style: [
      // { cssText: '.async-hide { opacity: 0 !important }', type: 'text/css' },
    ],
    script: []
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/base/animate.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://marquez.co/docs/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images'
  ],
  /**
   * Configuratiof for nuxt-optimized-images
   */
  optimizedImages: {
    optimizeImages: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-lazy-load', {
      iframes: false
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient, loaders: { vue } }) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'assets/content/landing-page/marketing'),
        loader: 'frontmatter-markdown-loader'
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    publicPath: process.env.NODE_ENV === 'production' ? 'marketing/_nuxt' : ''
  }
}
