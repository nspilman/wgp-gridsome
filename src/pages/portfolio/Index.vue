<template>
  <Layout>
    <div id="portfolio-wrapper">
    <Navbar v-if="!selectedPhoto" />
    <section class="section-blog-massory">
      <div class="container">
        <div class="row">
          <div class="col-md-12" id="portfolio-photos-wrapper">
            <Loading v-if="isLoading" />
            <div class="post-content" id="portfolio-photos" v-if="!isLoading">
              <div v-if="selectedPhoto" class="photoModalWrapper" @click="closeImage">
                <div class="photoModal">
                  <g-image :src="selectedPhoto" alt="photograph" />
                </div>
              </div>
              <Photo
                @opened-image="openImage"
                v-for="(photo,index) in photos"
                :index="index"
                :key="index"
                :filepath="photo"
              />
              <div class="loading">
                <h1>Loading</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer v-if="!selectedPhoto" />
    </div>
  </Layout>
</template>

<script>
import Photo from "../../components/Photo.vue";
import Footer from "../../components/Footer.vue";
import axios from 'axios';

export default {
  // props: ["category"],
  data() {
    return {
      photos: [],
      selectedPhotoIndex: null,
      isLoading: true,
      imageLoaded: 0,
      allCategories: {
        weddings: "photos-wedding",
        events: "photos-event",
        family: "photos-family",
        seniors: "photos-senior",
        aerial: "photos-aerial",
      },
    };
  },
  components: {
    Photo,
    Footer,
  },
  methods: {
    openImage(e) {
      this.selectedPhotoIndex = e;
    },
    closeImage() {
      this.selectedPhotoIndex = null;
    },
  },
  computed: {
    selectedPhoto() {
      return this.photos[this.selectedPhotoIndex];
    },
    category(){
      return process.isClient ? this.$route.query.category: "/";
    } 
  },
  watch:{
    category(){
      location.reload();
    }
  },
  async mounted() {
    document.addEventListener("contextmenu", e => {
      e.preventDefault();
      const copyright = document.querySelector("#copyright");
      copyright.style.display = "block";
      setTimeout(() => {
        copyright.style.display = "none";
      }, 2000);
    });
  }
};
</script>

<style>

#portfolio-wrapper{
  padding-top: 10em;  
}

.photoModalWrapper {
  width: 100vw;
  height: 100%;
  margin-left: -10vw;
  position: absolute;
  top: 0;
  display: flex;
  z-index: 1;
}
.photoModal {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  z-index: 3;
}
.photoModal img {
  max-width: 90vw;
  max-height: 90vh;
  padding-top: 2em;
}

#loading-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.loading-image {
  min-width: 33%;
}

@media only screen and (max-width: 900px) {
#portfolio-photos{
  display:flex;
  flex-direction: column;
  padding:2em;
}
}
</style>
