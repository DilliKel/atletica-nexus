<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useFirebaseApp } from 'vuefire'

definePageMeta({ layout: false })

const email    = ref('')
const password = ref('')
const error    = ref('')
const loading  = ref(false)

const login = async () => {
  error.value   = ''
  loading.value = true
  try {
    const auth = getAuth(useFirebaseApp())
    await signInWithEmailAndPassword(auth, email.value, password.value)

    const tokenResult = await auth.currentUser!.getIdTokenResult()

    // Membro da diretoria → painel admin
    if (tokenResult.claims.cargo) {
      await navigateTo('/admin')
    } else {
      // Atleta ou usuário comum → área do atleta (a implementar)
      await navigateTo('/')
    }
  } catch (e: any) {
    const codes: Record<string, string> = {
      'auth/invalid-credential': 'E-mail ou senha incorretos.',
      'auth/user-not-found':     'Usuário não encontrado.',
      'auth/wrong-password':     'Senha incorreta.',
      'auth/too-many-requests':  'Muitas tentativas. Tente novamente mais tarde.',
    }
    error.value = codes[e.code] ?? 'Erro ao fazer login. Tente novamente.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-nx-dark flex items-center justify-center px-4">
    <div class="w-full max-w-sm">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 mb-10 justify-center">
        <div class="w-9 h-9 border-2 border-nx-green rounded-lg grid place-items-center font-display font-extrabold text-2xl text-nx-green leading-none">
          N
        </div>
        <span class="font-display font-bold text-2xl text-nx-light tracking-widest">NEXUS</span>
      </NuxtLink>

      <div class="bg-nx-dark-2 border border-[#222] rounded-2xl p-8">
        <h1 class="font-display font-extrabold text-2xl text-nx-light uppercase tracking-[0.02em]">
          Entrar na sua conta
        </h1>
        <p class="font-body text-sm text-[#666] mt-1.5">
          Atletas e membros da diretoria.
        </p>

        <form class="mt-8 space-y-4" @submit.prevent="login">
          <div>
            <label class="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#666] block mb-1.5">
              E-mail
            </label>
            <input
              v-model="email"
              type="email"
              required
              autocomplete="email"
              placeholder="seu@email.com"
              class="w-full bg-nx-dark border border-[#2a2a2a] rounded-lg px-4 py-3 font-body text-sm text-nx-light placeholder:text-[#444] focus:outline-none focus:border-nx-green transition-colors duration-150"
            />
          </div>

          <div>
            <label class="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[#666] block mb-1.5">
              Senha
            </label>
            <input
              v-model="password"
              type="password"
              required
              autocomplete="current-password"
              placeholder="••••••••"
              class="w-full bg-nx-dark border border-[#2a2a2a] rounded-lg px-4 py-3 font-body text-sm text-nx-light placeholder:text-[#444] focus:outline-none focus:border-nx-green transition-colors duration-150"
            />
          </div>

          <p v-if="error" class="font-body text-[13px] text-red-400">{{ error }}</p>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-nx-green text-[#0d1a04] font-body font-semibold text-sm px-4 py-3 rounded-lg transition-colors duration-150 hover:bg-nx-green-dark active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {{ loading ? 'Verificando…' : 'Entrar' }}
          </button>
        </form>
      </div>

      <p class="text-center mt-6">
        <NuxtLink
          to="/"
          class="font-body text-[12px] text-[#444] hover:text-nx-green transition-colors duration-150"
        >
          ← Voltar para o site
        </NuxtLink>
      </p>

    </div>
  </div>
</template>
