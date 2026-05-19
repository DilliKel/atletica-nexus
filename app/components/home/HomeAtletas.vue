<script setup lang="ts">
import { atletas, atletasFilters } from '~/utils/siteData'

const filter = ref('Todos')
const visible = computed(() => atletas.filter(a => filter.value === 'Todos' || a.grupo === filter.value).slice(0, 8))
</script>

<template>
  <section class="bg-nx-light px-6 py-20 lg:px-12">
    <NxSectionHeader
      eyebrow="Time"
      title="Quem veste a camisa."
      subtitle="Diretoria, atletas e voluntários ativos na temporada 2026."
    />

    <div class="mb-7">
      <NxPillTabs :tabs="atletasFilters" v-model="filter" />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <AtletaCard v-for="a in visible" :key="a.nome" :atleta="a" />
    </div>

    <div class="mt-8 text-center">
      <NuxtLink
        to="/atletas"
        class="inline-flex items-center gap-2 font-body font-medium text-sm text-nx-green-dark hover:text-nx-green transition-colors duration-150"
      >
        Ver todos os atletas
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </NuxtLink>
    </div>
  </section>
</template>
