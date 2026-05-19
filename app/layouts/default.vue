<script setup lang="ts">
const route = useRoute()
useHead({ title: () => (route.meta.title as string) || 'Atlética Nexus' })
</script>

<template>
  <div class="min-h-screen bg-nx-dark text-nx-light flex flex-col">
    <LayoutAppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
    <FloatingWhatsapp />
  </div>
</template>
