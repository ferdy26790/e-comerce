<template>
  <div class="col-sm-4">
    <div class="card border-light mb-3" style="max-width: 20rem;">
      <div class="card-header">
        <i class="fa fa-user-circle" style="font-size:24px"></i>
        Welcome User
      </div>
      <div class="card-body">
        <p>Email: testing@gmail.com</p>
        <button type="submit" class="btn btn-primary btn-sm">
          show history
        </button>
        <br> <br>
        <button v-on:click="logout" class="btn btn-primary btn-sm">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserProfile',
  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style lang="css">
.card-body{
  text-align: left;
}
</style>
