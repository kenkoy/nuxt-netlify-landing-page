const glob = require('glob')
const path = require('path')

const markdownPaths = ['marketing/vjlp1', 'marketing/vjlp3', 'marketing/iclp1']

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans' },
      { rel: 'stylesheet', href: '/marketing/styles/lp-core/fonts.css' },
      { rel: 'stylesheet', href: '/marketing/styles/lp-core/bootstrap.min.css' }
    ],
    style: [
      { cssText: '.async-hide { opacity: 0 !important }', type: 'text/css' },
    ],
    script: [
      { type: 'text/javascript', src: '/marketing/js/lp-core/jquery-3.5.1.slim.min.js' },
      { defer: true, src: '/marketing/js/lp-core/popper.min.js' },
      { defer: true, src: '/marketing/js/lp-core/bootstrap.min.js' },
      { type: 'text/javascript', src: '/marketing/js/page-hide.js' },
      { type: 'text/javascript', src: '/marketing/js/lp-core/form.js' },
      { defer: true, type: 'text/javascript', src: '/marketing/js/lp-core/jquery.flexverticalcenter.js' },
      { type: 'text/javascript', src: '/marketing/js/lp-core/slick.min.js' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // '~/static/marketing/styles/lp-core/bootstrap.min.css',
    '~/static/marketing/styles/lp-core/animate.min.css',
    '~/static/marketing/styles/lp-core/hover-min.css',
    '~/static/marketing/styles/lp-core/slick.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/gtm',
  ],
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
  modules: ["@nuxtjs/svg"],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'assets/content/landing-page/marketing'),
        loader: 'frontmatter-markdown-loader',
      });
    },
    
    publicPath: process.env.NODE_ENV == 'production' ? 'marketing/_nuxt' : ''
  }
}