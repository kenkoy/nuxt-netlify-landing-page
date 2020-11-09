<template>
    <div :class="{ nathan_wrapper: true }">
        <div class="nathan-main">
            <!-- PAGE HANDLING DATA -->
            <NathanData @emitMDcontent="getMDcontent"/>

            <div v-for="(data_items, data_index) in md_data" :key="data_index">

                <!--<img :src="data_items.promo_banner.promo_images.promo_bg_mobile" data-not-lazy/>-->
                <img :src="require(`~/assets/images/cms_media/${data_items.promo_banner.promo_images.promo_bg_banner}`)" data-not-lazy />

                <p>{{data_items.promo_banner}}</p>



            </div>

        </div>
    </div>
</template>

<script>
    import NathanData from '~/pages/marketing/nathan/_slug/index.vue'

    export default{
        data(){
            return{
                layout: false,
                desktop: true,
                mobile: false,
                md_data: { },
                language: '',
            }
        },
        components: {
            NathanData
        },
        methods: {
          /* data from 'PAGE' store to 'md_data' local variable */
            getMDcontent: function ( emitData ) {
            this.md_data = [ emitData ]

            this.md_data.forEach(item => {
                this.language = item.promo_locale.promo_language_code
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
    .vjlp5_wrapper {
        @import '@/assets/sass/base/fonts.css';
        @import '@/assets/sass/vjlp5/style.scss';
        @import '@/assets/sass/base/style.scss';
    }
</style>
