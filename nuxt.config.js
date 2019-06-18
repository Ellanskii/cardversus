const webpack = require('webpack')

export default {
  srcDir: 'app',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Card Versus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  css: ['~/assets/styles/index.scss'],
  styleResources: {
    scss: ['~/assets/styles/_variables.scss']
  },
  loading: { color: '#00d1b2' },
  modules: [
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
    '@nuxtjs/style-resources'
  ],
  router: {
    middleware: 'router-auth'
  },
  /*
   ** Build configuration
   */
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    DATABASEURL: process.env.DATABASEURL,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID
  },
  build: {
    publicPath: '/assets/'
  }
}
