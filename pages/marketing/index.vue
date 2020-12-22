<template>
  <div :class="{ home_wrapper: true }">
    <section class="intro">
      <div class="container">
        <h1 class="animated fadeIn delay-1s">Digital Acquisition Services</h1>
        <p class="animated fadeIn delay-2s">We are a leading international online gaming operator, well positioned strategically for future growth in an evolving global sector.</p>
      </div>
    </section>

    <section id="section-1">
      <div class="container">
        <div>
          <p><strong>Rainbow Riches Casino</strong></p>
          <p>Launched in late 2019, this latest addition to the Gamesys portfolio leverages the powerful brand equity of the nation’s most loved slots game</p>
          <p>Includes exclusive Rainbow Riches titles</p>
        </div>

        <div>
          <p><strong>Virgin Games</strong></p>
          <p>Partnered with Sir Richard Branson in 2013 to become the UK’s leading casino-led brand</p>
          <p>Winner of ‘Innovation in Casino’ and ‘Best Marketing Campaign’ awards</p>
          <p>A rewarding, trusted online casino that dares to do things differently</p>
        </div>

        <div>
          <p><strong>Virgin Casino</strong></p>
          <p>Extending the relationship with Virgin further, Virgin Casino was launched in January 2014 in New Jersey, USA</p>
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
    height: calc(100vh - 126.4px);
  }

  #section-1{
    background: #232323;
    padding: 30px;

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
  left: 5%;
  width: 90%;
  font-size: 25px;
  color: #989898;
  max-width: 30%;
}
.intro p {
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 90%;
  font-size: 16px;
  color: #989898;
  max-width: 30%;
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
</style>

<style lang="scss">
  .home_wrapper {
    @import '@/assets/sass/base/style.scss';
  }
</style>
