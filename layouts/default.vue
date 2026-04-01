<script setup>
const route = useRoute()
useHead({ title: () => route.meta.title || 'Atlética Nexus' })
</script>

<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(214,255,114,0.4),transparent_28%),radial-gradient(circle_at_top_right,rgba(46,143,43,0.18),transparent_32%),linear-gradient(180deg,#f8fbf3_0%,#eef5e4_52%,#f6f8f1_100%)] text-slate-900">
    <div class="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 pb-24 sm:px-6 lg:px-8">
      <AppHearder />

      <main class="pt-6">
        <slot />
      </main>

      <FloatingWhatsapp />
    </div>
  </div>
</template>
