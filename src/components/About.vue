<template>
  <section id="about" class="section section-history">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-4 pull-right"
        >
          <div class="history-logo">
            <div class="frame-img">
              <g-image src="../assets/images/wineguy_photos/wineguy_about.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div class="col-sm-7 col-xs-12">
          <div class="section-title title-sty2">
            <h3 class="h3 bor-underline">About</h3>
          </div>
          <div class="section-content content-italic" v-html="content">
            <div class="link-detail">
              <g-link to="/portfolio" class="btn btn-default">My work</g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Content {
  content: allContent(filter: { title : {eq :"about"}} ) {
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
    content(){
      return this.$static.content.edges[0].node.content
    }
  },
};
</script>

<style>
</style>
