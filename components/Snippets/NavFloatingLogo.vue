<template>
  <div>
    <section id="playground-wrapper">
      <div id="playground" v-html="htmlCode"></div>
    </section>
    <section id="codes">
      <div class="container">
        <div class="row column-2">
          <div>
            <h3>HTML</h3>
            <pre>
             <code v-highlight="htmlCode" class="html"></code>
           </pre>
          </div>

          <div>
            <h3>SCSS</h3>
            <pre>
              <code v-highlight="cssCode" class="css"></code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      htmlCode:
`<nav id="navigation">
  <div class="container">
    <div class="row column-2">
      <div id="logo-wrapper">
        <img class="logo" src='https://via.placeholder.com/100' />
      </div>

      <div id="cta-wrapper">
        <button class="btn-login">Login</button>
        <button class="btn-register">Register</button>
      </div>
    </div>
  </div>
</nav>
`,
      cssCode:
`#navigation{
  background: #1f1f1f;

  .container{
    position: relative;

    .row{
      min-height: 55px;
    }
  }

  .logo {
    position: absolute;
    top: -30px;
    left: 0;
    border-radius: 50%;
  }

  #cta-wrapper{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 10px;
  }
}`
    }
  },
  mounted () {
    const imgEl = document.getElementsByTagName('img')
    for (let i = 0; i < imgEl.length; i++) {
      if (imgEl[i].getAttribute('data-src')) {
        imgEl[i].setAttribute('src', imgEl[i].getAttribute('data-src'))
        imgEl[i].removeAttribute('data-src')
      }
    }
  }
}
</script>

<style lang="scss">
#navigation{
  background: #1f1f1f;
  box-shadow: 2px 2px 5px #000;

  .container{
    position: relative;

    .row{
      min-height: 55px;
    }
  }

  .logo {
    position: absolute;
    top: -30px;
    left: 0;
    border-radius: 50%;
  }

  #cta-wrapper{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 10px;
  }
}
</style>
