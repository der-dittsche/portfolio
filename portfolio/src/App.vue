<template>
  <div class="nav__toggler" @click="toggleNav()">
    <i class="bx bx-menu nav__toggle" :class="{ hidden: togglenav }"></i>
    <i class="bx bx-x nav__close" :class="{ hidden: !togglenav }"></i>
  </div>
  <aside class="sidebar" :class="{ togglenav: togglenav }" id="sidebar">
    <nav class="nav">
      <div class="nav__logo">
        <a href="#" class="nav__logo-text">SD</a>
      </div>
      <div class="nav__menu">
        <div class="menu">
          <NavbarView :navLinks="navLinks" @sending-start="getToggleStatus" />
        </div>
      </div>
    </nav>
  </aside>

  <main>
    <RouterView />
    <footer>
      <FooterView />
    </footer>
  </main>
</template>
<script>
import { RouterView } from "vue-router";
import NavbarView from "./components/NavbarView.vue";
import FooterView from "@/components/FooterElement.vue";
import { ref } from "vue";
export default {
  components: {
    RouterView,
    NavbarView,
    FooterView,
  },
  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/#home",
        icon: "bx bx-home",
      },
      {
        text: "About",
        path: "/#about",
        icon: "bx bx-user",
      },
      {
        text: "Skills",
        path: "/#skills",
        icon: "bx bx-bulb",
      },
      {
        text: "Qualifications",
        path: "/#qualifications",
        icon: "bx bx-book",
      },
      {
        text: "Service",
        path: "/#service",
        icon: "bx bx-briefcase-alt-2",
      },
      {
        text: "Contact",
        path: "/#contact",
        icon: "bx bx-message-square-dots",
      },
    ],
    togglenav: ref(false),
  }),
  methods: {
    getToggleStatus() {
      this.togglenav = !this.togglenav;
    },
    toggleNav() {
      this.togglenav = !this.togglenav;
    },
  },
  mounted() {
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      let scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHight;
        const sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "] ")
            .classList.remove("active-link");
        }
      });
    }
  },
};
</script>
