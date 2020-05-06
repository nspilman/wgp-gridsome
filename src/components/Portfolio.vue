<template>
    <div :id="`${category}-portfolio`" class="portfolio-wrapper">
        <h1 class="portfolio-title">{{title}}</h1>
    <Navbar v-if="!selectedPhoto" />
    <section class="section-blog-massory">
      <div class="container">
        <div class="row">
          <div v-for="string in text" v-html="string" :key="string"/>
          <div class="col-md-12" id="portfolio-photos-wrapper">
            <!-- <Loading v-if="isLoading" /> -->
            <div class="post-content">
              <div v-if="selectedPhoto" class="photoModalWrapper" @click="closeImage">
                <div class="photoModal" v-html="selectedPhoto">
              </div>
              </div>
              <div id="portfolio-photos-markdown">
              <Photo 
              @opened-image="openImage"
              v-for="(photo,index) in photosWithNames" 
              :markup="photo" 
              :index="index" 
              :key="index"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<static-query>
query {
   images: allPortfolio {
edges{
    node{
       title
       service
        path
        content
        showImageTitles
    }
}
  }
}
</static-query>

<script>
import Photo from "../components/Photo.vue";
import Footer from "../components/Footer.vue";
import axios from 'axios';

export default {
  props: ["category"],
  data() {
    return {
      photos: [],
      selectedPhoto:null,
      text:'',
      title:'',
    };
  },
  components: {
    Photo,
    Footer,
  },
  methods: {
    setSpans(image) {
      try {
        const height = image.clientHeight;
        const spans = Math.ceil(height / 10 + 4);
        image.style.gridRowEnd = 'span '+ spans 
      } catch {}
    },
    openImage(e) {
      this.selectedPhoto = e;
      this.$emit('toggleNav')
    },
    closeImage() {
      this.selectedPhoto = null;
      this.$emit('toggleNav')
    },
    getPhotoName(fullImgTagString){
      const photoName = fullImgTagString.split("/assets/static/")[1].split('.')[0].split('/').pop().replace(/-/gi,' ')
      return photoName
    }
  },
  computed: {
    photosWithNames(){
      if(this.$static.images.edges.map(edge => edge.node).filter(entry => entry.service == this.category)[0].showImageTitles){
        return this.photos.map(photo => photo + `<h4>${this.getPhotoName(photo)}</h4>`)
      }
      return this.photos;
    }
  },
  created(){
    const filteredNode = this.$static.images.edges.map(edge => edge.node).filter(entry => entry.service == this.category)[0];
    if(filteredNode){
 const content = filteredNode.content;
    this.title = filteredNode.title;
    const paragraphTags = content.replace('<p>','').replace('</p>','').split(/\n/ig);
    const imageTagIdentifiedString = "<img class=";
    const imageStrings = paragraphTags.filter(tag => tag.includes(imageTagIdentifiedString))
    const textStrings = paragraphTags.filter(tag => !tag.includes(imageTagIdentifiedString))
    this.photos = imageStrings;
    this.text = textStrings;
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

.portfolio-wrapper{
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
  width:auto;
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

#portfolio-photos-markdown{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(25vw,1fr));
  grid-auto-rows:10px;
  padding:2em;
}

.portfolio-title{
    color:black;
    text-align: center;
}

@media only screen and (max-width: 900px) {
#portfolio-photos-markdown{
  display:flex;
  flex-direction: column;
  padding:2em;
}
}
</style>
