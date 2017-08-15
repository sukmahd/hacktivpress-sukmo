<template lang="html">
  <div class="list-group">
    <div class="list-group-item">
      <h4 class="list-group-item-heading">Title: {{ getDetails.title }}</h4>
      <p class="list-group-item-text">Content: {{ getDetails.content }} </p>
      <p class="list-group-item-text">Category:  {{ getDetails.category }} </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['id'],
  computed: {
    getDetails () {
      return this.$store.state.article
    }
  },
  methods: {
    ...mapActions([
      'getOneArticle'
    ])
  },
  mounted () {
    this.getOneArticle(this.id)
  }
}
</script>

<style lang="css">
</style>
