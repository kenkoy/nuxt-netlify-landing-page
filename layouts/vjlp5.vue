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
                            <button class="warning">
                                <a :href="data_items.attributes.promo_banner.promo_join_button_redirect_url">
                                    {{data_items.attributes.promo_banner.promo_login_button}}
                                </a>
                            </button>
                            <button class="error animated pulse infinite">
                                <a :href="data_items.attributes.promo_banner.promo_login_button_redirect_url"><strong>{{data_items.attributes.promo_banner.promo_join_button}}</strong></a>
                            </button>
                        </div>
                    </div>
                </header>
                <section id="hero" :style="cssBackground">
                    <div class="container">
                        <div class="banner">

                        </div>
                    </div>
                </section>

                <section id="steps">
                    <div class="container column-3">

                        <div class="animated fadeIn delay-halfs">
                            <span class="num">1</span>
                            <div>
                                <h3>{{data_items.attributes.steps.step_title_1}}</h3>
                                <p>{{data_items.attributes.steps.step_description_1}}</p>
                            </div>
                        </div>

                        <div class="animated fadeIn delay-1s">
                            <span class="num">2</span>
                            <div>
                                <h3>{{data_items.attributes.steps.step_title_2}}</h3>
                                <p>{{data_items.attributes.steps.step_description_2}}</p>
                            </div>
                        </div>

                        <div class="animated fadeIn delay-1-and-halfs">
                            <span class="num">3</span>
                            <div>
                                <h3>{{data_items.attributes.steps.step_title_3}}</h3>
                                <p>{{data_items.attributes.steps.step_description_3}}</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="section1">
                    <div class="container">
                        <div>
                            <div v-for="(first_section, first_index) in data_items.attributes.first_section" :key="first_index">
                                <h2>{{first_section.first_section_title}}</h2>
                                <p>{{first_section.first_section_description}}</p>
                            </div>

                            <div class="separator"></div>
                        </div>
                    </div>
                </section>

                <section id="section2">
                    <div class="container column-2">
                        <div>
                            <div v-for="(second_section_left, second_left_index) in data_items.attributes.second_section_left" :key="second_left_index">
                                <h2>{{second_section_left.second_section_title}}</h2>
                                <p>{{second_section_left.second_section_content}}</p>
                            </div>
                        </div>

                        <div>
                            <div v-for="(second_section_right, second_right_index) in data_items.attributes.second_section_right" :key="second_right_index">
                                <h2>{{second_section_right.second_section_title}}</h2>
                                <p>{{second_section_right.second_section_content}}</p>
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
                            <h2>{{data_items.attributes.third_section.third_section_title}}</h2>

                            <ol>
                                <li v-for="(third_section_list, third_index) in data_items.attributes.third_section.third_bullet_list" :key="third_index">
                                    {{third_section_list.third_section_content}}
                                </li>
                            </ol>

                            <div class="separator"></div>
                        </div>
                    </div>
                </section>


                <div v-html='html'></div>

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
    import Vjlp5Data from '~/pages/marketing/vjlp5/_slug/index.vue'
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
                html: '',

                desktop: '',
                tablet: '',
                mobile: '',
            }
        },
        components: {
            Vjlp5Data,
            Footer
        },
        computed: {
          cssBackground: function () {
            return {
                '--bg-image': `url('${this.desktop}')`,
                '--bg-image-m': `url('${this.mobile}')`,
                '--bg-banner': `url('${this.tablet}')`
            }
          }
        },
        methods: {
          /* data from 'PAGE' store to 'md_data' local variable */
            getMDcontent: function ( emitData ) {
            this.md_data = [ emitData ]

            this.md_data.forEach(item => {
                this.language = item.attributes.promo_locale.promo_language_code
                this.country_code = item.attributes.promo_locale.promo_country_code
                this.html = item.html

                this.desktop = item.attributes.promo_banner.promo_images.promo_bg_desktop
                this.tablet = item.attributes.promo_banner.promo_images.promo_bg_banner
                this.mobile = item.attributes.promo_banner.promo_images.promo_bg_mobile
            })
        },
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
        @import '@/assets/sass/base/fonts.css';
        @import '@/assets/sass/vjlp5/style.scss';
        @import '@/assets/sass/base/style.scss';
    }
</style>
