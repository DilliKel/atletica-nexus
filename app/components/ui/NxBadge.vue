<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'presidente' | 'diretor' | 'atleta' | 'categoria' | 'glow'
  label: string
  dark?: boolean
}>(), {
  variant: 'atleta',
  dark: false,
})
</script>

<template>
  <span
    class="inline-flex items-center font-body text-[11px] font-semibold rounded-full"
    :class="[
      variant === 'categoria' ? 'p-0 uppercase tracking-[0.14em]' : 'px-[10px] py-1',
      variant === 'presidente' && !dark ? 'bg-[#eaf3de] text-[#3b6d11]' : '',
      variant === 'presidente' && dark  ? 'bg-[var(--nx-green-glow)] text-nx-green' : '',
      variant === 'diretor'    && !dark ? 'bg-[#f0f0f0] text-[#555]' : '',
      variant === 'diretor'    && dark  ? 'bg-nx-dark-3 text-[#ccc]' : '',
      variant === 'atleta'     && !dark ? 'bg-[#f5f5f5] text-[#888]' : '',
      variant === 'atleta'     && dark  ? 'bg-nx-dark-3 text-[#aaa]' : '',
      variant === 'categoria'           ? 'text-nx-green-dark' : '',
      variant === 'glow'                ? 'bg-[var(--nx-green-glow)] text-nx-green border border-nx-green' : '',
    ]"
  >
    {{ label }}
  </span>
</template>
