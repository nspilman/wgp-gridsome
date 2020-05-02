<template>
  <ClientOnly>
  <vue-navigation-bar :options="navbarOptions"/>
  </ClientOnly>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import hamburgerIcon from "../assets/images/Hamburger_icon.svg";
import VueNavigationBar from "vue-navigation-bar";
import logo from "../assets/images/wineguy_photos/wineguy_logo.png";
export default {
  name: "navbar",
  components: {
    Dropdown,
    VueNavigationBar
  },
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "",
        brandImage: logo,
        brandImageAltText: "brand-image",
        collapseButtonImageOpen: "",
        collapseButtonImageClose: "",
        showBrandImageInMobilePopup: false,
        ariaLabelMainNav: "Main Navigation",
        menuOptionsRight: [
          {
            type: "link",
            text: "Portfolio",
            iconLeft: "",
            subMenuOptions: [
              {
                type: "link",
                text: "Wedding Photos",
                path: "/portfolio/weddings"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Family Photos",
                path: "/portfolio/family"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Event Photos",
                path: "/portfolio/events"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Senior Photos",
                path: "/portfolio/seniors"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Aerial Photos",
                path: "/portfolio/aerial"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              }
            ]
          },
          {
            type: "link",
            text: "Pricing",
            iconLeft: "",
            subMenuOptions: [
              {
                type: "link",
                text: "Wedding Pricing",
                path: "./pricing/weddings"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Family Pricing",
                path: "./pricing/family"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Event Pricing",
                path: "./pricing/events"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Senior Pricing",
                path: "./pricing/seniors"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Aerial Pricing",
                path: "./pricing/aerial"
                // iconLeft: '<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 14 L16 23 M16 8 L16 10" /> <circle cx="16" cy="16" r="14" /> </svg>',
              }
            ]
          },
          {
            type: "link",
            text: "Client Love",
            path: "./client-love",
          },
             {
            type: "link",
            text: "Store",
            path: "/portfolio/store",
          },
              {
            type: "link",
            text: "Contact",
            path: "#contact",
          },
        ]
      }
    };
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