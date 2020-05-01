<template>
    <div class="photo-box" :style="{gridRowEnd:'span '+ spans, margin:'1em' }"
    v-html ="markup"
      @click="sendOpenImageMessageToParent"
      ref="imageRef"
    >
    </div>
</template>

<script>
export default {
  props: ["markup", "index", "showtitle",'name'],
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
  methods: {
    sendOpenImageMessageToParent() {
      this.$emit("opened-image", this.markup);
    },
    setSpans() {
      const { imageRef } = this.$refs;
      try {
        const height = imageRef.children[0].clientHeight;
        const spans = Math.ceil(height / 10 + 6);
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
