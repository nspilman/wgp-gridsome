<template>
  <section
    id="services"
    class="section section-img img-half section-services"
    style="min-height:150vh"
  >
    <Navbar />
    <div id="pricingModalHeight">
      <div class="pricingModalWrapper">
        <div class="pricingModal">
          <div id="pricing">
            <Price :service="category" v-if="category && category.length > 0" />
            <Price v-else v-for="category in allCategories" :service="category" :key="category" />
          </div>
        </div>
      </div>
    </div>
    <div class="section-bg bg-parallax">
      <div class="section-bg-contain">
        <div class="sbg-img bg-4"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Price from "./Price.vue";
export default {
props:['category'],
  components: {
    Price,
  },
  data() {
    return {
      allCategories: ["weddings", "family", "seniors", "events","aerial"]
    };
  },
};
</script>

<style>
</style>