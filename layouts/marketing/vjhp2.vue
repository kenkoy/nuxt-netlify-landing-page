<template>
  <div class="layout-css" :class="{ vjhp2_wrapper: true }">
    <div class="vjhp2-main">
      <!-- PAGE HANDLING DATA -->
      <Vjhp2Data @emit-md-content="getMDcontent" />
      <div v-for="(data_items, data_index) in md_data" :key="data_index">
        <nav>
          <div class="container">
            <div class="row">
              <div>
                <p>
                  {{ data_items.header_section.header_section_top_text }}
                  <a aria-label="link" :href="data_items.header_section.header_section_best_deal_image_url"> {{ data_items.header_section.header_section_account_login }}</a>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <section id="hero">
          <div class="container">
            <div class="row">
              <div>
                <img src="@/assets/images/marketing/vjhp2/logo.png" alt="alt img" data-not-lazy>
                <h2>{{ data_items.header_section.header_section_welcome_message }}</h2>
                <h1>{{ data_items.header_section.header_section_main_heading }}</h1>
                <p class="heading-sub-title">
                  {{ data_items.header_section.header_section_heading_subtitle }}
                </p>
                <div class="game-slider">
                  <a aria-label="link" :href="data_items.header_section.header_section_game_slider_url_1">
                    <img :src="data_items.header_section.header_section_game_slider_1" alt="alt img">
                  </a>
                  <a aria-label="link" :href="data_items.header_section.header_section_game_slider_url_2">
                    <img :src="data_items.header_section.header_section_game_slider_2" alt="alt img">
                  </a>
                  <a aria-label="link" :href="data_items.header_section.header_section_game_slider_url_3">
                    <img :src="data_items.header_section.header_section_game_slider_3" alt="alt img">
                  </a>
                  <a aria-label="link" :href="data_items.header_section.header_section_game_slider_url_4">
                    <img :src="data_items.header_section.header_section_game_slider_4" alt="alt img">
                  </a>
                  <a aria-label="link" :href="data_items.header_section.header_section_game_slider_url_5">
                    <img :src="data_items.header_section.header_section_game_slider_5" alt="alt img">
                  </a>
                  <a aria-label="link" :href="data_items.header_section.header_section_game_slider_url_6">
                    <img :src="data_items.header_section.header_section_game_slider_6" alt="alt img">
                  </a>
                </div>
                <p class="best-deal">
                  {{ data_items.header_section.header_section_best_deal_caption }}
                </p>
                <img width="200" height="200" :src="data_items.header_section.header_section_best_deal_image" alt="alt img">
                <p class="small-caption">
                  {{ data_items.header_section.header_section_best_deal_small_caption }}
                </p>
                <button class="warning">
                  <a aria-label="link" :href="data_items.header_section.header_section_best_deal_image_url">{{ data_items.header_section.header_section_register_button }}!</a>
                </button>
                <p class="account">
                  {{ data_items.header_section.header_section_account_text }}<a :href="data_items.header_section.header_section_best_deal_image_url">ログイン!</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="section-1">
          <div class="container">
            <div class="row">
              <div>
                <h2>プロ厳選! 決済方法</h2>
                <img width="324" height="167" src="@/assets/images/marketing/vjhp2/footerPayment.png" alt="alt img">
                <p>ベラジョンに導入されている決済方法は、その道のプロが厳選した便利で安心の決済方法のみ!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="section-2">
          <div class="container">
            <div class="row column-2">
              <div>
                <h3>生配信で楽しめる! ライブカジノ</h3>
                <img width="458" height="317" src="@/assets/images/marketing/vjhp2/mobile.png" alt="alt img">
                <p>定番ゲームから変わり種まで、その数なんと0000種類! 今まで海外カジノでしか楽しめなかった生ディーラーとの真剣勝負が、あなたのスマホにやってきます!</p>
                <button class="primary">
                  <a aria-label="link" :href="data_items.games_brick_section.games_brick_column_1.games_brick_column_1_button_redirect_url">{{ data_items.games_brick_section.games_brick_column_1.games_brick_column_1_button }}</a>
                </button>
              </div>
              <div>
                <h3>圧倒的ゲーム数! スロットゲーム</h3>
                <img width="458" height="392" src="@/assets/images/marketing/vjhp2/ipad.png" alt="alt img">
                <p>その数1000種類以上! 人気スロットはもちろん、パチスロみたいな新感覚ゲームまでなんでもあり! 最新作がどこよりも早くプレイできちゃうのも業界ナンバーワンカジノならでは♪</p>
                <button class="error">
                  <a aria-label="link" :href="data_items.games_brick_section.games_brick_column_2.games_brick_column_2_button_redirect_url">{{ data_items.games_brick_section.games_brick_column_2.games_brick_column_2_button }}</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="section-3">
          <div class="container">
            <div class="row column-2">
              <div>
                <img width="445" height="286" src="@/assets/images/marketing/vjhp2/neutral-transparent.png" alt="alt img">
              </div>
              <div>
                <h2>カード・オブ・フロンティア</h2>
                <p>ベラジョンが独自開発したミニゲーム! 入金した軍資金以外にも、1日1回賞金ゲットのチャンス!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="section-4">
          <div class="container">
            <div class="row column-3">
              <div>
                <h3>完全版! ビギナーズガイド</h3>
                <p>オンラインカジノが初めてでも大丈夫! 各種ゲームの探し方から遊び方、入出金方法などを 完全網羅する「ビギナーズガイド」がお手伝いします!</p>
                <img width="320" height="187" src="@/assets/images/marketing/vjhp2/reward-component_1.png" alt="alt img">
              </div>
              <div>
                <h3>ご褒美プログラム</h3>
                <p>楽しく遊んでコインを集めて、ベラジョン・ショッ プでお買い物! フリースピンやスピンクレジット、キャッシュアイ テムとも交換できちゃいます!</p>
                <img width="320" height="260" src="@/assets/images/marketing/vjhp2/reward-component_2.png" alt="alt img">
              </div>
              <div>
                <h3>毎日開催トーナメント</h3>
                <p>勝ち方いろいろ、賞金いろいろ、多種多様なトーナ メントが毎日開催! 得意なゲームでいざ勝負!</p>
                <img width="320" height="232" src="@/assets/images/marketing/vjhp2/reward-component_3.png" alt="alt img">
              </div>
            </div>
          </div>
        </section>
        <section id="section-5">
          <div class="container">
            <div class="row">
              <div>
                <h2>先輩プレイヤーの声</h2>
                <p>ベラジョン・ファミリーのメンバー様からのコメントをご紹介♪ ほかにも、勝利を収めたプレイヤー様のリアルなお声は、毎月勝利者インタビューページで大公開し ちゃってます!</p>
                <article>「ゲームの種類がとにかく多い! 出金手続きが簡単で早いのも嬉しい!」</article>
                <button class="warning">
                  <a aria-label="link" :href="data_items.testimonials_section.testimonials_button_redirect_url">{{ data_items.testimonials_section.testimonials_button_text }}</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="section-6">
          <div class="container">
            <div class="row column-2">
              <div>
                <h3>決済方法</h3>
                <p>お好きな方法で入出金がラクラク簡単!</p>
                <img width="324" height="167" src="@/assets/images/marketing/vjhp2/footerPayment.png" alt="alt img">
              </div>
              <div>
                <h3>なにかでお困りですか?</h3>
                <p>日本語カスタマーサポートがお手伝いいたします。</p>
                <img width="324" height="326" src="@/assets/images/marketing/vjhp2/footerSupport.png" alt="alt img">
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div class="container">
            <div class="row">
              <div>
                <h3>そのほかの情報ページ</h3>
                <div id="footer-link">
                  <a aria-label="link" :href="data_items.footer_section.footer_menu_1_redirect_url">{{ data_items.footer_section.footer_menu_1_text }}</a>
                  <a aria-label="link" :href="data_items.footer_section.footer_menu_2_redirect_url">{{ data_items.footer_section.footer_menu_2_text }}</a>
                  <a aria-label="link" :href="data_items.footer_section.footer_menu_3_redirect_url">{{ data_items.footer_section.footer_menu_3_text }}</a>
                  <a aria-label="link" :href="data_items.footer_section.footer_menu_4_redirect_url">{{ data_items.footer_section.footer_menu_4_text }}</a>
                </div>
                <div class="copyright">
                  <small>当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。 Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。</small>
                </div>
                <div>
                  <a aria-label="link" href="https://validator.curacao-egaming.com/validate?domain=www.verajohn.com&seal_id=cc15cb374804a763a5f82ff0a72fd6b436659d0061b3201e86431fa8afff305e39a7bbbadf89ae9274d2e9ee4bd923c3&stamp=ae85a35fb4a6c5816b8b9f17e5b6be96" target="_blank">
                    <img width="34" height="31" src="@/assets/images/marketing/vjhp2/CEG_logo.png" alt="alt img">
                  </a>
                  <a aria-label="link" href="https://www.verajohn.com/about/responsible-gaming" target="_blank">
                    <img width="34" height="31" src="@/assets/images/marketing/vjhp2/icon_age_twenty.svg" alt="alt img">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import Vjhp2Data from '~/pages/marketing/vjhp2/index.vue'
export default {
  components: { Vjhp2Data },
  data: () => ({
    md_data: { }
  }),
  methods: {
    /* data from 'PAGE' store to 'md_data' local variable */
    getMDcontent (emitData) {
      this.md_data = [emitData]
    }
  }
}
</script>
<style lang="scss">
  .vjhp2_wrapper {
    @import '@/assets/sass/marketing/vjhp2/style.scss';
  }
</style>
