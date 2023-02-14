<template>
  <div class="main__content">
    <section class="home" id="home">
      <HomeElement />
    </section>
    <section class="about section" id="about">
      <AboutElement />
    </section>
    <section class="skills section" id="skills">
      <SkillsElement />
    </section>
    <section class="qualifications section" id="qualifications">
      <QualifiactionElement />
    </section>
    <section class="service section" id="service">
      <ServiceElement />
    </section>
    <section class="contact section" id="contact">
      <ContactElement />
    </section>
  </div>
</template>

<script>
import HomeElement from "@/components/home/01Home.vue";
import AboutElement from "@/components/home/02About.vue";
import SkillsElement from "@/components/home/03Skills.vue";
import QualifiactionElement from "@/components/home/04Qualifications.vue";
import ServiceElement from "@/components/home/05Service.vue";
import ContactElement from "@/components/home/06Contact.vue";

export default {
  components: {
    HomeElement,
    AboutElement,
    SkillsElement,
    QualifiactionElement,
    ServiceElement,
    ContactElement,
  },
};
</script>
<style scoped>
.home {
  background: url("../assets/img/sd_main.png");
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
@media screen and (max-width: 1400px) {
  .home {
    background-image: none;
    height: initial;
    align-items: initial;
    padding: 7rem 0 2rem;
  }
}
</style>
