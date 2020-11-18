<template>
  <div id="detail" class="gb fadebg-2">
    <section class="container-flex bg-alt steps animated fadeIn fadebg-2">
      <div class="container text-center">
        <img
          v-lazy-load
          style="max-width: 100%;"
          src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-welcome-title.png"
          alt=""
        >
        <br>
        <img
          v-lazy-load
          style="max-width: 100%;"
          src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-500WC-stamp.png"
          alt=""
        >
        <br>
        <div>
          <p class="text-center" v-html="firstWelcomeStatement" />
        </div>
        <div class="row" style="margin: 25px 0px 0px;">
          <div class="col-12 animated fadeIn delay-0.5s text-center">
            <div class="row">
              <div class="col-lg-2 d-none d-md-block" />
              <div class="col-lg-4 col-md-6 col-sm-6">
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph1.png"
                  alt=""
                >
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-welcome-graph2.png"
                  alt=""
                >
              </div>
              <div class="col-lg-2 d-none d-md-block" />
            </div>
          </div>
        </div>
        <span class="queenprofile-star sprite" />
        <div class="row" style="margin: 25px 0px 0px;">
          <div class="col-12 animated fadeIn delay-0.5s text-center">
            <div>
              <p class="text-center" v-html="secondWelcomeStatement">
                <!-- ボーナスやカジノ最新情報をはじめ、
                <br />テーブルゲーム・スロット界のトップに君臨するクイーンが
                <br />選んだ
                一押しゲームをいち早くお届けいたします♠ -->
              </p>
            </div>
            <!--destop-->
            <div class="d-none d-md-block">
              <div class="row">
                <div class="col-lg-2 d-none d-md-block" />
                <div class="col-lg-7 col-md-9 col-sm-9">
                  <p class="speech-bubble-r">
                    <font color="#e10057">
                      <b>初めまして、ごきげんよう!</b>
                      <br>
                    </font> インターカジノではスリル満点の各種ゲームやイベントを毎月ご用意しているわ。勝ちたい方、長くじっくりプレイをしたい方にぴったりね。
                    <br>私たちと一緒に、勝負してみない?
                  </p>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-3">
                  <img
                    v-lazy-load
                    style="max-width: 100%;"
                    src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-red-icon.png"
                    alt=""
                  >
                </div>
                <div class="col-lg-1 d-none d-md-block" />
              </div>
              <div class="row">
                <div class="col-lg-1 d-none d-md-block" />
                <div class="col-lg-2 col-md-3 col-sm-3">
                  <img
                    v-lazy-load
                    style="max-width: 100%;"
                    src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-black-icon.png"
                    alt=""
                  >
                </div>
                <div class="col-lg-7 col-md-9 col-sm-9">
                  <p class="speech-bubble-c">
                    <font color="#a184d6">
                      <b style>チャオ! クロエだよ★</b>
                      <br>
                    </font> みんなも「なんとかなる!」精神で思いっきり勝ちを目指すよー!
                    <br>クロエについて来れる人～？お先にカジノで待ってるね!
                  </p>
                </div>
                <div class="col-lg-2 d-none d-md-block" />
              </div>
            </div>
            <!--mobile-->
            <div class="row d-block d-sm-none">
              <div class="col-sm-12">
                <p class="speech-bubble-r-d">
                  <font color="#e10057">
                    <b>初めまして、ごきげんよう!</b>
                    <br>
                  </font>
                  <span v-html="rougeSpeechStatement" />
                  <!-- インターカジノではスリル満点の各種ゲームやイベントを毎月ご用意しているわ。勝ちたい方、長くじっくりプレイをしたい方にぴったりね。
                  <br />私たちと一緒に、勝負してみない? -->
                </p>
              </div>
              <div class="col-sm-12">
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-red-icon.png"
                  alt=""
                >
              </div>
            </div>
            <div class="row d-block d-sm-none">
              <div class="col-sm-12">
                <p class="speech-bubble-c-d">
                  <font color="#a184d6">
                    <b style>チャオ! クロエだよ★</b>
                    <br>
                  </font>
                  <span v-html="chloeSpeechStatement" />
                  <!-- みんなも「なんとかなる!」精神で思いっきり勝ちを目指すよー!
                  <br />クロエについて来れる人～？お先にカジノで待ってるね! -->
                </p>
              </div>
              <div class="col-sm-12">
                <img
                  v-lazy-load
                  style="max-width: 100%;"
                  src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-black-icon.png"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    firstStatements: {
      type: String,
      required: true
    },
    highligtedFirstStatementPhrase: {
      type: String,
      required: false
    },
    secondStatements: {
      type: String,
      required: true
    },
    rougeSpeech: {
      type: String,
      required: true
    },
    chloeSpeech: {
      type: String,
      required: true
    }
  },
  computed: {
    firstWelcomeStatement () {
      return this.statementsParser(this.firstStatements, this.highligtedFirstStatementPhrase, 'redmark')
    },
    secondWelcomeStatement () {
      return this.statementsParser(this.secondStatements, null, null)
    },
    rougeSpeechStatement () {
      return this.statementsParser(this.rougeSpeech, null, null)
    },
    chloeSpeechStatement () {
      return this.statementsParser(this.chloeSpeech, null, null)
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
