<template>
  <div id="main">
    <div id="nav">
      <g-link to="/">
        <g-image
          src="../assets/images/wineguy_photos/wineguy_logo.png"
          :style="{'maxHeight': '10vh', 'maxWidth': '20vw'}"
          alt="Wine Guy Photography Logo"
        />
      </g-link>
      <div id="nav-wrapper">
        <ul v-for="link in nav" :key="link.title">
          <li v-if="!link.children" class="top-level-item">
            <g-link :to="link.link">{{link.title}}</g-link>
          </li>
          <Dropdown v-else :title="link.title" :items="link.children" />
        </ul>
      </div>
          <div id="mobile-nav">
      <g-image :src="hamburgerIcon" id="hamburgerIcon" @click="hamburgerOn = !hamburgerOn" alt="mobile menu"/>
      <transition name="fade">
      <div v-if="hamburgerOn" id="hamburger_dropdown"  v-click-outside="hide">
        <ul  v-for="link in nav" :key="link.title">
          <li v-if="!link.children" class="top-level-item">
            <g-link :to="link.link">{{link.title}}</g-link>
          </li>
          <Dropdown v-else :title="link.title" :items="link.children" />
        </ul>
      </div>
      </transition>
    </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import hamburgerIcon from "../assets/images/Hamburger_icon.svg";

import ClickOutside from 'vue-click-outside'

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
              link: "#weddings-portfolio"
            },
            {
              title: "Family Photos",
              link: "#family-portfolio"
            },
            {
              title: "Event Photos",
              link: "#events-portfolio"
            },
            {
              title: "Senior Photos",
              link: "#seniors-portfolio"
            },
            {
              title: "Aerial Photos",
              link: "#aerial-portfolio"
            }
          ]
        },
        {
          title: "Pricing",
          link: "#",
          children: [
            {
              title: "Wedding Photos",
              link: "#weddings-pricing"
            },
            {
              title: "Family Photos",
              link: "#family-pricing"
            },
            {
              title: "Event Photos",
              link: "#events-pricing"
            },
            {
              title: "Senior Photos",
              link: "#seniors-pricing"
            },
            {
              title: "Aerial Photos",
              link: "#aerial-pricing"
            }
          ]
        },
        {
          title: "Client Love",
          link: "#client-love"
        },
        {
          title: "Store",
          link: "#store-portfolio"
        },
        {
          title: "Contact",
          link: "#contact"
        }
      ],
      windowWidth: process.isClient ? window.innerWidth : 0,
      hamburgerIcon,
      hamburgerOn: false
    };
  },
  methods:{
    hide(){
      this.hamburgerOn = false;
    }
  },
  directives:{
    ClickOutside
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

#hamburger_dropdown {
  position: static;
  display: flex;
  flex-direction: column;
  margin-right: 1em;
  background-color: white !important;
}

#mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 900px) {
  #mobile-nav {
    display: flex;
  }
  #nav-wrapper {
    display: none;
  }
  .top-level-item {
    background-color: #fff;
    width: 100%;
  }
}

@media only screen and (min-width: 900px) {
  #mobile-nav {
    display: none;
  }
  #nav-wrapper {
    display: flex;
  }
}
</style>