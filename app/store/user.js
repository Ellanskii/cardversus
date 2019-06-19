// import cloneDeep from 'clone-deep'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    // state.user = Object.assign({}, user)
    state.user = JSON.parse(JSON.stringify(user))
    // const copy = cloneDeep(user)
    // state.user = copy
  }
}
