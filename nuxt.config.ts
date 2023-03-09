// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public : {
        apiBase:'',
        apiBaseUrl:'',
        apiBaseUrlLocal:'',
      }
    },
    ssr: false,
    app: {
      baseURL: '/edp-ml-mlcore-docs/',
      head: {
        charset: 'utf-16',
        title: 'MLDocs',
        meta: [
          // <meta name="description" content="My amazing site">
          //<meta http-equiv="Permissions-Policy" content="interest-cohort=()">
          { 'http-equiv': 'Permissions-Policy', content: 'interest-cohort=()' }
        ],
      }
    },

    modules: [
        '@nuxt/content','@nuxtjs/tailwindcss','@vueuse/nuxt',
      ],
      css: ["~/assets/css/tailwind.css"],
      content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true,
        highlight: {
        
        },
        markdown: {
          toc: {
            depth: 5,
            searchDepth: 5
          },
        }
      }
      
})
