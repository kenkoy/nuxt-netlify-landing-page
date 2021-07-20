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
`<section id="hero">
  <div class="container">
    <div class="row column-2">
      <div id="hero-text-wrapper">
        <div>
          <h2>Banner title</h2>
          <p>Banner description</p>
        </div>
      </div>

      <div id="hero-image-wrapper">
        <img src="https://via.placeholder.com/500"/>
      </div>
    </div>
  </div>
</section>
`,
      cssCode:
`#hero-text-wrapper,
#hero-image-wrapper {
  display: flex;
  align-items: center;
}
#hero-image-wrapper {
  justify-content: center;
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
#game{
  .row{
    overflow-x: scroll;
  }
}
</style>
