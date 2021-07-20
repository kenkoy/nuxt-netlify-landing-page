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
  #snippets-nav,
  main{
    transition: all .3s ease;
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
    }
  }

  #playground {
    border: 2px solid;
    box-sizing: border-box;
    margin: auto;
    padding: 50px;
  }

  #codes {
    padding: 50px 0;
    background: #f5b53b;
  }
</style>
