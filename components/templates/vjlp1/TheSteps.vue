<template>
    <section class="container-flex bg-alt steps animated fadeIn">
		<div class="container">
			<div class="row">
				<div class="col-4 animated fadeIn delay-0s">
					<div class="num">1</div>
					<div class="step">
						<h2>{{step1_header}}</h2>
						<h3>{{step1_description}}</h3>
					</div>
				</div>
				<div class="col-4 animated fadeIn delay-1s">
					<div class="num">2</div>
					<div class="step">
						<h2>{{step2_header}}</h2>
						<h3>{{step2_description}}</h3>
					</div>
				</div>
				<div class="col-4 animated fadeIn delay-2s">
					<div class="num">3</div>
					<div class="step">
						<h2>{{step3_header}}</h2>
						<h3>{{step3_description}}</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
     name: 'Header',
        props: {
            step1_header: {
                type: String,
                required: true
            },
            step1_description: {
                type: String,
                required: true
            },
            step2_header: {
                type: String,
                required: true
            },
            step2_description: {
                type: String,
                required: true
			},
			step3_header: {
                type: String,
                required: true
            },
            step3_description: {
                type: String,
                required: true
            },

        }
}
</script>