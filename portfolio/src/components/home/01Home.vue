<template>
  <div class="home__container container grid">
    <div class="home__social">
      <span class="home__social-follow">Follow Me</span>
      <div class="home__social-links">
        <a
          href="https://www.linkedin.com/in/webdev-sdietrich/"
          target="_blank"
          class="home__social-link"
          ><i class="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/dreadderino1987"
          target="_blank"
          class="home__social-link"
          ><i class="bx bxl-github"></i>
        </a>
      </div>
    </div>
    <img src="" alt="" class="home__img" />
    <div class="home__data">
      <h1 class="home__title">Hi,I'm Sascha</h1>
      <h3 class="home__subtitle">Webapp-Developer</h3>
      <p class="home__description">
        I'm a passionate about designing modern web-interfaces
      </p>
      <a href="#/#about" class="button"
        ><i class="bx bx-user button__icon"></i>More about me</a
      >
    </div>
    <!-- <div class="my__info">
      <div class="info__item">
        <i class="bx bx-envelope info-icon"></i>
        <div>
          <h3 class="info__title">Mail</h3>
          <span class="info__subtitle">sascha_dietrich@outlook.com</span>
        </div>
      </div>
      <div class="info__item"></div>
    </div> -->
  </div>
</template>
<style scoped>
.home__container {
  position: relative;
  height: 100%;
  align-items: center;
}
.home__social {
  position: absolute;
  top: 1.8rem;
  left: 0;
  display: flex;
  align-items: center;
  column-gap: 3.5rem;
  color: hsl(52, 100%, 92%);
}

.home__social-follow {
  font-family: var(--body-font-800);
  position: relative;
  font-size: var(--h1-font-size);
}

.home__social-follow::after {
  content: "";
  position: absolute;
  width: 1rem;
  height: 2px;
  background-color: hsl(52, 100%, 92%);
  right: -18%;
  top: 50%;
}

.home__social-links {
  display: inline-flex;
  column-gap: 1rem;
}

.home__social-link {
  font-size: var(--h1-font-size);
  color: hsl(52, 100%, 92%);

  transition: 0.4s;
}

.home__social-link:hover {
  transform: translateY(0.25rem);
}

.home__title {
  font-size: 3.5rem;
  letter-spacing: 4px;
  text-shadow: 2px 2px 5px hsl(52, 100%, 92%);
}

.home__subtitle {
  font-size: var(--h1-font-size);
  font-family: var(--body-font-600);
  margin-bottom: var(--mb-0-75);
  color: hsl(52, 100%, 92%);
  text-shadow: 2px 2px 5px black;
}

.home__description {
  min-width: 250px;
  margin-bottom: var(--mb-2);
  font-size: var(--h2-font-size);
  font-family: var(--body-font-600);
  text-shadow: 2px 2px 5px hsl(52, 100%, 92%);
}

.my__info {
  display: flex;
  column-gap: 1.8rem;
  position: absolute;
  left: 0;
  bottom: 1.8rem;
}

.info__item {
  display: flex;
  align-items: center;
}

.info__title,
.info__subtitle {
  font-size: var(--small-font-size);
}

.info__title {
  font-family: var(--body-font-600);
}

.info-icon {
  font-size: var(--h1-font-size);
  color: var(--skin-color);
  margin-right: var(--mb-0-75);
}
.home__img {
  display: none;
}

@media screen and (max-width: 1400px) {
  .home__img {
    display: block;
    max-width: 80%;
    max-height: 40vh;
    justify-self: center;
  }
  .home__container {
    min-height: 100vh;
    row-gap: 2rem;
  }

  .home__social {
    left: initial;
    right: -1rem;
    flex-direction: column;
    row-gap: 3.5rem;
  }
  .my__info {
    display: none;
  }
  .home__social {
    padding-right: 2.5rem;
  }
  .home__social-follow {
    transform: rotate(90deg);
  }
  .home__social-links {
    flex-direction: column;
    row-gap: 2.5rem;
    padding-top: 3rem;
  }
}
@media screen and (max-width: 1345px) {
  .home__data {
    text-align: center;
  }
  .home__description {
    max-width: 100%;
  }
}

@media screen and (min-width: 390px) {
  .home__title {
    font-size: 5.5rem;
    letter-spacing: 0px;
  }
}
</style>
