<script setup>
import { membershipPlans } from '~/utils/siteContent'

definePageMeta({
  title: 'Associação — Atlética Nexus',
  heroEyebrow: 'Faça parte da base',
  summary: 'Planos com benefícios recorrentes, brindes e acesso prioritário às ações da Atlética.',
})

const { openChat } = useWhatsapp()

const acquirePlan = (planName) => {
  openChat(`Olá! Quero adquirir o ${planName}.`)
}
</script>

<template>
  <section class="grid gap-6">
    <section class="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8">
      <p class="text-xs font-black uppercase tracking-[0.28em] text-[#1d5f1b]">Associação</p>
      <h2 class="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Planos pensados para quem quer participar mais, pagar menos e receber benefícios reais.</h2>
      <p class="mt-5 max-w-4xl text-base leading-8 text-slate-600">
        Escolha um formato de entrada e fale com a Nexus para finalizar a associação.
      </p>
    </section>

    <section class="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
      <article v-for="plan in membershipPlans" :key="plan.name" class="flex flex-col rounded-[1.75rem] border border-black/5 bg-white/85 p-5 shadow-[0_18px_42px_rgba(39,67,29,0.08)] backdrop-blur">
        <span class="mb-4 inline-flex w-fit items-center rounded-full bg-[#e9f8b9] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#17391a]">{{ plan.tag }}</span>
        <div>
          <h3 class="text-2xl font-black text-slate-950">{{ plan.name }}</h3>
          <strong class="mt-3 block text-3xl font-black text-[#1d5f1b]">{{ plan.price }}</strong>
        </div>

        <ul class="mt-5 flex-1 space-y-3 text-sm leading-7 text-slate-600">
          <li v-for="benefit in plan.benefits" :key="benefit" class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1f8b2c]"></span>
            <span>{{ benefit }}</span>
          </li>
        </ul>

        <button type="button" class="mt-6 inline-flex items-center justify-center rounded-full bg-[#1f8b2c] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#176c22]" @click="acquirePlan(plan.name)">
          Adquirir plano
        </button>
      </article>
    </section>
  </section>
</template>
