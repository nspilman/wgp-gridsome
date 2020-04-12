<template>
  <div id="loading">
    <h1 class="text-center" :style="{color:'black'}">Loading</h1>
    <div id="loading-images" v-for="_ in 12" :key="_">
      <img class="loading-image" src="../assets/images/Cube-1s-200px.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>