<template>
  <footer class="bg-primary text-white">
      <div class="section">

        <div class="container">

          <h1 class="sr-only">Matyas Zaborszky</h1>
          <div class="row">
            <div class="col-md-8 col-lg-4 mb-4">
              <img src="../assets/img/logo.svg" alt="Matyas Zaborszky" class="mb-4 mt-2 img-fluid">
              <img class="fingerprint" style="left:30%;top:10px; filter: invert(.5)" src="../assets/img/fingerprint.svg" alt="">
              <follow-me />
            </div>

            <div class="col-md-6 col-lg-3 mb-4 mb-md-0 offset-lg-2">
              <h1 class="h3">Services</h1>

              <div class="mt-3">
                <a class="inline-link" href="http://www.6steps.online/" target="_blank">&#9656; www.6steps.online</a>
              </div> 

              <div class="mt-2">
                <a class="inline-link" href="http://www.tokenmarketing.expert" target="_blank">&#9656; www.tokenmarketing.expert</a>
              </div>

              <div class="mt-2">
                <a class="inline-link" href="https://6slambo.com/" target="_blank">&#9656; www.6slambo.com</a>
              </div>
              
              <div class="mt-2">
                <a class="inline-link" href="http://www.privatesale.vip" target="_blank">&#9656; www.privatesale.vip</a>
              </div>

              <div class="mt-2">
                <a class="inline-link" href="http://www.icoexpert.blog" target="_blank">&#9656; www.icoexpert.blog</a>
              </div>
              <div class="mt-2">
                <a class="inline-link" href="http://www.realizeyour.vision" target="_blank">&#9656; www.realizeyour.vision</a>
              </div>

            </div>

            <div class="col-md-6 col-lg-3">
              <h1 class="h3 mt-4 mt-md-0">Legal</h1>
              <div class="mt-3">
                <a class="inline-link" href="">&#9656; Privacy Policy</a>
              </div>
              <div class="mt-2">
                <a class="inline-link" href="">&#9656; Terms & Conditions</a>
              </div>
              <div class="mt-2">
                <a class="inline-link" href="">&#9656; Earnings Disclaimer</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="copyright">
        <div class="container">
          Copyright &copy; 2018 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Matyas Zaborszky
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All rights reserved.
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;AZ Organization LLC,  
           <address class="d-inline"> 10685-B Hazelhurst Dr. # 21025, Houston, TX 77043</address>
        </div>
      </div>

    </footer>
</template>

<script>
import FollowMe from '@/components/FollowMe'
export default {
  name: 'FooterSection',
  components: {
    FollowMe
  }
}
</script>

