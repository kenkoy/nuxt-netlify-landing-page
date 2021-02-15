<template>
  <div class="core-wrapper" :class="{ home_wrapper: true }">
    <div id="gradient-wrapper" />
    <section class="intro">
      <div class="container">
        <h1 class="animated fadeIn delay-1s">
          Digital Acquisition Services
        </h1>
        <p class="animated fadeIn delay-2s">
          We are a leading international online gaming operator, well positioned strategically for future growth in an evolving global sector.
        </p>
      </div>
    </section>

    <section id="section-1">
      <div class="container">
        <div>
          <img src="@/assets/images/gamesys-logo.png">
        </div>

        <div>
          <p><strong>Play Online Casino at Vera&John</strong></p>
          <p>Ladies and gentlemen, welcome to Vera&John casino, home to hundreds of amazing online slot games, table games, live casino games, and much more. Whether you want to play at home on your PC or tablet, or on the go with our amazing online mobile casino, you can be sure of a fun-filled casino experience with us.</p>
        </div>

        <div>
          <p><strong>InterCasino</strong></p>
          <p>At InterCasino, you’re the real deal. You’re what matters most. And you deserve the best. That’s why you’re reading about one of the longest-running, prestigious and most trusted online casinos in the world.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      htmlAttrs: {
        lang: 'ja'
      },
      bodyAttrs: {
        id: 'ja-jp'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home_wrapper{
  background: url('~assets/images/home-bg2.jpg') no-repeat #c21a1a;
  background-attachment: fixed;

  .intro .container{
    height: calc(100vh - 143.4px);
  }
  #gradient-wrapper{
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    mix-blend-mode: soft-light;
  }

  #section-1{
    background: #31312E;
    padding: 30px;
    .container{
      align-items: center;
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
.intro {
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background: url('~assets/images/home-bg.png') no-repeat;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 15%;
  left: 0;
  width: 90%;
  font-size: 25px;
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
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

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
</style>

<style lang="scss">
  .home_wrapper {
    @import '@/assets/sass/base/style.scss';
  }
</style>
