<template>
  <div>
    <div id="detail" class="gb blackbg">
      <section class="container-flex bg-alt steps animated fadeIn historybg">
        <div class="container">
          <div class="row">
            <div class="col-12 animated fadeIn delay-0.5s text-center">
              <div class="d-none d-md-block">
                <img style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-History1.png" alt="" v-lazy-load/>
              </div>
              <div class="d-block d-md-none">
                <img style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-History2.png" alt="" v-lazy-load/>
              </div>
              <img style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-queenprofile-title.png" alt="" v-lazy-load/>
              <span class="queenprofile-star sprite"></span>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12" style="margin: 10px 0px 0px;">
                  <p class="text-center">
                    <span class="queenprofile-redtag sprite"></span>
                    <span class="queenprofile-star sprite"></span>
                    <span v-html="rougeParsedStatement"></span>
                    <!-- ライブカジノやテーブルゲームのスキルは王国一!
                    おしとやかな見た目とは裏腹に、その圧倒的な頭脳と
                    センスで、実力派揃いの
                    <span class="redmark">赤の王国</span>のトップに長らく
                    君臨する実力派クイーン。 -->
                  </p>
                  <img style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Rouge.png" alt="" v-lazy-load/>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12" style="margin: 10px 0px 0px;">
                  <p class="text-center">
                    <span class="queenprofile-blacktag sprite"></span>
                    <span class="queenprofile-star sprite"></span>
                    <span v-html="chloeParsedStatement"></span>
                    <!-- 日々運試しで盛り上がる
                    <span class="blackmark">黒の王国</span>。
                    負け知らずのクイーンとしてその存在感はピカイチ!
                    プレイヤーと一緒にプレイすることが大好きなクロエは、
                    幸運の女神とも噂される、ちょっぴりお茶目な強運クイーン。 -->
                  </p>
                  <img style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-Chole.png" alt="" v-lazy-load/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          id="signup-btn"
          v-bind:href="registerButtonURL"
          class="button button-lrg"
          style="display:block;font-family:sans-serif !important;"
        >{{ registerButtonText }}</a>
      </section>
    </div>
    <div id="detail" class="gb goldenbg"></div>
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
    rougeParsedStatement: function () {
      return this.statementsParser(this.rougeStatements, this.rougeHighlightedPhrase, 'redmark');
    },
    chloeParsedStatement: function () {
      return this.statementsParser(this.chloeStatements, this.chloeHighlightedPhrase, 'blackmark');
    }
  },
  methods: {
    statementsParser: function (statements, highLigtedPhrase, classStyle) {
      let sentences = statements.split(/\r?\n/)
        .filter(statement => statement)
        .map(statement => {
          return statement.slice(-1) === '\\'
            ? statement.substring(0, statement.length - 1)
            : statement;
        });
      if (highLigtedPhrase && classStyle) {
        const replacement = `<span class="${classStyle}">${highLigtedPhrase}</span>`;
        sentences = sentences.map(line => {
          return line.includes(highLigtedPhrase)
            ? line.replace(highLigtedPhrase, replacement)
            : line;
        });
      }
      return sentences.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal;
      });
    }
  }
};
</script>

<style scoped>
.historybg {
  background: url("/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-history-bg.jpg")
    repeat;
}
</style>