<template>
    <div :class="{ vjlp5_wrapper: true }">
        <div class="vjlp5-main">
            <!-- PAGE HANDLING DATA -->
            <Vjlp5Data @emitMDcontent="getMDcontent"/>

            <div v-for="(data_items, data_index) in md_data" :key="data_index">

                <header id="header">
                    <div class="container">
                        <div class="logo">
                            <img alt="alt logo" src="@/assets/images/vjlp5/vj-logo.png" data-not-lazy>
                        </div>

                        <div class="nav-links">
                            <button class="warning">{{data_items.promo_banner.promo_login_button}}</button>
                            <button class="error animated pulse infinite"><strong>{{data_items.promo_banner.promo_join_button}}</strong></button>
                        </div>
                    </div>
                </header>
                <section id="hero">
                    <div class="container">
                        <div class="banner">

                        </div>
                        <!--<div>
                            <button class="error">今すぐプレイ</button>
                        </div>-->
                    </div>
                </section>

                <section id="steps">
                    <div class="container column-3">
                        
                        <div class="animated fadeIn delay-halfs">
                            <span class="num">1</span>
                            <div>
                                <h3>{{data_items.promo_banner.steps.step_title_1}}</h3>
                                <p>{{data_items.promo_banner.steps.step_description_1}}</p>
                            </div>
                        </div>

                        <div class="animated fadeIn delay-1s">
                            <span class="num">2</span>
                            <div>
                                <h3>{{data_items.promo_banner.steps.step_title_2}}</h3>
                                <p>{{data_items.promo_banner.steps.step_description_2}}</p>
                            </div>
                        </div>

                        <div class="animated fadeIn delay-1-and-halfs">
                            <span class="num">3</span>
                            <div>
                                <h3>{{data_items.promo_banner.steps.step_title_3}}</h3>
                                <p>{{data_items.promo_banner.steps.step_description_3}}</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="section1">
                    <div class="container">
                        <div>
                            <h2>{{data_items.first_section.first_section_title}}</h2>
                            <p>{{data_items.first_section.first_section_description}}</p>

                            <div class="separator"></div>
                        </div>
                    </div>
                </section>

                <section id="section2">
                    <div class="container column-2">
                        <div>
                            <h2>{{data_items.second_section.second_section_title_1}}</h2>
                            <p>{{data_items.second_section.second_section_content_1}}</p>

                            <h2>{{data_items.second_section.second_section_title_2}}</h2>
                            <p>{{data_items.second_section.second_section_content_2}}</p>

                            <h2>{{data_items.second_section.second_section_title_3}}</h2>
                            <p>{{data_items.second_section.second_section_content_3}}</p>

                            <h2>{{data_items.second_section.second_section_title_4}}</h2>
                            <p>{{data_items.second_section.second_section_content_4}}</p>
                        </div>

                        <div>
                            <h2>{{data_items.second_section.second_section_title_5}}</h2>
                            <p>{{data_items.second_section.second_section_content_5}}</p>

                            <h2>{{data_items.second_section.second_section_title_6}}</h2>
                            <p>{{data_items.second_section.second_section_content_6}}</p>

                            <h2>{{data_items.second_section.second_section_title_7}}</h2>
                            <p>{{data_items.second_section.second_section_content_7}}</p>

                            <h2>{{data_items.second_section.second_section_title_8}}</h2>
                            <p>{{data_items.second_section.second_section_content_8}}</p>
                        </div>
                    </div>
                </section>

                <section id="section3">
                    <div class="container">
                        <div class="separator"></div>
                    </div>
                </section>


                <section id="section4">
                    <div class="container">
                        <div>
                            <h2>{{data_items.third_section.third_section_title}}</h2>

                            <ol>
                                <li>{{data_items.third_section.third_section_content_1}}</li>
                                <li>{{data_items.third_section.third_section_content_2}}</li>
                                <li>{{data_items.third_section.third_section_content_3}}</li>
                                <li>{{data_items.third_section.third_section_content_4}}</li>
                                <li>{{data_items.third_section.third_section_content_5}}</li>
                                <li>{{data_items.third_section.third_section_content_6}}</li>
                                <li>{{data_items.third_section.third_section_content_7}}</li>
                                <li>{{data_items.third_section.third_section_content_8}}</li>
                                <li>{{data_items.third_section.third_section_content_9}}</li>
                            </ol>

                            <div class="separator"></div>
                        </div>
                    </div>
                </section>

                <section id="section5">
                    <div class="container">
                        <div>
                            <h2>{{data_items.fourth_section.fourth_section_title}}</h2>

                            <ol>
                                <li>{{data_items.fourth_section.fourth_section_content_1}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_2}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_3}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_4}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_5}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_6}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_7}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_8}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_9}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_10}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_11}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_12}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_13}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_14}}</li>
                                <li>{{data_items.fourth_section.fourth_section_content_15}}</li>
                            </ol>

                            <div class="separator"></div>
                        </div>
                    </div>
                </section>


                <footer>
                    <div class="container">
                        <div>
                            <div id="footer-icon">
                                <a href="">
                                    <img src="https://files.vjpromo.com/bannerflow/lp-core/ico/icon_age.svg" alt="alt img"/>
                                </a>

                                <a href="">
                                    <img src="https://files.vjpromo.com/bannerflow/lp-core/ico/icon_gt.svg" alt="alt img"/>
                                </a>

                                <a href="">
                                    <img src="https://files.vjpromo.com/bannerflow/lp-core/ico/icon_curacao.svg" alt="alt img"/>
                                </a>
                            </div>

                            <p>
                                <a href="https://www.verajohn.com/about/responsible-gaming">
                                    ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。
                                </a>
                            </p>

                            <p>当ウェブサイトは、キュラソー政府の商業登記に登録されている、番号149132のBreckenridge Curacao B.V.（登録住所：Emancipatie Boulevard, Dominico F. “Don” Martina 31, Willemstad, Curaçao）により運営されています。</p>
                            <p>Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #5536/JAZに基づく C.I.L Curacao Interavtive Licensing N.V. により付与されたサブライセンスを通して正式な許可を所持しています</p>
                        </div>
                    </div>
                </footer>

            </div>

        </div>
    </div>
</template>

<script>
    import Vjlp5Data from '~/pages/marketing/vjlp5/_slug/index.vue'

  export default{
      data(){
          return{
              layout: false,
              desktop: true,
              mobile: false,
              md_data: { },
              language: ''
          }
      },
      components: {
          Vjlp5Data
      },
    //   created() {
    //       window.addEventListener("resize", this.myEventHandler);
    //   },
    //   destroyed() {
    //       window.removeEventListener("resize", this.myEventHandler);
    //   },
      mounted(){
          this.myEventHandler()
      },
      methods: {
          /* data from 'PAGE' store to 'md_data' local variable */
          getMDcontent: function ( emitData ) {
            this.md_data = [ emitData ]

                this.md_data.forEach(item => {
                    this.language = item.promo_locale.promo_language_code
                })

              
          },
          myEventHandler(e) {
               /* code for handling resize */
              if (window.innerWidth <= 576){
                  this.desktop = false
                  this.mobile = true
              }
              else {
                  this.desktop = true
                  this.mobile = false
              }
          }
      },
      head() {
          return {
                htmlAttrs: {
                    lang: this.language
                },
                link: [
                    { rel: 'shortcut icon', href: '/marketing/vj-favicon.ico', type: 'image/x-icon' },
                ],
          }
      }
  }
</script>

<style lang="scss">
    .vjlp5_wrapper {
        @import '@/assets/sass/vjlp5/style.scss';
        @import '@/assets/sass/base/style.scss';
    }
</style>
