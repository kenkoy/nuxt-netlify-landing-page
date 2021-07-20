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
`<section id="game">
  <div class="container">
    <div class="row">
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/100" />
        <p>This is label</p>
      </div>
    </div>
  </div>
</section>
`,
      cssCode:
`#game{
  .row{
    overflow-x: scroll;
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
#game{
  .row{
    overflow-x: scroll;
  }
}
</style>
