import { getAuth } from 'firebase/auth'
import { useFirebaseApp } from 'vuefire'
import { hasPermission, type CargoType } from '~/utils/permissions'

const routePermissions: Record<string, string> = {
  '/admin/estoque':     'estoque:read',
  '/admin/fotos':       'fotos:write',
  '/admin/conquistas':  'conquistas:read',
  '/admin/atletas':     'atletas:read',
  '/admin/gestoes':     'usuarios:write',
  '/admin/modalidades': 'modalidades:read',
}

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return
  if (!to.path.startsWith('/admin') || to.path === '/admin/login') return

  const auth = getAuth(useFirebaseApp())
  await auth.authStateReady()
  const user = auth.currentUser

  if (!user) return navigateTo('/login')

  const requiredPerm = routePermissions[to.path]
  if (requiredPerm) {
    const tokenResult = await user.getIdTokenResult()
    const cargo = tokenResult.claims.cargo as CargoType | undefined
    if (!cargo || !hasPermission(cargo, requiredPerm as any)) {
      return navigateTo('/admin')
    }
  }
})
