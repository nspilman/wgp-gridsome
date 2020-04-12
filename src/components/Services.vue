<template>
  <section
    id="services"
    class="section section-img img-half section-services"
    style="min-height:150vh"
  >
    <div class="row">
      <div class="col-lg-6 col-lg-offset-6" id="service-content">
        <div class="parallax-content">
          <div class="section-title">
            <h3 class="h3 bor-underline">Services</h3>
          </div>
          <div class="section-content">
            <div class="project-list style-projt2">
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-pagelines"></i>
                    </span>
                    <h6 class="h6 project-title">WEDDINGS</h6>
                  </div>
                  <div class="project-body">
                    <p>{{weddingText}}</p>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/weddings" class="btn btn-default">See More</a>
                    <a href="./pricing/weddings">
                      <button class="btn btn-default">Pricing</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-lightbulb-o"></i>
                    </span>
                    <h6 class="h6 project-title">SENIOR PHOTOS</h6>
                  </div>
                  <div class="project-body">
                    <p>{{seniorsText}}</p>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/seniors" class="btn btn-default">See More</a>
                    <a href="./pricing/seniors">
                      <button class="btn btn-default">Pricing</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-tint"></i>
                    </span>
                    <h6 class="h6 project-title">FAMILY AND PETS</h6>
                  </div>
                  <div class="project-body">
                    <p>{{familyText}}</p>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/family" class="btn btn-default">See More</a>
                    <a href="./pricing/family">
                      <button class="btn btn-default">Pricing</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-content">
                  <div class="project-header">
                    <span class="project-logo">
                      <i class="fa fa-fire"></i>
                    </span>
                    <h6 class="h6 project-title">SPECIAL EVENTS</h6>
                  </div>
                  <div class="project-body">
                    <p>{{specialEventsText}}</p>
                  </div>
                  <div class="link-detail">
                    <a href="./portfolio/events" class="btn btn-default">See More</a>
                    <a href="./pricing/events">
                      <button class="btn btn-default">Pricing</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-bg bg-parallax">
      <div class="section-bg-contain">
        <div class="sbg-img bg-4"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      specialEventsText:
        'Whether it be a family reunion, bat mitzvah, quinceañera, anniversary, or birthday party. I’ll be there to commemorate your special event.',
      seniorsText:
        'I absolutely love shooting Seniors! My sessions are less about taking a great portrait for the yearbook (although we’ll definitely do that!) and more about getting a ton of great images to commemorate this awesome rite of passage and moment in time.',
      familyText:
        'Everybody finally together for the holidays? Want to capture the kids at this adorable age? New puppy? Whatever your portrait needs, I can make it happen for you.',
      weddingText:
        'Your wedding day is one of the most important days of your life. I believe that you should choose a photographer that you feel a deep connection with, and whose style of images truly resonates with you.',
    };
  },
};
</script>
<style>

#services{
    background-image: url('../assets/images/wineguy_photos/services_background.jpeg');
    background-size: 100%;
    background-repeat: no-repeat;
}

.btn-default{
  color: #181818;
    background-color: transparent;
    border: 2px solid #181818;
}

.btn{
  order: none;
    outline: none;
    font-size: 12px;
    line-height: 37px;
    padding: 0 22.5px;
    letter-spacing: 2px;
    display: inline-block;
    background: transparent;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
}

.btn:hover{
  background-color:black;
  color:white;
}

</style>
