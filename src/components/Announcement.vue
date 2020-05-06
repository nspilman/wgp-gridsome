<template>
  <div id="announcement" v-html="announcement.content"/>
</template>

<script>
export default {
    props:['announcement']
}
</script>

<style>
h1,h2,h3,h4,h5,h6{
    color:black;
}

#announcement{
    padding:5em;
}

#announcement > p {
    padding-top:2em;
}
</style>