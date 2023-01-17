<template>
  <div class="main__content">
    <section class="home section" id="home">
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
    <section class="section contact" id="contact">
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
