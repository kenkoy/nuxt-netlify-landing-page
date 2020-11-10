<template>
    <div :class="{ nav_wrapper: true }">
        <nav id="nav-desktop" v-if="desktop === true">
            <div class="container">
                <div>
                    <img src="~/assets/images/gamesys-logo.png"/>
                </div>
                <div>
                    <nuxt-link v-for="(nav_links, nav_index) in nav_items" :key="nav_index" :to="nav_links.path">
                        {{nav_links.name}}
                    </nuxt-link>

                    <nuxt-link to="/marketing/admin">
                        Admin
                    </nuxt-link>
                </div>
            </div>
        </nav>

        <nav id="nav-mobile" v-if="mobile === true">
            <input type="checkbox" id="ham-menu"/>
                <label for="ham-menu">
                    <div class="hide-des" @click="noScroll">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <div class="ham-overlay"></div>
                <div class="ham-menu"> <!-- ADD VERTICAL CLASS TO CHANGE -->
                    <ul class="centre-text bold-text">
                        <li v-for="(nav_links, nav_index) in nav_items" :key="nav_index">
                            <nuxt-link :to="nav_links.path">
                                {{nav_links.name}}
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/marketing/admin">
                                Admin
                            </nuxt-link>
                        </li>
                        <!-- <li v-for="(nav_links, nav_index) in nav_items" :key="nav_index">
                            <nuxt-link :to="nav_links.link">
                                {{nav_links.name}}
                            </nuxt-link>
                        </li> -->
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
                isActive: false,
                nav_items: [],
                // nav_items: [
                //     {
                //         name: "VJLP 1",
                //         link: "/marketing/vjlp1"
                //     },
                //     {
                //         name: "VJLP 3",
                //         link: "/marketing/vjlp3"
                //     },
                //     {
                //         name: "VJLP 4",
                //         link: "/marketing/vjlp4"
                //     },
                //     {
                //         name: "VJLP 5",
                //         link: "/marketing/vjlp5"
                //     },
                //     {
                //         name: "VJLP 6",
                //         link: "/marketing/vjlp6"
                //     },
                //     {
                //         name: "ICLP 1",
                //         link: "/marketing/iclp1"
                //     },
                //     {
                //         name: "ICLP 2",
                //         link: "/marketing/iclp2"
                //     },
                //     {
                //         name: "ICLP 3",
                //         link: "/marketing/iclp3"
                //     },
                //     {
                //         name: "VJ Stripped Down",
                //         link: "/marketing/vjhp2"
                //     },
                // ]
            }
        },
        destroyed() {
            window.removeEventListener("resize", this.myEventHandler)
        },
        mounted(){
            this.myEventHandler()
            window.addEventListener("resize", this.myEventHandler)

            $nuxt.$router.options.routes.forEach(route => {
                if(!route.name.includes('slug') && !route.name.includes('about') && !route.name.includes('admin') && !route.name.includes('nathan')){
                    this.nav_items.push({
                        name: route.name.substr(10, 10),
                        path: route.path
                    })
                }
            })
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
            },
            noScroll(){
                this.isActive = !this.isActive;
                if(this.isActive){
                    document.body.classList.add('noScroll')
                }
                else{
                    document.body.classList.remove('noScroll')
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
