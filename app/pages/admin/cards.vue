<template lang="pug">
	.box
		DocumentsList(:data="cards" :columns="columns")
</template>

<script>
import DocumentsList from '~/components/Admin/DocumentsList'
import { db } from '~/plugins/firebase/db'

export default {
  components: {
    DocumentsList
  },
  data() {
    return {
			cards: [],
			columns: [
				{
					field: 'name',
					label: 'Card'
				}
			]
    }
  },
  firestore: {
    cards: db.collection('cards')
  }
}
</script>

<style>
</style>
