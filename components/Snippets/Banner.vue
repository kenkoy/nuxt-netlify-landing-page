<template>
  <div>
    <section id="hero">
      <div class="container">
        <div class="row column-2">
          <div id="hero-text-wrapper">
            <div>
              <h2>Banner title</h2>
              <p>Banner description</p>
            </div>
          </div>

          <div id="hero-image-wrapper">
            <img src="https://via.placeholder.com/500"/>
          </div>
        </div>
      </div>
    </section>

    <section id="codes">
      <div class="container">
        <div class="row column-2">
          <div>
            <h3>HTML Code</h3>
            <textarea style='background: #353535; color: #fff; max-width: 500px; min-width: 500px; min-height: 200px; max-height: 300px;' disabled>

  <section id="hero">
    <div class="container">
      <div class="row column-2">
        <div>
          <h2>Banner title</h2>
          <p>Banner description</p>
        </div>

        <div id="hero-image-wrapper">
          <img src="https://via.placeholder.com/250"/>
        </div>
      </div>
    </div>
  </section>

            </textarea>
          </div>

          <div>
            <h3>CSS Code</h3>
            <textarea style='background: #353535; color: #fff; max-width: 500px; min-width: 500px; min-height: 200px; max-height: 300px;' disabled>

  #hero-text-wrapper,
  #hero-image-wrapper {
    display: flex;
    align-items: center;
  }

            </textarea>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#hero-text-wrapper,
#hero-image-wrapper {
  display: flex;
  align-items: center;
}
#hero-image-wrapper {
  justify-content: center;
}
</style>
