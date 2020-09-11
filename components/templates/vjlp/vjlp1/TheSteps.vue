<template>
  <section class="container-flex bg-alt steps animated fadeIn">
    <div class="container">
      <div class="row">
        <div class="col-4 animated fadeIn delay-0s">
          <div class="num">1</div>
          <div class="step">
            <h2>
              {{ step1Title }}
              <br />
            </h2>
            <h3>
              {{ step1Desc }}
              <br />
            </h3>
          </div>
        </div>
        <div class="col-4 animated fadeIn delay-1s">
          <div class="num">2</div>
          <div class="step">
            <h2>
              {{ step2Title }}
              <br />
            </h2>
            <h3>
              {{ step2Desc }}
              <br />
            </h3>
          </div>
        </div>
        <div class="col-4 animated fadeIn delay-2s">
          <div class="num">3</div>
          <div class="step">
            <h2>{{ step3Title }}</h2>
            <h3>
              {{ step3Desc }}
              <br />
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    step1Title: {
      type: String,
      required: true,
    },
    step1Desc: {
      type: String,
      required: true,
    },
    step2Title: {
      type: String,
      required: true,
    },
    step2Desc: {
      type: String,
      required: true,
    },
    step3Title: {
      type: String,
      required: true,
    },
    step3Desc: {
      type: String,
      required: true,
    }
  }
};
</script>

<style>
</style>