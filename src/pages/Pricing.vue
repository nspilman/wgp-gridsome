<template>
<Layout>
    <Navbar/>
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
    <Footer />
  </section>
</Layout>
</template>

<script>
import Price from "../components/Price.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Price,
    Footer
  },
  data() {
    return {
      allCategories: ["weddings", "family", "seniors", "events","aerial"]
    };
  },
  computed: {
    category() {
      return process.isClient ? this.$route.query.category : undefined;
    }
  },
};
</script>

<style>
</style>