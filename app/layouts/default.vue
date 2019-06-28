<template lang="pug">
  #app
    nuxt/
    TheFooter
</template>

<script>
import TheFooter from '~/components/TheFooter'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheFooter
  }
}
</script>

<style>
</style>
