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
  },
  computed: {
    ...mapGetters(['isLoaded'])
  }
}
</script>

<style scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: #fff;
  padding: 32px;
}

.wrapper-loaded {
  background: #fafafa;
  padding-top: 0;
}
</style>
