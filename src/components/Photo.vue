<template>
  <img
    class="portfolio-image"
    :style="{gridRowEnd:'span '+ spans }"
    @load="setSpans"
    ref="imageRef"
    @click="sendOpenImageMessageToParent"
    :src="filepath"
    alt="photograph"
  />
</template>

<script>
export default {
  props: ['filepath', 'index'],
  data() {
    return {
      spans: 0,
      height: 0,
      width: 0,
    };
  },
  methods: {
    sendOpenImageMessageToParent() {
      this.$emit('opened-image', this.index);
    },
    setSpans() {
      const { imageRef } = this.$refs;
      try{
      const height = imageRef.clientHeight;
      const spans = Math.ceil(height / 10 + 2);
      this.spans = spans;
      }
      catch{

      }
    },
  },
};
</script>

<style>
</style>
