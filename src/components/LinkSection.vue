<template>
  <section class="site-links">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-6 col-lg-7 col-xl-8">
          <ul class="site-links__list">
            <li>
              Find out more about the 6 Proven Steps to Attract ICO Investors
              <a href="">here!</a>
            </li>
            <li>
              If you 'd like to hire Matyas as an advisor,
              <a href="">visit tokenmarketing.expert</a>
            </li>
            <li>
              If you need complete token sale marketing services,
              <a href="">go to 6slambo.com</a>
            </li>
            <li>
              Follow his blog for the latest crypto news.
              <a href="">Visit icomarketing.blog</a>
            </li>
            <li>
              Are you an investor on the lookout for private sales?
              <a href="">Check out our offer</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-5 col-xl-4 text-center">
          <img class="standing-img" src="../assets/img/matyas-standing.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.site-links {
  background: #222222;

  .standing-img {
    margin: 3rem;
    max-height: 415px;
    width: auto;
  }

  .site-links__list {
    padding: 3rem 0;
    color: #fff;
    list-style-type: none;

    li {
      font-size: 1rem;
      margin: 2rem 0;
    }

    a {
      text-transform: uppercase;
      text-decoration: underline;
      color: #FAB512;

      &:hover {
        color: #222;
        background: #FAB512;
        display: inline-block;
        padding-left: 3px;
        padding-right: 3px;
        margin-left: -3px;
        margin-right: -3px;
      }
    }
  }
}
</style>
