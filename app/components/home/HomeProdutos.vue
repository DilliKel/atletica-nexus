<script setup lang="ts">
import { produtos, produtosFilters, whatsappNumber } from '~/utils/siteData'

const filter = ref('Todos')
const visible = computed(() => produtos.filter(p => filter.value === 'Todos' || p.categoria === filter.value).slice(0, 6))

const consultar = (nome: string) => {
  const msg = encodeURIComponent(`Olá! Tenho interesse no produto ${nome}.`)
  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank')
}
</script>

<template>
  <section class="bg-[#fafafa] px-6 py-20 lg:px-12">
    <NxSectionHeader
      eyebrow="Loja oficial"
      title="Vista a Nexus."
      subtitle="Acessórios, uniformes e peças lifestyle. Consulta direta pelo WhatsApp."
    >
      <NuxtLink
        to="/produtos"
        class="inline-flex items-center gap-1.5 font-body font-medium text-sm text-nx-green-dark hover:text-nx-green transition-colors duration-150"
      >
        Ver tudo
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </NuxtLink>
    </NxSectionHeader>

    <div class="mb-7">
      <NxPillTabs :tabs="produtosFilters" v-model="filter" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProdutoCard v-for="p in visible" :key="p.nome" :produto="p" @consultar="consultar(p.nome)" />
    </div>
  </section>
</template>
