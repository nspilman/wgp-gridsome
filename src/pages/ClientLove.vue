<template>
<Layout>
  <Navbar/>
<section id="testimonials" class="section section-history">
  <Loading v-if="isLoading"/>
    <div class="container" v-for="testimonial in testimonials" :key="testimonial.url">
        <div class="row">
                <div class="col-sm-4 col-tn-8 col-xs-10 col-tn-offset-2 col-xs-offset-1 col-sm-offset-0 pull-left">
                        <div class="history-logo">
                            <div class="frame-img" style="background-image:url() !important;">
                                <img @load="loadImage" :src="testimonial.url" >
                                <!-- alt="logo"> -->
                            </div>
                        </div>
                    </div>
            <div class="col-sm-7 col-xs-12">
                <div class="section-content content-italic">
                    <p>
                        {{testimonial.text}}
                    </p>
                </div>
            </div>
 
        </div>
    </div>

</section>
</Layout>
</template>

<script>
import Loading from "../components/Loading.vue";

export default {
  name: "clientLove",
  data() {
    return{
    testimonials: [],
    imageLoaded:0,
    isLoading:true,
    rootUrl: 'https://website-photographs.s3.amazonaws.com/photos-clientLove/',
    photos:[],
   }
  },
   created(){
      this.getPhotosFromAws();
      document.addEventListener('contextmenu',e => {
      e.preventDefault();
      const copyright = document.querySelector("#copyright")
      copyright.style.display = "block";
      setTimeout(()=>{copyright.style.display="none"},2000)
    })
   },
   methods:{
    async getPhotosFromAws(){
      const url = `https://py5e37ug41.execute-api.us-east-1.amazonaws.com/default/getPhotosByName?category=photos-clientLove`
      const resp = await fetch(url)
      const json = await resp.json()
      for(let i = 1; i < await json.length ; i ++){
        this.photos.push(await json[i].split('?')[0].split('/')[4])
      }
      const testimonials = [] 
      this.photos.forEach(async photo => {
        try{
          const text = await this.getText(photo.split(".")[0])
          if(text.length > 0){
            testimonials.push({url:this.rootUrl + photo,text:text})
          }
        }
        catch{
          return
        }
      });
      
      this.testimonials = testimonials;
      
      // this.loadPhotos();
    },
    async getText(filename){
      const url = "https://u0f8kizng8.execute-api.us-east-1.amazonaws.com/default/GetPageTextByName?filename=" + filename;
      const resp = await fetch(url)
      const json = await resp.text()
      return json;
    },
    loadImage(){
        this.imageLoaded++;
        if (this.imageLoaded > 6) {
          this.isLoading = false;
          return
        }
   }
  }
}
</script>