<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand :to="{ name: 'Home' }">NixLeven</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Portfolio' }" >Portfolio</b-nav-item>
          <b-nav-item v-if="$store.state.isUserLoggedIn" :to="{ name: 'Usuario' }">Enabled</b-nav-item>
          <b-nav-item v-else disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">DE</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item :to="{ name: 'Login' }">Login</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Register' }">Register</b-dropdown-item>
            <b-dropdown-item @click="logout" >Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push({name: 'Home'})
    }
  },
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push({name: 'Login'})
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
page-header{
 margin-top: 0px;
}
</style>
