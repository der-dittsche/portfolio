<template>
  <div class="container">
    <div class="row">
      <h1 class="section__title padd-15">Qualifications</h1>
    </div>
    <div class="row qualifications">
      <div class="qualifications__box">
        <h3 class="section-title">
          <i class="bx bxs-graduation"></i>Education
        </h3>
        <div class="qualifications__box-item bs">
          <div class="timeline">
            <div
              class="timeline-item"
              v-for="edu in qulificationsDetails.education"
              :key="edu.id"
            >
              <div class="timeline-dot"></div>
              <p>{{ edu.date }}</p>
              <p class="section-title">{{ edu.title }}</p>
              <p class="section-subtitle">{{ edu.company }}</p>
              <p>
                {{ edu.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="qualifications__box">
        <h3 class="section-title"><i class="bx bx-buildings"></i>Experience</h3>
        <div class="qualifications__box-item bs">
          <div class="timeline">
            <div
              class="timeline-item"
              v-for="exp in qulificationsDetails.expierience"
              :key="exp.id"
            >
              <div class="timeline-dot"></div>
              <p>{{ exp.date }}</p>
              <p class="section-title">{{ exp.title }}</p>
              <p class="section-subtitle">{{ exp.company }}</p>
              <p>
                {{ exp.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row testimonial">
      <h3 class="section-title">
        What Coulleges and Supervisior says about me
      </h3>
      <div class="testimonial__box">
        <swiper :pagination="true" :modules="modules" class="mySwiper">
          <swiper-slide
            class="testimonial__content swiper-slide"
            v-for="testimonials in testimonial.testimonials"
            :key="testimonials.id"
          >
            <div class="testimonials__box-person">
              <h3 class="section-subtitle">{{ testimonials.name }}</h3>
              <p>{{ testimonials.position }} | {{ testimonials.company }}</p>
            </div>
            <p>
              {{ testimonials.content }}
            </p>
          </swiper-slide>
        </swiper>
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
