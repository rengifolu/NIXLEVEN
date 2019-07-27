<template>
  <div class="panel">

    <h1>Bienvenido {{this.nombre}} </h1>
    <b-card-group>
      <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
        <div slot="footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </b-card>

    </b-card-group>
  </div>
</template>
<script>
export default {
  name: 'Usuario',
  data () {
    return {
      nombre: ''
    }
  },
  methods: {
    datosUser () {
    }
  },
  created: function () {
    this.nombre = this.$store.state.user.firstName
    console.log(this.$store.state.user)
  }
}
</script>
<style scoped>
.panel{
    margin: auto;
    margin-top: 3%;
    width: 90%;
}
</style>
