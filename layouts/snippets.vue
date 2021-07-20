<template>
  <nuxt/>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  h3{
    font-size: 30px;
    font-family: Futura;
    background-color: #967028;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: #ffd17f 1px 2px 1px;
  }
  #snippets-nav,
  main{
    transition: all .3s ease;
    font-family: 'Roboto';
  }
  #snippets-nav{
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate3d(-190px,0,0);
    width: 150px;
    height: 100%;
    z-index: 2;
    background: #282b2e;

    button {
      border: 0;
      padding: 15px;
      background: transparent;
    }
  }

  #snippets-nav.active{
    transform: translate3d(0,0,0);
  }
  #snippets-nav.active + main {
    transform: translate3d(190px,0,0);
  }

  #menu-btn{
    display: flex;
    align-items: center;

    button{
      border: 0;
      padding: 15px;
      background: #daa136;
      color: #282b2e;
      font-weight: 700;
    }
  }

  #playground {
    -moz-box-shadow:    inset 0 0 5px #000000;
    -webkit-box-shadow: inset 0 0 5px #000000;
    box-shadow:         inset 0 0 5px #000000;
    box-sizing: border-box;
    margin: auto;
    padding: 50px;
    background: #282b2e;
  }

  #codes {
    padding: 50px 0;
    background: #daa136;
  }
</style>
