<template>
  <Layout>
    <Menu v-if="showNav"/>
    <Header/>
    <Announcement/>
    <About/>
    <Services :services="services"/>
    <Portfolio v-for="service in services" 
    :category="service" 
    :key="`${service}-portfolio`"
    v-on:toggleNav="showNav = !showNav"
    />
    <Portfolio category="store"/>
    <Testimonials/>
    <Clientlove/>
    <Pricing v-for="service in services" :category="service" :key="`${service}-pricing`"/>
    <Footer/>
  </Layout>
</template>

<page-query>
query About {
  content: allContent {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
import Header from '../components/Header.vue';
import Announcement from '../components/Announcement.vue';
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
    Announcement,
    About,
    Services,
    Testimonials,
    Portfolio,
    Pricing,
    Clientlove,
    Footer,
  },
  computed:{
    services(){
      const servicesMarkup = this.$page.content.edges.map(edge => edge.node).filter(node=> node.title == this.servicesTitle)[0].content
      return servicesMarkup.replace('<p>','').replace('</p>','').split(/\n/ig).filter(service => service != '');
    }
  },
  data(){
    return {
      servicesTitle: "master list of services",
      showNav: true,
    }
  },
};
</script>


<style>

</style>
