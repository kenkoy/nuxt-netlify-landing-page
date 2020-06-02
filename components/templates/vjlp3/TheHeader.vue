<template>
    <header>	
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a href="#" class="bf-logo"></a>
                    <div class="bf-btn-container">
                        <a id="login-btn-u" v-bind:href="header_login_button_redirect_url">
                        <div class="bf-button bf-third-bg">{{header_login_button}}</div>
                        </a>
                        <a id="signup-btn-u" v-bind:href="header_join_button_redirect_url">
                        <div class="bf-button bf-secondary-bg">{{header_join_button}}</div>
                        </a>
                    </div>				 
                </div>
            </div>	 
        </div>
	 </header> 
</template>

<script scoped>
var lang_code = '%language_code%';
var country_code = '%country_code%';

export default {
    name: 'Header',
        props: {
            header_login_button: {
                type: String,
                required: true
            },
            header_login_button_redirect_url: {
                type: String,
                required: true
            },
            header_join_button: {
                type: String,
                required: true
            },
            header_join_button_redirect_url: {
                type: String,
                required: true
            }

        }
    }
</script>