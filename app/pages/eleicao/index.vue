<script setup lang="ts">
import { eleicao } from '~/utils/siteData'

definePageMeta({ title: 'Eleições Nexus 2026' })
</script>

<template>
  <div>
    <SharedPageHero
      :eyebrow="eleicao.subtitulo"
      titulo="Eleições Nexus"
      accent="2026."
      :descricao="eleicao.descricao"
    />

    <!-- Cronograma -->
    <section class="bg-nx-light px-6 py-14 lg:px-12">
      <NxSectionHeader eyebrow="Cronograma" title="Datas oficiais." />

      <div
        class="grid bg-white border border-[#e5e5e5] rounded-[14px] overflow-hidden"
        :style="`grid-template-columns: repeat(${eleicao.cronograma.length}, 1fr)`"
      >
        <div
          v-for="(c, i) in eleicao.cronograma"
          :key="i"
          class="px-5 py-6 relative"
          :class="[
            i < eleicao.cronograma.length - 1 ? 'border-r border-[#eee]' : '',
            c.status === 'active' ? 'bg-[var(--nx-green-glow)]' : 'bg-white',
          ]"
        >
          <div class="inline-flex items-center gap-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.16em]"
            :class="c.status === 'done' ? 'text-[#aaa]' : c.status === 'active' ? 'text-nx-green-dark' : 'text-[#888]'"
          >
            <span
              class="w-2 h-2 rounded-full"
              :class="c.status === 'done' ? 'bg-[#ccc]' : c.status === 'active' ? 'bg-nx-green' : 'border border-[#ccc]'"
            />
            {{ c.status === 'done' ? 'concluído' : c.status === 'active' ? 'em curso' : 'a seguir' }}
          </div>
          <p
            class="font-display font-bold text-lg text-[#111] mt-2.5 leading-[1.15] uppercase tracking-[0.01em]"
            :class="c.status === 'done' ? 'line-through opacity-55' : ''"
          >
            {{ c.label }}
          </p>
          <p class="font-body text-[13px] text-[#888] mt-1">{{ c.data }}</p>
        </div>
      </div>
    </section>

    <!-- Chapas -->
    <section class="bg-[#fafafa] px-6 py-[72px] lg:px-12">
      <NxSectionHeader
        eyebrow="Chapas"
        title="As chapas registradas."
        subtitle="Conheça os candidatos antes da votação oficial."
      />

      <div class="grid md:grid-cols-2 gap-4">
        <article
          v-for="chapa in eleicao.chapas"
          :key="chapa.numero"
          class="bg-white border border-[#e5e5e5] rounded-[14px] p-7"
        >
          <div class="flex items-center gap-3.5">
            <div class="w-14 h-14 bg-nx-dark border border-nx-green rounded-[10px] grid place-items-center font-display font-extrabold text-2xl text-nx-green leading-none">
              {{ chapa.numero }}
            </div>
            <div>
              <p class="font-body text-[11px] font-semibold text-nx-green-dark uppercase tracking-[0.18em]">
                Chapa {{ chapa.numero }}
              </p>
              <h3 class="font-display font-extrabold text-[26px] text-[#111] uppercase leading-[1.05] mt-1">
                {{ chapa.nome }}
              </h3>
            </div>
          </div>

          <p class="font-body text-sm text-[#666] mt-4 mb-6 leading-[1.55] italic">
            "{{ chapa.lema }}"
          </p>

          <div class="flex flex-wrap gap-4">
            <div v-for="cand in chapa.candidatos" :key="cand.nome" class="flex items-center gap-2.5">
              <NxAvatar :initials="cand.iniciais" size="md" />
              <div>
                <p class="font-body text-[13px] font-semibold text-[#111]">{{ cand.nome }}</p>
                <p class="font-body text-[11px] text-[#888] uppercase tracking-[0.14em] mt-0.5">{{ cand.cargo }}</p>
              </div>
            </div>
          </div>

          <div class="flex gap-2.5 mt-6">
            <NxButton size="sm">Ver plano</NxButton>
            <NxButton variant="outline" size="sm" class="!text-[#444] !border-[#ddd]">Propostas</NxButton>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
