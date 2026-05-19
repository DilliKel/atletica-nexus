<script setup lang="ts">
import { planos, whatsappNumber } from '~/utils/siteData'

definePageMeta({ title: 'Associação — Atlética Nexus' })

const adquirir = (nome: string) => {
  const msg = encodeURIComponent(`Olá! Quero adquirir o ${nome}.`)
  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank')
}

const falarNexus = () => {
  const msg = encodeURIComponent('Olá, quero falar sobre associação.')
  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank')
}
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Faça parte da base"
      titulo="Associe-se à Nexus"
      accent="e viva a Atlética."
      descricao="Planos com benefícios recorrentes, brindes e acesso prioritário às ações da Atlética."
    />

    <section class="bg-nx-light px-6 py-14 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <article
          v-for="plano in planos"
          :key="plano.nome"
          class="flex flex-col rounded-[14px] p-6 relative overflow-hidden"
          :class="plano.destaque
            ? 'bg-nx-dark border border-nx-green text-nx-light'
            : 'bg-white border border-[#e5e5e5] text-[#111]'"
        >
          <div v-if="plano.destaque" class="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,var(--nx-green-glow),transparent_50%)] pointer-events-none" />

          <span
            class="relative inline-flex items-center self-start px-2.5 py-1 rounded-full font-body text-[11px] font-semibold mb-4"
            :class="plano.destaque
              ? 'bg-[var(--nx-green-glow)] text-nx-green border border-nx-green'
              : 'bg-[#f0f6e6] text-nx-green-dark'"
          >
            {{ plano.tag }}
          </span>

          <h3
            class="relative font-display font-bold text-[22px] uppercase leading-[1.1] tracking-[0.01em]"
            :class="plano.destaque ? 'text-nx-light' : 'text-[#111]'"
          >
            {{ plano.nome }}
          </h3>

          <p
            class="relative font-display font-extrabold text-[40px] leading-none mt-3"
            :class="plano.destaque ? 'text-nx-green' : 'text-[#111]'"
          >
            {{ plano.preco }}
          </p>

          <ul class="relative mt-5 flex-1 flex flex-col gap-2.5">
            <li
              v-for="b in plano.beneficios"
              :key="b"
              class="flex gap-2.5 font-body text-[13px] leading-[1.55]"
              :class="plano.destaque ? 'text-[#ccc]' : 'text-[#555]'"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-nx-green mt-2 shrink-0" />
              <span>{{ b }}</span>
            </li>
          </ul>

          <div class="relative mt-6">
            <button
              type="button"
              class="w-full inline-flex items-center justify-center gap-2 font-body font-semibold text-sm bg-nx-green text-[#0d1a04] px-4 py-3 rounded-lg transition-colors duration-150 hover:bg-nx-green-dark active:scale-95"
              @click="adquirir(plano.nome)"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Adquirir plano
            </button>
          </div>
        </article>
      </div>

      <!-- CTA de dúvidas -->
      <div class="mt-14 p-8 bg-nx-dark rounded-[16px] grid lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
        <div>
          <p class="font-body text-[11px] text-nx-green uppercase tracking-[0.22em] font-semibold">Tira-dúvidas</p>
          <h3 class="font-display font-extrabold text-[32px] text-nx-light uppercase leading-[1.05] mt-3">
            Ainda em dúvida sobre qual plano combina mais?
          </h3>
          <p class="font-body text-sm text-nx-muted mt-3 leading-relaxed max-w-[540px]">
            Fale com a Diretoria pelo WhatsApp — explicamos os benefícios e ajudamos a escolher.
          </p>
        </div>
        <div class="flex justify-start lg:justify-end">
          <button
            type="button"
            class="inline-flex items-center gap-2 font-body font-semibold text-sm bg-nx-green text-[#0d1a04] px-5 py-3 rounded-lg transition-colors duration-150 hover:bg-nx-green-dark active:scale-95"
            @click="falarNexus"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Falar com a Nexus
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
