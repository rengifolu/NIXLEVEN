// https://bootstrap-vue.js.org/docs/components/embed/
<template>
  <div class="panel">
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/WfPu9Jrcpuk"
      allowfullscreen
      width="1024"
      height="480"
    ></b-embed>
  </div>
</template>

<script>
export default {
  name: 'Music'
}
</script>

<style scope>
.panel{
    margin: auto;
    margin-top: 3%;
    width: 90%;
}
</style>
