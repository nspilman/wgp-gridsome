<template>
  <div id="loading">
    <h1 class="text-center" :style="{color:'black'}">Loading</h1>
    <div class="loading-images" v-for="_ in 4" :key="_">
      <g-image class="loading-image" src="../assets/images/Cube-1s-200px.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>