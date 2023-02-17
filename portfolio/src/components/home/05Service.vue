<template>
  <div>
    <h2 data-heading="Services" class="section__title">What I offer</h2>
    <div class="services__container container grid">
      <div class="service__content">
        <div>
          <div class="service__click">
            <div class="services__icon">
              <i class="bx bx-code-alt service__icon"></i>
              <i class="bx bx-terminal service__icon"></i>
            </div>
            <h3 class="services__title">
              Development &<br />
              Testing
            </h3>
          </div>

          <span class="services__button">
            View more <i class="bx bx-chevron-right services__button-icon"></i
          ></span>
        </div>
        <div class="services__modal">
          <div class="services__modal-content">
            <i class="bx bx-x services__modal-close"></i>
            <h3 class="services__modal-title">Development & Testing</h3>
            <p class="services__modal-description">
              Your website will be implemented with the latest standards of
              programming
            </p>
            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">
                  Using modern Frameworks like VueJs
                </p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">E2E Testing with Cypress</p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">Unit Testing with Jest</p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">
                  Implementing development and production procedure with Git
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="service__content">
        <div>
          <div class="service__click">
            <div class="services__icon">
              <i class="bx bx-layout service__icon"></i>
              <i class="bx bx-image service__icon"></i>
            </div>
            <h3 class="services__title">
              Layout &<br />
              Design
            </h3>
          </div>
          <span class="services__button">
            View more <i class="bx bx-chevron-right services__button-icon"></i
          ></span>
        </div>
        <div class="services__modal">
          <div class="services__modal-content">
            <i class="bx bx-x services__modal-close"></i>
            <h3 class="services__modal-title">Layout & Design</h3>
            <p class="services__modal-description">
              Professional implementation of your ideas and wishes for your
              website
            </p>
            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">
                  Realize your Design from Figma
                </p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">I create user interfaces</p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">
                  I position your company brand
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="service__content">
        <div>
          <div class="service__click">
            <div class="services__icon">
              <i class="bx bx-cloud service__icon"></i>
              <i class="bx bxs-devices service__icon"></i>
              <i class="bx bx-cog service__icon"></i>
            </div>
            <h3 class="services__title">
              Development &<br />
              Testing
            </h3>
          </div>
          <span class="services__button">
            View more<i class="bx bx-chevron-right services__button-icon"></i>
          </span>
        </div>
        <div class="services__modal">
          <div class="services__modal-content">
            <i class="bx bx-x services__modal-close"></i>
            <h3 class="services__modal-title">Hosting & Administration</h3>
            <p class="services__modal-description">
              Technical support for your complete website infrastructure
            </p>
            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">Hosting of your Website</p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">
                  Administration of users, storage and mail-service
                </p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">
                  Webserver configuration on Linuxserver with Apache
                </p>
              </li>
              <li class="services__modal-service">
                <i class="bx bx-check services__modal-icon"></i>
                <p class="services__modal-info">
                  Cloud integration for example in AWS, Firebase or Azure
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".service__click"),
      modalCloses = document.querySelectorAll(".services__modal-close");

    let modal = function (modalClick) {
      modalViews[modalClick].classList.add("active-modal");
    };

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i);
      });
    });

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove("active-modal");
        });
      });
    });
  },
};
</script>

<style scoped>
.services__container {
  grid-template-columns: repeat(3, 250px);
  justify-content: center;
  column-gap: var(--h2-font-size);
}

.service__content {
  position: relative;
  background-color: var(--box-color);
  padding: 5rem 2rem 3rem 2rem;
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;
}

.services__icon {
  display: flex;
  justify-content: center;
  margin-bottom: var(--mb-1);
  gap: 0.5rem;
}

.service__icon {
  display: block;
  font-size: var(--h1-font-size);
  color: var(--skin-color);
}

.services__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
}

.services__button {
  color: var(--skin-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
  cursor: pointer;
}

.services__button-icon {
  font-size: var(--h3-font-size);
  transition: 0.3s;
}

.services__button:hover .services__button-icon {
  transform: translateX(0.25rem);
}

.services__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}

.active-modal {
  opacity: 1;
  visibility: visible;
}

.services__modal-content {
  width: 500px;
  position: relative;
  background-color: var(--box-color);
  padding: 4.5rem 2.5rem 2.5rem;
  border-radius: 0.5rem;
}

.services__modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: var(--h2-font-size);
  color: var(--skin-color);
  cursor: pointer;
}

.services__modal-title {
  text-align: center;
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
}
.services__modal-description {
  text-align: center;
  font-size: var(--small-font-size);
  padding: 0 3.5rem;
  margin-bottom: var(--mb-2);
}

.services__modal-services {
  row-gap: var(--mb-0-75);
}

.services__modal-service {
  display: flex;
  column-gap: 0.5rem;
}

.services__modal-icon {
  color: var(--skin-color);
  font-size: var(--h3-font-size);
}
.services__modal-info {
  text-align: left;
}
@media screen and (max-width: 912px) {
  .services__container {
    grid-template-columns: 1fr;
    gap: var(--biggest-font-size);
  }
  .service__content {
    min-width: 75%;
    justify-self: center;
  }
}
</style>
