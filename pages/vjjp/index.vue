<template>
  <div class="vjjp-wrapper">
    <section id="under-construction">
      <div class="container">
        <div class="row">
          <div>
            <h1>SEO LOBBY HOME PAGE UNDER CONSTRUCTION</h1>
          </div>
        </div>
        <div class="row">
          <p>Please go to </p>
          <span v-for="(navLinks, navIndex) in navItems" :key="navIndex" class="under-construction-links">
            <nuxt-link v-if="(navLinks.name.includes('vjjp-'))" :to="navLinks.path">
              {{ navLinks.name }}
            </nuxt-link>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'vjjp/slots',
  data () {
    return {
      navItems: [{
        name: '',
        path: ''
      }]
    }
  },
  mounted () {
    this.navItems = this.$nuxt.$router.options.routes.map(route => ({
      name: route.name,
      path: route.path
    }))
  }
}
</script>

<style scoped>
#under-construction h1{
  font-size: 70px;
}
#under-construction{
  background: #009ee7;
  height: 100vh;
}
#under-construction p{
  margin: 0 10px;
}
</style>
