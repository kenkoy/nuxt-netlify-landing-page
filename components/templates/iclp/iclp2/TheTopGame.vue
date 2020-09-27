<template>
  <div>
    <div id="detail" class="gb goldenbg">
      <section class="container-flex bg-alt steps animated fadeIn goldenbg">
        <div class="container">
          <div class="row">
            <div class="col-12 animated fadeIn delay-0s text-center">
              <img
                style="max-width: 100%;"
                src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame1.png"
                alt=""
                v-lazy-load
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="detail" class="gb blackbg">
      <section class="container-flex bg-alt steps animated fadeIn">
        <div class="container">
          <div class="row">
            <div class="col-12 animated fadeIn delay-0.5s text-center">
              <!-- title -->
              <img style="max-width: 100%;" src="/marketing/img/319-bic-lan-jp-pro-beginnersguide-0620-title-topgame2.png" alt="" v-lazy-load/>
              <!-- game cat -->
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <img style="max-width: 100%;" v-bind:src="game1" alt="" v-lazy-load/>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <img style="max-width: 100%;" v-bind:src="game2" alt="" v-lazy-load/>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <img style="max-width: 100%;" v-bind:src="game3" alt="" v-lazy-load/>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <img style="max-width: 100%;" v-bind:src="game4" alt="" v-lazy-load/>
                </div>
              </div>

              <div class="row" style="margin: 25px 0px 0px;">
                <div class="col-12 animated fadeIn delay-0.5s text-center">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <img style="max-width: 100%;" v-bind:src="gamesInfo1" alt="" v-lazy-load/>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <img style="max-width: 100%;" v-bind:src="gamesInfo2" alt="" v-lazy-load/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="detail" class="gb goldenbg"></div>
  </div>
</template>

<script>
export default {
  name: 'TopGame',
  props: {
    game1: {
      type: String,
      required: true,
    },
    game2: {
      type: String,
      required: true,
    },
    game3: {
      type: String,
      required: true,
    },
    game4: {
      type: String,
      required: true,
    },
    gamesInfo1: {
      type: String,
      required: true,
    },
    gamesInfo2: {
      type: String,
      required: true,
    },
  }
};
</script>
