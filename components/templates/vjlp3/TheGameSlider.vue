<template>
    <section id="bf-game-slider">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <VueSlickCarousel :arrows="false" :dots="false" :infinite="true" :speed="300" :slidesToShow="5" :slidesToScroll="1" :focusOnSelect="true" v-bind="carouselSettings">
                        <a href="#" class="hvr-shrink">
                            <div class="bf-game-icon-1"></div>
                        </a>
                            <a href="#" class="hvr-shrink">
                            <div class="bf-game-icon-2"></div>
                        </a>
                            <a href="#" class="hvr-shrink">
                            <div class="bf-game-icon-3"></div>
                        </a>
                            <a href="#" class="hvr-shrink">
                            <div class="bf-game-icon-4"></div>
                        </a>
                            <a href="#" class="hvr-shrink">
                            <div class="bf-game-icon-5"></div>
                        </a>
                    </VueSlickCarousel>
                </div>
            </div>		 
        </div>
	</section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
 
export default {
  components: {
      VueSlickCarousel
  },
  data(){
    return{
      carouselSettings:{
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true
            }
        }]
      }
    }
  }
}
</script>