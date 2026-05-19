import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineNitroPlugin(() => {
  if (getApps().length > 0) return

  const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ?? resolve(process.cwd(), 'scripts', 'service-account.json')

  try {
    const sa = JSON.parse(readFileSync(saPath, 'utf-8'))
    initializeApp({ credential: cert(sa) })
    console.log('[firebase-admin] initialized ✓')
  } catch (err: any) {
    console.error('[firebase-admin] falha ao inicializar:', err.message)
    console.error('[firebase-admin] caminho tentado:', saPath)
  }
})
