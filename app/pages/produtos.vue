<script setup lang="ts">
import { produtos, produtosFilters, whatsappNumber } from '~/utils/siteData'

definePageMeta({ title: 'Produtos — Atlética Nexus' })

const activeCategory = ref('Todos')
const visibleProducts = computed(() =>
  activeCategory.value === 'Todos'
    ? produtos
    : produtos.filter(p => p.categoria === activeCategory.value)
)

const consultar = (nome: string) => {
  const msg = encodeURIComponent(`Olá! Tenho interesse no produto ${nome}.`)
  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank')
}
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Loja oficial"
      titulo="Itens oficiais"
      accent="para vestir a Nexus."
      descricao="Acessórios, uniformes e peças lifestyle. Consulta direta pelo WhatsApp."
    />

    <section class="bg-[#fafafa] px-6 py-14 lg:px-12">
      <div class="mb-7">
        <NxPillTabs :tabs="produtosFilters" v-model="activeCategory" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProdutoCard
          v-for="p in visibleProducts"
          :key="p.nome"
          :produto="p"
          @consultar="consultar(p.nome)"
        />
      </div>
    </section>
  </div>
</template>
