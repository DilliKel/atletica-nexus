<script setup lang="ts">
import type { Atleta } from '~/utils/siteData'

defineProps<{ atleta: Atleta }>()

const badgeVariant = (cargo: string) => {
  if (cargo === 'Presidente') return 'presidente'
  if (cargo.startsWith('Diretor')) return 'diretor'
  return 'atleta'
}
</script>

<template>
  <article class="bg-white border border-transparent rounded-xl overflow-hidden transition-all duration-150 hover:border-nx-green hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(110,200,50,0.10)] cursor-pointer shadow-[0_1px_0_rgba(0,0,0,0.02)]">
    <div class="h-[110px] bg-[#f0f0f0] grid place-items-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[repeating-linear-gradient(135deg,#eee_0_8px,#f4f4f4_8px_16px)] opacity-60" />
      <div class="relative">
        <NxAvatar :initials="atleta.iniciais" :src="atleta.foto" size="lg" />
      </div>
    </div>
    <div class="px-3.5 py-3.5 pb-4">
      <p class="font-body text-[13px] font-semibold text-[#111] truncate">{{ atleta.nome }}</p>
      <div class="mt-2">
        <NxBadge :variant="badgeVariant(atleta.cargo)" :label="atleta.cargo" />
      </div>
    </div>
  </article>
</template>
