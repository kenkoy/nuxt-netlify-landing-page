<template>
  <div class="layout-css" :class="{ post_wrapper: true }">
    <section id="featured-posts" :class="$nuxt.$route.name.includes('vj') ? 'vj-post-wrapper' : 'ic-post-wrapper'">
      <div class="container">
        <div class="row">
          <div v-for="(post, post_index) in posts" :key="post_index" class="posts">
            <nuxt-link :to="'/marketing/' + post.path + '/' + post.slug" class="post-preview">
              <article>
                <h3>{{ post.attributes.slug_name }}</h3>
                <p>{{ post.attributes.promo_banner.promo_title }}</p>
              </article>
            </nuxt-link>
          </div>
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
      .vj-post-wrapper{
          background: #009FE3;

          a{
            color: #08648a;
            background: #fff;
            transition: all 0.25s ease;

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
            transition: all 0.25s ease;
          }
      }

      .ic-post-wrapper{
          background: #230c33;

          a{
            color: #000;
            background: #ef0a8b;
            transition: all 0.25s ease;

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
            transition: all 0.25s ease;
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

        .row{
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
            .row{
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
  }
</style>
