<template>
<Layout>
      <Navbar/>
  <div class="main-page bg-gray padding-tn">
	<section class="section-blog-massory">
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
						<div v-if="selectedPhoto" class ="photoModalWrapper" @click="closeImage">
							<div class = "photoModal">
							  <img :src="selectedPhoto" alt="photograph">	
							  <h4 style="color:white;">
								{{selectedPhotoName}}
							</h4>
							</div>
						  </div>
						  <div class="post-content store-content" id="portfolio-photos">
								<Photo @opened-image="openImage" v-for="(photo,index) in photos" :index="index" :filepath="photo.url" :key="index"/>
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
    selectedPhoto: null,
    selectedPhotoName: null,
    isLoading: true,
    imageLoaded: 0,
  }},
  components: {
    Photo,
    Menu,
    Footer,
  },
  computed: {
    
  },
  async created() {
    // document.addEventListener('contextmenu',e => {
    //   e.preventDefault()})
      this.getPhotosFromAws();
      // const copyright = document.querySelector("#copyright")
      // copyright.style.display = "block";
      // setTimeout(()=>{copyright.style.display="none"},2000)
  },
  methods: {
    openImage(e) {
      this.selectedPhoto = e.filepath;
      this.selectedPhotoName = e.photoName;
    },
    getPhotoName(url){
      return url.split('photos-store/')[1].split('.')[0].replace(/-/gi,' ')
    },
    closeImage() {
      this.selectedPhoto = null;
    },
    async getPhotosFromAws() {
      const url = `https://py5e37ug41.execute-api.us-east-1.amazonaws.com/default/getPhotosByName?category=photos-store`;
      const resp = await fetch(url);
      const json = await resp.json();
      for (let i = 1; i < (await json.length); i++) {
        let photo = new Object();
        photo.url = await json[i];
        photo.name = this.getPhotoName(await json[i])
        this.photos.push(photo);
      }
      this.loadPhotos();
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

</style>