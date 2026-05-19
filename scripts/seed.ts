/**
 * Seed do Firestore — popula atletas, produtos, conquistas e galeria
 * com os dados mockados de utils/siteData.ts.
 *
 * Uso:
 *   1. Crie um arquivo .env com as variáveis Firebase
 *   2. Instale tsx:  npm install -D tsx
 *   3. Execute:      npx tsx scripts/seed.ts
 */

import 'dotenv/config'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  Timestamp,
} from 'firebase/firestore'
import {
  atletas,
  produtos,
  conquistas,
  galeria,
} from '../utils/siteData'

const app = initializeApp({
  apiKey:            process.env.FIREBASE_API_KEY,
  authDomain:        process.env.FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.FIREBASE_PROJECT_ID,
  storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.FIREBASE_APP_ID,
})

const db = getFirestore(app)

async function seedCollection<T extends Record<string, any>>(
  col: string,
  items: T[],
  getId: (item: T) => string,
) {
  console.log(`\n→ Populando "${col}" (${items.length} itens)…`)
  for (const item of items) {
    const id = getId(item)
    await setDoc(doc(collection(db, col), id), item)
    console.log(`  ✓ ${id}`)
  }
}

function slug(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function main() {
  console.log('🌱 Iniciando seed do Firestore…')

  // Atletas
  await seedCollection(
    'atletas',
    atletas.map(a => ({
      nome:          a.nome,
      cargo:         a.cargo,
      iniciais:      a.iniciais,
      grupo:         a.grupo,
      foto:          a.foto ?? null,
      ativo:         true,
      dataEntrada:   Timestamp.now(),
      modalidades:   [],
      diaNascimento: 1,
      mesNascimento: 1,
    })),
    a => slug(a.nome),
  )

  // Produtos
  await seedCollection(
    'produtos',
    produtos.map(p => ({
      nome:        p.nome,
      categoria:   p.categoria,
      preco:       parseFloat(p.preco.replace('R$ ', '').replace(',', '.')),
      foto:        p.foto ?? null,
      estoque:     10,
      disponivel:  true,
      criadoEm:    Timestamp.now(),
      atualizadoEm: Timestamp.now(),
    })),
    p => slug(p.nome),
  )

  // Conquistas
  await seedCollection(
    'conquistas',
    conquistas.map(c => ({
      titulo:      c.titulo,
      detalhe:     c.detalhe,
      posicao:     c.posicao === '1' ? '1º' : c.posicao === '2' ? '2º' : '3º',
      ano:         parseInt(c.ano),
      modalidade:  c.titulo.split('—')[1]?.trim() ?? '',
      campeonato:  c.titulo.split('—')[0]?.trim() ?? c.titulo,
      gestao:      `${c.ano}`,
    })),
    c => slug(c.titulo),
  )

  // Galeria (somente itens com src real)
  const galeriaComFoto = galeria
    .filter(g => g.src)
    .map((g, i) => ({ ...g, _id: `foto-${String(i).padStart(3, '0')}` }))

  await seedCollection(
    'eventos',
    galeriaComFoto.map(g => ({
      _id:         g._id,
      nome:        g.titulo,
      tipo:        'campeonato' as const,
      fotos:       [g.src as string],
      modalidades: [] as string[],
      categoria:   g.categoria,
      criadoEm:    Timestamp.now(),
    })),
    g => g._id,
  )

  console.log('\n✅ Seed concluído!')
  process.exit(0)
}

main().catch(err => {
  console.error('❌ Erro no seed:', err)
  process.exit(1)
})
