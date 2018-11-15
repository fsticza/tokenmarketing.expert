<template>
  <div id="app">
    <main class="main-content">
      <div class="section section--head">
        <div class="bg-shade"></div>
        <div ref="first-content" class="container text-white">
          <h1>
            <img class="text-white logo" src="./assets/img/logo.svg" alt="Matyas Zaborszky" height="32">
          </h1>
          <div class="row">
            <div class="col-sm-10 col-md-6 text-content">
              <img class="fingerprint" style="left:-100px;top:-20px;" src="./assets/img/fingerprint.svg" alt="">
              <h2 class="section__lead">Token marketing advice, supervision & leadership</h2>
              <p class="section__sub-lead">
                Choose one of three advisory service packages according to your needs in order to maximize the token sale and your reach to investors
              </p>
              <a href="#contact" class="btn btn-light">Contact me now</a>
            </div>
          </div>
        </div>
      </div>

      <section class="section container text-center" id="packages">
        <div class="row">
          <div class="col-sm-6 offset-sm-3 mb-4">
            <h1 class="section__lead">Advisory packages</h1>
            <p>Packaged services range from a simple consulting role to leading the marketing team and writing the strategy, to using my formidable network to spread the word.</p>
          </div>
        </div>

        <div class="row">
          <article class="package col-md-4 mt-4">
            <img src="./assets/img/gold.svg" alt="">
            <h1 class="package__title">Gold</h1>
            <ul class="list-unstyled">
              <li v-for="(feature, index) in features"
                :key="index"
                class="feature"
                :class="{'feature--disabled' : !feature.enabledIn.includes('gold')}"
              >
                {{feature.text}}
              </li>
            </ul>

            <div class="package__price-box">
              <div class="package__price-text">
                The service fee for Gold is 
              </div>
              <div class="package__price">
                EUR <span>50.000</span> 
              </div>
              <em>
                +1% token offering
              </em>
            </div>

            <div class="mt-4">
              <a href="#contact" class="btn btn-primary">I'm interested</a>
            </div>

          </article>
          <article class="package col-md-4 mt-4">
            <img src="./assets/img/platinum.svg" alt="">
            <h1 class="package__title">Platinum</h1>
            <ul class="list-unstyled">
              <li v-for="(feature, index) in features"
                :key="index"
                class="feature"
                :class="{'feature--disabled' : !feature.enabledIn.includes('platinum')}"
              >
                {{feature.text}}
              </li>
            </ul>
            <div class="package__price-box">
              <div class="package__price-text">
                The service fee for Platinum is 
              </div>
              <div class="package__price">
                EUR <span>100.000</span> 
              </div>
              <em>
                +1% token offering
              </em>
            </div>

            <div class="mt-4">
              <a href="#contact" class="btn btn-primary">I'm interested</a>
            </div>
          </article>
          <article class="package col-md-4 mt-4">
            <img src="./assets/img/diamond.svg" alt="">
            <h1 class="package__title">Diamond</h1>
            <ul class="list-unstyled">
              <li v-for="(feature, index) in features"
                :key="index"
                class="feature"
                :class="{'feature--disabled' : !feature.enabledIn.includes('diamond')}"
              >
                {{feature.text}}
              </li>
            </ul>
            <div class="package__price-box">
              <div class="package__price-text">
                The service fee for Diamond is 
              </div>
              <div class="package__price">
                EUR <span>150.000</span> 
              </div>
              <em>
                + 1% token offering, not including travel and accommodation costs with appropriate Business Class carriers and hotels
              </em>
            </div>

            <div class="mt-4">
              <a href="#contact" class="btn btn-primary">I'm interested</a>
            </div>
          </article>
        </div>
      
      </section>

      <link-section />

      <article id="contact" class="section section--gray">
        <contact-section />
      </article>

    </main>

    <footer-section />
  </div>
</template>

<script>

import FollowMe from '@/components/FollowMe'
import ContactSection from '@/components/ContactSection'
import LinkSection from '@/components/LinkSection'
import FooterSection from '@/components/FooterSection'

export default {
  name: 'app',
  data () {
    return {
      features: [
        {
          text: 'Advisor for hire',
          enabledIn: ['gold', 'platinum', 'diamond']        
        },
        {
          text: 'Weekly calls to check on progress',
          enabledIn: ['gold', 'platinum', 'diamond']        
        },
        {
          text: 'Supervising marketing and PR efforts',
          enabledIn: ['gold', 'platinum', 'diamond']        
        },
        {
          text: 'Helping to put together the marketing team',
          enabledIn: ['gold', 'platinum', 'diamond']        
        },
        {
          text: 'Association of the Zaborszky name for increased reputation',
          enabledIn: ['gold', 'platinum', 'diamond']        
        },
        {
          text: 'Creating and executing the marketing and PR strategy',
          enabledIn: ['platinum', 'diamond']        
        },
        {
          text: 'Effectively leading the marketing team',
          enabledIn: ['platinum', 'diamond']        
        },
        {
          text: 'Representation at conferences and other events on behalf of the token offering',
          enabledIn: ['diamond']        
        },
        {
          text: 'Media appearances and interviews on behalf of the token offering',
          enabledIn: ['diamond']        
        },
        {
          text: 'Use of the Zaborszky network: 11,000+ LinkedIn followers, email list with 20,000+ committed individuals, 1,000+ phone numbers willing to receive text messages',
          enabledIn: ['diamond']        
        }
      ]
    }
  },
  components: {
    FollowMe,
    ContactSection,
    LinkSection,
    FooterSection
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app";

a:hover {
  background: $pink;
}

body {
  overflow-x: hidden;
}

@include media-breakpoint-up(sm) {
  .brand-img {
    height: 16px;
  }
}

.package {
  margin-bottom: 80px;
}

.package__title {
  margin: 25px 0 20px;
}

.package__price-box {
  border-top: 1px dotted $gray;
  padding-top: 50px;
  margin-top: 50px;

  em {
    @include media-breakpoint-up(sm) {
      min-height: 120px;
    }
    display: block;
    font-size: .875rem;
  }
}

.package__price-text {
  text-transform: uppercase;
  color: $gray;
  margin: 10px 0 0;
}

.package__price {
  font-family: $headings-font-family;
  font-size: 1.25rem;
  line-height: 69px;
  
  span {
    padding-left: 5px;
    font-weight: 900;
    font-size: 3rem;
  }
}


.feature {
  margin: 1rem 0;
}

.feature--disabled {
  text-decoration: line-through;
  color: #c7bfbf;
}

.section {
  position: relative;
  padding-top: $section-spacing;
  padding-bottom: $section-spacing;

  .fingerprint {
    position: absolute;
    z-index: 0;
  }
}
.section--head {
  background: url('./assets/img/main-image.jpg') no-repeat;
  background-position: 50% 50%;
  background-size: auto 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .bg-shade {
    background: rgba(0, 0, 0, .35);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    @include media-breakpoint-up(lg) {
      background: linear-gradient(to right, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .6) 30%, transparent 60%) repeat-y;
    }

    &:after {
      content: ' ';
      position: absolute;
      bottom: -44px;
      right: 0;
      width: 200%;
      height: 100px;
      background: white;
      transform: skew(268.6deg);
    }
  }
  .text-content,
  .logo {
    position: relative;
    z-index: 3;
  }

  .logo {
    max-width: 100%;
  }
}
.section--gray {
  background: $light-gray;
}
.section__title {
  font-size: 1rem;
  font-weight: 300;
  color: $gray;
  font-family: $font-family-base;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.section__sub-title {
  font-family: $font-family-base;
  font-size: 1rem;
  margin: 1.5rem 0;
  @include media-breakpoint-up(md) {
    font-size: 1.25rem;
  }
  @include media-breakpoint-up(lg) {
    font-size: 1.5rem;
  }
}
.section__lead {
  font-size: 2.5rem;
  margin: 1.5rem 0;

  @include media-breakpoint-up(md) {
    font-size: 3rem;
  }
  @include media-breakpoint-up(lg) {
    font-size: 3.5rem;
  }
}
.section__sub-lead {
  font-size: 1rem;
  margin: 2rem 0;
  @include media-breakpoint-up(md) {
    font-size: 1.25rem;
  }
  @include media-breakpoint-up(lg) {
    font-size: 1.5rem;
  }
}
.shaded {
  box-shadow: 20px 20px 0 rgba(0, 0 , 0, .05)
}
.inline-link {
  display: inline-block;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
  margin-left: -3px;
  margin-right: -3px;
}

.services__title {
  font-size: 3rem;
}

.copyright {
  background: $dark-green;
  padding: 1.5rem 0;
}

.fade {
  will-change: opacity;
}

.nav-link {
  &:hover {
    background: transparent;
  }
}

.contact-btn-position {
  margin: 2rem 0 3rem;
  @include media-breakpoint-up(sm) {
    margin: 0;
    position:relative;
    top: $section-spacing + $input-btn-padding-y + 1.25rem;
  }
}

.btn {
  text-transform: uppercase;
}

.btn-primary,
.btn-light {
  transition: background-color .3s, color .3s;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid $primary;
    z-index: -1;
    border-radius: inherit;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }

  &:hover {
    background-color: #fff;
    color: $primary;

    &:before {
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
}
.btn-light {
  &:before {
    border-color: #fff;
  }
  &:hover {
    background-color: $primary;
    color: #fff;
  }
}

</style>