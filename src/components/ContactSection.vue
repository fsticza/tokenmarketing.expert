<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img class="fingerprint" style="left:-160px;top:40px; filter: invert(.5)" src="../assets/img/fingerprint.svg" alt="">
        <h1 class="section__title">Contact</h1>
        <h2 class="section__lead">Send me a message</h2>

        <p>
          For more detailed information on how I can help you achieve your goals, let me know how to reach
          you and I will get back to you within two working days.
        </p>

        <follow-me />
      </div>
      <div class="col-md-5 offset-md-1">
        <div id="thanks" class="thanks" tabindex="0">
          Thank you for your interest.
        </div>
        <form action="https://formspree.io/ferenc.sticza@gmail.com" method="POST"
        class="needs-validation" novalidate @submit.prevent="onContactSubmit">
          
          <div class="form-group">
            <label class="form-label" for="name-field">Full name</label>
            <input id="name-field" type="text" class="form-control" name="name" maxlength="50" required />
            <div class="invalid-feedback">
              Please provide a valid name.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="country-field">Country</label>
            <input id="country-field" type="text" class="form-control" name="country" maxlength="30" required />
            <div class="invalid-feedback">
              Please provide a valid contry.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="email-field">Email</label>
            <input id="email-field" type="email" class="form-control" name="email" maxlength="30" required />
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="phone-field">Phone</label>
            <input id="phone-field" type="tel" class="form-control" name="tel" maxlength="30" required />
            <div class="invalid-feedback">
              Please provide a valid phone.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="telegram-field">Telegram (optional)</label>
            <input id="telegram-field" class="form-control" name="telegram" />
          </div>

          <div class="form-group">
            <label class="form-label" for="message-field">Message (optional)</label>
            <textarea id="message-field" class="form-control" minlength="10" name="message"></textarea>
            <div class="invalid-feedback">
              Please write at least 10 characters.
            </div>
          </div>

          <input type="hidden" name="_next" value="#thanks" />

          <button type="submit" class="btn btn-primary">
            Done
          </button>

        </form>
      </div>
    </div>

  </div>
</template>

<script>
import FollowMe from '@/components/FollowMe'
export default {
  name: 'ContactSection',
  methods: {
    onContactSubmit (ev) {
      if(ev.target.checkValidity()) {
        ev.target.submit()
      }
      ev.target.classList.add('was-validated')
    }
  },
  components: {
    FollowMe
  }
}
</script>

<style lang="scss">
@import "../assets/scss/abstracts/variables";

.form-label {
  color: $gray;
  text-transform: uppercase;
}

.form-group {
  .form-control {
    border-bottom-width: 1px;
    outline: 0 0 1px;
    margin-bottom: 2.25rem;
  }
}

.invalid-feedback {
  font-weight: bold;
}

.was-validated {
  .form-control {
    &:invalid {
      margin-bottom: 0;
    }
  }
}

.thanks {
  height: 1px;
  overflow: hidden;
  padding: 10px;
  outline: 0;
  opacity: .01;
  color: #fff;
  transition: opacity .2s, background .2s;

  &:focus {
    height: auto;
    opacity: 1;
    background: $primary;
    margin-bottom: 20px;
  }
}

</style>
