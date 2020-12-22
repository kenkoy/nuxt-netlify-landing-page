<template>
  <div class="home_wrapper">
    <section class="intro">
      <div class="container">
        <h1>Digital Acquisition Services</h1>
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
<style scoped>
.home_wrapper{
  background: url('~assets/images/home-bg2.jpg') no-repeat;
  background-attachment: fixed;
}
.intro {
  min-height: 800px;
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
  font-size: 4.5rem;
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
