<script setup lang="ts">
definePageMeta({ title: 'Sobre — Atlética Nexus' })
</script>

<template>
  <div>
    <SharedPageHero
      eyebrow="Quem somos"
      titulo="Atlética Nexus:"
      accent="nossa história."
      descricao="A Atlética de Ciência da Computação da UFRR e da UERR, representando estudantes dentro e fora das quadras desde 2019."
    />

    <section class="bg-nx-light px-6 py-14 lg:px-12">
      <div class="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6 max-w-6xl">
        <!-- Texto principal -->
        <div class="bg-white border border-[#e5e5e5] rounded-[20px] p-8">
          <p class="font-body text-xs font-semibold uppercase tracking-[0.28em] text-nx-green-dark">Sobre a Nexus</p>
          <h2 class="font-display font-extrabold text-[32px] text-[#111] uppercase leading-[1.05] mt-4">
            Uma Atlética criada para conectar talento, torcida e identidade.
          </h2>
          <p class="font-body text-[15px] text-[#555] mt-5 leading-relaxed">
            A Atlética Nexus é uma associação acadêmica que representa o curso de Ciência da Computação
            nas instituições UERR (Universidade Estadual de Roraima) e UFRR (Universidade Federal de Roraima),
            fortalecendo a presença estudantil no esporte, no convívio social e na vida universitária.
          </p>
          <p class="font-body text-[15px] text-[#555] mt-4 leading-relaxed">
            A entidade organiza eventos esportivos e sociais, como campeonatos internos, participação em jogos
            universitários, festas temáticas e ações de integração. Mais do que competir, a Nexus busca construir
            espírito de equipe, pertencimento e memória coletiva entre os estudantes da Computação.
          </p>
          <p class="font-body text-sm text-[#555] mt-4 bg-[#f5f9ed] rounded-xl px-4 py-3 leading-relaxed">
            Fundada em 2019 pela turma de calouros 2019.2 da UFRR, a Atlética iniciou sua trajetória no curso
            e, após sua primeira participação no JIA em 2020, consolidou a união com a UERR, ampliando sua base e representatividade.
          </p>
        </div>

        <!-- Missão e stats -->
        <div class="flex flex-col gap-4">
          <div class="bg-nx-dark rounded-[20px] p-8 text-nx-light flex-1">
            <p class="font-body text-xs font-semibold uppercase tracking-[0.28em] text-nx-green">Missão</p>
            <p class="font-body text-lg mt-4 leading-relaxed text-white/85">
              Fortalecer o espírito esportivo e acadêmico entre os estudantes, criando um ambiente de
              união, crescimento e memória coletiva para quem faz parte da graduação.
            </p>
          </div>

          <div class="bg-nx-dark-2 border border-[#222] rounded-[20px] p-6 grid grid-cols-2 gap-4">
            <div>
              <p class="font-display font-extrabold text-[40px] text-nx-green leading-none">2019</p>
              <p class="font-body text-xs font-medium uppercase tracking-[0.12em] text-[#666] mt-2">Fundação</p>
            </div>
            <div>
              <p class="font-display font-extrabold text-[40px] text-nx-green leading-none">120+</p>
              <p class="font-body text-xs font-medium uppercase tracking-[0.12em] text-[#666] mt-2">Associados</p>
            </div>
            <div>
              <p class="font-display font-extrabold text-[40px] text-nx-green leading-none">14</p>
              <p class="font-body text-xs font-medium uppercase tracking-[0.12em] text-[#666] mt-2">Modalidades</p>
            </div>
            <div>
              <p class="font-display font-extrabold text-[40px] text-nx-green leading-none">21</p>
              <p class="font-body text-xs font-medium uppercase tracking-[0.12em] text-[#666] mt-2">Conquistas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
