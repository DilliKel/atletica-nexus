<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  dark?: boolean
}>(), { dark: false })
</script>

<template>
  <div class="flex justify-between items-end gap-6 mb-7 flex-wrap">
    <div>
      <p v-if="eyebrow" class="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-green-dark">
        {{ eyebrow }}
      </p>
      <h2
        class="font-display font-extrabold text-[38px] leading-[1.05] uppercase tracking-[-0.005em] mt-2.5"
        :class="dark ? 'text-nx-light' : 'text-[#111]'"
      >
        {{ title }}
      </h2>
      <p v-if="subtitle" class="font-body text-sm mt-2.5 max-w-[560px] leading-[1.55]" :class="dark ? 'text-nx-muted' : 'text-[#666]'">
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </div>
</template>
