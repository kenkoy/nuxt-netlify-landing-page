<template>
    <section id="bf-usps" class="container">
	 	<div class="row">
			<div id="intro" class="col-12">
                <div v-html="promo_content"/>
           </div>
		</div>
	</section>
</template> 

<script>
export default {
    name: 'Content',
        props: {
            promo_content: {
                type: String,
                required: true
            }
        },  
}
</script>