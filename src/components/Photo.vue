<template>
  <!-- <span class="portfolio-image store-image"> -->
    <div class="photo-box" :style="{gridRowEnd:'span '+ spans, margin:'1em' }"
    v-html ="photoMarkdown"
      @click="sendOpenImageMessageToParent"
      ref="imageRef"
    />
    <!-- <h4 v-if="showtitle" class="store-photo-name">
      {{photoName}}
    </h4> -->
  <!-- </span> -->
</template>

<script>
export default {
  props: ["photoMarkdown", "index", "showtitle",'filepath'],
  data() {
    return {
      spans: 0,
      height: 0,
      width: 0,
    };
  },
mounted() {
  this. $nextTick(function () {
   this.setSpans()
  })
},
  computed:{
    imageRef(){
      return this.$refs.imageRef
    }
  },
  watch:{
    imageRef(){
      console.log('hi')
      if(imageRef){
        console.log("im alive")
      }
    }
  },
  // computed: {
  //   photoName() {
  //     const urlFirstSection = this.filepath.split("?")[0];
  //     const urlFirstSectionSlashSplit = urlFirstSection.split("/");
  //     const photoNameRaw =urlFirstSectionSlashSplit[urlFirstSectionSlashSplit.length - 1];
  //     const photoNameRawWithoutImageExtension = photoNameRaw.split(".")[0];

  //     var findDashRegexp = new RegExp("-", "g");
  //     return photoNameRawWithoutImageExtension.replace(findDashRegexp, " ");
  //   }
  // },
  methods: {
    sendOpenImageMessageToParent() {
      this.$emit("opened-image", {index:this.index,photoName:this.photoName});
    },
    setSpans() {
      const { imageRef } = this.$refs;
      try {
        const height = imageRef.children[0].clientHeight;
        const spans = Math.ceil(height / 10 + 4);
        this.spans = spans;
      } catch {}
    }
  }
};
</script>

<style>

.photo-box >img {
  min-width: 100%;
  min-height: 100%;
}
</style>
