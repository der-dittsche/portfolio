<template>
  <div>
    <h2 data-heading="Get in touch" class="section__title">Contact me</h2>
    <div class="contact__container container grid">
      <div class="contact__content">
        <div class="contact__info">
          <div class="contact__card">
            <i class="bx bx-envelope contact__card-icon"></i>
            <h3 class="contact__card-title">Mail</h3>
            <span class="contact__card-data">sascha_dietrich@outlook.com</span>
            <span class="contact__button"
              ><a href="mailto:sascha_dietrich@outlook.com">Write me</a
              ><i class="bx bx-right-arrow-alt contact__button-icon"></i
            ></span>
          </div>
          <div class="contact__card">
            <i class="bx bx-phone-call contact__card-icon"></i>
            <h3 class="contact__card-title">Call</h3>
            <span class="contact__card-data">via skype</span>
            <span class="contact__button"
              ><a href="skype:sascha_dietrich@outlook.com?call">Call me</a
              ><i class="bx bx-right-arrow-alt contact__button-icon"></i
            ></span>
          </div>
          <div class="contact__card">
            <i class="bx bx-map contact__card-icon"></i>
            <h3 class="contact__card-title">Location</h3>
            <span class="contact__card-data">Germany(NRW)</span>
          </div>
        </div>
      </div>
      <div class="contact__content">
        <form
          ref="contactform"
          @submit.prevent="sendEmail"
          class="contact__form"
        >
          <div class="input__container">
            <input
              class="input"
              type="text"
              v-model="name"
              name="user_name"
              placeholder="Your Name"
            />
          </div>
          <div class="input__container">
            <input
              class="input"
              type="email"
              v-model="email"
              name="user_email"
              placeholder="Your Email"
            />
          </div>
          <div class="input__container">
            <input
              class="input"
              type="text"
              v-model="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div class="input__container textarea">
            <textarea
              class="input"
              name="user_project"
              v-model="message"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" class="button">
            Send Message<i class="bx bx-right-arrow-alt"></i>
          </button>
        </form>
      </div>
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
<style scoped>
.contact__container {
  grid-template-columns: 300px 1fr;
  column-gap: 3rem;
  justify-content: center;
  align-items: center;
}

.contact__info {
  display: grid;
  row-gap: 1rem;
}

.contact__card {
  background-color: var(--box-color);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}

.contact__card-icon {
  font-size: var(--h1-font-size);
  color: var(--skin-color);
  margin-bottom: var(--mb-0-5);
}

.contact__card-title {
  font-size: var(--small-font-size);
}
.contact__card-data {
  font-size: var(--small-font-size);
}

.contact__card-data {
  display: block;
  margin-bottom: var(--mb-0-75);
}
.contact__button a {
  text-decoration: none;
  color: var(--skin-color);
}

.contact__button {
  color: var(--skin-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
  cursor: pointer;
}

.contact__button-icon {
  font-size: var(--h3-font-size);
  transition: 0.3s;
}

.contact__button:hover .contact__button-icon {
  transform: translateX(0.25rem);
}

.input__container {
  position: relative;
  margin-top: 0.1rem;
  margin-bottom: 1.9rem;
}

.input {
  width: 100%;
  border: 2px solid var(--text-color);
  background-color: transparent;
  padding: 0.6rem 1.2rem;
  color: var(--title-color);
  border-radius: 0.5rem;
  transition: 0.3s;
}

.input__container textarea {
  resize: none;
  height: 7.5rem;
  font-family: inherit;
  font-size: inherit;
}

.contact__content {
  margin-bottom: 6.5rem;
}

@media screen and (max-width: 912px) {
  .contact__container {
    grid-template-columns: 1fr;
    gap: var(--biggest-font-size);
  }
  .contact__card {
    width: 75%;
    justify-self: center;
  }
  .contact__card-title {
    font-size: var(--h3-font-size);
  } /*   
  .contact__card-data {
    font-size: var(--normal-font-size);
  } */
}
</style>
