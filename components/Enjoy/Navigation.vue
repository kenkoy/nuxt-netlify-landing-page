<template>
  <nav id="menu-slide" v-if="menuToggle">
    <button @click="pageSlideOff()">x</button>

    <div>
      <p>Enjoy a warm welcome with a 200% deposit bonus up to €100 on your first ever deposit! (T&C Apply)</p>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      pageSlide: '',
      menuToggle: false,
    }
  },
  methods: {
    pageSlideOn () {
      this.pageSlide = 'page-slide'
      this.menuToggle = true
    },
    pageSlideOff () {
      this.pageSlide = ''
      setTimeout(() => {
        this.menuToggle = false
      }, 300)
    }
  }
}
</script>
