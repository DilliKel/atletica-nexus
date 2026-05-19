/**
 * Define o cargo (custom claim) de um usuário no Firebase Auth.
 *
 * Uso:
 *   npx tsx scripts/set-cargo.ts <email> <cargo>
 *
 * Exemplo:
 *   npx tsx scripts/set-cargo.ts diego@nexus.com presidente
 *
 * Cargos válidos:
 *   presidente | vice-presidente | secretario |
 *   diretor-esportes | diretor-patrimonio | diretor-marketing | designer
 *
 * Pré-requisito:
 *   Baixe a Service Account em:
 *   Firebase Console → Configurações do projeto → Contas de serviço → Gerar nova chave privada
 *   Salve como scripts/service-account.json  (já está no .gitignore)
 */

import 'dotenv/config'
import { initializeApp, cert, type ServiceAccount } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const CARGOS_VALIDOS = [
  'presidente',
  'vice-presidente',
  'secretario',
  'diretor-esportes',
  'diretor-patrimonio',
  'diretor-marketing',
  'designer',
]

const [email, cargo] = process.argv.slice(2)

if (!email || !cargo) {
  console.error('Uso: npx tsx scripts/set-cargo.ts <email> <cargo>')
  process.exit(1)
}

if (!CARGOS_VALIDOS.includes(cargo)) {
  console.error(`Cargo inválido: "${cargo}"`)
  console.error('Válidos:', CARGOS_VALIDOS.join(', '))
  process.exit(1)
}

// Carrega a service account
const serviceAccountPath = resolve(__dirname, 'service-account.json')
let serviceAccount: ServiceAccount
try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf-8')) as ServiceAccount
} catch {
  console.error('\n❌ Arquivo service-account.json não encontrado em scripts/')
  console.error('   Baixe em: Firebase Console → Configurações → Contas de serviço → Gerar nova chave privada')
  console.error('   Salve como: scripts/service-account.json\n')
  process.exit(1)
}

initializeApp({ credential: cert(serviceAccount) })

const auth = getAuth()

async function main() {
  console.log(`\n🔑 Buscando usuário: ${email}`)

  const user = await auth.getUserByEmail(email)
  console.log(`   UID: ${user.uid}`)

  await auth.setCustomUserClaims(user.uid, { cargo })
  console.log(`\n✅ Cargo "${cargo}" definido para ${email}`)
  console.log('   O usuário precisa fazer logout e login novamente para o token ser atualizado.\n')

  process.exit(0)
}

main().catch(err => {
  console.error('❌ Erro:', err.message)
  process.exit(1)
})
