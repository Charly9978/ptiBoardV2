
export default {
  mode: 'spa',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  router: 
    {
      middleware: 'auth'
    },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: ,
          authDomain: ,
          databaseURL: ,
          projectId: ,
          storageBucket: ,
          messagingSenderId: ,
          appId: ,
          measurementId: 
        },
        services: {
          auth: {
            persistence: 'local', // default
          
            // it is recommended to configure either a mutation or action but you can set both
            initialize: {
              //onAuthStateChangedMutation: 'auth/ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'auth/onAuthStateChangedAction'
            },
          
            ssr: false // default
          },
          firestore: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
