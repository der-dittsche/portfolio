<template>
  <div
    class="main__container"
    :class="{
      [currentTheme]: true,
      lightmode: lightmode,
      darkmode: darkmode,
    }"
  >
    <header class="aside" :class="{ togglenav: togglenav }">
      <div class="nav__logo">
        <a href="/home/" class="nav__logo-text">S.<span>Dietrich</span></a>
      </div>
      <div class="nav__toggler" @click="toggleNav()">
        <i class="bx bx-menu" :class="{ hidden: togglenav }"></i>
        <i class="bx bx-x" :class="{ hidden: !togglenav }"></i>
      </div>
      <nav>
        <NavbarElement :navLinks="navLinks" @sending-start="getToggleStatus" />
        <div class="nav__menu-sec">
          <div class="nav__menu-social">
            <ul class="flex">
              <li>
                <a href="https://www.linkedin.com/in/webdev-sdietrich/"
                  >LinkedIn</a
                >
              </li>
              <li>
                <a href="https://github.com/dreadderino1987"> Github</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <FooterElement />
    </footer>
    <div class="element" :class="{ open: isOpen }">
      <div class="element__toggler s-icon" @click="toggleColor()">
        <i class="bx bx-cog bx-spin bx-flip-vertical"></i>
      </div>
      <div class="element__icon s-icon">
        <i
          class="bx bx-moon"
          :class="{ hidden: darkmode }"
          @click="setDark()"
        ></i>
        <i
          class="bx bx-sun"
          :class="{ hidden: lightmode }"
          @click="setLight()"
        ></i>
      </div>
      <h4>Colors</h4>
      <div class="colors">
        <span class="ctoggle color-1" @click="setActiveStyle('color1')"></span>
        <span class="ctoggle color-2" @click="setActiveStyle('color2')"></span>
        <span class="ctoggle color-3" @click="setActiveStyle('color3')"></span>
        <span class="ctoggle color-4" @click="setActiveStyle('color4')"></span>
        <span class="ctoggle color-5" @click="setActiveStyle('color5')"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import NavbarElement from "@/components/NavbarElement.vue";
import FooterElement from "@/components/FooterElement.vue";
import { ref } from "vue";
export default {
  components: {
    RouterView,

    NavbarElement,
    FooterElement,
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
    isOpen: ref(false),
    darkmode: ref(false),
    lightmode: ref(true),
    currentTheme: "color1",
  }),
  methods: {
    getToggleStatus() {
      this.togglenav = !this.togglenav;
    },
    toggleNav() {
      this.togglenav = !this.togglenav;
    },
    toggleColor() {
      this.isOpen = !this.isOpen;
    },
    setDark() {
      this.darkmode = true;
      this.lightmode = false;
    },
    setLight() {
      this.darkmode = false;
      this.lightmode = true;
    },
    setActiveStyle(name) {
      this.currentTheme = name;
      this.toggleColor();
    },
  },
};
</script>
