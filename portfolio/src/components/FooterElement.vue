<template>
  <div class="footer">
    <div class="footer__container container grid">
      <div>
        <h1 class="footer__title">Sascha Dietrich</h1>
        <p class="footer__subtitle">Webapp Developer</p>
      </div>

      <ul class="footer__links">
        <li><a href="/#/#skills">Skills</a></li>
        <li><a href="/#/#qualifications">Qualifications</a></li>
        <li><a href="/#/#service">Service</a></li>
      </ul>
      <div class="footer__box-socials">
        <a
          href="https://github.com/dreadderino1987"
          target="_blank"
          class="footer__social"
          ><i class="bx bxl-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/webdev-sdietrich/"
          target="_blank"
          class="footer__social"
          ><i class="bx bxl-linkedin"></i
        ></a>
      </div>
    </div>
    <p class="footer__box-copyright">
      &#169; Dreaddies-Net.work All rights reserved
    </p>
  </div>
</template>
<style scoped>
.footer__container {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.6rem;
}

.footer {
  background-color: var(--box-color);
  padding: 3rem 0 3.5rem;
}

.footer__title {
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-5);
}

.footer__subtitle {
  font-size: var(--small-font-size);
}

.footer__links {
  display: flex;
  justify-self: center;
  column-gap: 2rem;
}

.footer__links a {
  color: var(--text-color);
}

.footer__links a:hover {
  color: var(--skin-color);
}

.footer__box-socials {
  justify-self: flex-end;
}
.footer__social {
  font-size: var(--h2-font-size);
  color: var(--text-color);
  padding-left: 2rem;
}
.footer__social:hover {
  color: var(--skin-color);
}

.footer__box-copyright {
  font-size: var(--smaller-font-size);
  text-align: center;
  margin-top: 4.5rem;
}
@media screen and (max-width: 690px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: var(--biggest-font-size);
  }
}
</style>
