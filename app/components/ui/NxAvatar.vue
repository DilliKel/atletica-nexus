<script setup lang="ts">
withDefaults(defineProps<{
  initials: string
  src?: string | null
  size?: 'sm' | 'md' | 'lg'
  highlighted?: boolean
}>(), {
  src: null,
  size: 'md',
  highlighted: false,
})

const dims = { sm: 'w-9 h-9 text-sm', md: 'w-12 h-12 text-lg', lg: 'w-[72px] h-[72px] text-2xl' }
</script>

<template>
  <div
    class="rounded-full grid place-items-center font-display font-bold overflow-hidden shrink-0 tracking-wide"
    :class="[
      dims[size],
      highlighted
        ? 'bg-[var(--nx-green-glow)] border border-nx-green text-nx-green'
        : 'bg-nx-dark-4 border border-transparent text-[#aaa]',
    ]"
  >
    <img v-if="src" :src="src" :alt="initials" class="w-full h-full object-cover" />
    <span v-else>{{ initials }}</span>
  </div>
</template>
