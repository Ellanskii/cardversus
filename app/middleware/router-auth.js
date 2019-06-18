export default function({ store, redirect, route }) {
  store.state.user != null && route.name == 'auth' ? redirect('/admin') : ''
  !store.state.user && isAdminRoute(route) ? redirect('/auth') : ''
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == '/admin')) {
    return true
  }
}
