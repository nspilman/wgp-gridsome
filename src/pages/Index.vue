<template>
  <Layout>
    <Header/>
    <About/>
    <Services/>
    <Testimonials/>
    <Footer/>
  </Layout>
</template>

<script>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';
import Testimonials from '../components/Testimonials.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Header,
    About,
    Services,
    Testimonials,
    Footer,
  },
};
</script>


<style>

</style>
