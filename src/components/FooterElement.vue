<template>
  <div class="container">
    <section id="footer">
      <p class="section__box-title">Sascha Dietrich</p>
      <p class="subtitle">Webapp Developer</p>
      <div class="footer__box flex">
        <ul class="footer__box-links flex">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#qualifications">Qualifications</a></li>
          <li><a href="#service">Service</a></li>
        </ul>
        <div class="footer__box-socials flex">
          <a href="https://github.com/dreadderino1987"
            ><i class="bx bxl-github"></i
          ></a>
          <a href="https://www.linkedin.com/in/webdev-sdietrich/"
            ><i class="bx bxl-linkedin"></i
          ></a>
        </div>
        <span class="section__subtitle">
          &#169; Copyright Dreaddies-Net.work <br />
          All rights reserved
        </span>
      </div>
    </section>
  </div>
</template>
<style scoped>
footer .container {
  min-height: fit-content;
  text-align: center;
}
.footer__box {
  flex-direction: column;
}
.subtitle {
  position: relative;
  top: -2.25rem;
}
.footer__box-links {
  justify-content: center;
  gap: 1.5rem;
  padding-block: 2rem;
  padding-left: 0;
}
.footer__box-socials {
  justify-content: center;
  gap: 3rem;
  padding-bottom: 2rem;
}
.footer__box span {
  font-size: var(--tiny-font-size);
}

@media screen and (min-width: 900px) {
  .footer__box {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
  }
  .footer__box-links {
    padding: 0;
  }
}
</style>
