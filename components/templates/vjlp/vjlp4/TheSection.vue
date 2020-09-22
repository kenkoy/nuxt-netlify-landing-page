<template>
  <div>
    <div v-for="(datum, index) of sectionData" :key="index">
      <section class="container-flex bg-alt steps animated fadeIn painbg">
        <div class="container text-center">
          <br />
          <br />
          <img style="max-width: 100%;" :src="datum.image" alt="" v-lazy-load/>
          <br />

          <!-- id="signup-btn" -->
          <a
            :href="datum.join_button_redirect_url"
            class="button button-lrg"
            style="display:block;margin-top: 0px;"
          >{{ datum.join_button }}</a>
          <br />
          <br />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    sectionData: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped>
.painbg {
  background: rgb(0, 79, 184);
  background: linear-gradient(
    180deg,
    rgba(0, 79, 184, 1) 0%,
    rgba(0, 175, 255, 1) 50%
  );
}
</style>