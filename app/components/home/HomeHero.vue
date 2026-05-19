<script setup lang="ts">
</script>

<template>
  <section class="bg-nx-dark px-6 py-20 lg:px-12 lg:py-24 grid lg:grid-cols-[minmax(0,1.2fr)_auto] gap-16 items-center">
    <div>
      <span class="inline-flex items-center gap-2 px-[14px] py-1.5 bg-[var(--nx-green-glow)] border border-nx-green rounded-full font-body text-xs font-medium text-nx-green tracking-[0.04em]">
        <span class="w-1.5 h-1.5 rounded-full bg-nx-green" />
        Atlética de Ciência da Computação
      </span>

      <h1 class="font-display font-extrabold text-[clamp(52px,8vw,84px)] leading-[0.95] uppercase text-nx-light mt-6 tracking-[-0.01em]">
        Esporte, identidade<br />
        <span class="text-nx-green block">e comunidade.</span>
      </h1>

      <p class="font-body text-base text-[#999] mt-7 max-w-[480px] leading-relaxed">
        Representamos os estudantes de Ciência da Computação da UFRR e UERR
        em quadra, em campo e em todos os campeonatos que cabem na nossa rotina.
      </p>

      <div class="flex gap-3 mt-9">
        <NuxtLink
          to="/associacao"
          class="inline-flex items-center gap-2 font-body font-semibold text-sm bg-nx-green text-[#0d1a04] px-5 py-3 rounded-lg transition-colors duration-150 hover:bg-nx-green-dark active:scale-95"
        >
          Associe-se
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </NuxtLink>
        <NuxtLink
          to="/produtos"
          class="inline-flex items-center font-body font-semibold text-sm bg-transparent text-nx-light border border-[#444] px-5 py-3 rounded-lg transition-colors duration-150 hover:border-[#666] active:scale-95"
        >
          Ver produtos
        </NuxtLink>
      </div>
    </div>

    <div class="w-[280px] h-[280px] border border-[#222] rounded-[24px] bg-nx-dark-2 grid place-items-center relative overflow-hidden mx-auto lg:mx-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,var(--nx-green-glow),transparent_60%)]" />
      <img src="/imagens/logo.png" alt="Atlética Nexus" class="w-[200px] h-[200px] object-contain relative z-[1]" />
    </div>
  </section>
</template>
