<template>
  <div class="col-sm-4">
    <div class="card border-light mb-3" style="max-width: 20rem;">
      <div class="card-header">Welcome User</div>
      <div class="card-body">
          <fieldset>
            <legend>Please Login</legend>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
              <p style="color: red;">{{errEmail}}</p>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input v-model="password" type="password" class="form-control" placeholder="Password">
              <p style="color: red;">{{errPassword}}</p>
            </div>
            <button v-on:click="login({email, password})" class="btn btn-primary btn-sm">Login</button>
            <br> <br>
            <small class="form-text text-muted">Dont have Account? register <a href="/register">here</a> </small>
          </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LoginCard',
  data () {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapState([
      'errEmail',
      'errPassword'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style lang="css">
.card{
  width: 100%;
  height: 100%;
}
</style>
