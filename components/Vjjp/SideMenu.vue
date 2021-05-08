<template>
  <nav id="menu-slide">
    <div id="menu-slide-header">
      <div>
        <button class="btn" @click="pageSlideOff(false)">
          <i class="icon close-icon" />
        </button>
      </div>
      <div>
        <p>メニュー</p>
      </div>
      <div class="icon-wrapper">
        <i class="icon home-icon" />
      </div>
    </div>
    <div>
      <span>Menu Coming Soon</span>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    pageSlideOff (data) {
      this.$emit('page-slide-off', data)
    }
  }
}
</script>
