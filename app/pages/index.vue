<template lang="pug">
.hero.is-primary.is-medium
  .hero-body
    h1.title Hello world
    .container: .columns
      .column.is-3
        CreditCard(:card="{background: 'red'}").is-hoverable
      .column.is-3
        CreditCard(:card="{background: 'tomato'}").is-hoverable
</template>

<script>
import auth from '~/plugins/auth'
import CreditCard from '~/components/CreditCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://nuxt-firebase-sns-example.potato4d.me/'
        }
      ]
    }
  },
  components: {
    CreditCard
  },
  async mounted() {
    let user
    // if (!this.user) user = await auth()
    await Promise.all([
      // this.user
      //   ? Promise.resolve()
      //   : this.$store.dispatch('setCredential', { user: user || null }),
      this.posts.length ? Promise.resolve() : this.$store.dispatch('initPosts')
      // this.users.length ? Promise.resolve() : this.$store.dispatch('initUsers')
    ])
    this.loadComplete()
  },
  computed: {
    ...mapGetters(['user', 'users', 'posts', 'isLoaded'])
  },
  methods: {
    ...mapActions(['loadComplete'])
  }
}
</script>

<style lang="scss">
$test: red;
.hero {
  .title {
    color: $test !important;
  }
}
</style>
