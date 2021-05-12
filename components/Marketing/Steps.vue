<template>
  <section id="steps">
    <div class="container">
      <div class="animated fadeIn delay-halfs">
        <span class="num">1</span>
        <div>
          <h3>{{ title1 }}</h3>
          <p>{{ description1 }}</p>
        </div>
      </div>
      <div class="animated fadeIn delay-1s">
        <span class="num">2</span>
        <div>
          <h3>{{ title2 }}</h3>
          <p>{{ description2 }}</p>
        </div>
      </div>
      <div class="animated fadeIn delay-1-and-halfs">
        <span class="num">3</span>
        <div>
          <h3>{{ title3 }}</h3>
          <p>{{ description3 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
}
</script>
