<template>
  <div>
    <section class="section section-clients" :style="{padding:'10px'}">
      <div class="section-title py-1">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 text-black">
              <b>
                <h1 class="text-center" :style="{color:'black', padding: '.5em'}">TESTIMONIALS</h1>
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Quotes -->
    <section class="section section-img prallax-slide section-quotes">
      <div class="parallax-content">
        <div class="section-title">
          <div class="container">
            <div class="row"></div>
          </div>
        </div>
        <div class="section-content">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <div class="theme-slider" data-slider="single" data-pagi="true">
                  <div class="theme-slider-content">
                    <div class="theme-slider-item">
                      <div class="ts-item-title py-5"></div>
                      <div class="ts-item-body">
                        <h3 style="color:white;">5 Stars</h3>
                        <blockquote class="awquote-dbquotes">{{currentTestimonial.text}}</blockquote>
                      </div>
                      <div class="ts-item-footer">
                        <div class="author-description">
                          <span class="author-name">
                            <a href="#">{{currentTestimonial.name}}</a>
                          </span>
                        </div>
                        <div class="link-detail" style="margin:1em; color:white;">
                          <a
                            href="./clientLove.html"
                            class="btn btn-default"
                            style="color:white; border:2px solid white;"
                          >See More</a>
                        </div>
                      </div>
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
          <div class="sbg-img bg-1" :style="{backgroundImage:backgroundImage,zIndex:'1'}"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import backgroundImage from "../assets/images/wineguy_photos/wineguy_testimonials.png";
export default {
  created(){
    setInterval(
      ()=>this.updateTestimonial()
      ,5000)
  },
  computed:{
    currentTestimonial(){
      return this.testimonials[this.currentTestimonialIndex]
    }
  },
  methods:{
    updateTestimonial(){
      if(this.currentTestimonialIndex == this.testimonials.length - 1){
        this.currentTestimonialIndex = 0
      }
      else{
        this.currentTestimonialIndex = this.currentTestimonialIndex + 1;
      }
    }
  },
  data() {
    return {
      testimonials: [
        {
          text:
            'We are so pleased with Dan\'s photos of our wedding! He captured priceless action shots, worked closely with us to execute our ideas, and scoped out the scenery on sites to carefully choose photo locations. Dan paid close attention to lighting and performed beautiful editing to enhance coloring and create timeless effects in our photos... We\'ll be returning to Wine Guy Photography for all of our future life events requiring photography. We trust Dan to take the best photos for us and our family to cherish forever! We also love his friendly, down-to-earth personality and sincere willingness to go out of his way to deliver amazing photo outcomes!',
          name: 'Angie L',
        },
        {
          text:
            'Dan is the perfect combination of professional and involved. His experience led to many beautiful shots that were dreamt up by his passion for photography, rather than beautifying a point and shoot. While his skill and quality are that of a professional, he was personally invested on a much more individual level, even going out and purchasing additional materials (at no small cost) in order to fulfill a more artistic vision. Dan is a fantastic photographer and was the perfect choice for my fiancé and I. While the pictures that we requested were fantastic, it was the pictures where we let him run with it that produced the most frame-able moments. He CANNOT be beaten for the price, and we would use him again in a heartbeat',
          name: 'Katie L',
        },
        {
          text:
            'Best shoot ever. Dan was awesome. Great with helping us pick the venue and patient with us throughout the shoot. His turnaround on the pictures was really fast and they looked fantastic. Highly recommend the Wine Guy.',
          name: 'Britt W.',
        },
      ],
      backgroundImage,
      currentTestimonialIndex:0
    };
  },
};
</script>

<style>
.section-img{
  z-index: 0;
}
</style>
