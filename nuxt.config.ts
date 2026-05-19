import Aura from '@primeuix/themes/aura'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components', ignore: ['atoms/**', 'molecules/**'] },
  ],

  modules: [
    '@nuxt/icon',
    '@primevue/nuxt-module',
    '@nuxt/eslint',
    'nuxt-vuefire',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  primevue: {
    importTheme: { from: '@primeuix/themes/aura', as: 'Aura' },
    options: { theme: { preset: Aura } },
  },

  routeRules: {
    '/admin/**':    { ssr: false },
    '/admin/login': { redirect: '/login' },
  },

  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'Atlética Nexus',
      adminUid: process.env.NUXT_PUBLIC_ADMIN_UID,
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER,
      instagramUrl: process.env.NUXT_PUBLIC_INSTAGRAM_URL,
    },
  },

  imports: {
    dirs: ['app/utils', 'app/shared/utils'],
    presets: [
      { from: 'vue-i18n', imports: ['useI18n'] },
      { from: 'primevue/usetoast', imports: ['useToast'] },
    ],
  },

  vuefire: {
    auth: { enabled: true, sessionCookie: false },
    config: {
      apiKey:            process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      authDomain:        process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId:         process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket:     process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId:             process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
    },
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { name: 'description', content: 'Atlética Nexus: esporte, integração e comunidade para estudantes de Ciência da Computação da UFRR e da UERR.' },
      ],
      link: [
        { rel: 'icon', href: '/imagens/n.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Inter:wght@400;500;600&display=swap' },
      ],
    },
  },
})
