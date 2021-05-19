<template>
  <div>
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="lobby-pages-main"
    >
      <Lobbylayout v-if="mdData.template === 'lobby'" />
      <Tournamentlayout v-if="mdData.template === 'tournament'" />
    </div>
  </div>
</template>

<script>
import Lobbylayout from './lobby.vue'
import Tournamentlayout from './tournament.vue'
export default {
  components: {
    Lobbylayout,
    Tournamentlayout
  },
  data () {
    return {
      mdData: {},
      htmlBody: ''
    }
  },
  created () {
    this.$root.$once('lobby-pages-data', (data) => {
      this.mdData = data
    })
  },
  beforeDestroy () {
    this.$root.$off('lobby-pages-data')
  }
}
</script>
