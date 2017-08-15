<template lang="html">
  <div class="container">
    <post></post>
    <div class="list-group">
      <div v-for="article in articles" class="list-group-item">
        <h4 class="list-group-item-heading">{{article.title}}</h4>
        <p class="list-group-item-text">ini ....</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Post from '@/components/Post'
export default {
  components: {
    Post
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
