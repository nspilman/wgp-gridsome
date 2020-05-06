<template>
  <section
    id="services"
    class="section section-img img-half section-services"
    style="min-height:150vh"
  >
    <div class="row">
      <div class="col-lg-6 col-lg-offset-6" id="service-content">
        <div class="parallax-content">
          <div class="section-title">
            <h3 class="h3 bor-underline">Services</h3>
          </div>
          <div class="section-content">
            <div class="project-list style-projt2">
              <div class="project-item" v-for="service in services.filter(service=> getContentByName(service).length > 0)" :key="service">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-pagelines"></i>
                    </span>
                    <h6 class="h6 project-title">{{service}}</h6>
                  </div>
                  <div class="project-body">
                     <div v-html="getContentByName(service)"/>
                  </div>
                  <div class="link-detail">
                    <g-link :to="`./portfolio?category=${service}`" class="btn btn-default">See More</g-link>
                    <g-link :to="`./pricing?category=${service}`" class="btn btn-default">Pricing</g-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-bg bg-parallax">
      <div class="section-bg-contain">
        <div class="sbg-img bg-4"></div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Content {
  content: allServices {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</static-query>

<script>
export default {
        props:['services'],
  computed:{
    content(){
      return this.$static.content.edges.map(edge => edge.node)
    }
  },
  methods:{
    getContentByName(name){
      try{
        return this.content.filter(service => service.title==name)[0].content
      }
      catch{
        return ''
      }
    },
  },
};
</script>
<style>

#services{
    background-image: url('../assets/images/wineguy_photos/services_background.jpeg');
    background-size: 100%;
    background-repeat: no-repeat;
}

.btn-default{
  color: #181818;
    background-color: transparent;
    border: 2px solid #181818;
}

.btn{
  order: none;
    outline: none;
    font-size: 12px;
    line-height: 37px;
    padding: 0 22.5px;
    letter-spacing: 2px;
    display: inline-block;
    background: transparent;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.btn:hover{
  background-color:black;
  color:white;
}

.project-logo > .fa{
  color:black;
}

</style>
