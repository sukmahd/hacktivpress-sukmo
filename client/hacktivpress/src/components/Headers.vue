<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Hacktiv Press</a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" data-toggle="modal" data-target="#myModal">Login or Join</a></li>
        </ul>
      </div>
    </div>
    <modal></modal>
  </nav>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  components: {
    Modal
  }
}
</script>

<style lang="css">
</style>
