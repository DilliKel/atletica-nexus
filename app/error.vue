<template>
  <div class="min-h-screen bg-nx-dark flex flex-col items-center justify-center px-6 text-center">
    <img src="/imagens/n.png" alt="Nexus" class="h-16 w-16 mb-8 opacity-80" />

    <p class="text-nx-green font-barlow text-7xl font-extrabold leading-none mb-2">
      {{ error.statusCode }}
    </p>

    <h1 class="text-nx-light font-barlow text-2xl font-bold uppercase tracking-wide mb-4">
      {{ title }}
    </h1>

    <p class="text-nx-muted text-sm mb-10 max-w-xs">
      {{ error.message || 'Algo deu errado. Tente novamente.' }}
    </p>

    <button
      class="px-6 py-2.5 rounded-lg bg-nx-green text-black text-sm font-semibold transition-colors duration-150 hover:bg-nx-green-dark active:scale-95"
      @click="handleError"
    >
      Voltar ao início
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message?: string } }>()

const title = computed(() => {
  if (props.error.statusCode === 404) return 'Página não encontrada'
  return 'Erro interno'
})

const handleError = () => clearError({ redirect: '/' })
</script>
