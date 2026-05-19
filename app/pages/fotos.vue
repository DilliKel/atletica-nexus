<script setup lang="ts">
import { galeria, galeriaFilters } from '~/utils/siteData'

definePageMeta({ title: 'Fotos — Atlética Nexus' })

const activeCategory = ref('Todas')
const visibleItems = computed(() =>
  activeCategory.value === 'Todas'
    ? galeria
    : galeria.filter(item => item.categoria === activeCategory.value)
)
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Memórias da torcida"
      titulo="Registros da temporada."
      accent="Arquivo da Nexus."
      descricao="Selecione um tipo de registro para navegar entre arena, delegação, quadra e bastidores."
    />

    <section class="bg-nx-light px-6 py-14 lg:px-12">
      <div class="flex flex-wrap justify-between items-end gap-4 mb-7">
        <NxPillTabs :tabs="galeriaFilters" v-model="activeCategory" />
        <span class="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#888]">
          {{ visibleItems.length }} fotos exibidas
        </span>
      </div>

      <div class="columns-1 sm:columns-2 xl:columns-3 gap-4">
        <article
          v-for="(item, i) in visibleItems"
          :key="i"
          class="break-inside-avoid mb-4 rounded-xl overflow-hidden border border-[#e5e5e5] bg-white"
        >
          <img
            v-if="item.src"
            :src="item.src"
            :alt="item.titulo"
            loading="lazy"
            class="w-full block object-cover"
          />
          <div
            v-else
            class="bg-[repeating-linear-gradient(135deg,#ececec_0_12px,#f3f3f3_12px_24px)] grid place-items-center"
            :style="`height: ${item.h || 260}px`"
          >
            <span class="font-mono text-[11px] text-[#888] px-2.5 py-1 bg-white/85 rounded">
              {{ item.categoria.toLowerCase() }} · foto
            </span>
          </div>
          <div class="px-3.5 py-3">
            <p class="font-body text-sm font-semibold text-[#111]">{{ item.titulo }}</p>
            <NxBadge variant="categoria" :label="item.categoria" class="mt-1.5" />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
