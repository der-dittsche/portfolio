<template>
  <div>
    <h2 data-heading="My Abilities" class="section__title">Experience</h2>
    <div class="skills__container container grid">
      <div class="skills__tabs">
        <div class="skills__header skills__active" data-target="#devlang">
          <i class="bx bx-code-curly skills__icon"></i>
          <div>
            <h1 class="skills__title">Programming languages</h1>
            <span class="skills__subtitle"
              >in which I develop your website</span
            >
          </div>
          <i class="bx bx-chevron-down skills__arrow"></i>
        </div>
        <div class="skills__header" data-target="#tools">
          <i class="bx bx-wrench skills__icon"></i>
          <div>
            <h1 class="skills__title">Tooling</h1>
            <span class="skills__subtitle">I use for development</span>
          </div>
          <i class="bx bx-chevron-down skills__arrow"></i>
        </div>
        <div class="skills__header" data-target="#softskills">
          <i class="bx bx-support skills__icon"></i>
          <div>
            <h1 class="skills__title">Soft Skills</h1>
            <span class="skills__subtitle">which characterize my work</span>
          </div>
          <i class="bx bx-chevron-down skills__arrow"></i>
        </div>
      </div>
      <div class="skills__content">
        <div class="skills__group skills__active" data-content id="devlang">
          <div class="skills__list grid">
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">HTML</div>
                <span class="skill__number">09/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">CSS</div>
                <span class="skill__number">09/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">JS</div>
                <span class="skill__number">08/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 80%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">MySQL</div>
                <span class="skill__number">08/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 80%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">PHP</div>
                <span class="skill__number">08/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 80%"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="skills__group" data-content id="tools">
          <div class="skills__list grid">
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">VUEjs</div>
                <span class="skill__number">09/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Firebase</div>
                <span class="skill__number">09/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Bootstrap</div>
                <span class="skill__number">09/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Tailwind</div>
                <span class="skill__number">08/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 80%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Node</div>
                <span class="skill__number">07/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 70%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Git</div>
                <span class="skill__number">07/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 70%"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="skills__group" data-content id="softskills">
          <div class="skills__list grid">
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Customer-Support</div>
                <span class="skill__number">10/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 100%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">User training</div>
                <span class="skill__number">9/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Professional communication</div>
                <span class="skill__number">9/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>
            <div class="skills__data">
              <div class="skills__title">
                <div class="skills__name">Teamwork</div>
                <span class="skill__number">8/10</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 80%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tabs = document.querySelectorAll("[data-target]"),
      tabContent = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach((tabContents) => {
          tabContents.classList.remove("skills__active");
        });

        target.classList.add("skills__active");

        tabs.forEach((tab) => {
          tab.classList.remove("skills__active");
        });

        tab.classList.add("skills__active");
      });
    });
  },
};
</script>

<style scoped>
.skills__container {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  justify-content: center;
  min-height: 27vh;
}

.skills__header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.skills__header:not(:last-child) {
  margin-bottom: var(--mb-2-5);
}

.skills__icon,
.skills__arrow {
  font-size: var(--h2-font-size);
  color: var(--skin-color);
}

.skills__icon {
  margin-right: var(--mb-0-75);
}

.skills__title {
  font-size: var(--h3-font-size);
  font-family: var(--body-font-800);
}

.skills__arrow {
  margin-left: auto;
  transform: rotate(-90deg);
}

.skills__active .skills__arrow {
  transform: rotate(0deg);
  transition: 0.3s;
}

.skills [data-content] {
  display: none;
}

.skills__active[data-content] {
  display: block;
}

.skills__list {
  row-gap: var(--h2-font-size);
}

.skills__title {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
}

.skills__name {
  font-size: var(--normal-font-size);
  font-family: var(--body-font-600);
}

.skills__bar,
.skills__percentage {
  height: 5px;
  border-radius: 0.25rem;
}

.skills__bar {
  background-color: var(--box-color);
}

.skills__percentage {
  display: block;
  background-color: var(--skin-color);
}

@media screen and (max-width: 1345px) {
  .skills__container {
    min-height: 22rem;
  }
}

@media screen and (max-width: 912px) {
  .skills__container {
    grid-template-columns: 1fr;
    gap: var(--biggest-font-size);
    min-height: 35rem;
  }
}
</style>
