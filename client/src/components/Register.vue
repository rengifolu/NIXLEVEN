<template>
  <div class="panel">
    <h1>Register</h1>
    <b-form @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input id="input-2" v-model="password" type="password" required placeholder="Enter password"></b-form-input>
      </b-form-group>

      <b-button @click="login" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <b-alert show variant="danger" class="error" v-html="error">Danger Alert</b-alert>
    </b-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      show: true,
      error: null
    }
  },
  methods: {
    // este metodo enlaza desde '@/services/AuthenticationService' y
    // desde ahi con Api.js donde esta axios
    async login () { // asyn creo que conecta con axios por que sino no uncionaba
      try {
        const response = await AuthenticationService.register({ // almacena en response
          email: this.email, // email de axios con this.email de v-model
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        if (response.status === 200 && response.data.token !== '') {
          this.$session.start()
          this.$session.set('setToken', response.data.token)
        }
        // y vamos a pagina de persona que se ha logado si es admin o empleado
        this.$router.push({name: 'Usuario'})
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.email = ''
      this.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style scope>
.panel{
    margin: auto;
    width: 50%;
}
.error{
  color:red;
}
</style>
