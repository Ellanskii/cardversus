<template lang="pug"> 
section.card.edit-form
  form(@submit.prevent="submit")
    button.button.is-primary(type="submit")

</template>

<script>
export default {
	props: {
		document: Object
	},
	methods: {
		submit() {}
	}
}
</script>

<style>
</style>
