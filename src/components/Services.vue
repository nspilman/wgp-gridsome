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
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-pagelines"></i>
                    </span>
                    <h6 class="h6 project-title">WEDDINGS</h6>
                  </div>
                  <div class="project-body">
                     <span v-html="getContentByName('weddings')"/>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/weddings" class="btn btn-default">See More</a>
                    <a href="./pricing/weddings">
                      <button class="btn btn-default">Pricing</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-lightbulb-o"></i>
                    </span>
                    <h6 class="h6 project-title">SENIOR PHOTOS</h6>
                  </div>
                  <div class="project-body">
                    <span v-html="getContentByName('seniors')"/>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/seniors" class="btn btn-default">See More</a>
                    <a href="./pricing/seniors">
                      <button class="btn btn-default">Pricing</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-tint"></i>
                    </span>
                    <h6 class="h6 project-title">FAMILY AND PETS</h6>
                  </div>
                  <div class="project-body">
                     <span p v-html="getContentByName('family')"/>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/family" class="btn btn-default">See More</a>
                    <a href="./pricing/family">
                      <button class="btn btn-default">Pricing</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-fire"></i>
                    </span>
                    <h6 class="h6 project-title">SPECIAL EVENTS</h6>
                  </div>
                  <div class="project-body">
                    <span v-html="getContentByName('events')"/>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/events" class="btn btn-default">See More</a>
                    <a href="./pricing/events">
                      <button class="btn btn-default">Pricing</button>
                    </a>
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
  computed:{
    content(){
      return this.$static.content.edges.map(edge => edge.node)
    }
  },
  methods:{
    getContentByName(name){
      return this.content.filter(service => service.title==name)[0].content
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

</style>
