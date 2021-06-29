import * as path from 'path'
import * as glob from 'glob'

const markdownPaths = [
  'marketing/vjlp1',
  'marketing/vjlp3',
  'marketing/vjlp4',
  'marketing/vjlp5',
  'marketing/vjlp7',
  'marketing/vjlp8',
  'marketing/iclp1',
  'marketing/iclp2',
  'marketing/iclp3'
  // 'marketing/lobby-page'
]

function dynamicMarkdownRoutes () {
  const landingRoutes = [].concat(
    ...markdownPaths.map((mdPath) => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'assets/content/landing-page/' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`)
    })
  )
  const lobbyRoutes = [].concat(
    ...['verajohn', 'intercasino'].map((brand) => {
      return glob.sync('*.md', { cwd: 'assets/content/lobby-page/' + brand + '/' })
        .map(file => `marketing/lobby-page/${brand}/${path.basename(file, '.md')}`)
    })
  )
  const gameRoutes = [].concat(
    ...markdownPaths.map((mdPath) => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'assets/content/game-page/' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`)
    })
  )

  return [...landingRoutes, ...lobbyRoutes, ...gameRoutes]
  // return landingRoutes
}

export default {
  generate: {
    routes: dynamicMarkdownRoutes,
    exclude: ['/marketing/admin']
  },
  router: {
    trailingSlashes: true,
    extendRoutes (routes, resolve) {
      const newRoutes = [
        {
          name: 'home',
          path: '/home/',
          component: resolve(__dirname, 'pages/marketing/vjhp')
        },
        {
          name: 'lobby-page-game',
          path: '/marketing/lobby-page/:brand/:game',
          component: resolve(__dirname, 'pages/lobby-page/_brand/_game/index.vue')
        }
      ]
      routes.push(...newRoutes)
    }
  },
  // mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      // { hid: 'robots', name: 'robots', content: 'noindex' }
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
    '~/assets/sass/global/externalBrandCss/animate.min.css',
    '~/assets/sass/global/externalBrandCss/fonts.css',
    '~/assets/sass/global/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/util.js',
    '~/plugins/seo.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],
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
        include: path.resolve(__dirname, 'assets/content/'),
        loader: 'frontmatter-markdown-loader'
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|md)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    publicPath: process.env.NODE_ENV === 'production' ? 'marketing/_nuxt' : ''
  }
}
