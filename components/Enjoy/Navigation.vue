<template>
  <nav v-if="menuToggle" id="menu-slide">
    <div id="menu-slide-header">
      <div>
        <button class="btn" @click="pageSlideOff()">x</button>
      </div>
      <div>
        <p>メニュー</p>
      </div>
      <div class="icon-wrapper">
        <i class="home-icon"></i>
      </div>
    </div>
    <div>
      <h1>Menu Coming Soon</h1>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      pageSlide: '',
      menuToggle: false
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
