<template>
  <div>
    <nav id="navigation">
      <div class="container">
        <div class="row">
          <div id="logo-wrapper">
            <img class="logo" src="https://via.placeholder.com/100" />
          </div>

          <div id="cta-wrapper">
            <button class="btn-login">Login</button>
            <button class="btn-register">Register</button>
          </div>
        </div>
      </div>
    </nav>

    <section id="codes">
      <div class="container">
        <div class="row column-2">
          <div>
            <h3>HTML Code</h3>
            <textarea style='background: #353535; color: #fff; max-width: 500px; min-width: 500px; min-height: 200px; max-height: 300px;' disabled>

<nav id="navigation">
  <div class="container">
    <div class="row column-2">
      <div id="logo-wrapper">
        <img class="logo" src="https://via.placeholder.com/100" />
      </div>

      <div id="cta-wrapper">
        <button class="btn-login">Login</button>
        <button class="btn-register">Register</button>
      </div>
    </div>
  </div>
</nav>

            </textarea>
          </div>

          <div>
            <h3>CSS Code</h3>
            <textarea style='background: #353535; color: #fff; max-width: 500px; min-width: 500px; min-height: 200px; max-height: 300px;' disabled>

#navigation{
  position: relative;
  background: red;
  .row {
    min-height: 55px;
  }

  .logo {
    position: absolute;
    top: -30px;
    left: 0;
    border-radius: 50%;
  }

  #cta-wrapper{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 10px;
  }
}

            </textarea>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
#navigation{
  position: relative;
  background: red;
  .row {
    min-height: 55px;
  }

  .logo {
    position: absolute;
    top: -30px;
    left: 0;
    border-radius: 50%;
  }

  #cta-wrapper{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 10px;
  }
}
</style>
