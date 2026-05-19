<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow: string
  titulo: string
  accent?: string
  descricao?: string
}>(), { accent: '', descricao: '' })
</script>

<template>
  <section class="bg-nx-dark px-6 py-[72px] lg:px-12 lg:pb-14">
    <span class="inline-flex items-center gap-2 px-[14px] py-1.5 bg-[var(--nx-green-glow)] border border-nx-green rounded-full font-body text-xs font-medium text-nx-green tracking-[0.04em]">
      <span class="w-1.5 h-1.5 rounded-full bg-nx-green" />
      {{ eyebrow }}
    </span>

    <h1 class="font-display font-extrabold text-[clamp(40px,6vw,64px)] leading-[1.0] uppercase text-nx-light mt-5 tracking-[-0.01em] max-w-[900px]">
      {{ titulo }}
      <span v-if="accent" class="text-nx-green"> {{ accent }}</span>
    </h1>

    <p v-if="descricao" class="font-body text-[15px] text-[#999] mt-5 max-w-[640px] leading-relaxed">
      {{ descricao }}
    </p>
  </section>
</template>
