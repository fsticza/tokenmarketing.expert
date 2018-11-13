<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5 offset-sm-1">
        <img class="fingerprint" style="left:-160px;top:40px; filter: invert(.5)" src="../assets/img/fingerprint.svg" alt="">
        <h1 class="section__title">Contact</h1>
        <h2 class="section__lead">Send me a message</h2>

        <p>
          For more detailed information on how I can help you achieve your goals, let me know how to reach
          you and I will get back to you within two working days.
        </p>

        <follow-me />
      </div>
      <div class="col-sm-6">
        <form action="" class="needs-validation" @submit.prevent="onContactSubmit" novalidate>
          
          <div class="form-group">
            <label class="form-label" for="">Full name</label>
            <input type="text" class="form-control" name="name" maxlength="50" required />
            <div class="invalid-feedback">
              Please provide a valid name.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="">Country</label>
            <input type="text" class="form-control" name="country" maxlength="30" required />
            <div class="invalid-feedback">
              Please provide a valid contry.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="">Email</label>
            <input type="email" class="form-control" name="email" maxlength="30" required />
            <div class="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="">Phone</label>
            <input type="tel" class="form-control" name="tel" maxlength="30" required />
            <div class="invalid-feedback">
              Please provide a valid phone.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="">Telegram (optional)</label>
            <textarea class="form-control" minlength="10" name="telegram"></textarea>
            <div class="invalid-feedback">
              Please write at least 10 characters.
            </div>
          </div>

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
        // console.log('valid')
        return
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

</style>
