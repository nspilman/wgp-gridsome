<template>
  <div id="main">
    <ul id="nav">
      <a href="/">
        <img
          src="../assets/images/wineguy_photos/wineguy_logo.png"
          :style="{'maxHeight': '10vh', 'maxWidth': '40vw'}"
          alt="images/wineguy_photos/wineguy_logo.png"
        />
      </a>
      <div id="nav-wrapper" v-if="windowWidth > 900">
        <span v-for="link in nav" :key="link.title">
          <li v-if="!link.children" class="top-level-item">
            <a :href="link.link">{{link.title}}</a>
          </li>
          <Dropdown v-else :title="link.title" :items="link.children" />
        </span>
      </div>
      <div id="mobile-nav" v-else>  
        <img :src="hamburgerIcon" id="hamburgerIcon" @click="hamburgerOn = !hamburgerOn"/>
        <transition name="fade">
        <div v-if="hamburgerOn" id="hamburger_dropdown">
        <span v-for="link in nav" :key="link.title">
          <li v-if="!link.children" class="top-level-item">
            <a :href="link.link">{{link.title}}</a>
          </li>
          <Dropdown v-else :title="link.title" :items="link.children" />
        </span>
        </div>
        </transition>
      </div>
    </ul>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import hamburgerIcon from "../assets/images/Hamburger_icon.svg";
export default {
  name: "navbar",
  components: {
    Dropdown
  },
  data() {
    return {
      nav: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Services",
          link: "/#services"
        },
        {
          title: "Portfolio",
          link: "#",
          children: [
            {
              title: "Wedding Photos",
              link: "/portfolio?category=weddings"
            },
            {
              title: "Family Photos",
              link: "/portfolio?category=family"
            },
            {
              title: "Event Photos",
              link: "/portfolio?category=events"
            },
            {
              title: "Senior Photos",
              link: "/portfolio?category=seniors"
            },
            {
              title: "Aerial Photos",
              link: "/portfolio?category=aerial"
            }
          ]
        },
        {
          title: "Pricing",
          link: "#",
          children: [
            {
              title: "Wedding Photos",
              link: "/pricing?category=weddings"
            },
            {
              title: "Family Photos",
              link: "/pricing?category=family"
            },
            {
              title: "Event Photos",
              link: "/pricing?category=events"
            },
            {
              title: "Senior Photos",
              link: "/pricing?category=seniors"
            },
            {
              title: "Aerial Photos",
              link: "/pricing?category=aerial"
            }
          ]
        },
        {
          title: "Client Love",
          link: "/client-love"
        },
        {
          title: "Store",
          link: "/store"
        },
        {
          title: "Contact",
          link: "#contact"
        }
      ],
      windowWidth: window.innerWidth,
      hamburgerIcon,
      hamburgerOn:false,
    };
  },
  created() {
    if(process.isClient){
      window.addEventListener("resize", this.handleResize);
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  beforeDestroy() {
    if(process.isClient){
    window.removeEventListener("resize", this.handleResize);
    }
  }
};
</script>

<style>
#main {
  width: 100vw;
}

#nav {
  height: 96px;
  padding: 0 20px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  border-bottom: 1px solid #e2e2e2;
  float: right;
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
}

#hamburger_dropdown{
  position: static;
  display: flex;
  flex-direction: column;
  margin-right: 1em;
  background-color:white;
}

#mobile-nav{
  display:flex;
  flex-direction: column;
  align-items:flex-end;
}

.top-level-item {
  display: inline-block;
  float: left;
  margin: 0;
  padding: 2em;
  position: relative;
  display: block;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  color: #181818;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 25px;
  -webkit-transition: ease 0.3s;
  -o-transition: ease 0.3s;
  transition: ease 0.3s;
  text-align: center;
}

.top-level-item > a {
  color: #181818;
  text-decoration: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>