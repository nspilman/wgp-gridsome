<template>
  <div id="announcement" v-html="markdown"/>
</template>

<static-query>
query Content {
  content: allContent(filter: { title : {eq :"announcement"}} ) {
    edges {
      node {
        id
        title
        path
        content
      }
    }
  }
}
</static-query>

<script>
export default {
    computed:{
        markdown(){
            console.log(this.$static)
            return this.$static.content.edges[0].node.content
        }
    },
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