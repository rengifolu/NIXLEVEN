<template>
<div >
  <b-jumbotron >
    <template  slot = "header" > NixLeven </template>

    <template  slot = "lead" >
      The official NixLseven Website..
    </template>

    <hr  class = "my-4" >

    <p>
        Andre Lujan, más conocido como NixLeven
    </p>

    <b-button  variant = "primary"  :to="{ name: 'Go' }"> Go </b-button >
    <b-button  variant = "success"  :to="{ name: 'Music' }"> Music </b-button >
  </b-jumbotron>
</div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
