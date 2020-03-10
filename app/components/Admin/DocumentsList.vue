<template lang="pug">
div
  b-table(
    :data="documents"
    :columns="columns"
    :selected.sync="selected" 
    focusable
  )
    template(slot="footer")
      button.button(type="button" @click="$emit('edit')") Edit
    template(slot="empty")
      section.section
        p.has-text-centered.has-text-grey Nothing here

  b-modal(:active.sync="isEditing")
    EditForm(:document="document")
</template>

<script>
import { db } from '~/plugins/firebase/db'

export default {
	props: {
		collectionName: {
			type: String,
			required: true
		},
		columns: {
			type: Array,
			default() {
				return [
					{
						field: 'title',
						label: 'Title'
					},
					{
						field: 'published',
						label: 'Published'
					}
				]
			}
		}
	},
	data() {
		return {
			selected: {},
			isEditing: false
		}
	},
	methods: {
		editSelected() {
			this.isEditing = true
		}
	},
	created() {
		this.$bind('documents', db.collection(this.collectionName))
	}
}
</script>

<style>
</style>
