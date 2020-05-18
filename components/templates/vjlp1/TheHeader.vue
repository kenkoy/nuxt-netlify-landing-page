<template>
    <header id="strip-container" class="container-flex h-100">
		<a id="login-btn" href="#signin" class="login hvr-pulse">
			<div class="animated fadeIn">
				<i class="material-icons">exit_to_app</i> 
				<div class="login-txt">{{login_button}}</div>
			</div>
		</a>
        <div class="container">
           <div class="row row-eq-height">
               <div id="strip" class="col-lg-5 strip"> 
                   <div class="strip-container animated fadeIn">
                       <div class="logo animated fadeIn"></div>
                       <h1>
                           <span class="color-alt-two">
                           {{title}}
                           </span>
                        </h1>
					   <div class="game-logo animated jello delay-2s"></div>
                       <h2 class="sub-offer text-center">
                           <span class="color-alt-two">
                           {{subtitle}}
                           </span>                              
                       </h2>
                       <a id="signup-btn" href="#" class="button button-lrg d-block">{{join_button}}</a>       
                   </div>
               </div>
            <div id="stripblank" class="col-lg-7"></div>
          </div>
      </div>
    </header>
</template>

<script>
export default {
     name: 'Header',
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: true
            },
            login_button: {
                type: String,
                required: true
            },
            join_button: {
                type: String,
                required: true
            }

        }
}

</script>