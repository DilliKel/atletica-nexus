<script setup>
import { galleryItems } from '~/utils/siteContent'

definePageMeta({
  title: 'Fotos — Atlética Nexus',
  heroEyebrow: 'Memórias da torcida',
  summary: 'Registros dos campeonatos, bastidores e momentos que construíram a história da Nexus.',
})

const activeCategory = ref('Todas')

const categories = computed(() => ['Todas', ...new Set(galleryItems.map((item) => item.category))])
const visibleItems = computed(() => {
  if (activeCategory.value === 'Todas') return galleryItems
  return galleryItems.filter((item) => item.category === activeCategory.value)
})
</script>

<template>
  <section class="grid gap-6">
    <section class="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8">
      <p class="text-xs font-black uppercase tracking-[0.28em] text-[#1d5f1b]">Galeria</p>
      <h2 class="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Uma seleção visual dos momentos que marcaram a história recente da Nexus.</h2>
      <p class="mt-5 max-w-4xl text-base leading-8 text-slate-600">
        Filtre por tipo de registro para navegar entre arena, delegação, quadra e bastidores.
      </p>
    </section>

    <section class="flex flex-wrap gap-3" aria-label="Filtro da galeria">
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

    <p class="text-xs font-black uppercase tracking-[0.28em] text-[#1d5f1b]">{{ visibleItems.length }} fotos exibidas</p>

    <section class="columns-1 gap-4 sm:columns-2 xl:columns-3">
      <article v-for="item in visibleItems" :key="item.src" class="mb-4 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-black/5 bg-white/85 shadow-[0_18px_42px_rgba(39,67,29,0.08)]">
        <img :src="item.src" :alt="item.title" loading="lazy" class="w-full object-cover" />
        <div class="space-y-1 p-4">
          <strong class="block text-lg font-black text-slate-950">{{ item.title }}</strong>
          <span class="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{{ item.category }}</span>
        </div>
      </article>
    </section>
  </section>
</template>
