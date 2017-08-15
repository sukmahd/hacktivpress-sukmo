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
      <button @click="postArt" type="button" name="button">Post</button>
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
        author: '59929902cc397e3d70b0419d',
        category: ''
      }
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
