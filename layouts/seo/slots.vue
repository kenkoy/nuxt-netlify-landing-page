<template>
  <div class="enjoy-wrapper" :class="{ seo_wrapper: true }">
    <!-- Change class name to actual page name -->
    <nuxt />
    <div
      v-if="Object.keys(mdData).length > 0"
      class="seo-main"
    >
      <nav id="menu-slide" v-if="menuToggle">
        <div id="menu-slide-header">
          <div>
            <button class="btn" @click="pageSlideOff()">x</button>
          </div>
          <div>
            <p>メニュー</p>
          </div>
          <div class="icon-wrapper">
            <i class="home-icon"></i>
          </div>
        </div>
        <div>
          <h1>Menu Coming Soon</h1>
        </div>
      </nav>

      <main :class="pageSlide">
        <div id="overlay" v-if="menuToggle"></div>
        <header :class="menuToggle ? 'nav-slide-up' : 'nav-slide-down'" id="header-menu">
          <div>
            <button class="btn menu-gamburger" @click="pageSlideOn()">
              <div>
                <span />
                <span />
                <span />
              </div>
              <p>メニュー</p>
            </button>
          </div>

          <div id="header-logo">
            <img class="logo" src="@/assets/images/seo/logo.png"/>
          </div>

          <div id="header-button">
            <button class="primary login">
              今すぐ登録しよう!
            </button>
          </div>
        </header>

        <section id="games">
          <div class="container-grid separator">
            <div class="row">
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5e6b251e5292e4956.png?qsbeem&607d&6073" />
                <p>Dreams of Gold</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5be43f82cbe050.png?qsbeem&607d&6073" />
                <p>Hawaiian Dream </p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5d1b0b9a4524e0.png?qsbeem&607d&6073" />
                <p>Battle Dwarf</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5d4a8e8a09d5e0.png?qsbeem&607d&6073" />
                <p>Yokozuna Clash</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5e254059a8b020.png?qsbeem&607d&6073" />
                <p>Piggy Riches Megaways</p>
              </div>
              <div>
                <img src="https://cdn.ridgegaming.net/files/dynimage/88:88/files/upload/game/gameimage_vjicon5e254059a8b020.png?qsbeem&607d&6073" />
                <p>Drago - Jewels of Fortune</p>
              </div>
            </div>
          </div>
        </section>

        <section id="game-tiles">
          <div class="container">
            <div class="row column-4 negate-gutter">
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row column-4 loyalty negate-gutter">
              <div class="pods">
                <p>ライブカジノ</p>
              </div>
            </div>
          </div>
        </section>

        <section id="footer-links">
          <img src="@/assets/images/seo/footer-verajohn.png" />
          <div class="footer-item">
            <a href="/ja/help">
            ヘルプ・センター
            </a>
          </div>
          <div class="footer-item">
            <a href="/ja/about/beginnersguidemb">
            ビギナーズガイド
            </a>
          </div>
        </section>

        <section id="seo-contents">
          <div class="container">
            <div class="row negate-gutter">
              <div>
                <h1>ベラジョンオンラインカジノのオンラインビデオスロット</h1>
                <p>ベラジョンオンラインカジノでお気に入りのビデオスロットを探してみましょう。</p>
                <p>ベラジョンオンラインカジノでは、世界屈指のゲーム配信会社が手掛けた、幅広い種類のビデオスロットのプレイが可能です！いつでも公平なゲームをお楽しみいただけます。</p>

                <h2>  ベラジョンでお好みのビデオスロットを検索しましょう</h2>

                <p>ベラジョンオンラインカジノではお好みのスロットを簡単に検索することができます。</p>
                <p>多種多様なスロットゲームの中からお気に入りに機種を見つけ、ベラジョン の様々な決済方法を利用し、安全かつ簡単に入金しましょう。</p>

                <p>まず、ご入金をする前にウェルカムオファーの内容をチェックしてからご入金後プレイを楽しみましょう！</p>

                <h2>オンラインスロットの安全性</h2>

                <p> ベラジョンは、オンラインカジノ合法国であるキュラソーの州知事により発行された政府ライセンスを取得し、厳格かつ合法的に運営されています。</p>
                <p>上記に加え、ベラジョンでは、安全性や公平性を維持するため、様々な政府機関や政府認定の独立機関（Gamcare や Gamstopなど）と提携をしているのと同時に認定（eCOGRAなどから）されています。</p>

                <h2>ビデオスロットとクラシックスロットの違いについて</h2>

                <p>基本的にクラシックスロットは3リール1列のみで構成されている一方で、最新のオンラインビデオスロットは、基本的に5リール3列以上で構成されているので、ペイライン数もクラッシックスロットと比較すると多いです。</p>
                <p>そのため、スピン毎に勝利金を獲得することができる確率も高くなっています。</p>

                <p>また、基礎的な技術で作られているクラシックスロットと比較するとビデオスロットは、最新の技術を用いた仕様となっているため、スロットマシーンではなくゲームのような感覚で遊ぶことができます。</p>

                <p>魅力的な演出やプレイヤーを楽しませてくれるボーナスラウンドも満載です。</p>

                <h2>ボーナス機能搭載のビデオスロット機種 </h2>

                <p>最近のビデオスロットは、プレイヤーを楽しませてくれるボーナスラウンドが搭載されています。</p>
                <p>ボーナスラウンドを期待しながらプレイすることで、スピン毎のワクワクも倍増です！</p>
                <p>大多数のビデオスロットには、ランダムワイルド、フリースピンのような多種多様なボーナス機能が搭載されています。</p>

                <p>ビデオスロットのメリットは、戦略を立て、考えながらプレイする必要がないという点です。</p>
                <p>例えば、1スピン回しただけでジャックポットが当選することもあれば、1000スピン回しても当たらないこともあります。</p>

                <p>運が頼りになる場面が大半を占めるため、気楽に気長に楽しめます。</p>

                <p>ビデオスロットをプレイする際ののちょっとしたコツは、魅力的なボーナス機能が搭載されている人気ゲームのタイトルをプレイしてということです。</p>

                <p>Butterfly Staxxでは全てのシンボルに置き換えることのできるワイルドシンボルやリスピン機能が有利にゲームを進めてくれます。</p>

                <p>Gonzo’s Questでは勝利金が発生したラウンドはシンボルが連鎖し、連鎖の回数に応じてペイアウト率が上昇するという魅力的な特徴があります。</p>
                <p>このように人気タイトルには人気であるれっきとした理由があります。</p>

                <h2>ロウ・バリアンス（低変動）のビデオスロット</h2>

                <p>勝利金の額より、小当たりが多く、とにかく楽しめるスロットがお好みの方にはロウ・バリアンス（低変動、いわば流動性の良い）スロットがおすすめです。</p>
                <p>こういったスロットでは、ペイライン数が他のスロットと比較すると多く、勝利金が発生しやすいです。</p>
                <p>小さい当たりの頻度は高いですが、高額勝利金を獲得できる可能性は比較的低いと言えます。</p>

                <p>これらのスロットの特徴として、RTP（還元率）が高いことが挙げられ、当たりの頻度を重要視している方にはオススメのスロットです。</p>

                <p> Birds On A Wire,  Gemix,  (ゲーミックス),    Book Of Dead  ,Bonza Megaways ,  Dragon Kingdom,   Dead Or Alive 2 ,   Divine Fortune </p>
                <p>Star Burst (スターバースト), Gonzo’s Quest (ゴンゾーズクエスト),   Prefect Gems,   Rise Of Merlin , Sweet Alchemy </p>

                <p>また、パチスロ風<a href="https://www.verajohn.com/ja/game/hawaiian-dream" class="n-link">Hawaiian Dream(ハワイアンドリーム)</a>や<a href="https://www.verajohn.com/ja/game/battle-dwarf" class="n-link">Battle(バトルドワーフ)</a>も日本人プレイヤーの間で大人気のビデオスロットなので、パチスロファンにはオススメの機種です。</p>

                <h2>オンラインスロットの仕組み</h2>

                <p>オンラインスロットは非常にシンプルです。</p>
                <p>プレイするゲームを選択し、ベット額の設定後、スピンボタンを押し、リールを回すだけです！</p>

                <p>スピン毎のべット額を選択することができ、最低0.10ドル からできるスロットもあれば、最高 200ドルまでベット額を上げることができる機種も取り揃えています。</p>

                <p>リールを回して、後は幸運を祈りましょう。</p>
                <p>スピンの結果はRNGという乱数を打ち出すシステムにより、ランダムな数字が生成され、決定します。</p>
                <p>このシステムには、ベラジョンオンラインカジノもゲームプロバイダー側も一切介入することができないので、安心で公平なゲームを保証しています。</p>
                <p>ペイラインを揃えることで勝利金を獲得することができ、ボーナスゲームへ突入すると高額勝利金を獲得することができる可能性も大です！</p>

                <p>ジャックポット機能が搭載されているほとんどのビデオスロットでは、ジャックポットが払い出されるタイミングを予測することができません。</p>
                <p>しかし、一部のビデオスロットでは、ジャックポットが特定の数字に達したタイミングで払い出されます。</p>

                <p>ビデオスロットは違法カジノで、不正な操作が行われているという噂もありますが、ベラジョンオンラインカジノのような世界的に有名であり、大手であるオンラインカジノでは、そういったことはございませんので安心してお楽しみください！</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside id="footer-login-register" :class="menuToggle ? 'footer-slide-down' : 'footer-slide-up'">
        <button class="secondary">ログイン</button>
        <button class="primary">今すぐ登録しよう!</button>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageSlide: '',
      menuToggle: false,
      mdData: {},
      htmlBody: ''
    }
  },
  computed: {
    // USE THE CODE BELOW IF THE DESIGN / TEMPLATE HAVE BANNERS. ELSE, DELETE
    // cssBackground () {
    //   const images = this.mdData.promo_banner.promo_images
    //   return {
    //     '--bg-image': `url('${images.promo_bg_desktop}')`,
    //     '--bg-image-m': `url('${images.promo_bg_mobile}')`,
    //     '--bg-banner': `url('${images.promo_bg_banner}')`
    //   }
    // }
  },
  created () {
    this.$root.$once('seo-data', (data) => { // Change to actual page name
      this.htmlBody = data.htmlData
      this.mdData = data.yamlData
    })
  },
  beforeDestroy () {
    this.$root.$off('seo-data') // Change to actual page name
  },
  methods: {
    pageSlideOn () {
      this.pageSlide = 'page-slide'
      this.menuToggle = true
      document.body.classList.add('noScroll')
    },
    pageSlideOff () {
      this.pageSlide = ''
      document.body.classList.remove('noScroll')
      setTimeout(() => {
        this.menuToggle = false
      }, 300)
    }
  }
}
</script>

<style lang="scss"> // Change to actual path, all assets should be on asset folder. Create separate assets / sass for each templates
  .seo_wrapper {
    @import '@/assets/sass/seo/style.scss';
  }
</style>
