<template>
  <footer id="contact">
    <div id="contact">
      <div class="footer-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-5 col-xs-12">
              <div class="theme-info">
                <div class="theme-logo">
                  <div class="logo-content-img">
                    <a href="/">
                      <g-image id="logo" :src="logo" alt="logo" />
                    </a>
                  </div>
                </div>
                <div class="theme-address">
                  <ul class="text-link">
                    <li>
                      <span class="icon-square">
                        <i class="fa fa-phone"></i>
                      </span>608-445-5161
                    </li>
                    <li>
                      <a href="mailto:WineGuyPhotography@gmail.com">
                        <span class="icon-square">
                          <i class="fa fa-envelope"></i>
                        </span>WineGuyPhotography@gmail.com
                      </a>
                    </li>
                    <li>
                      <div class="social-link nav-icon-style2">
                        <a href="https://twitter.com/wineguyphoto" target="_blank">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/wineguyphotography/" target="_blank">
                          <i class="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/wineguyphotography" target="_blank">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-5 col-xs-12 col-sm-offset-2">
              <div class="theme-contact">
                <g-image src="../assets/images/wineguy_photos/contact_section.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="footer-copyright-content">
                <div class="ds-table-auto">
                  <div class="ds-cell-auto">
                    <p>© 2019 Wine Guy Photography - all right reserved</p>
                    <div class="social-link nav-icon-style2">
                      <a href="https://twitter.com/wineguyphoto" target="_blank">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/wineguyphotography/" target="_blank">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/wineguyphotography" target="_blank">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "../assets/images/wineguy_photos/wineguy_logo.png";

export default {
  data() {
    return {
      logo
    };
  }
};
</script>

<style>
#logo {
  background-color: ivory;
  border-radius: 1em;
  max-height: 10vh;
  max-width: 40vw;
}

.theme-info {
  display: flex;
  flex-direction: column;
}

.text-link {
  text-decoration: none;
  font-size: 2em;
  list-style-type: none;
}

.social-link {
  padding: 1em;
  display: flex;
}

.fa {
  font-size: 20px;
  color: white;
  margin: 1em;
}
</style>
