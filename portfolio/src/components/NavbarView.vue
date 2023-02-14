<template>
  <ul class="nav__list">
    <li v-for="(linkItem, index) in navLinks" :key="index" class="nav__item">
      <RouterLink
        :to="linkItem.path"
        @click="sendData"
        class="nav__link"
        :class="{ 'active-link': linkItem.id === helpers.currentSection }"
      >
        <i :class="linkItem.icon"></i>{{ linkItem.text }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import { RouterLink } from "vue-router";
import { useHelperStore } from "@/stores/helpers.js";

export default {
  setup() {
    const helpers = useHelperStore();
    return {
      helpers,
    };
  },
  components: {
    RouterLink,
  },

  props: {
    navLinks: {
      default: "",
    },
  },
  methods: {
    sendData() {
      this.$emit("sending-start");
    },
  },
  mounted() {
    console.log(this.navLinks);
  },
};
</script>
