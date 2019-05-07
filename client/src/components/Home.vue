<template>
  <div class="panel">
    <imagen-letras></imagen-letras>
    <jumbotron></jumbotron>
    <carrousel></carrousel>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="https://github.com/rengifolu" target="_blank">Design by Diego Lujan</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import carrousel from './Carrousel.vue'
import jumbotron from './Jumbotron.vue'
import ImagenResponsive from './ImagenResponsive.vue'
import ImagenLetras from './ImagenLetras.vue'
export default {
  name: 'Home',
  components: {
    carrousel,
    jumbotron,
    ImagenResponsive,
    ImagenLetras
  },
  data () {
    return {
      msg: 'NixLeven',
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel {
  margin: auto;
  margin-top: 3%;
  width: 90%;
}
h1,
h2 {
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
