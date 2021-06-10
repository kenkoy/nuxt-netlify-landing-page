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
  const lobbyRoutes = glob.sync('*.md', { cwd: 'assets/content/lobby-page/' })
    .map(file => `marketing/lobby-page/${path.basename(file, '.md')}`)

  return [...landingRoutes, ...lobbyRoutes]
  // return landingRoutes
}
export default {
  generate: {
    routes: dynamicMarkdownRoutes,
    exclude: ['/marketing/admin']
  },
  router: {
    extendRoutes (routes, resolve) {
      const newRoutes = [
        {
          name: 'home',
          path: '/home/',
          component: resolve(__dirname, 'pages/marketing/vjhp')
        },
        {
          name: 'slots-lobby-page',
          path: '/marketing/lobby-page/:slug',
          component: resolve(__dirname, 'pages/lobby-page/_slug/index.vue')
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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
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
    '~/assets/sass/global/externalBrandCss/verajohn_jp_main.min.css',
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
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    publicPath: process.env.NODE_ENV === 'production' ? 'marketing/_nuxt' : ''
  }
}
