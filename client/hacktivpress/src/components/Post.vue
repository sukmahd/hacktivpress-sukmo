<template lang="html">
  <div class="">
    <div class="form-group">
      <input v-model="formArt.title" type="text" class="form-control"  placeholder="Title">
    </div>
    <div class="form-group">
      <input v-model="formArt.content" type="text" class="form-control"  placeholder="Content">
    </div>
    <div class="form-group">
      <input v-model="formArt.category" type="text" class="form-control"  placeholder="Category">
    </div>
    <div class="form-group">
      <button v-if="getUser" @click="postArt" class="btn btn-warning" type="button" name="button">Post</button>
      <button v-else class="btn btn-danger" type="button" name="button" disabled>Login First</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formArt: {
        title: '',
        content: '',
        author: localStorage.getItem('id'),
        category: ''
      }
    }
  },
  computed: {
    getUser () {
      return this.$store.state.username
    },
    getAuthor () {
      return this.$store.state.id
    }
  },
  methods: {
    ...mapActions([
      'postNewArticle'
    ]),
    postArt () {
      this.postNewArticle(this.formArt)
    }
  }
}
</script>

<style lang="css">
</style>
