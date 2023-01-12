<template>
  <div class="container">
    <h1 class="section__header">About</h1>
    <div class="about__box flex">
      <div class="about__box-bio flex">
        <h3 class="section__box-title">Biography</h3>
        <p v-for="details in userDetails.biography" :key="details.id">
          {{ details.content }}
        </p>
      </div>
      <div class="about__box-content flex">
        <div class="about__box-goals flex">
          <div class="goals-icon">
            <i class="bx bx-award"></i>
          </div>
          <h3 class="title">
            Years of<br />
            experience
          </h3>
          <span class="section__subtitle">19+</span>
        </div>
        <div class="about__box-goals flex">
          <div class="goals-icon">
            <i class="bx bx-briefcase"></i>
          </div>
          <h3 class="title">
            Company<br />
            worked
          </h3>
          <span class="section__subtitle">10+</span>
        </div>
        <div class="about__box-goals flex">
          <div class="goals-icon">
            <i class="bx bx-task"></i>
          </div>
          <h3 class="title">
            Realized<br />
            projects
          </h3>
          <span class="section__subtitle">5+ </span>
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

<style>
.about__box,
.about__box-bio,
.about__box-goals {
  flex-direction: column;
}
.about__box {
  min-height: 80vh;
  justify-content: center;
}
.about__box-content {
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 1rem;
}

.about__box-goals {
  text-align: center;
}

.goals-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 50%;
  content: "";
  width: 50px;
  height: 50px;
  background-color: var(--clr-skin);
}
.goals-icon i {
  color: var(--clr-box);
}
</style>
