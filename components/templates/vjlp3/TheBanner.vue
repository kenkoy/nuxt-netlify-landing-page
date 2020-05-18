<template>
    <section id="bf-banner">
        <div class="container">
            <div class="row">
                <div id="bf-banner-img-2" class="col-lg-12">
                    <h1>{{promo_title}}</h1>
                    <h2>{{promo_description}}</h2>
                    <a class="signup-btn d-none d-lg-block" href="#">
                    <div class="bf-button bf-secondary-bg">{{promo_join_button}}</div>
                    </a>
                </div> 
                <div class="d-block d-lg-none col-12">
                    <div class="center-button">                          
                        <a class="signup-btn" href="#">
                        <div class="bf-button bf-secondary-bg">{{promo_join_button}}</div>
                        </a>
                    </div>
                </div>
                <div id="strip" class="col-12 align-bottom"></div>
            </div>
        </div>	 
    </section>
</template>

<script>
export default {
    name: 'Promotion',
        props: {
            promo_title: {
                type: String,
                required: true
            },
            promo_description: {
                type: String,
                required: true
            },
            promo_join_button: {
                type: String,
                required: true
            }
        }
    }
</script>