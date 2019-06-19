import { auth } from '@/plugins/firebase/auth'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      store.commit('user/setUser', user)
      resolve()
    })
  })
}
