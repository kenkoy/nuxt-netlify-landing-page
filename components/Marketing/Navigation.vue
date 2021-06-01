<template>
  <div class="layout-css" :class="{ nav_wrapper: true }">
    <nav v-if="desktop === true" id="nav-desktop">
      <div class="container">
        <div class="row">
          <div id="logo">
            <nuxt-link to="/marketing">
              <img src="~/assets/images/marketing/home/gamesys-logo.png">
            </nuxt-link>
          </div>
          <div>
            <span v-for="(navLinks, navIndex) in navItems" :key="navIndex">
              <nuxt-link v-if="(navLinks.name.includes(switchTemplate))" :to="navLinks.path">
                {{ navLinks.name }}
              </nuxt-link>
            </span>
            <div id="switch">
              <nuxt-link to="/marketing/admin#/" target="_blank">
                Admin
              </nuxt-link>
              <nuxt-link id="vj" to="/marketing/vjlp5/" :class="switchTemplate === 'vj' ? 'active' : ''" @click.native="switchTemplate ='vj'">
                <strong>VJ</strong>
              </nuxt-link>
              <nuxt-link id="ic" to="/marketing/iclp1v2/" :class="switchTemplate === 'ic' ? 'active' : ''" @click.native="switchTemplate = 'ic'">
                <strong>IC</strong>
              </nuxt-link>
              <nuxt-link id="yg" to="/marketing/yuugado/" :class="switchTemplate === 'yg' ? 'active' : ''" @click.native="switchTemplate = 'yg'">
                <strong>YG</strong>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav v-if="mobile === true" id="nav-mobile">
      <input id="ham-menu" type="checkbox">
      <label for="ham-menu">
        <div class="hide-des" @click="noScroll">
          <span />
          <span />
          <span />
        </div>
      </label>
      <div class="ham-overlay" />
      <div class="ham-menu">
        <!-- ADD VERTICAL CLASS TO CHANGE -->
        <ul class="centre-text bold-text">
          <li v-for="(navLinks, navIndex) in navItems" :key="navIndex">
            <nuxt-link :to="navLinks.path">
              {{ navLinks.name }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/marketing/admin#/" target="_blank">
              Admin
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      desktop: true,
      mobile: false,
      isActive: false,
      switchTemplate: 'vj',
      navItems: [{
        name: '',
        path: ''
      }],
      activeNavTemplates: [
        'vjhp', 'vjhp2', 'vjlp5',
        'vjlp7', 'vjlp8', 'iclp1v2',
        'iclp2v2', 'iclp3v2'
      ]
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  },
  mounted () {
    this.myEventHandler()
    window.addEventListener('resize', this.myEventHandler)

    this.navItems = this.$nuxt.$router.options.routes.map(route => ({
      name: route.name.replace('marketing-', ''),
      path: route.path
    })).filter((route) => {
      const containingWords = /slug|about|admin|blank-template|home|marketing|index/.test(route.name)
      return !containingWords
    }).filter((route) => {
      return this.activeNavTemplates.includes(route.name)
    })
  },
  methods: {
    myEventHandler () {
      // your code for handling resize...
      if (window.innerWidth <= 992) {
        this.desktop = false
        this.mobile = true
      } else {
        this.desktop = true
        this.mobile = false
      }
    },
    noScroll () {
      this.isActive = !this.isActive
      if (this.isActive) {
        document.body.classList.add('noScroll')
      } else {
        document.body.classList.remove('noScroll')
      }
    }
  }
}
</script>
