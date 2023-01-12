<template>
  <div class="container">
    <h1 class="section__header">Skills</h1>
    <div class="skills__box flex">
      <div class="skills__box-content flex">
        <h3 class="section__box-title">
          <i class="bx bx-code"></i>Development Language
        </h3>
        <div class="skills__box-part flex">
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/html-1.svg"
                alt="HTML Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h4 class="skills__name">HTML 5</h4>
              <p class="text">Intermediate</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/css-3.svg"
                alt="CSS Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h4 class="skills__name">CSS 3</h4>
              <p class="text">Intermediate</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/javascript-1.svg"
                alt="JavaScript Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h4 class="skills__name">JS</h4>
              <p class="text">Advanced</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/mysql-6.svg"
                alt="MySql Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h4 class="skills__name">MySQL</h4>
              <p class="text">Advanced</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/php-1.svg"
                alt="PHP Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h4 class="skills__name">PHP</h4>
              <p class="text">Advanced</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skills__box-content flex">
        <h3 class="section__box-title"><i class="bx bx-wrench"></i>Tooling</h3>

        <div class="skills__box-part flex">
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/vue-9.svg"
                alt="VueJS Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h3 class="skills__name">Vue JS</h3>
              <p class="text">Intermediate</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/firebase-1.svg"
                alt="Firebase Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h3 class="skills__name">Firebase</h3>
              <p class="text">Intermediate</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/bootstrap-5-1.svg"
                alt="Bootstrap Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h3 class="skills__name">Bootstrap</h3>
              <p class="text">Advanced</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/tailwind-css-2.svg"
                alt="Tailwind Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h3 class="skills__name">Tailwind</h3>
              <p class="text">Advanced</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/nodejs-1.svg"
                alt="Node Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h3 class="skills__name">Node</h3>
              <p class="text">Advanced</p>
            </div>
          </div>
          <div class="flex-data flex">
            <div class="skills__img-box bs">
              <img
                src="@/assets/img/git-icon.svg"
                alt="Git Logo"
                class="skills__img"
              />
            </div>
            <div>
              <h3 class="skills__name">Git</h3>
              <p class="text">Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.skills__box {
  flex-direction: column;
  gap: 4rem;
}
.skills__box-content {
  flex-direction: column;
  align-items: center;
}
.skills__box-part {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.flex-data {
  max-width: 30%;
}
.skills__img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 200px;
  border-radius: 25px;
  margin-block: 2.5rem;
}
.skills__img {
  width: 100px;
}
@media screen and (min-width: 650px) {
  .skills__box-part {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
}
</style>
