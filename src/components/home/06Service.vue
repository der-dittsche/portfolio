<template>
  <div class="container">
    <h1 class="section__header"><i class="bx bx-wrench"></i>Services</h1>
    <div class="services__box flex">
      <div class="services__box-element flex bs">
        <div class="flex">
          <div class="goals-icon">
            <i class="bx bx-code-alt"></i>
          </div>
          <div class="goals-icon">
            <i class="bx bx-terminal"></i>
          </div>
        </div>
        <h3 class="title">
          Development &<br />
          Testing
        </h3>
        <p class="subtitle">
          Your website will be implemented with the latest standards of
          programming
        </p>

        <ul>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">Using modern Frameworks like VueJs</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">E2E Testing with Cypress</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">Unit Testing with Jest</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">
              Implementing development and production procedure with Git
            </p>
          </li>
        </ul>
      </div>
      <div class="services__box-element flex bs">
        <div class="flex">
          <div class="goals-icon">
            <i class="bx bx-layout"></i>
          </div>
          <div class="goals-icon"><i class="bx bx-image"></i></div>
        </div>
        <h3 class="title">
          Layout &<br />
          Design
        </h3>
        <p class="subtitle">
          Professional implementation of your ideas and wishes for your website
          on the Internet
        </p>

        <ul>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">Realize your Design from Figma</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">I create user interfaces</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">I position your company brand</p>
          </li>
        </ul>
      </div>
      <div class="services__box-element flex bs">
        <div class="flex">
          <div class="goals-icon">
            <i class="bx bx-cloud"></i>
          </div>
          <div class="goals-icon">
            <i class="bx bxs-devices"></i>
          </div>
          <div class="goals-icon">
            <i class="bx bx-cog"></i>
          </div>
        </div>
        <h3 class="title">
          Hosting &<br />
          Administration
        </h3>
        <p class="subtitle">
          Technical support for your complete website infrastructure
        </p>

        <ul>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">Hosting</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">User Administration</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">Webserver configuration</p>
          </li>
          <li>
            <i class="bx bx-check"></i>
            <p class="text">Cloude integration</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.services__box {
  flex-direction: column;
}
.services__box-element {
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  border-radius: var(--h2-font-size);
  padding: var(--h2-font-size);
}
.services__box-element .flex {
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;
}

#service .subtitle {
  text-align: center;
}
#service ul {
  width: 100%;
}
#service li {
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
}
</style>
