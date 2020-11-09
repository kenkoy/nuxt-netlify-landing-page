<template>
    <div :class="{ post_wrapper: true }">
        <section id="featured-posts">
            <div class="container">
                <div class="posts" v-for="(post, post_index) in posts" :key="post_index">
                    <nuxt-link :to="'/marketing/' + post.path + '/' + post.slug" class="post-preview">
                        <article>
                            <h3>{{post.attributes.slug_name}}</h3>
                            <p>{{post.attributes.promo_banner.promo_title}}</p>
                        </article>
                    </nuxt-link>
                </div>
            </div>
        </section>
    </div>
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
    .post_wrapper {
        @import '@/assets/sass/base/style.scss';
    }

    #featured-posts{
        background-color: #e43229;
        background-size: cover;
        padding: 50px 0;
        background-image: url('https://media.cdn.teamtailor.com/images/s3/teamtailor-production/hero_picture_large_full_cover-v4/image_uploads/d3e1664a-0fa8-45fd-bab5-571a651bbe9d/original.jpg');

        a{
            text-decoration: none;
            color: #2C3E50;
            font-size: 14px;
            line-height: 24px;
            background: #fff;
            display: block;
            width: 100%;
            height: 100%;
            padding: 25px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-shadow: 0px -1px 10px 5px rgba(89, 89, 89, 0.1);
            -moz-box-shadow: 0px -1px 10px 5px rgba(89, 89, 89, 0.1);
            box-shadow: 0px -1px 10px 5px rgba(89, 89, 89, 0.1);
        }
        h3{
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #e43229;
            text-transform: none;
            margin: 0;
        }

        .container{
            flex-wrap: wrap;
        }

        .posts{
            padding: 10px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            max-width: 33.33%;
        }
    }
</style>
