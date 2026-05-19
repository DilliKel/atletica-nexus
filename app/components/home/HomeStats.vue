<script setup lang="ts">
import { stats } from '~/utils/siteData'
</script>

<template>
  <section class="bg-nx-dark-2 border-y border-[#222] grid" :style="`grid-template-columns: repeat(${stats.length}, 1fr)`">
    <div
      v-for="(stat, i) in stats"
      :key="stat.label"
      class="px-6 py-8"
      :class="i < stats.length - 1 ? 'border-r border-[#222]' : ''"
    >
      <div class="font-display font-extrabold text-[44px] text-nx-green leading-none tracking-[-0.01em]">
        {{ stat.value }}
      </div>
      <div class="font-body text-xs font-medium uppercase tracking-[0.12em] text-[#666] mt-2">
        {{ stat.label }}
      </div>
    </div>
  </section>
</template>
