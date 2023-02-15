<template>
  <div class="main__content">
    <section
      v-for="section in sectionsData"
      :key="section.id"
      ref="sections"
      class="section"
      :class="section.id"
      :id="section.id"
    >
      <component :is="section.component"></component>
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
import { useHelperStore } from "@/stores/helpers.js";

export default {
  components: {
    HomeElement,
    AboutElement,
    SkillsElement,
    QualifiactionElement,
    ServiceElement,
    ContactElement,
  },
  data() {
    return {
      sectionsData: [
        {
          id: "home",
          component: "HomeElement",
        },
        {
          id: "about",
          component: "AboutElement",
        },
        {
          id: "skills",
          component: "SkillsElement",
        },
        {
          id: "qualification",
          component: "QualifiactionElement",
        },
        {
          id: "service",
          component: "ServiceElement",
        },
        {
          id: "contact",
          component: "ContactElement",
        },
      ],
    };
  },
  setup() {
    const helpers = useHelperStore();
    return {
      helpers,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.onScroll();
    });
    console.log(this.$refs.sections);
  },
  methods: {
    onScroll() {
      let scrollY = window.pageYOffset;
      this.$refs.sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 20,
          sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.helpers.currentSection = sectionId;
        }
      });
    },
  },
};
</script>
<style scoped>
.home {
  background: url("../assets/img/bg_main.jpg");
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
@media screen and (max-width: 1400px) {
  .home {
    /* background-image: none; */
    height: initial;
    align-items: initial;
    padding: 7rem 0 2rem;
  }
}
</style>
