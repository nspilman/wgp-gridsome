<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url('../assets/css/bootstrap.css');
@import url('../assets/css/font-awesome.css');
@import url('../assets/css/font.css');
@import url('../assets/css/magnific-popup.css');
@import url('../assets/css/owl.carousel.css');
@import url('../assets/css/owl.transitions.css');
@import url('../assets/css/responsive.css');
@import url('../assets/css/style.css');


</style>

<script>
export default {
watch:{
  currentRoute(){
    console.log('reloading')
    location.reload()
  }
},
  computed:{
    currentRoute(){
      return this.$router.currentRoute.path
    }
  }
}
</script>


