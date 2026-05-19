<script setup lang="ts">
import { conquistas } from '~/utils/siteData'
</script>

<template>
  <section class="bg-nx-light px-6 py-20 lg:px-12">
    <NxSectionHeader
      eyebrow="Trajetória"
      title="Cada medalha é da turma."
      subtitle="Resultados que carimbam a presença da Nexus em campeonatos universitários."
    />

    <div class="grid md:grid-cols-2 gap-3">
      <ConquistaItem v-for="(c, i) in conquistas" :key="i" :conquista="c" />
    </div>
  </section>
</template>
