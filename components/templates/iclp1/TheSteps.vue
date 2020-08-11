<template>
  <div class="gb">
		<section class="container-flex bg-alt steps animated fadeIn">
			<div class="container">
				<div class="row">
					<div class="col-4 animated fadeIn delay-0s">
						<div class="num">1</div>
						<div class="step">
							<h2>登録</h2>
							<h3>簡単登録でお試しプレイ&amp;無料$10ボーナス獲得!</h3>
						</div>
					</div>
					<div class="col-4 animated fadeIn delay-1s">
						<div class="num">2</div>
						<div class="step">
							<h2>入金</h2>
							<h3>ビットコインで即入金! リアルマネープレイを始めよう!</h3>
						</div>
					</div>
					<div class="col-4 animated fadeIn delay-2s">
						<div class="num">3</div>
						<div class="step">
							<h2>ボーナス</h2>
							<h3>総額$500ウェルカムキャッシュアイテムをゲット!</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title1: {
      type: String,
      required: true
    },
    description1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    },
    description2: {
      type: String,
      required: true
    },
    title3: {
      type: String,
      required: true
    },
    description3: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 576px) {
  .desc { font-size: 0.7rem; }
}

@media only screen and (min-width: 992px) {
  .desc { display: table; }
}
</style>