<template lang="pug">
form.box(v-on:submit.prevent="signUp")
  h2.title.has-text-centered.has-text-grey Регистрация
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
          autocomplete="new-password" 
          name="password" 
          required
      )
  button.button.is-primary.is-fullwidth.is-medium(
      :disabled="!formReady || isLoading" 
  ) Продолжить
  p.has-text-centered.has-text-weight-bold.auth-help
    a.has-text-grey(@click="$emit('change-form', 'login')") Есть аккаунт? Войдите

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
    signUp() {
      this.isLoading = true
      auth.createUserWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.isLoading = false
        },
        err => {
          this.isLoading = false
          this.$dialog.alert({
            title: 'Регистрация не удалась',
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
