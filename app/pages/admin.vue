<template lang="pug">
.section
	.columns
		.column.is-3
			AdminMenu(:collections="collections")
		.column.is-9
			nuxt-child
</template>

<script>
import AdminMenu from '~/components/Admin/AdminMenu'

export default {
	layout: 'AdminLayout',
  components: {
    AdminMenu
  },
  data() {
    return {
      collections: [
        {
          name: 'Banks',
          slug: 'banks'
        },
        {
          name: 'Cards',
          slug: 'cards'
        },
        {
          name: 'Posts',
          slug: 'posts'
        }
      ]
    }
  }
}
</script>

<style>
</style>
