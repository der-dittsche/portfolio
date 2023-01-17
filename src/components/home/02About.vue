<template>
  <div class="container">
    <div class="row">
      <h1 class="section__title padd-15">About</h1>
    </div>
    <div class="row">
      <div class="about__box padd-15">
        <div class="row">
          <div class="about__box-bio padd-15">
            <h3 class="section-title">Biography</h3>
            <p v-for="details in userDetails.biography" :key="details.id">
              {{ details.content }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="about__box-content">
            <div class="about__box-goals">
              <div class="goals-icon">
                <i class="bx bx-award"></i>
              </div>
              <h3 class="section-subtitle">Years of experience</h3>
              <span class="about-years">19+</span>
            </div>
            <div class="about__box-goals">
              <div class="goals-icon">
                <i class="bx bx-briefcase"></i>
              </div>
              <h3 class="section-subtitle">Company worked</h3>
              <span class="about-years">10+</span>
            </div>
            <div class="about__box-goals">
              <div class="goals-icon">
                <i class="bx bx-task"></i>
              </div>
              <h3 class="section-subtitle">Realized projects</h3>
              <span class="about-years">5+ </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "@/stores/userdata.js";
export default {
  setup() {
    const userDetails = useDataStore();
    return { userDetails };
  },
};
</script>
