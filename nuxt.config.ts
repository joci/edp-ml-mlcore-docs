// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

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
