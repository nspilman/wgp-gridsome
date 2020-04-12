<template>
  <header id="header" class="header-v2">
    <Menu/>
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
              <div class="ts-item-background">
                <img v-if="isLoading" src="../assets/images/Cube-1s-200px.svg" />
                <img
                  v-if="!isLoading"
                  :src="currentPhoto"
                  alt="background"
                  class="img-fluid header-photo"
                />
                <div class="bg-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from './Navbar.vue';
import axios from 'axios';

export default {
  data() {
    return {
      homepagePhotos: [],
      currentPhotoIndex: 0,
      autoplay_bool: true,
      isLoading: true,
      imageLoaded: 0,
    };
  },
  components: {
    Menu,
  },
  computed: {
    currentPhoto() {
      return this.homepagePhotos[this.currentPhotoIndex];
    },
  },
  methods: {
    async getPhotosFromAws(portfolioCategory) {
      const url = `https://py5e37ug41.execute-api.us-east-1.amazonaws.com/default/getPhotosByName?category=${portfolioCategory}`;
      const resp = await axios.get(url);
      const json = await resp.data;
      for (let i = 1; i < (json.length); i += 1) {
        this.homepagePhotos.push(json[i]);
      }
      this.loadPhotos();
    },
    loadPhotos() {
      this.homepagePhotos.forEach((photo) => {
        const img = new Image();
        img.src = photo;
        img.onload = () => {
          this.imageLoaded = this.imageLoaded + 1;
          if (this.imageLoaded > 6) {
            this.isLoading = false;
          }
        };
      }, this.autoplay());
    },
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
  created() {
    this.getPhotosFromAws('photos-homepage-slider');
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const copyright = document.querySelector('#copyright');
      copyright.style.display = 'block';
      setTimeout(() => {
        copyright.style.display = 'none';
      }, 2000);
    });
  },
};
</script>

<style>
.header-photo{
   max-height: 100vh;
}
</style>
