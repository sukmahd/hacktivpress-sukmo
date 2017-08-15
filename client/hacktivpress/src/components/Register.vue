<template lang="html">
  <div class="col-md-6">
    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="username" type="text" class="form-control" placeholder="Username" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="password" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>
      <div class="form-group text-right">
        <div class="col-sm-12">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
