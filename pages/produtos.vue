<script setup>
import { products } from '~/utils/siteContent'

definePageMeta({
  title: 'Produtos — Atlética Nexus',
  heroEyebrow: 'Loja oficial',
  summary: 'Acessórios e uniformes para levar a identidade da Nexus para dentro e fora da quadra.',
})

const { openChat } = useWhatsapp()
const activeCategory = ref('Todos')

const categories = computed(() => ['Todos', ...new Set(products.map((item) => item.category))])
const visibleProducts = computed(() => {
  if (activeCategory.value === 'Todos') return products
  return products.filter((item) => item.category === activeCategory.value)
})

const buyProduct = (productName) => {
  openChat(`Olá! Tenho interesse no produto ${productName}.`)
}
</script>

<template>
  <section class="grid gap-6">
    <section class="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8">
      <p class="text-xs font-black uppercase tracking-[0.28em] text-[#1d5f1b]">Produtos</p>
      <h2 class="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Itens oficiais para vestir e espalhar a identidade da Nexus.</h2>
      <p class="mt-5 max-w-4xl text-base leading-8 text-slate-600">
        Explore por categoria e fale direto com a Atlética para confirmar disponibilidade.
      </p>
    </section>

    <section class="flex flex-wrap gap-3" aria-label="Filtro de produtos">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        class="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition sm:text-sm"
        :class="activeCategory === category ? 'bg-[#17391a] text-white shadow-[0_14px_30px_rgba(23,57,26,0.2)]' : 'bg-white/80 text-slate-600 shadow-[0_10px_24px_rgba(39,67,29,0.08)] hover:bg-[#edf3e2]'"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </section>

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="product in visibleProducts" :key="product.name" class="flex flex-col rounded-[1.75rem] border border-black/5 bg-white/85 p-5 shadow-[0_18px_42px_rgba(39,67,29,0.08)] backdrop-blur">
        <span class="mb-4 inline-flex w-fit items-center rounded-full bg-[#e9f8b9] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#17391a]">{{ product.badge }}</span>
        <div class="overflow-hidden rounded-[1.5rem] bg-[#eff5e5]">
          <img :src="product.image" :alt="product.name" class="aspect-square w-full object-cover" />
        </div>
        <div class="mt-4 flex-1">
          <h3 class="text-2xl font-black text-slate-950">{{ product.name }}</h3>
          <p class="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{{ product.category }}</p>
          <strong class="mt-4 block text-2xl font-black text-[#1d5f1b]">{{ product.price }}</strong>
        </div>
        <button type="button" class="mt-5 inline-flex items-center justify-center rounded-full bg-[#1f8b2c] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#176c22]" @click="buyProduct(product.name)">
          Consultar no WhatsApp
        </button>
      </article>
    </section>
  </section>
</template>
