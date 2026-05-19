import { collection, query, where, orderBy } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export function useAtletas(apenasAtivos = true) {
  const db = useFirestore()
  const ref = apenasAtivos
    ? query(collection(db, 'atletas'), where('ativo', '==', true), orderBy('nome'))
    : query(collection(db, 'atletas'), orderBy('nome'))

  return useCollection(ref)
}
