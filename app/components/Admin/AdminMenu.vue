<template lang="pug">
	aside.menu
		p.menu-label Collections
		ul.menu-list 
			li(v-for="(collection, index) in collections" :key="index")
				nuxt-link(:to="collection.slug") {{ collection.name }} 
</template>

<script>
export default {
  props: {
    collections: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
