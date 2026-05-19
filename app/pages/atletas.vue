<script setup lang="ts">
import { atletas, atletasFilters } from '~/utils/siteData'

definePageMeta({ title: 'Atletas — Atlética Nexus' })

const filter = ref('Todos')
const visible = computed(() =>
  atletas.filter(a => filter.value === 'Todos' || a.grupo === filter.value)
)

const counts = computed(() =>
  Object.fromEntries(
    atletasFilters.map(g => [g, g === 'Todos' ? atletas.length : atletas.filter(a => a.grupo === g).length])
  )
)
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Time"
      titulo="O elenco da Nexus 2026."
      accent="A casa toda."
      descricao="Diretoria, atletas titulares e voluntários ativos na temporada — filtre por modalidade."
    />

    <section class="bg-nx-light px-6 py-14 lg:px-12">
      <div class="flex flex-wrap justify-between items-end gap-4 mb-7">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="f in atletasFilters"
            :key="f"
            type="button"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-[13px] cursor-pointer transition-all duration-150"
            :class="f === filter
              ? 'font-semibold bg-nx-green text-[#0d1a04] border border-nx-green'
              : 'font-medium bg-white text-[#666] border border-[#ddd] hover:border-nx-green'"
            @click="filter = f"
          >
            {{ f }}
            <span
              class="text-[11px] px-[7px] py-0.5 rounded-full font-semibold"
              :class="f === filter ? 'bg-[rgba(13,26,4,0.15)] text-[#0d1a04]' : 'bg-[#f3f3f3] text-[#999]'"
            >
              {{ counts[f] }}
            </span>
          </button>
        </div>
        <span class="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#888]">
          {{ visible.length }} pessoas
        </span>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AtletaCard v-for="a in visible" :key="a.nome" :atleta="a" />
      </div>
    </section>
  </div>
</template>
