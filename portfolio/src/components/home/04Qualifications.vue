<template>
  <div>
    <h2 data-heading="My Journey" class="section__title">Qualifications</h2>
    <div class="qualification__container container grid">
      <div class="education">
        <h3 class="qualification__title">
          <i class="bx bxs-graduation"></i>Education
        </h3>
        <div class="timeline">
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">Vue.js & TypeScript Intensiv-Course</h3>
            <p class="timeline__text">workshops.de</p>
            <p class="timeline__text">
              Construction of webapps in the framework Vue.js based on
              TypeScript
            </p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>2022/11</span
            >
          </div>
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">Web-Developer</h3>
            <p class="timeline__text">Coding Bootcamp Europe</p>
            <p class="timeline__text">
              Develeoping Website based on HTML / CSS / JS | Framework Vue.js |
              Unit and E2E testing with Jest and Cypress
            </p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>since 2022/07</span
            >
          </div>
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">MCITP Enterprise Administrator</h3>
            <p class="timeline__text">FutureTraining</p>
            <p class="timeline__text">
              Administration of MS based client-server-infrastructur
            </p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>2010/06 – 2010/10</span
            >
          </div>
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">
              IHK: IT-System-Kaufmann (Apprenticeship)
            </h3>
            <p class="timeline__text">Deutsche Telekom AG</p>
            <p class="timeline__text">
              Salesman of IT-equipment for business and private user
            </p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>2003/09 – 2006/06</span
            >
          </div>
        </div>
      </div>
      <div class="experience">
        <h3 class="qualification__title">
          <i class="bx bx-briefcase-alt"></i>Experience
        </h3>
        <div class="timeline">
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">Webapp-Developer & IT-Administor</h3>
            <p class="timeline__text">digiblue GmbH</p>
            <p class="timeline__text">
              Deployment and configuration of internal IT infrastructure,
              webapp- development for data visualization in project-related
              customer use-case, project-related communication with customers
            </p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>2021/12 - 2022/12</span
            >
          </div>
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">IT-Administor</h3>
            <p class="timeline__text">
              Indeed Germany | Pieritz select* | RHT | KI-Group GmbH | Jerocom
              GmbH | Hays Professional Solution GmbH | Jar Media GmbH | Job@tive
              |AixConcept GmbH | NetCologne GmbH | Marko-Medien-Dienst GmbH
            </p>
            <p class="timeline__text">
              Administration of MS based infrastructure for business users.
              Usersupport Mac and Windows
            </p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>2019/04 - 2010/07</span
            >
          </div>
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">Service-Technician</h3>
            <p class="timeline__text">Hemmersbach GmbH & Co KG</p>
            <p class="timeline__text">
              Hardware support of 'HP' equipment for business user
            </p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>2010/04 – 2010/06</span
            >
          </div>
          <div class="timeline__item">
            <div class="circle__dot"></div>
            <h3 class="timeline__title">UHD-Employee</h3>
            <p class="timeline__text">
              Comline Computer&Softwarelösungen AG | Ducon Consulting GmbH |
              TechTeam International AG
            </p>
            <p class="timeline__text">Helpdesk support for business user</p>
            <span class="timeline__date"
              ><i class="bx bx-calendar"></i>2010/04 – 2010/06</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="testimonial__contents">
    <h2
      data-heading="What Coulleges and Supervisior says about me"
      class="section__title"
    >
      Testimonials
    </h2>
    <div class="testimonial container grid">
      <div class="testimonial__box">
        <swiper
          :pagination="true"
          :modules="modules"
          :navigation="true"
          class="mySwiper"
        >
          <swiper-slide
            class="testimonial__content swiper-slide"
            v-for="testimonials in testimonial.testimonials"
            :key="testimonials.id"
          >
            <div class="testimonials__box-person">
              <h3 class="section-subtitle">{{ testimonials.name }}</h3>
              <p class="company">
                {{ testimonials.position }} | {{ testimonials.company }}
              </p>
            </div>
            <p>
              <i class="bx bxs-quote-alt-left"></i>
              {{ testimonials.content }}
              <i class="bx bxs-quote-alt-right"></i>
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
import { Navigation } from "swiper";
import { useTestimonialStore } from "@/stores/testimonials.js";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const testimonial = useTestimonialStore();
    return {
      testimonial,
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.qualification__container {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  justify-content: center;
}

.qualification__title {
  font-size: var(--h3-font-size);
  font-family: var(--body-font-600);
  margin-bottom: var(--mb-2);
}

.timeline__item {
  position: relative;
  margin-bottom: var(--mb-2-5);
  padding-left: 3rem;
}
.timeline__item:last-child {
  margin-bottom: 0;
}

.timeline__item::before {
  content: "";
  width: 1px;
  position: absolute;
  left: 0.48rem;
  top: 0;
  height: 100%;
  background-color: var(--skin-color);
}

.circle__dot {
  position: absolute;
  left: 0;
  top: 0;
  height: 1rem;
  width: 1rem;
  border: 2px solid var(--skin-color);
  border-radius: 50%;
  background-color: var(--skin-color);
  transition: 0.3s;
}

.timeline__item:hover .circle__dot {
  background-color: var(--body-color);
}

.timeline__title {
  font-size: var(--normal-font-size);
  margin-bottom: 0;
}

.timeline__text {
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-0-75);
}

.timeline__date {
  display: flex;
  align-items: center;
  column-gap: var(--mb-0-5);
  color: var(--skin-color);
  margin-top: var(--mb-1-5);
}

.testimonial {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: var(--h2-font-size);
}
.testimonial__contents {
  padding-top: 6.5rem;
}
.testimonial .section__title {
  margin-block: 25px;
  font-size: var(--h3-font-size);
  margin-top: var(--biggest-font-size);
}

.testimonial__box {
  margin: auto;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background: var(--bg-black-100);
  border: 1px solid var(--bg-black-50);
  box-shadow: 5px 5px 5px var(--bg-black-50);
  background-color: var(--box-color);
  border-radius: 0.5rem;
}

.testimonial__content p {
  padding-bottom: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
}

.testimonials__box-person {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5rem;
}

.testimonial__box i {
  font-size: var(--h2-font-size);
  color: var(--skin-color);
}

@media screen and (max-width: 912px) {
  .qualification__container {
    grid-template-columns: 1fr;
    gap: var(--biggest-font-size);
  }
}

@media screen and (max-width: 690px) {
  .testimonials__box-person {
    gap: 2rem;
  }
  .testimonial__content p {
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .testimonial__content .company {
    text-align: right;
  }
}
</style>
