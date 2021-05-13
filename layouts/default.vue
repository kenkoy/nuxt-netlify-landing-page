<template>
  <div>
    <!-- <TheHeader @sidenav-toggle="displaySidenav = !displaySidenav" />
      <TheSidenav :show="displaySidenav" @close="displaySidenav = false" /> -->
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
// import TheHeader from '~/components/Navigation/TheHeader'
// import TheSidenav from '~/components/Navigation/TheSidenav'
import Navigation from '~/components/Marketing/Navigation'

export default {
  components: {
    // TheHeader,
    // TheSidenav
    Navigation
  },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>
