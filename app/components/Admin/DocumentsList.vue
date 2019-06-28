<template lang="pug">
	b-table(
		:data="data"
		:columns="columns"
	)
		template(slot="empty")
			section.section
				p.has-text-centered.has-text-grey Nothing here
</template>

<script>
export default {
  props: {
    data: Array,
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
  }
}
</script>

<style>
</style>
