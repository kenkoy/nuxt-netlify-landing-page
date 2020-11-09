<template>
    <div :class="{ nav_wrapper: true }">
        <nav id="nav-desktop" v-if="desktop === true">
            <div class="container">
                <div>
                    <!-- <img src="@/assets/img/gamesys-logo.png"/> -->
                </div>
                <div>
                    <nuxt-link :to="nav_links.link" v-for="(nav_links, nav_index) in nav_items" :key="nav_index">
                        {{nav_links.name}}
                    </nuxt-link>
                </div>
            </div>
        </nav>

        <nav id="nav-mobile" v-if="mobile === true">
            <input type="checkbox" id="ham-menu"/>
                <label for="ham-menu">
                    <div class="hide-des">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <div class="ham-overlay"></div>
                <div class="ham-menu"> <!-- ADD VERTICAL CLASS TO CHANGE -->
                    <ul class="centre-text bold-text">
                        <li v-for="(nav_links, nav_index) in nav_items" :key="nav_index">
                            <nuxt-link :to="nav_links.link">
                                {{nav_links.name}}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                desktop: true,
                mobile: false,

                nav_items: [
                    {
                        name: "VJLP 1",
                        link: "/marketing/vjlp1"
                    },
                    {
                        name: "VJLP 3",
                        link: "/marketing/vjlp3"
                    },
                    {
                        name: "VJLP 4",
                        link: "/marketing/vjlp4"
                    },
                    {
                        name: "VJLP 5",
                        link: "/marketing/vjlp5"
                    },
                    {
                        name: "ICLP 1",
                        link: "/marketing/iclp1"
                    },
                    {
                        name: "ICLP 2",
                        link: "/marketing/iclp2"
                    },
                    {
                        name: "ICLP 3",
                        link: "/marketing/iclp3"
                    },
                    {
                        name: "VJ Stripped Down",
                        link: "/marketing/vjhp2"
                    },
                ]
            }
        },
        destroyed() {
            window.removeEventListener("resize", this.myEventHandler);
        },
        mounted(){
            this.myEventHandler()
            window.addEventListener("resize", this.myEventHandler);
        },
        methods: {
            myEventHandler(e) {
                // your code for handling resize...
                if(window.innerWidth <= 767){
                    this.desktop = false
                    this.mobile = true
                }
                else{
                    this.desktop = true
                    this.mobile = false
                }
            }
        }
    }
</script>

<style lang="scss">
    .nav_wrapper {
        @import '@/assets/sass/base/style.scss';
    }
</style>
