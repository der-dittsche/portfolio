<template>
  <div>
    <h2 data-heading="My Intro" class="section__title">About Me</h2>
    <div class="about__container container grid">
      <img src="../../assets/img/sd_about1.jpg" alt="" class="about__img" />
      <div class="about__data">
        <h3 class="about__heading">
          Hi, I'm Sascha Dietrich, <br />based in OWL Germany(NRW)
        </h3>
        <p class="about__description">
          After I finished my education, I worked as an IT administrator for 15
          years. I got a deep insight into all server technologies. It was a
          great feeling to solve the problems of my users and meet the
          requirements of the customers.
        </p>
        <p class="about__description">
          In my last job I got to know the field of sensor-based monitoring and
          was responsible for the visualization of data for our customers. In
          order to expand my knowledge, I decided to participate in a further
          education in the field of webapp development (in the summer of 2022).
        </p>
        <p class="about__description">
          Through this I discovered my even greater passion for website
          development. From now on I’m going to implement projects exclusively
          in this area in the future.
        </p>
        <div class="about__info grid">
          <div class="about__box">
            <i class="bx bx-award about__icon"></i>
            <h3 class="about__title">Years of experience</h3>
            <span class="about__subtitle">19+</span>
          </div>
          <div class="about__box">
            <i class="bx bx-briefcase-alt-2 about__icon"></i>
            <h3 class="about__title">Company worked</h3>
            <span class="about__subtitle">10+</span>
          </div>
          <div class="about__box">
            <i class="bx bx-layout about__icon"></i>
            <h3 class="about__title">Realized projects</h3>
            <span class="about__subtitle">5+</span>
          </div>
        </div>
        <a href="#/#contact" class="button"
          ><i class="bx bx-navigation"></i>Contact Me</a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.about__container {
  min-width: 80%;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
  align-items: center;
}

.about__img {
  width: 480px;
  border-radius: 1.5rem;
  justify-self: center;
}

.about__heading {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-75);
}

.about__description {
  text-align: justify;
  margin-bottom: var(--mb-2);
}

.about__info {
  grid-template-columns: repeat(3, 140px);
  column-gap: var(--h2-font-size);
  margin-bottom: var(--mb-3);
}

.about__box {
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  background-color: var(--box-color);
}

.about__icon {
  font-size: var(--h2-font-size);
  color: var(--skin-color);
  margin-bottom: var(--mb-0-75);
}

.about__title {
  font-size: var(--small-font-size);
  font-family: var(--body-font-400);
}

.about__subtitle {
  font-size: var(--smaller-font-size);
  font-family: var(--body-font-400);
}

@media screen and (max-width: 912px) {
  .about__container {
    grid-template-columns: 1fr;
    gap: var(--biggest-font-size);
  }
  .about__data {
    text-align: center;
  }
  .about__info {
    width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 690px) {
  .about__info {
    grid-template-columns: 1fr;
    gap: var(--biggest-font-size);
    margin-bottom: var(--mb-3);
  }
  .about__box {
    width: 75%;
    justify-self: center;
  }
}
</style>
