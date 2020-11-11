<template>
    <div :class="{ vjlp6_wrapper: true }">
        <div class="vjlp6-main">
            <!-- PAGE HANDLING DATA -->
            <Vjlp6Data @emitMDcontent="getMDcontent"/>

            <div v-for="(data_items, data_index) in md_data" :key="data_index">
                
                <section id="hero">
                    <a id="login-btn" :href="loginURL" class="login hvr-pulse">
                        <div class="animated fadeIn">
                            <i class="material-icons">exit_to_app</i>
                            <div class="login-txt">
                            <p>{{ loginText }}登録</p>
                            </div>
                        </div>
                    </a>
                    <div class="container">
                        <div class="strip">
                            <img style="height: 150px;" src="https://files.vjpromo.com/bannerflow/lp-core/brand_vj/img/logo.png"/>
                            <div>
                                <h1>今だけ
                                <br>最高$<span>500</span>のボーナス<br>
                                をプレゼント！</h1>
                                <button class="animated pulse infinite">ご登録はこちら</button>
                                <div class="small-terms banner-terms" data-v-835fbe4a=""><a href="#terms" class="link-terms-conditions ctac">利用規約</a>に同意します。</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="steps">
                    <div class="container column-3">

                        <div class="animated fadeIn delay-halfs">
                            <span class="num">1</span>
                            <div>
                                <h3>{{data_items.steps.step_title_1}}</h3>
                                <p>{{data_items.steps.step_description_1}}</p>
                            </div>
                        </div>

                        <div class="animated fadeIn delay-1s">
                            <span class="num">2</span>
                            <div>
                                <h3>{{data_items.steps.step_title_2}}</h3>
                                <p>{{data_items.steps.step_description_2}}</p>
                            </div>
                        </div>

                        <div class="animated fadeIn delay-1-and-halfs">
                            <span class="num">3</span>
                            <div>
                                <h3>{{data_items.steps.step_title_3}}</h3>
                                <p>{{data_items.steps.step_description_3}}</p>
                            </div>
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
                                <li v-for="(third_section_list, third_index) in data_items.third_section.third_bullet_list" :key="third_index">
                                    {{third_section_list.third_section_content}}
                                </li>
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
                                <li v-for="(fourth_section_list, fourth_index) in data_items.fourth_section.fourth_bullet_list" :key="fourth_index">
                                    {{fourth_section_list.fourth_section_content}}
                                </li>
                            </ol>

                            <div class="separator"></div>
                        </div>
                    </div>
                </section>

                <Footer
                    :promo_language_code = 'language'
                    :promo_country_code = 'country_code'
                    :landing_page_type="'verajohn'"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Vjlp6Data from '~/pages/marketing/vjlp6/_slug/index.vue'
    import Footer from '~/components/Base/TheFooter.vue'

    export default{
        data(){
            return{
                layout: false,
                desktop: true,
                mobile: false,
                md_data: { },
                language: '',
                country_code: '',
            }
        },
        components: {
            Vjlp6Data,
            Footer
        },
        methods: {
          /* data from 'PAGE' store to 'md_data' local variable */
            getMDcontent: function ( emitData ) {
            this.md_data = [ emitData ]

            this.md_data.forEach(item => {
                this.language = item.promo_locale.promo_language_code
                this.country_code = item.promo_locale.promo_country_code
            })
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
    .vjlp6_wrapper {
        @import '@/assets/sass/base/fonts.css';
        @import '@/assets/sass/vjlp6/style.scss';
        @import '@/assets/sass/base/style.scss';
    }
</style>
