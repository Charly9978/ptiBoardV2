
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
          apiKey: "AIzaSyA6be7s7w4g76Qaaq4ALtsxa7X04T_r1LQ",
          authDomain: "test-nuxt-1fa1b.firebaseapp.com",
          databaseURL: "https://test-nuxt-1fa1b.firebaseio.com",
          projectId: "test-nuxt-1fa1b",
          storageBucket: "test-nuxt-1fa1b.appspot.com",
          messagingSenderId: "108653704520",
          appId: "1:108653704520:web:090ee196f4604a1cb02f7d",
          measurementId: "G-EBMLLSKTX9"
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
