<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md'
  href?: string
  full?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  full: false,
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="inline-flex items-center justify-center gap-2 font-body font-semibold rounded-lg cursor-pointer transition-all duration-150 active:scale-95 whitespace-nowrap select-none"
    :class="[
      full ? 'w-full' : '',
      size === 'sm' ? 'px-[14px] py-2 text-[13px]' : 'px-5 py-3 text-[14px]',
      variant === 'primary' ? 'bg-nx-green text-[#0d1a04] border border-nx-green hover:bg-nx-green-dark' : '',
      variant === 'outline' ? 'bg-transparent text-nx-light border border-[#444] hover:border-[#666]' : '',
      variant === 'ghost'   ? 'bg-transparent text-nx-green border border-transparent hover:text-nx-green-dark' : '',
    ]"
  >
    <slot />
  </component>
</template>
