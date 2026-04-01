<script setup>
import { navLinks } from '~/utils/siteContent'
</script>

<template>
  <nav class="overflow-x-auto rounded-full bg-[rgba(17,33,13,0.92)] p-2 shadow-[0_24px_60px_rgba(39,67,29,0.14)]" aria-label="Navegação principal">
    <div class="flex min-w-max items-center gap-2">
      <NuxtLink to="/" custom v-slot="{ href, navigate, isExactActive }">
        <a
          :href="href"
          @click="navigate"
          class="grid h-12 w-12 shrink-0 place-items-center rounded-full transition duration-200"
          :class="isExactActive ? 'bg-[linear-gradient(135deg,#d6ff72,#fff59b)]' : 'bg-white/8 hover:-translate-y-0.5 hover:bg-white/12'"
          aria-label="Voltar para a página inicial"
        >
          <img src="/imagens/logo.png" alt="Atlética Nexus" class="h-8 w-8 object-contain" />
        </a>
      </NuxtLink>

      <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" custom v-slot="{ href, navigate, isActive, isExactActive }">
        <a
          :href="href"
          @click="navigate"
          class="rounded-full px-4 py-3 text-sm font-black tracking-[0.18em] uppercase transition duration-200"
          :class="(link.to === '/' ? isExactActive : isActive) ? 'bg-[linear-gradient(135deg,#d6ff72,#fff59b)] text-[#12200c]' : 'text-white/80 hover:-translate-y-0.5 hover:text-white'"
        >
          {{ link.label }}
        </a>
      </NuxtLink>
    </div>
  </nav>
</template>