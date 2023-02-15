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
        id: "home",
      },
      {
        text: "About",
        path: "/#about",
        icon: "bx bx-user",
        id: "about",
      },
      {
        text: "Skills",
        path: "/#skills",
        icon: "bx bx-bulb",
        id: "skills",
      },
      {
        text: "Qualifications",
        path: "/#qualification",
        icon: "bx bx-book",
        id: "qualification",
      },
      {
        text: "Service",
        path: "/#service",
        icon: "bx bx-briefcase-alt-2",
        id: "service",
      },
      {
        text: "Contact",
        path: "/#contact",
        icon: "bx bx-message-square-dots",
        id: "contact",
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
  mounted() {},
};
</script>
