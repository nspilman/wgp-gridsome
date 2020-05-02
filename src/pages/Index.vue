<template>
  <Layout>
    <Header/>
    <About/>
    <Services/>
    <Portfolio v-for="service in services" :category="service" :key="service"/>
    <Portfolio category="store"/>
    <Testimonials/>
    <Clientlove/>
    <Pricing v-for="service in services" :category="service" :key="service"/>
    <Footer/>
  </Layout>
</template>

<script>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';
import Portfolio from '../components/Portfolio.vue';
import Pricing from '../components/Pricing.vue';
import Testimonials from '../components/Testimonials.vue';
import Clientlove from '../components/Clientlove.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Header,
    About,
    Services,
    Testimonials,
    Portfolio,
    Pricing,
    Clientlove,
    Footer,
  },
  data(){
    return {
      services : [
        'weddings',
        'events',
        'family',
        'seniors',
        'aerial'
      ]
    }
  }
};
</script>


<style>

</style>
