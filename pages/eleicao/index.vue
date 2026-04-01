<script setup>
definePageMeta({
  title: 'Eleições Nexus 2026',
})

const timeline = [
  { label: 'Site pronto', value: '28/03/2026' },
  { label: 'Registro de chapas até', value: '06/04/2026' },
  { label: 'Publicação do edital', value: '11/04/2026' },
  { label: 'Votação online', value: '27/04/2026 (09:00–18:00)' },
  { label: 'Posse', value: '04/05/2026' },
]

const docs = [
  { label: 'Edital (PDF)', status: 'Disponível em 11/04/2026', href: '' },
  { label: 'Regulamento eleitoral', status: 'Em breve', href: '' },
]
</script>

<template>
  <section class="grid gap-6">
    <header class="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8">
      <p class="text-xs font-black uppercase tracking-[0.28em] text-[#1d5f1b]">Página oficial</p>
      <h1 class="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
        Eleições Nexus 2026
      </h1>
      <p class="mt-4 max-w-3xl text-base leading-8 text-slate-600">
        Este é o canal central de informações sobre o processo eleitoral. Aqui serão publicados cronograma,
        instruções, documentos e o acesso à votação online.
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          href="#registrar-chapa"
          class="inline-flex items-center justify-center rounded-full bg-[#17391a] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_rgba(23,57,26,0.25)] transition hover:-translate-y-0.5"
        >
          Registrar chapa
        </a>
        <a
          href="#cronograma"
          class="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#17391a] transition hover:-translate-y-0.5"
        >
          Ver cronograma
        </a>
      </div>
    </header>

    <section id="cronograma" class="rounded-[2rem] bg-[#eff5e5] p-6 shadow-[0_24px_60px_rgba(39,67,29,0.08)] sm:p-8">
      <h2 class="text-2xl font-black text-slate-950">Cronograma</h2>
      <ul class="mt-5 grid gap-3">
        <li v-for="t in timeline" :key="t.label" class="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3">
          <span class="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-600">{{ t.label }}</span>
          <span class="text-sm font-black text-slate-950">{{ t.value }}</span>
        </li>
      </ul>
    </section>

    <section id="registrar-chapa" class="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8">
      <h2 class="text-2xl font-black text-slate-950">Registro de chapas</h2>
      <p class="mt-3 text-base leading-8 text-slate-600">
        Pra registrar a chapa, enviem a composição completa conforme o regulamento eleitoral,
        com identificação dos participantes e dados exigidos para validação.
      </p>

      <div class="mt-5 grid gap-3 rounded-2xl bg-[#eff5e5] p-5">
        <p class="text-xs font-black uppercase tracking-[0.28em] text-slate-600">Prazo</p>
        <p class="text-lg font-black text-slate-950">Até 06/04/2026</p>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          href="SEU_LINK_WHATSAPP_AQUI"
          class="inline-flex items-center justify-center rounded-full bg-[#d6ff72] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#17391a] transition hover:-translate-y-0.5"
        >
          Registrar via WhatsApp
        </a>
      </div>
    </section>

    <section class="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_rgba(39,67,29,0.14)] backdrop-blur sm:p-8">
      <h2 class="text-2xl font-black text-slate-950">Documentos</h2>
      <ul class="mt-5 grid gap-3">
        <li v-for="d in docs" :key="d.label" class="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#eff5e5] px-4 py-3">
          <div>
            <p class="text-sm font-black text-slate-950">{{ d.label }}</p>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{{ d.status }}</p>
          </div>
          <span class="text-xs font-black uppercase tracking-[0.18em] text-slate-500">link em breve</span>
        </li>
      </ul>
    </section>

    <section class="rounded-[2rem] bg-[linear-gradient(145deg,rgba(17,33,13,0.94),rgba(29,95,27,0.9))] p-6 text-white shadow-[0_24px_60px_rgba(39,67,29,0.2)] sm:p-8">
      <h2 class="text-2xl font-black">Votação online</h2>
      <p class="mt-3 text-base leading-8 text-white/75">
        A votação ficará disponível em <strong>27/04/2026</strong>, de <strong>09:00</strong> até <strong>18:00</strong>.
        (O botão será habilitado no horário.)
      </p>

      <button
        class="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white/70 backdrop-blur"
        disabled
      >
        Votação (em breve)
      </button>
    </section>
  </section>
</template>