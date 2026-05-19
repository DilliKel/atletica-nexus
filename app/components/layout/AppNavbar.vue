<script setup lang="ts">
import { navLinks } from '~/utils/siteData'
const route = useRoute()
</script>

<template>
  <header class="sticky top-0 z-50 bg-nx-dark border-b-2 border-nx-green px-6 py-4 flex items-center justify-between lg:px-12">
    <NuxtLink to="/" class="flex items-center gap-3">
      <div class="w-8 h-8 border border-nx-green rounded-md grid place-items-center font-display font-extrabold text-xl text-nx-green leading-none">
        N
      </div>
      <span class="font-display font-bold text-xl text-nx-light tracking-widest">NEXUS</span>
    </NuxtLink>

    <nav class="hidden md:flex items-center gap-1">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="font-body text-[13px] font-medium px-3 py-2 rounded-md transition-colors duration-150"
        :class="route.path === link.to ? 'text-nx-green' : 'text-[#aaa] hover:text-nx-green'"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <div class="flex items-center gap-2">
      <NuxtLink
        to="/login"
        class="font-body font-medium text-sm text-[#aaa] border border-[#333] px-4 py-2 rounded-lg transition-colors duration-150 hover:border-nx-green hover:text-nx-green"
      >
        Entrar
      </NuxtLink>
      <NuxtLink
        to="/associacao"
        class="font-body font-semibold text-sm bg-nx-green text-[#0d1a04] px-4 py-2 rounded-lg transition-colors duration-150 hover:bg-nx-green-dark"
      >
        Associe-se
      </NuxtLink>
    </div>
  </header>
</template>
