import { useFirestore, useFirebaseAuth } from 'vuefire'
import { AppError } from '~/shared/utils/appError'

export function getFirebaseServices() {
  const db = useFirestore()
  const auth = useFirebaseAuth()
  if (!db) throw new AppError('firebase_not_configured')
  return { auth, db }
}
