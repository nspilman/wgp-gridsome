<template>
  <header id="header" class="header-v2">
    <div class="header">
      <div class="header-slider" style="margin-top:0px;">
        <div
          class="photo-slider"
          data-slider="single"
          data-control="true"
          data-transition
          id="homepageSlider"
        >
          <div class="theme-slider-content">
            <div class="theme-slider-item">
              <div class="title-header white" style="top:65%">
                <h2 class="h2">Wine Guy Photography</h2>
                <p>Professional &amp; Affordable</p>
              </div>
              <div class="ts-item-background" v-html="currentPhoto">
                <div class="bg-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<static-query>
query Content {
  images: allPortfolio {
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
import axios from 'axios';

export default {
  data() {
    return {
      currentPhotoIndex: 0,
      autoplay_bool: true,
      isLoading: true,
      imageLoaded: 0,
    };
  },
  computed: {
    currentPhoto() {
      return this.homepagePhotos[this.currentPhotoIndex];
    },
    homepagePhotos(){
      return this.$static.images.edges.map(edge => edge.node).filter(edge => edge.title == 'homepage')[0].content.replace('<p>','').replace('</p>','').split(/\n/ig);
    }
  },
  methods: {
    nextPhoto() {
      if (this.currentPhotoIndex < this.homepagePhotos.length - 1) {
        this.currentPhotoIndex = this.currentPhotoIndex + 1;
      } else {
        this.currentPhotoIndex = 0;
      }
    },
    autoplay() {
      setInterval(() => {
        this.nextPhoto();
      }, 3000);
    },
  },
  mounted() {
    this.autoplay()
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const copyright = document.querySelector('#copyright');
      copyright.style.display = 'block';
      setTimeout(() => {
        copyright.style.display = 'none';
      }, 2000);
    });
    }
};
</script>

<style>

.ts-item-background img{
height: unset;
width:unset;
}

.ts-item-background img{
height: 100vh;
width:auto;
}

@media only screen and (max-width: 800px) {
.ts-item-background img{
  padding-top:5em;
width: 100%;
height: auto;
}
}
</style>
