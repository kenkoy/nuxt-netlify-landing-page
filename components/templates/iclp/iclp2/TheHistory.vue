<template>
  <div>
    <div id="detail" class="gb blackbg">
      <section class="container-flex bg-alt steps animated fadeIn historybg">
        <div class="container">
          <div class="row">
            <div class="col-12 animated fadeIn delay-0.5s text-center">
              <div class="d-none d-md-block">
                <img v-lazy-load style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-History1.png" alt="">
              </div>
              <div class="d-block d-md-none">
                <img v-lazy-load style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-History2.png" alt="">
              </div>
              <img v-lazy-load style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile-title.png" alt="">
              <span class="queenprofile-star sprite" />
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12" style="margin: 10px 0px 0px;">
                  <p class="text-center">
                    <span class="queenprofile-redtag sprite" />
                    <span class="queenprofile-star sprite" />
                    <span v-html="rougeParsedStatement" />
                    <!-- ライブカジノやテーブルゲームのスキルは王国一!
                    おしとやかな見た目とは裏腹に、その圧倒的な頭脳と
                    センスで、実力派揃いの
                    <span class="redmark">赤の王国</span>のトップに長らく
                    君臨する実力派クイーン。 -->
                  </p>
                  <img v-lazy-load style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Rouge.png" alt="">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12" style="margin: 10px 0px 0px;">
                  <p class="text-center">
                    <span class="queenprofile-blacktag sprite" />
                    <span class="queenprofile-star sprite" />
                    <span v-html="chloeParsedStatement" />
                    <!-- 日々運試しで盛り上がる
                    <span class="blackmark">黒の王国</span>。
                    負け知らずのクイーンとしてその存在感はピカイチ!
                    プレイヤーと一緒にプレイすることが大好きなクロエは、
                    幸運の女神とも噂される、ちょっぴりお茶目な強運クイーン。 -->
                  </p>
                  <img v-lazy-load style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Chole.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          id="signup-btn"
          :href="registerButtonURL"
          class="button button-lrg"
          style="display:block;font-family:sans-serif !important;"
        >{{ registerButtonText }}</a>
      </section>
    </div>
    <div id="detail" class="gb goldenbg" />
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    rougeStatements: {
      type: String,
      required: true
    },
    rougeHighlightedPhrase: {
      type: String,
      required: true
    },
    chloeStatements: {
      type: String,
      required: true
    },
    chloeHighlightedPhrase: {
      type: String,
      required: true
    },
    registerButtonText: {
      type: String,
      required: true
    },
    registerButtonURL: {
      type: String,
      required: true
    }
  },
  computed: {
    rougeParsedStatement () {
      return this.statementsParser(this.rougeStatements, this.rougeHighlightedPhrase, 'redmark')
    },
    chloeParsedStatement () {
      return this.statementsParser(this.chloeStatements, this.chloeHighlightedPhrase, 'blackmark')
    }
  },
  methods: {
    statementsParser (statements, highLigtedPhrase, classStyle) {
      let sentences = statements.split(/\r?\n/)
        .filter(statement => statement)
        .map((statement) => {
          return statement.slice(-1) === '\\'
            ? statement.substring(0, statement.length - 1)
            : statement
        })
      if (highLigtedPhrase && classStyle) {
        const replacement = `<span class="${classStyle}">${highLigtedPhrase}</span>`
        sentences = sentences.map((line) => {
          return line.includes(highLigtedPhrase)
            ? line.replace(highLigtedPhrase, replacement)
            : line
        })
      }
      return sentences.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    }
  }
}
</script>

<style scoped>
.historybg {
  background: url("/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-history-bg.jpg")
    repeat;
}
</style>
