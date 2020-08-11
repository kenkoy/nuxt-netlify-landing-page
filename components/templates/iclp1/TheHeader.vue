<template>
  <header id="strip-container" class="container-flex h-100">        
		<a id="login-btn" href="#signin" class="login hvr-pulse">
			<div class="animated fadeIn">
				<i class="material-icons">exit_to_app</i> 
				<div class="login-txt"><p>ログイン</p></div>
			</div>
		</a>    
    <div class="container">
        <div class="row row-eq-height">
              <div id="strip" class="col-12 strip"> 
                <div class="strip-container animated fadeIn">
                    <div class="logo animated fadeIn"></div>
                    <div>
            <h2>新規プレイヤー特典!</h2><h1 class="color-alt-two"><font color="#ffffff">総額$500</font></h1><h2>ウェルカムキャッシュ<br></h2>
          </div>                       
                    <!-- <div class="co-brand"></div>-->
                    <a id="signup-btn" href="#" class="button button-lrg" style="display:block">今すぐ登録</a><!-- show button-->
        <!-- <div class="game-logo animated jello delay-2s"></div>-->
                </div>
            </div>              
        </div>
    </div>
    <style>
    :root {
      --bg-image: url('{{ images.promo_bg_desktop }}');
      --bg-image-m: url('{{ images.promo_bg_mobile }}');
      --game-logo: url('{{ images.promo_game_logo }}');
    }
    </style>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
    title_display: {
      type: Boolean,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
      required: true,
    },
    login_button: {
      type: String,
      required: true,
    },
    login_button_redirect_url: {
      type: String,
      required: true,
    },
    join_button: {
      type: String,
      required: true,
    },
    join_button_redirect_url: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.game-logo {
  background: var(--game-logo) no-repeat center;
  background-size: contain;
  width: auto;
  height: 150px;
  z-index: 999999;
}
#strip-container {
  background: var(--bg-image) no-repeat;
  background-size: cover;
  background-position: 0 0;
}
  #strip-container {background-position: 0 0;}

#stripblank-nobg { background: none; }

@media only screen and (max-width: 991px) {
  #signup-btn { margin-bottom: 2.5rem; }
}

@media only screen and (max-width: 575px) {
  #strip-container {
    background: var(--bg-image-m) no-repeat center;
    background-size: cover;
  }
}
.spacer {
  margin: 6rem 0;
}
</style>