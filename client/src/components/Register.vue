<template>
  <div class="container">
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Name</label>
      <input v-model="name" type="text" class="form-control" placeholder="Enter Name...">
      <p style="color: red;">{{errName}}</p>
    </div>

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Email Address</label>
      <input v-model="email" type="Email" class="form-control" placeholder="Enter Email...">
      <p style="color: red;">{{errEmail}}</p>
    </div>

    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Enter Password...">
      <p style="color: red;">{{errPassword}}</p>
    </div>
    <br> <br>
    <button v-on:click="register({name, email, password})" type="button" class="btn btn-primary btn-sm">Register</button>
    <p>Already Have an Account? please <a href="/">login</a> </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      name: this.name,
      email: this.email,
      password: this.password
    }
  },
  computed: {
    ...mapState([
      'errName',
      'errEmail',
      'errPassword'
    ])
  },
  methods: {
    ...mapActions([
      'register'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
