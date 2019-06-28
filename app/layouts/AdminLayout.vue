<template lang="pug">
  #app
    nuxt/
</template>

<script>
import vuefire from '~/plugins/firebase/vuefire'

export default {
  beforeCreate() {
      vuefire()
  }
}
</script>

<style>
</style>
