<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" style="">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-secondary btn-sm my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="row container card1">
      <login-card v-if="!isLogin"/>
      <user-profile v-else/>
      <banner-product/>
    </div>
    <div class="row container card1">
      <cart/>
      <product-list/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserProfile from '@/components/UserProfile'
import ProductList from '@/components/ProductList'
import Cart from '@/components/Cart'
import LoginCard from '@/components/LoginCard'
import BannerProduct from '@/components/BannerProduct'
export default {
  name: 'Home',
  computed: {
    ...mapState([
      'user',
      'isLogin'
    ])
  },
  components: {
    LoginCard,
    BannerProduct,
    Cart,
    ProductList,
    UserProfile
  }
}
</script>

<style>
.card1{
  margin-top: 20px;
}

</style>
