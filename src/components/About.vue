<template>
  <section id="about" class="section section-history">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-4 pull-right"
        >
          <div class="history-logo">
            <div class="frame-img">
              <img src="../assets/images/wineguy_photos/wineguy_about.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div class="col-sm-7 col-xs-12">
          <div class="section-title title-sty2">
            <h3 class="h3 bor-underline">About</h3>
            <span>Member - Professional Photographers of America</span>
          </div>
          <div class="section-content content-italic">
            <p>{{lineOne}}</p>
            <p>{{lineTwo}}</p>
            <ul>
              <li v-for="cred in credList" :key="cred">{{cred}}</li>
            </ul>
            <p>{{signoff}}</p>
            <div class="link-detail">
              <g-link to="/portfolio" class="btn btn-default">My work</g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lineOne:
        'Hello and welcome! I am thrilled that you have taken the time to look at my work, and that you are considering booking Wine Guy Photography.',
      lineTwo:
        'I’m Dan Steffen and I’ve been avidly pursuing all things photography since I received my first camera when I was 9 years old. Rather than a long and boring bio, I wanted to share a few “fun facts” about me so that you can get to know me a little more.',
      credList: [
        'The “Wine Guy” comes from my day job of working as a wine importer. I travel the country selling the wines I represent to wine distributors (who in turn sell to shops and restaurants). 30+ years in the Wine Biz.',
        'Thanks to the wine business, I’ve been fortunate enough to see and photograph much of the world including Europe, Australia, Africa and South America.',
        'My wife, Christine (who’s an amazing midwife & pre-natal yoga instructor!) and I were married in 2000 and we have 3 awesome boys (Ben, Julian and Samuel) a goofy Irish Doodle (Flynn), and a couple of cool cats (Squirrel & Possum).',
        'The boys are active in Volleyball and Ultimate Frisbee and nothing makes us happier than watching them compete.',
      ],
      signoff:
        "Whether your shoot is indoors or out, I can capture the images you'll always cherish. Whatever your photography needs, I can help.",
    };
  },
};
</script>

<style>
</style>
