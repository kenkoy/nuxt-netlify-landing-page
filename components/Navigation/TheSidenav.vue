<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item"><nuxt-link to="/marketing/vjlp1">VJLP 1</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/vjlp3">VJLP 3</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/vjlp4">VJLP 4</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/vjlp5">VJLP 5</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/vjlp6">VJLP 6</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/iclp1">ICLP 1</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/iclp2">ICLP 2</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/iclp3">ICLP 3</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/vjhp">VJ Stripped Down</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/marketing/about">About</nuxt-link></li>
          <li class="nav-item"><a href="/marketing/admin/#/" target="_blank">Admin</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: crimson;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: dodgerblue;
}
</style>
