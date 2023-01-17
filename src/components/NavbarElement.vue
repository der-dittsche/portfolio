<template>
  <ul class="nav__menu">
    <li v-for="(linkItem, index) in navLinks" :key="index" class="nav__item">
      <RouterLink :to="linkItem.path" @click="sendData">
        <i :class="linkItem.icon"></i>{{ linkItem.text }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
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
};
</script>
