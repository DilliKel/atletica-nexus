<script setup lang="ts">
import { navLinks, instagramUrl } from '~/utils/siteData'
</script>

<template>
  <footer class="bg-nx-dark border-t border-[#222] px-6 py-10 lg:px-12">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <div class="w-7 h-7 border border-nx-green rounded grid place-items-center font-display font-extrabold text-base text-nx-green leading-none">
          N
        </div>
        <span class="font-display font-bold text-base text-nx-green tracking-widest">NEXUS</span>
      </div>

      <p class="font-body text-xs text-[#555]">
        © 2026 Atlética Nexus · Ciência da Computação UFRR / UERR
      </p>

      <div class="flex gap-5">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-body text-[13px] text-[#555] transition-colors duration-150 hover:text-nx-green"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-body text-[13px] text-[#555] transition-colors duration-150 hover:text-nx-green"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
</template>
