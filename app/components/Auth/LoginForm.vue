<template lang="pug">
form.box(v-on:submit.prevent="signIn")
  h2.title.has-text-centered.has-text-grey Ну привет
  b-field(custom-class="is-medium")
      b-input(
          type="email" 
          size="is-medium" 
          placeholder="E-mail" 
          v-model="email" 
          autocomplete="email" 
          name="email" 
          required
      )
  b-field(custom-class="is-medium")
      b-input(
          type="password" 
          size="is-medium" 
          placeholder="Пароль" 
          v-model="password" 
          autocomplete="current-password" 
          name="password" 
          required
      )
  button.button.is-primary.is-fullwidth.is-medium(
      :disabled="!formReady || isLoading" 
  ) Впустите
  p.has-text-centered.has-text-weight-bold.auth-help
    a.has-text-grey(@click="$emit('change-form', 'registration')") Регистрация
    span.has-text-grey.dot  · 
    a.has-text-grey Забыли пароль?
</template>

<script>
import auth from '~/plugins/auth.js'
export default {
  data: function() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    signIn() {
      this.isLoading = true
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.isLoading = false
          this.$router.push('editor')
        },
        err => {
          this.isLoading = false
          this.$dialog.alert({
            title: 'Не получилось войти',
            message: err.message,
            type: 'is-danger',
            hasIcon: true,
            icon: 'alert-circle-outline',
            canCancel: ['escape', 'outside']
          })
        }
      )
    }
  },
  computed: {
    formReady() {
      return this.email && this.password ? true : false
    }
  }
}
</script>
