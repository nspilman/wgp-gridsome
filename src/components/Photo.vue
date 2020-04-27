<template>
  <span class="portfolio-image store-image" :style="{gridRowEnd:'span '+ spans }">
    <g-image
      @click="sendOpenImageMessageToParent"
      ref="imageRef"
      @load="setSpans"
      :style="{gridRowEnd:'span '+ spans }"
      :src="filepath"
      alt="photograph"
    />
    <h4 v-if="showtitle" class="store-photo-name">
      {{photoName}}
    </h4>
  </span>
</template>

<script>
export default {
  props: ["filepath", "index", "showtitle"],
  data() {
    return {
      spans: 0,
      height: 0,
      width: 0
    };
  },
  computed: {
    photoName() {
      const urlFirstSection = this.filepath.split("?")[0];
      const urlFirstSectionSlashSplit = urlFirstSection.split("/");
      const photoNameRaw =urlFirstSectionSlashSplit[urlFirstSectionSlashSplit.length - 1];
      const photoNameRawWithoutImageExtension = photoNameRaw.split(".")[0];

      var findDashRegexp = new RegExp("-", "g");
      return photoNameRawWithoutImageExtension.replace(findDashRegexp, " ");
    }
  },
  methods: {
    sendOpenImageMessageToParent() {
      this.$emit("opened-image", {index:this.index,photoName:this.photoName});
    },
    setSpans() {
      const { imageRef } = this.$refs;
      try {
        const height = imageRef.clientHeight;
        const spans = Math.ceil(height / 10 + 4);
        this.spans = spans;
      } catch {}
    }
  }
};
</script>

<style>
</style>
