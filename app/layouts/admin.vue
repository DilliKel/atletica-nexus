<script setup lang="ts">
import { useCurrentUser } from 'vuefire'
import { hasPermission, type CargoType } from '~/utils/permissions'

const user = useCurrentUser()
const route = useRoute()

const cargo = computed<CargoType | null>(() => {
  const claims = (user.value as any)?._tokenResult?.claims
  return claims?.cargo ?? null
})

const navGroups = [
  {
    label: 'Visão geral',
    items: [
      { label: 'Dashboard', to: '/admin', icon: 'grid' },
    ],
  },
  {
    label: 'Gestão',
    items: [
      { label: 'Atletas', to: '/admin/atletas', icon: 'users', perm: 'atletas:read' },
      { label: 'Estoque', to: '/admin/estoque', icon: 'box', perm: 'estoque:read' },
      { label: 'Fotos / Eventos', to: '/admin/fotos', icon: 'image', perm: 'fotos:write' },
      { label: 'Conquistas', to: '/admin/conquistas', icon: 'trophy', perm: 'conquistas:read' },
    ],
  },
  {
    label: 'Configurações',
    items: [
      { label: 'Gestões', to: '/admin/gestoes', icon: 'calendar', perm: 'usuarios:write' },
      { label: 'Modalidades', to: '/admin/modalidades', icon: 'activity', perm: 'modalidades:read' },
    ],
  },
]

const visibleGroups = computed(() =>
  navGroups.map(g => ({
    ...g,
    items: g.items.filter(i => !i.perm || !cargo.value || hasPermission(cargo.value, i.perm as any)),
  })).filter(g => g.items.length > 0)
)

const isActive = (to: string) =>
  to === '/admin' ? route.path === '/admin' : route.path.startsWith(to)
</script>

<template>
  <div class="min-h-screen bg-[#0f0f0f] text-nx-light flex">
    <!-- Sidebar -->
    <aside class="w-60 shrink-0 bg-nx-dark border-r border-[#222] flex flex-col min-h-screen sticky top-0 h-screen overflow-y-auto">
      <!-- Logo -->
      <NuxtLink to="/admin" class="flex items-center gap-3 px-5 py-5 border-b border-[#222]">
        <div class="w-7 h-7 border border-nx-green rounded grid place-items-center font-display font-extrabold text-base text-nx-green leading-none">
          N
        </div>
        <div>
          <p class="font-display font-bold text-base text-nx-light tracking-widest leading-none">NEXUS</p>
          <p class="font-body text-[10px] text-[#555] mt-0.5 uppercase tracking-[0.14em]">Painel ADM</p>
        </div>
      </NuxtLink>

      <!-- Nav -->
      <nav class="flex-1 px-3 py-4 space-y-5">
        <div v-for="group in visibleGroups" :key="group.label">
          <p class="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#444] px-2 mb-1.5">
            {{ group.label }}
          </p>
          <ul class="space-y-0.5">
            <li v-for="item in group.items" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="flex items-center gap-2.5 px-2 py-2 rounded-lg font-body text-[13px] font-medium transition-colors duration-150"
                :class="isActive(item.to)
                  ? 'bg-[var(--nx-green-glow)] text-nx-green border-l-[3px] border-nx-green pl-[5px]'
                  : 'text-[#888] hover:text-nx-light hover:bg-nx-dark-3'"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Footer sidebar -->
      <div class="px-5 py-4 border-t border-[#222]">
        <p v-if="user" class="font-body text-[11px] text-[#555] truncate">{{ user.email }}</p>
        <NuxtLink
          to="/"
          class="mt-2 flex items-center gap-2 font-body text-[12px] text-[#555] hover:text-nx-green transition-colors duration-150"
        >
          ← Ver site público
        </NuxtLink>
      </div>
    </aside>

    <!-- Conteúdo principal -->
    <div class="flex-1 flex flex-col min-w-0">
      <main class="flex-1 p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
