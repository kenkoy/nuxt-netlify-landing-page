<template>
  <div :class="{ post_wrapper: true }">
    <section id="featured-posts" :class="$nuxt.$route.name">
      <div class="container">
        <div v-for="(post, post_index) in posts" :key="post_index" class="posts">
          <nuxt-link :to="'/marketing/' + post.path + '/' + post.slug" class="post-preview">
            <article>
              <h3>{{ post.attributes.slug_name }}</h3>
              <p>{{ post.attributes.promo_banner.promo_title }}</p>
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

    .marketing-vjlp5,
    .marketing-vjlp6{
        background: #009FE3;

        a{
            color: #08648a;
            background: #fff;

            &:hover{
                background: #EC008B;
                color: #fff;

                h3{
                    color: #FEE63D;
                }
            }
        }
        h3{
            color: #EC0090;
        }
    }

    .marketing-iclp3v2,
    .marketing-iclp2v2{
        background: #230c33;

        a{
            color: #000;
            background: #ef0a8b;

            &:hover{
                background: #9E03EF;
                color: #fff;

                h3{
                    color: #000;
                }
            }
        }
        h3{
            color: #fff;
        }
    }

    #featured-posts{
        background-size: cover;
        padding: 50px 0;
        min-height: calc(100vh - 180px);

        a{
            text-decoration: none;
            font-size: 14px;
            line-height: 24px;
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
        }
    }

    /* Custom, iPhone Retina */
    @media only screen and (min-width : 320px) {
        #featured-posts{
            .container{
                flex-wrap: wrap;
                flex-direction: row;
            }
        }
    }

    /* Extra Small Devices, Phones */
    @media only screen and (min-width : 576px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {
        #featured-posts{
            .posts{
                max-width: 33.33%;
            }
        }
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }
</style>
