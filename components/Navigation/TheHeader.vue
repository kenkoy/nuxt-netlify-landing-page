<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenav-toggle')" />
      <div class="logo">
        <nuxt-link to="/marketing">
          <img src="~/assets/images/gamesys-logo.png">
        </nuxt-link>
      </div>
      <div class="spacer" />
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/marketing/vjlp1">
              VJLP 1
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/vjlp3">
              VJLP 3
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/vjlp4">
              VJLP 4
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/vjlp5">
              VJLP 5
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/vjlp6">
              VJLP 6
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/iclp1">
              ICLP 1
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/iclp2">
              ICLP 2
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/iclp3">
              ICLP 3
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/iclp3v2">
              ICLP 3 V2
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/vjhp">
              VJ Stripped Down
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/marketing/about">
              About
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a href="/marketing/admin/#/" target="_blank">Admin</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '~/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle
  }
}
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: black;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: #dc3545;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #007bff;
}

.header .logo img {
    max-width: 175px;
    width: 175px;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    height: 40%;
    width: 40%;
    margin-left: -3%;
}
</style>
