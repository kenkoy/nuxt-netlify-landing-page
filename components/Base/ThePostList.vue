<template>
    <section class="featured-posts">
        <div class="container">
            <div v-for="(post, post_index) in posts" :key="post_index">
                <nuxt-link :to="'/marketing/' + post.path + '/' + post.slug" class="post-preview">
                    <article>
                        <h3>{{post.attributes.slug_name}}</h3>
                        <p>{{post.attributes.promo_banner.promo_title}}</p>
                    </article>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
    ul.nav-list a {
        font-size: 15px;
    }
    .featured-posts{
        background: #fff;

        .container {
            display: block;
            padding: 50px 0;
            text-align: center;

            a {
                text-decoration: none;
                // color: #e33227;
                color: #000;
                display: block;
                min-height: 130px;
                height: 100%;
                padding: 20px 50px;
            }

            > div{
                vertical-align: top;
                display: inline-block;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                background: #1e90ff;
                box-shadow: 2px 2px 3px #bdbdbd;
                position: relative;

                &:hover{
                    opacity: .8;
                }
            }
        }
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }


    /* Custom, iPhone Retina */
    @media only screen and (min-width : 320px) {
        .featured-posts{
            padding: 0 20px;
        }
        .featured-posts .container > div{
            width: 100%;
            margin: 10px 0;
        }
    }

    /* Extra Small Devices, Phones */
    @media only screen and (min-width : 576px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {
        .featured-posts .container > div{
            width: 47%;
            margin: 10px;
        }
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
        .featured-posts .container > div{
            width: 31.5%;
            margin: 10px;
        }
    }
</style>
