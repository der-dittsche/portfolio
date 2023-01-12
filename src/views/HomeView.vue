<template>
  <section id="home">
    <HomeElement />
  </section>
  <section id="about">
    <AboutElement />
  </section>
  <section id="skills">
    <SkillsElement />
  </section>
  <section id="qualifications">
    <QualifiactionElement />
  </section>
  <section id="service">
    <ServiceElement />
  </section>
  <section id="contact">
    <ContactElement />
  </section>
</template>
<script>
import HomeElement from "@/components/home/01Home.vue";
import AboutElement from "@/components/home/02About.vue";
import SkillsElement from "@/components/home/03Skills.vue";
import QualifiactionElement from "@/components/home/04Qualification.vue";
import ServiceElement from "@/components/home/06Service.vue";
import ContactElement from "@/components/home/07Contact.vue";

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
