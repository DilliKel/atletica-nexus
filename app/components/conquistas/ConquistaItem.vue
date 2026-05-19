<script setup lang="ts">
import type { Conquista } from '~/utils/siteData'

defineProps<{ conquista: Conquista }>()

const medalColors: Record<string, string> = {
  '1': 'bg-[#FFD24A]',
  '2': 'bg-[#C9C9C9]',
  '3': 'bg-[#D88A4C]',
}
const medalLabels: Record<string, string> = { '1': '1º', '2': '2º', '3': '3º' }
</script>

<template>
  <div class="bg-white border border-[#e5e5e5] rounded-[10px] px-4 py-4 flex items-center gap-3.5">
    <div
      class="w-10 h-10 rounded-full grid place-items-center font-display font-extrabold text-sm text-[#1a1a1a] shrink-0"
      :class="medalColors[conquista.posicao] ?? 'bg-[#eee]'"
    >
      {{ medalLabels[conquista.posicao] ?? conquista.posicao }}
    </div>
    <div class="flex-1 min-w-0">
      <p class="font-body text-sm font-semibold text-[#111]">{{ conquista.titulo }}</p>
      <p class="font-body text-xs text-[#888] mt-0.5">{{ conquista.detalhe }}</p>
    </div>
    <p class="font-display font-bold text-lg text-[#aaa] tracking-[0.02em] shrink-0">{{ conquista.ano }}</p>
  </div>
</template>
