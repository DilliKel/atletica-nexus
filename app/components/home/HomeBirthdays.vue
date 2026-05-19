<script setup lang="ts">
import { birthdayOfDay, birthdaysMonth } from '~/utils/siteData'
</script>

<template>
  <section class="bg-nx-dark px-6 py-[72px] lg:px-12">
    <NxSectionHeader
      eyebrow="Maio · Aniversariantes"
      title="O time celebra junto."
      subtitle="Quem está completando mais um ano dentro da família Nexus."
      :dark="true"
    />

    <div class="grid lg:grid-cols-[1fr_1.6fr] gap-6 items-stretch">
      <!-- Aniversariante do dia -->
      <div class="bg-nx-dark border border-nx-green rounded-[14px] p-6 flex items-center gap-5 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,var(--nx-green-glow),transparent_70%)] pointer-events-none" />
        <NxAvatar :initials="birthdayOfDay.iniciais" :src="birthdayOfDay.foto" size="lg" :highlighted="true" />
        <div class="flex-1 relative">
          <p class="font-body text-[11px] text-nx-green uppercase tracking-[0.18em] font-semibold mb-1">
            Aniversariante do dia
          </p>
          <p class="font-body text-lg font-semibold text-nx-light">{{ birthdayOfDay.nome }}</p>
          <p class="font-body text-xs text-nx-green mt-0.5">{{ birthdayOfDay.cargo }}</p>
        </div>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--nx-green-glow)] border border-nx-green rounded-full font-body text-[11px] font-semibold text-nx-green relative shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/>
          </svg>
          Hoje!
        </span>
      </div>

      <!-- Row do mês -->
      <div class="bg-nx-dark-2 border border-nx-dark-4 rounded-[14px] px-6 py-5 flex items-center gap-6 overflow-hidden">
        <p class="font-display font-bold text-sm text-[#666] uppercase tracking-[0.16em] [writing-mode:vertical-rl] rotate-180">
          Maio
        </p>
        <div class="flex gap-4 flex-1 overflow-x-auto">
          <div
            v-for="(p, i) in birthdaysMonth"
            :key="i"
            class="flex flex-col items-center gap-1.5 shrink-0"
          >
            <NxAvatar :initials="p.iniciais" :src="p.foto" size="md" :highlighted="p.isToday" />
            <span
              class="font-body text-[11px] font-semibold"
              :class="p.isToday ? 'text-nx-green' : 'text-[#888]'"
            >
              {{ p.dia }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
