export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { name: 'description', content: 'Atlética Nexus: esporte, integração e comunidade para estudantes de Ciência da Computação da UFRR e da UERR.' },
      ],
      link: [
        { rel: 'icon', href: '/imagens/n.png' },
      ],
    },
  },
})
