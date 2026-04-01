<script setup>
definePageMeta({
  title: 'Atlética Nexus',
  heroEyebrow: 'Atlética de Ciência da Computação',
  summary: 'Esporte, integração e comunidade para estudantes da UFRR e da UERR.',
})

const election = {
  title: 'Eleições Nexus 2026',
  subtitle: 'Canal oficial • votação online',
  description:
    'Acompanhe o cronograma, regras e documentos. Inscrição de chapas até 06/04/2026 e votação em 27/04/2026.',
  dates: [
    { label: 'Chapas até', value: '06/04/2026' },
    { label: 'Edital', value: '11/04/2026' },
    { label: 'Votação', value: '27/04/2026' },
    { label: 'Posse', value: '04/05/2026' },
  ],
}
</script>

<template>
  <section class="grid gap-8">
    <!-- CARD ELEIÇÕES -->
    <section
      class="rounded-[2rem] border border-black/5 bg-white/85 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8"
      aria-label="Eleições Nexus 2026"
    >
      <div class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:items-center">
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center rounded-full bg-[#e9f8b9] px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-[#17391a]">
              {{ election.subtitle }}
            </span>
            <span class="inline-flex items-center rounded-full bg-[#eff5e5] px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
              {{ election.title }}
            </span>
          </div>

          <p class="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
            Acompanhe o processo eleitoral por aqui.
          </p>

          <p class="mt-3 max-w-3xl text-base leading-8 text-slate-600">
            {{ election.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-3">
            <NuxtLink
              to="/eleicao"
              class="inline-flex items-center gap-2 rounded-full bg-[#17391a] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_rgba(23,57,26,0.25)] transition hover:-translate-y-0.5"
            >
              Ver cronograma
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/eleicao#registrar-chapa"
              class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#17391a] transition hover:-translate-y-0.5"
            >
              Registrar chapa
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 5v14" /><path d="M5 12h14" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="grid gap-3 rounded-[1.75rem] bg-[#eff5e5] p-5 sm:p-6">
          <p class="text-xs font-black uppercase tracking-[0.28em] text-slate-600">Datas principais</p>
          <ul class="grid gap-3">
            <li
              v-for="d in election.dates"
              :key="d.label"
              class="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3"
            >
              <span class="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-600">{{ d.label }}</span>
              <span class="text-sm font-black text-slate-950">{{ d.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Sobre -->
    <section id="sobre" class="grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.95fr)]">
      <div class="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8">
        <p class="text-xs font-black uppercase tracking-[0.28em] text-[#1d5f1b]">Sobre a Nexus</p>
        <h2 class="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl xl:text-5xl">
          Uma Atlética criada para conectar talento, torcida e identidade.
        </h2>
        <p class="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          A Atlética Nexus é uma associação acadêmica que representa o curso de Ciência da Computação
          nas instituições UERR (Universidade Estadual de Roraima) e UFRR (Universidade Federal de Roraima),
          fortalecendo a presença estudantil no esporte, no convívio social e na vida universitária.
        </p>
        <p class="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          A entidade organiza eventos esportivos e sociais, como campeonatos internos, participação em jogos
          universitários, festas temáticas e ações de integração. Mais do que competir, a Nexus busca construir
          espírito de equipe, pertencimento e memória coletiva entre os estudantes da Computação.
        </p>
        <p class="mt-4 max-w-3xl rounded-2xl bg-[#eff5e5] px-4 py-3 text-sm leading-7 text-slate-700 sm:text-base">
          Fundada em 2019 pela turma de calouros 2019.2 da UFRR, a Atlética iniciou sua trajetória no curso
          e, após sua primeira participação no JIA em 2020, consolidou a união com a UERR, ampliando sua base e sua representatividade.
        </p>
      </div>

      <div class="rounded-[2rem] bg-[linear-gradient(160deg,#17391a,#245f1f)] p-6 text-[#f4ffe8] shadow-[0_24px_60px_rgba(39,67,29,0.22)] sm:p-8">
        <p class="text-xs font-black uppercase tracking-[0.28em] text-[#d6ff72]">Missão</p>
        <p class="mt-4 text-lg leading-8 text-white/85">
          Fortalecer o espírito esportivo e acadêmico entre os estudantes, criando um ambiente de
          união, crescimento e memória coletiva para quem faz parte da graduação.
        </p>
      </div>
    </section>

  </section>
</template>