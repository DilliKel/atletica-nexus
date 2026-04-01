<script setup>
const { url: whatsappUrl } = useWhatsapp()
</script>

<template>
  <a
    :href="whatsappUrl"
    class="fixed bottom-5 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1f8b2c] p-3 shadow-[0_18px_40px_rgba(31,139,44,0.35)] transition duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#176c22]"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale com a Atlética Nexus no WhatsApp"
  >
    <img src="/imagens/whatsapp-icon.png" alt="Ícone do WhatsApp" class="h-10 w-10 object-contain" />
  </a>
</template>
