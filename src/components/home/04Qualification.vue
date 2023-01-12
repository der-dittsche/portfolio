<template>
  <div class="container">
    <h1 class="section__header">Qualifications</h1>
    <div class="qualifications__box flex">
      <div class="qualifications__box-content flex">
        <h3 class="section__box-title">
          <i class="bx bxs-graduation"></i>Education
        </h3>
        <div class="qualifications__box-item flex bs">
          <div class="timeline">
            <div
              class="timeline-item"
              v-for="edu in qulificationsDetails.education"
              :key="edu.id"
            >
              <div class="circle-dot"></div>
              <p class="timeline-date">{{ edu.date }}</p>
              <p class="timeline-title">{{ edu.title }}</p>
              <p class="timeline-subtitle">{{ edu.company }}</p>
              <p class="timeline__text">
                {{ edu.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="qualifications__box-content flex">
        <h3 class="section__box-title">
          <i class="bx bx-buildings"></i>Experience
        </h3>
        <div class="qualifications__box-item flex bs">
          <div class="timeline">
            <div
              class="timeline-item"
              v-for="exp in qulificationsDetails.expierience"
              :key="exp.id"
            >
              <div class="circle-dot"></div>
              <p class="timeline-date">{{ exp.date }}</p>
              <p class="timeline-title">{{ exp.title }}</p>
              <p class="timeline-subtitle">{{ exp.company }}</p>
              <p class="timeline__text">
                {{ exp.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="testimonial">
      <div class="testimonial flex">
        <p class="section__box-title">
          What Coulleges and Supervisior says about me
        </p>
        <div class="testimonial-box">
          <swiper :pagination="true" :modules="modules" class="mySwiper">
            <swiper-slide
              class="testimonial__content swiper-slide"
              v-for="testimonials in testimonial.testimonials"
              :key="testimonials.id"
            >
              <div class="testimonials-person">
                <h3 class="testimonials-name">{{ testimonials.name }}</h3>
                <p class="section__text">
                  {{ testimonials.position }} | {{ testimonials.company }}
                </p>
              </div>
              <p class="section__text">
                {{ testimonials.content }}
              </p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import { useDataStore } from "@/stores/userdata.js";
import { useTestimonialStore } from "@/stores/testimonials.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const qulificationsDetails = useDataStore();
    const testimonial = useTestimonialStore();
    return {
      qulificationsDetails,
      testimonial,
      modules: [Pagination],
    };
  },
};
</script>
<style>
.qualifications__box {
  flex-direction: column;
}

.qualifications__box-content {
  flex-direction: column;
  align-items: center;
}
.qualifications__box-item {
  flex-direction: column;
  padding: var(--h2-font-size);
  border-radius: var(--h2-font-size);
  margin-bottom: 4rem;
  width: 100%;
  max-width: 820px;
}
.timeline {
  width: 100%;
  position: relative;
}
.timeline-item {
  position: relative;
  padding-left: 37px;
  padding-bottom: 1rem;
}
.timeline-item:last-child {
  padding-bottom: 2rem;
}
.timeline-item::before {
  content: "";
  width: 1px;
  position: absolute;
  height: 110%;

  left: 7px;
  background-color: var(--clr-skin);
}
.timeline-item:last-child::before {
  height: 0px;
}
.circle-dot {
  position: absolute;
  left: -2px;
  top: 0px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: var(--clr-skin);
}
.timeline-date {
  font-size: var(--normal-font-size);
}
.testimonials-name,
.timeline-title {
  font-size: var(--h2-font-size);
  font-weight: bold;
  margin-bottom: 0;
}
.timeline-subtitle {
  font-size: var(--smaller-font-size);
  color: var(--clr-skin);
  margin-top: 0;
}
.timeline__text {
  font-weight: var(--font-semibold);
}
.testimonial {
  margin: auto;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
}
.swiper-slide {
  padding-bottom: 1rem;
}
.testimonials-person {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5rem;
}
.testimonial-box {
  margin: auto;
  width: 100%;
}
</style>
