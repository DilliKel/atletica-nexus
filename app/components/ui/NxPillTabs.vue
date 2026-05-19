<script setup lang="ts">
withDefaults(defineProps<{
  tabs: string[]
  modelValue: string
  dark?: boolean
}>(), { dark: false })

defineEmits<{ 'update:modelValue': [val: string] }>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="tab in tabs"
      :key="tab"
      type="button"
      class="px-4 py-2 rounded-full font-body text-[13px] cursor-pointer transition-all duration-150"
      :class="tab === modelValue
        ? 'font-semibold bg-nx-green text-[#0d1a04] border border-nx-green'
        : dark
          ? 'font-medium bg-transparent text-[#aaa] border border-[#333] hover:text-nx-light'
          : 'font-medium bg-white text-[#666] border border-[#ddd] hover:border-nx-green'"
      @click="$emit('update:modelValue', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>
