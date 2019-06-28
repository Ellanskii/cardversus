<template lang="pug">
    .hero.is-fullheight.is-bold.is-primary
        .hero-body
            .container
                .columns.is-centered
                    .column.is-6-tablet.is-4-desktop.is-4-fullhd
                      transition(name="fade" mode="out-in")
                            login-form(v-if="currentForm === 'login'" @change-form="currentForm=$event")
                            registration-form(v-else-if="currentForm === 'registration'" @change-form="currentForm=$event")
                            restore-form(v-else-if="currentForm === 'restore'" @change-form="currentForm=$event")
</template>

<script>
import LoginForm from '~/components/Auth/LoginForm'
import RegistrationForm from '~/components/Auth/RegistrationForm'
export default {
  components: {
    LoginForm,
    RegistrationForm
  },
  transition: 'fade',
  data() {
    return {
      currentForm: 'login'
    }
  }
}
</script>

<style lang="scss">
.dot {
  padding: 0 0.5em;
}
.auth-help {
  margin-top: 1rem;
  margin-bottom: 0.375rem;
}
</style>