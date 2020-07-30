<template>
  <section class="container-flex bg-alt steps animated fadeIn">
    <div class="container">
      <div class="row">
        <div class="col-4 animated fadeIn delay-0s">
          <div class="num">1</div>
          <div class="step">
            <h2>{{ title1 }}</h2>
            <h3 class="desc">{{ description1 }}</h3>
          </div>
        </div>
        <div class="col-4 animated fadeIn delay-1s">
          <div class="num">2</div>
          <div class="step">
            <h2>{{ title2 }}</h2>
            <h3 class="desc">{{ description2 }}</h3>
          </div>
        </div>
        <div class="col-4 animated fadeIn delay-2s">
          <div class="num">3</div>
          <div class="step">
            <h2>{{ title3 }}</h2>
            <h3 class="desc">{{ description3 }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title1: {
      type: String,
      required: true
    },
    description1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    },
    description2: {
      type: String,
      required: true
    },
    title3: {
      type: String,
      required: true
    },
    description3: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 576px) {
  .desc { font-size: 0.7rem; }
}

@media only screen and (min-width: 992px) {
  .desc { display: table; }
}
</style>