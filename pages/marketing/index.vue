<template>
  <div :class="month === 10 ? 'holloween' : month === 11 ? 'christmas' : 'default'">
    <div class="layout-css" :class="{ home_wrapper: true }">
      <div id="gradient-wrapper" />
      <div v-if="month === 10" class="smoke" /> <!-- HOLLOWEEN -->
      <section class="intro">
        <div v-if="month === 11" class="snowflakes" aria-hidden="true">
          <!-- CHRISTMAS -->
          <div v-for="i in 10" :key="i" class="snowflake">
            ❅
          </div>
        </div>
        <div class="container">
          <div class="row">
            <h1 class="animated fadeIn delay-1s typography">
              デジタル取得サービス
            </h1>
            <p class="animated fadeIn delay-2s">
              私たちは世界をリードするオンラインゲームオペレーターであり、進化するグローバルセクターでの将来の成長に向けて戦略的に位置づけられています。
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <div class="row column-2">
            <div>
              <p><strong>Play Online Casino at Vera&John</strong></p>
              <p>Ladies and gentlemen, welcome to Vera&John casino, home to hundreds of amazing online slot games, table games, live casino games, and much more. Whether you want to play at home on your PC or tablet, or on the go with our amazing online mobile casino, you can be sure of a fun-filled casino experience with us.</p>
            </div>

            <div>
              <p><strong>InterCasino</strong></p>
              <p>At InterCasino, you’re the real deal. You’re what matters most. And you deserve the best. That’s why you’re reading about one of the longest-running, prestigious and most trusted online casinos in the world.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- <section id="light-bg">
        <div class="container">
          <div class="banner">
            <br><br>
            <h2 class="light-typography">
              明るい <span>背景</span>
            </h2>
            <h2 class="light-typography">
              ヒーロー画像
            </h2>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <div>
            <h3>成功したゲームブランドのポートフォリオを提供する</h3>
            <p>私たちはオンラインカジノとビンゴ主導のブランドの大手オペレーターです。私たちの焦点は、クラス最高のプレーヤー体験とゲームコンテンツを世界中の視聴者に提供する、特徴的で認識可能なブランドの多様なポートフォリオを構築することにあります。</p>
          </div>
        </div>
      </section>

      <section id="dark-bg-inverted">
        <div class="container">
          <div class="banner">
            <h2 class="dark-typography">
              暗い<span>背景</span>
            </h2>
            <h2 class="dark-typography">
              ヒーロー画像
            </h2>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <div>
            <h3>成長を実現するために主要市場に<span>焦点を当てる</span></h3>
            <p>成長を実現するために主要市場に焦点を当てる</p>
          </div>
        </div>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      month: ''
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: 'ja'
      },
      bodyAttrs: {
        id: 'ja-jp'
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap'
        }
      ]
    }
  },
  created () {
    const d = new Date()
    this.month = d.getMonth()
  }
}
</script>
<style lang="scss">
.default .home_wrapper{
  background: url('~assets/images/marketing/home/home-bg2.jpg') no-repeat #c21a1a;
    background-attachment: fixed;
}
.default .intro{
  background: url('~assets/images/marketing/home/home-bg.png') no-repeat;
  background-position: center;
  background-size: cover;
}

.holloween .home_wrapper{
  background: url('~assets/images/marketing/home/home-bg2-holloween.jpeg') no-repeat #c21a1a;
  background-attachment: fixed;
}
.holloween .intro{
  background: url('~assets/images/marketing/home/home-bg-holloween.png') no-repeat;
  background-position: center;
  background-size: cover;
}
.holloween .smoke{
  background: url('https://criminal-empire.co.uk/themes/CrimEmpTheme/assets/img/smoke.gif') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: .7;
  z-index: 0;
}

.christmas .home_wrapper{
  background: url('~assets/images/marketing/home/home-bg2-xmas.jpg') no-repeat #c21a1a;
  background-attachment: fixed;
}
.christmas .intro{
  background: url('~assets/images/marketing/home/home-bg-xmas.png') no-repeat;
  background-position: center;
  background-size: cover;
}
.home_wrapper{
  .intro .row{
    height: calc(100vh - 143.4px);
    min-height: 500px;
  }
  #gradient-wrapper{
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    mix-blend-mode: soft-light;
    min-height: calc(500px + 146px);
  }

  #about{
    background: #31312E;
    padding: 30px;
    .row{
      align-items: center;
    }

    h2{
      color: #ffd81c;
    }
    img{
      opacity: .8;
      max-width: 250px;
    }

    p strong{
      color: #fff;
      text-transform: uppercase;
    }
    p{
      color: #C1C7C7;
    }
  }
}

.typography{
  background: linear-gradient(#c03e40, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-family: 'Teko', sans-serif;
  letter-spacing: -1px;
  line-height: 55px;
  filter: drop-shadow(3px 3px 4px #c03e40);
}
//
// .light-typography{
//   font-size: 65px;
//   // background: linear-gradient(#ff2c9f, #ffd200);
//   background: linear-gradient(#ff2c9f, #fb9dd0);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: 700;
//   font-family: 'MainFont-DemiBold';
//   letter-spacing: -1px;
//   line-height: 75px;
//   filter: drop-shadow(3px 3px 4px #730240);
//   margin: 0;
//
//   span{
//     background: linear-gradient(#ffdd2c, #ffd200);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     filter: drop-shadow(3px 3px 4px #deb700);
//   }
// }
//
// .dark-typography{
//   font-size: 65px;
//   background: linear-gradient(#fff, #c0eeff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: 700;
//   font-family: 'MainFont-DemiBold';
//   letter-spacing: -1px;
//   line-height: 75px;
//   filter: drop-shadow(3px 3px 4px #000);
//   margin: 0;
//
//   max-width: 100px;
//   display: inline-block;
//   vertical-align: top;
//
//   span{
//     background: linear-gradient(#ffdd2c, #ffd200);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     filter: drop-shadow(3px 3px 4px #deb700);
//   }
// }
//
// h3{
//   font-size: 25px;
//   background: linear-gradient(#fff, #c0eeff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: 700;
//   font-family: 'MainFont-DemiBold';
//   letter-spacing: -1px;
//   line-height: 75px;
//   filter: drop-shadow(3px 3px 4px #000);
//   margin: 0;
//
//   span{
//     background: linear-gradient(#ffdd2c, #ffd200);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     filter: drop-shadow(3px 3px 4px #deb700);
//   }
// }

.intro {
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
}

.intro h1 {
  position: absolute;
  top: 15%;
  left: 0;
  width: 90%;
  font-size: 45px;
  color: #989898;
  max-width: 30%;
  transform: rotate(-23deg);
}
.intro p {
  position: absolute;
  bottom: 17%;
  right: 0;
  width: 90%;
  font-size: 16px;
  color: #989898;
  max-width: 30%;
  transform: rotate(-23deg);
  font-family: 'Teko', sans-serif;
  font-weight: 700;
}

// #light-bg{
//   padding: 30px;
//   background: url('~assets/images/home-beach.jpeg') no-repeat center;
//   background-size: cover;
//   background-attachment: fixed;
//
//   .container{
//     min-height: 500px;
//     align-items: center;
//   }
//
//   .banner{
//     max-width: 500px;
//   }
// }
//
// #dark-bg-inverted{
//   padding: 30px;
//   background: url('~assets/images/home-darker.jpg') no-repeat center;
//   background-size: cover;
//
//   .container{
//     min-height: 500px;
//     align-items: center;
//     justify-content: flex-end;
//   }
//   .banner{
//     max-width: 500px;
//   }
// }

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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

@-webkit-keyframes snowflakes-fall{
    0%{
        top:-10%
    }
    100%{
        top:100%
    }
}
@-webkit-keyframes snowflakes-shake{
    0%{
        -webkit-transform:translateX(0px);
        transform:translateX(0px)
    }
    50%{
        -webkit-transform:translateX(80px);
        transform:translateX(80px)
    }
    100%{
        -webkit-transform:translateX(0px);
        transform:translateX(0px)
    }
}
@keyframes snowflakes-fall{
    0%{
        top:-10%
    }
    100%{
        top:100%
    }
}
@keyframes snowflakes-shake{
    0%{
        transform:translateX(0px)
    }
    50%{
        transform:translateX(80px)
    }
    100%{
        transform:translateX(0px)
    }
}

.snowflakes {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.snowflake{
    color: #fff;
    font-size: 1em;
    font-family: Arial;
    filter:blur(1px);
    position:absolute;
    top:-10%;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor:default;
    -webkit-animation-name:snowflakes-fall,snowflakes-shake;
    -webkit-animation-duration:10s,3s;
    -webkit-animation-timing-function:linear,ease-in-out;
    -webkit-animation-iteration-count:infinite,infinite;
    -webkit-animation-play-state:running,running;
    animation-name:snowflakes-fall,snowflakes-shake;
    animation-duration:10s,3s;
    animation-timing-function:linear,ease-in-out;
    animation-iteration-count:infinite,infinite;
    animation-play-state:running,running
}
.snowflake:nth-of-type(0){
    left:1%;
    -webkit-animation-delay:0s,0s;
    animation-delay:0s,0s
}
.snowflake:nth-of-type(1){
    left:10%;
    -webkit-animation-delay:1s,1s;
    animation-delay:1s,1s
}
.snowflake:nth-of-type(2){
    left:20%;
    -webkit-animation-delay:6s,.5s;
    animation-delay:6s,.5s
}
.snowflake:nth-of-type(3){
    left:30%;
    -webkit-animation-delay:4s,2s;
    animation-delay:4s,2s
}
.snowflake:nth-of-type(4){
    left:40%;
    -webkit-animation-delay:2s,2s;
    animation-delay:2s,2s
}
.snowflake:nth-of-type(5){
    left:50%;
    -webkit-animation-delay:8s,3s;
    animation-delay:8s,3s
}
.snowflake:nth-of-type(6){
    left:60%;
    -webkit-animation-delay:6s,2s;
    animation-delay:6s,2s
}
.snowflake:nth-of-type(7){
    left:70%;
    -webkit-animation-delay:2.5s,1s;
    animation-delay:2.5s,1s
}
.snowflake:nth-of-type(8){
    left:80%;
    -webkit-animation-delay:1s,0s;
    animation-delay:1s,0s
}
.snowflake:nth-of-type(9){
    left:90%;
    -webkit-animation-delay:3s,1.5s;
    animation-delay:3s,1.5s
}

</style>
