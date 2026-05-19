<script setup lang="ts">
import { collection, getCountFromServer } from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'

definePageMeta({ layout: 'admin', middleware: 'auth' })

const db = useFirestore()
const user = useCurrentUser()

const counts = ref({ atletas: 0, produtos: 0 })

onMounted(async () => {
  try {
    const [atletasSnap, produtosSnap] = await Promise.all([
      getCountFromServer(collection(db, 'atletas')),
      getCountFromServer(collection(db, 'produtos')),
    ])
    counts.value.atletas  = atletasSnap.data().count
    counts.value.produtos = produtosSnap.data().count
  } catch {
    // Firestore ainda não configurado — mantém zero
  }
})

const cards = computed(() => [
  { label: 'Atletas cadastrados', value: counts.value.atletas, to: '/admin/atletas' },
  { label: 'Produtos no estoque',  value: counts.value.produtos, to: '/admin/estoque' },
])
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-green">Painel ADM</p>
      <h1 class="font-display font-extrabold text-[36px] text-nx-light uppercase leading-[1.05] mt-1.5">
        Dashboard
      </h1>
      <p class="font-body text-sm text-[#666] mt-1">
        Olá, {{ user?.email?.split('@')[0] }} — bem-vindo ao painel da Nexus.
      </p>
    </div>

    <!-- Cards de resumo -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      <NuxtLink
        v-for="card in cards"
        :key="card.label"
        :to="card.to"
        class="bg-nx-dark-2 border border-[#222] rounded-xl p-5 hover:border-nx-green transition-colors duration-150 group"
      >
        <p class="font-display font-extrabold text-[40px] text-nx-green leading-none group-hover:scale-105 transition-transform duration-150 origin-left">
          {{ card.value }}
        </p>
        <p class="font-body text-[12px] font-medium uppercase tracking-[0.14em] text-[#666] mt-2">
          {{ card.label }}
        </p>
      </NuxtLink>
    </div>

    <!-- Atalhos rápidos -->
    <div>
      <p class="font-body text-xs font-semibold uppercase tracking-[0.22em] text-[#444] mb-3">Ações rápidas</p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <NuxtLink
          v-for="item in [
            { label: 'Cadastrar atleta',  to: '/admin/atletas/novo' },
            { label: 'Adicionar produto', to: '/admin/estoque/novo' },
            { label: 'Upload de fotos',   to: '/admin/fotos' },
            { label: 'Nova conquista',    to: '/admin/conquistas/nova' },
            { label: 'Gerenciar gestões', to: '/admin/gestoes' },
          ]"
          :key="item.to"
          :to="item.to"
          class="bg-nx-dark border border-[#222] rounded-xl px-4 py-3.5 font-body text-sm text-[#888] hover:text-nx-light hover:border-[#333] transition-colors duration-150"
        >
          {{ item.label }} →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
