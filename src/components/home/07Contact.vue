<template>
  <div class="container">
    <h1 class="section__header">Contact me</h1>
    <div class="contact__box">
      <p class="section__box-title">Do you have any Questions ?</p>
      <div class="contact__box-element">
        <div class="contact__box-items flex">
          <div class="contact__item flex c-w50">
            <div class="goals-icon"><i class="bx bxl-skype"></i></div>
            <h3 class="title">Take a Call</h3>
            <p class="text">
              <a href="skype:cid.1869f0d5856aba85?call">via Skype</a>
            </p>
          </div>
          <div class="contact__item flex c-w50">
            <div class="goals-icon"><i class="bx bx-location-plus"></i></div>
            <h3 class="section__box-title">Location</h3>
            <p class="text">Germany - Region Ostwestfalen Lippe</p>
          </div>
          <div class="contact__item flex c-w50">
            <div class="goals-icon"><i class="bx bx-envelope"></i></div>
            <h3 class="section__box-title">E-Mail</h3>
            <p class="text">sascha_dietrich(at)outlook.com</p>
          </div>
          <div class="contact__item flex c-w50">
            <div class="goals-icon"><i class="bx bx-window"></i></div>
            <h3 class="section__box-title">Website</h3>
            <p class="text">der-dittsche.de</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact__box-element">
      <form
        ref="contactform"
        @submit.prevent="sendEmail"
        class="contact__form flex"
      >
        <div class="flex">
          <input
            class="form__controll w50"
            type="text"
            v-model="name"
            name="user_name"
            placeholder="Your Name"
          />
          <input
            class="form__controll w50"
            type="email"
            v-model="email"
            name="user_email"
            placeholder="Your Email"
          />
        </div>
        <input
          class="form__controll"
          type="text"
          v-model="subject"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          class="form__controll"
          name="user_project"
          v-model="message"
          placeholder="Message"
        ></textarea>
        <button type="submit">
          Submit<i class="bx bx-right-arrow-alt"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  components: {},
  setup() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      const form = this.$refs.contactform;
      emailjs
        .sendForm(
          "service_pvkjntj",
          "template_6ytyosq",
          form,
          "DsZHBt1lwbMV_UDGP"
        )
        .then(
          () => {},
          (error) => {
            alert("Something has failed...." + { error });
          }
        );
    },
  },
};
</script>
<style>
#contact .title:first-child,
#contact .subtitle {
  text-align: center;
}
#contact .title:first-child {
  padding-top: 1rem;
  font-size: var(--h2-font-size);
}
#contact .subtitle {
  font-size: var(--h1-font-size);
  font-weight: var(--font-semibold);
}
.contact__box {
  flex-direction: column;
  text-align: center;
}
.contact__box-element {
  flex-direction: column;
  align-items: center;
}
.contact__box-items {
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
}
.contact__box-items .title {
  margin-bottom: 0;
}
.contact__item {
  flex-direction: column;
  align-items: center;
}
.contact__form {
  flex-direction: column;
  gap: 1.5rem;
}
.form__controll {
  background-color: var(--clr-box-sh);
  border-radius: 1rem;
  padding: 1rem;
}
.form__controll:focus {
  box-shadow: 1px 1px 5px var(--clr-text), -1px 1px 5px var(--clr-text),
    -1px -1px 5px var(--clr-text), 1px -1px 5px var(--clr-text);
}
.contact__form .flex {
  gap: 1.5rem;
}

#contact form textarea {
  resize: none;
  height: 150px;
  color: var(--clr-text);
}

.w50 {
  width: 50%;
}
@media screen and (max-width: 900px) {
  .contact__form .flex {
    flex-direction: column;
  }
  .w50 {
    width: 100% !important;
  }
}
</style>
