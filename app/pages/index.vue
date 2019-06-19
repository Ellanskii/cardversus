<template lang="pug">
.hero.is-medium
  .hero-body
    h1.title Hello world
    .container: .columns
      .column.is-3
        CreditCard(:card="{background: 'red'}").is-hoverable.is-rocketbank
        h2.title Рокетбанк
        p.subtitle Дебетовая карта
      .column.is-3
        CreditCard(:card="{background: 'tomato'}").is-hoverable.is-alfabank
      .column.is-3
        CreditCard(:card="{background: 'tomato'}").is-hoverable.is-tinkoff
</template>

<script>
import CreditCard from '~/components/CreditCard'

export default {
  components: {
    CreditCard
  }
}
</script>

<style lang="scss">

</style>
