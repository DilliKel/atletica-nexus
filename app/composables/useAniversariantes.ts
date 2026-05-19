import { collection, query, where, orderBy } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export function useAniversariantes(tipo: 'dia' | 'mes' = 'dia') {
  const db = useFirestore()
  const hoje = new Date()

  const q = tipo === 'dia'
    ? query(
        collection(db, 'atletas'),
        where('diaNascimento',  '==', hoje.getDate()),
        where('mesNascimento',  '==', hoje.getMonth() + 1),
        where('ativo', '==', true),
      )
    : query(
        collection(db, 'atletas'),
        where('mesNascimento', '==', hoje.getMonth() + 1),
        where('ativo', '==', true),
        orderBy('diaNascimento'),
      )

  return useCollection(q)
}
