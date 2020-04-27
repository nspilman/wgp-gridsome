<template>
  <div class="container" style="padding-top:5em;">
    <h1>{{ service }}</h1>
    <div class="row">
      <div
        v-for="pricingPackage in allPricing"
        class="col-sm-5"
        style="background-color:rgb(255,255,255,.7); padding:2em;margin:.5em; border-radius:1em;"
        :key="pricingPackage.title"
        v-html="pricingPackage.content"
      />
    </div>
  </div>
</template>

<static-query>
query Content {
  allPricing: allPricing {
    edges {
      node {
        id
        title
        category
        content
        price
      }
    }
  }
}
</static-query>

<script>
export default {
  props: ["service"],
  computed: {
    allPricing() {
      const output = this.$static.allPricing.edges
        .map(edge => edge.node)
        .filter(node => node.category == this.service);
      return output.sort(function(a, b) {
        return b.price - a.price;
      });
    }
  },
  methods: {},
};
</script>

<style>
</style>