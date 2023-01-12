<template>
  <div class="container">
    <div class="home__box flex">
      <div class="home__box-info flex">
        <h3 class="title">Hi, my name is <br /><span>Sascha Dietrich</span></h3>

        <div class="home__box-content">
          <p class="section__title">I'm a <span>Webapp-Developer.</span></p>
          <p class="section__subtitle">
            passionate in designing modern web-interfaces
          </p>
        </div>
        <button>
          <a href="/#about"><i class="bx bx-user"></i> More about me</a>
        </button>
      </div>
      <div class="home__box-pic flex">
        <div class="home__pic">
          <img
            src="@/assets/img/sd_pic.png"
            alt="Profilbild Sascha Dietrich"
            class="bs"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.home__box {
  flex-direction: column;
}

.home__box .title {
  font-size: 2rem;
}

.home__box span {
  color: var(--clr-skin);
}

.home__box-info {
  flex-direction: column;
  height: 50vh;
}

.home__box-info {
  position: relative;
  top: -4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.home__box-content {
  margin-bottom: 2rem;
}

.home__box-pic {
  justify-content: center;

  height: 50vh;
}

.home__pic img {
  width: 250px;
  object-fit: contain;
  border-radius: var(--h2-font-size);
  overflow: hidden;
}
</style>
