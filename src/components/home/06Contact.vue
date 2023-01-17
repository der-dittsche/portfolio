<template>
  <div class="container">
    <div class="row">
      <h1 class="section__title padd-15">Contact</h1>
    </div>
    <div class="row contact">
      <form ref="contactform" @submit.prevent="sendEmail" class="contact__form">
        <div class="form__1strow">
          <input
            class="form__controll"
            type="text"
            v-model="name"
            name="user_name"
            placeholder="Your Name"
          />
          <input
            class="form__controll"
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
