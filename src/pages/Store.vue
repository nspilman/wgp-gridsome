<template>
<Layout>
      <Navbar v-if="!selectedPhotoIndex && selectedPhotoIndex != 0"/>
  <div class="main-page bg-gray padding-tn">
	<section id="store-section" class="section-blog-massory">
		<div class="container">
			<div class = "section-content">
			<span id = "storeText">
			<p>
					All of the images in my Galleries are available for sale as fine art metal or canvas prints in various sizes from small to large. To purchase a print simply click on the “Contact to Purchase” button and send me the name of the image, size you’d like, and whether you’d like metal or canvas. If you don't find the size you'd like, custom prints are available. 
			</p>
			<p>	
				Licensing of images is welcome for use in the hospitality industries and some commercial usage. For licensing information and a price quote please contact me.
		</p>	
		<p>	

					Popular sizes Metal (Standard) - 11 x 14 ($125), 16 x 20 ($235), 24 x 36 ($635), 40 x 50 ($1,550)
					Popular sizes Metal (Panorama) - 12 x 24 ($205), 20 x 40 ($600), 30 x 60 ($1,375)
	</p>		
	<p>	

					Popular sizes Canvas (Standard) - 11 x 14 ($100), 16 x 20 ($195), 24 x 36 ($455)
					Popular sizes Canvas (Panorama) - 12 x 24 ($175), 20 x 40 ($485)"

			</p>
		</span>
		<div class = "text-center">
			<a href="mailto:WINEGUYPHOTOGRAPHY@GMAIL.COM?Subject=A%20Purchase%20From%20Your%20Store">
					<button class="btn btn-default my-3">Contact to Purchase</button>
			</a>
		</div>

	</div>
			<div class="row" style="padding-top:1em">
                 <Loading v-if="isLoading" />
				<div class="col-md-12" id="store">
						<div v-if="selectedPhotoIndex || selectedPhotoIndex == 0" class ="photoModalWrapper" @click="closeImage">
							<div class = "photoModal">
							  <img :src="selectedPhoto.url" alt="photograph">	
							  <h4 style="color:white;">
								{{selectedPhotoName}}
							</h4>
							</div>
						  </div>
						  <div class="post-content store-content" id="portfolio-photos">
								<Photo @opened-image="openImage" v-for="(photo,index) in photos" :index="index" :showtitle="true" :filepath="photo.url" :key="index"/>
              </div>
					</div>
				</div>	
		</div>
	</section>
  <Footer/>
</div>
</Layout>
</template>

<script>
import Photo from "../components/Photo.vue";
import Menu from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  data() {
      return {
    photos: [],
    categoryHash: {
    category: "Nature",
    categoryName: "Nature Photos",
    category: "cityscape",
    categoryName: "Cityscape Photo"
    },
    selectedPhotoIndex: null,
    isLoading: true,
    imageLoaded: 0,
  }},
  components: {
    Photo,
    Menu,
    Footer,
  },
  async created() {
    if(process.isClient){
      this.getPhotosFromAws();
    }
    // document.addEventListener('contextmenu',e => {
    //   e.preventDefault()})
      // const copyright = document.querySelector("#copyright")
      // copyright.style.display = "block";
      // setTimeout(()=>{copyright.style.display="none"},2000)
  },
  computed:{
    selectedPhoto() {
      return this.photos[this.selectedPhotoIndex];
    },
  },
  methods: {
   toggleShow() {
      this.hideArray.forEach(tag => {
        const domElement = document.querySelector(tag);
        const currentDisplay = domElement.style.display;
        domElement.style.display = currentDisplay == "none" ? "block" : "none";
      });
    },
    openImage(e) {
      this.selectedPhotoIndex = e.index;
      this.selectedPhotoName = e.photoName;
      // this.toggleShow();
    },
    getPhotoName(url){
      return url.split('photos-store/')[1].split('.')[0].replace(/-/gi,' ')
    },
    closeImage() {
      this.selectedPhotoIndex = null;
    },
    async getPhotosFromAws() {
      if(process.isClient){
      const url = `https://py5e37ug41.execute-api.us-east-1.amazonaws.com/default/getPhotosByName?category=photos-store`;
      const resp = await axios.get(url);
      const json = await resp.data;
      for (let i = 1; i < (await json.length); i++) {
        let photo = new Object();
        photo.url = await json[i];
        photo.name = this.getPhotoName(await json[i])
        this.photos.push(photo);
      }
      this.loadPhotos();
    }
    },
    loadPhotos() {
      this.photos.forEach(photo => {
        const img = new Image();
        img.src = photo.url;
        img.onload = () => {
          this.imageLoaded++;
          if (this.imageLoaded > 10) {
            this.isLoading = false;
            return;
          }
        };
      });
    }
  }
}
</script>

<style>
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

#store-section{
  margin-top:5em;
}

@media only screen and (max-width: 900px) {
#portfolio-photos{
  display:flex;
  flex-direction: column;
  padding:2em;
}
}

</style>