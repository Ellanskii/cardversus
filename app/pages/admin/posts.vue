<template lang="pug">
.box
  DocumentsList(:data="posts" @edit="edit")
  b-modal(:active.sync="isEditing")
    EditForm(:document="document")
</template>

<script>
import DocumentsList from '~/components/Admin/DocumentsList'
import EditForm from '~/components/Admin/EditForm'
import { db } from '~/plugins/firebase/db'

export default {
	components: {
		DocumentsList,
		EditForm
	}
}
</script>

<style>
</style>
