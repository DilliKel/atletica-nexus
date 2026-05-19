<script setup lang="ts">
import type { Produto } from '~/utils/siteData'

defineProps<{ produto: Produto }>()
defineEmits<{ consultar: [] }>()
</script>

<template>
  <article class="bg-white border border-transparent rounded-xl overflow-hidden flex flex-col transition-all duration-150 hover:border-nx-green hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
    <div class="h-[180px] bg-[#f7f7f7] border-b border-[#eee] grid place-items-center relative">
      <img
        v-if="produto.foto"
        :src="produto.foto"
        :alt="produto.nome"
        class="max-w-[78%] max-h-[78%] object-contain"
      />
      <div v-else class="absolute inset-0 bg-[repeating-linear-gradient(135deg,#f7f7f7_0_10px,#ececec_10px_20px)] grid place-items-center">
        <span class="font-mono text-[11px] text-[#888] px-2.5 py-1 bg-white/85 rounded">product shot</span>
      </div>
    </div>

    <div class="p-4 flex flex-col gap-2 flex-1">
      <NxBadge variant="categoria" :label="produto.categoria" />
      <p class="font-body text-[15px] font-semibold text-[#111]">{{ produto.nome }}</p>
      <p class="font-display font-bold text-[22px] text-[#111] mt-auto">{{ produto.preco }}</p>
      <div class="mt-1">
        <button
          type="button"
          class="w-full inline-flex items-center justify-center gap-2 font-body font-semibold text-[13px] bg-nx-green text-[#0d1a04] px-4 py-2 rounded-lg transition-colors duration-150 hover:bg-nx-green-dark active:scale-95"
          @click="$emit('consultar')"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Consultar
        </button>
      </div>
    </div>
  </article>
</template>
