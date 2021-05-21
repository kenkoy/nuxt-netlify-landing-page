<template>
  <div>
    <div v-for="(accordionItem, accordionItem_index) in accordionData" :key="accordionItem_index" class="accordion">
      <div>
        <input :id="accordionItem_index" :type="openMultiAccordion ? 'checkbox' : 'radio'" :name="openMultiAccordion ? '' : 'accordion'">
        <label class="accordion-title accordion-bg" :for="accordionItem_index">{{ accordionItem.title }}</label>
        <div class="accordion-content">
          {{ accordionItem.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accordionData: {
      type: Array,
      required: true
    },
    openMultiAccordion: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="scss">
.accordion-bg{
  border-top: 1px solid #00a8f0;
  border-bottom: 1px solid #0082ba;
  background-color: #0093d4;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #009fe3), color-stop(100%, #0093d4));
  background-image: linear-gradient(-180deg, #009fe3 0%, #0093d4 100%);
  // box-shadow: 0 9pt 8px -4px rgb(0 0 0 / 10%);
  box-shadow: 0 9pt 8px -4px rgba(0, 0, 0, 10%);
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.accordion {
  width: 100%;
  color: white;
  overflow: hidden;
  &-title {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;

    &::before{
      content: '';
      width: 20px;
      height: 20px;
      top: 50%;
      margin-top: -10px;
      right: 25px;
      position: absolute;
      border: solid 1px #fff;
      border-radius: 50%;
    }
    &::after {
      position: absolute;
      box-shadow: -4px 0 0 #ffffff, -2px 0 0 #ffffff, 0 0 0 #ffffff, 2px 0 0 #ffffff, 4px 0 0 #ffffff, 0 -4px 0 #ffffff, 0 -2px 0 #ffffff, 0 2px 0 #ffffff, 0 4px 0 #ffffff;
      transform: rotate(90deg);
      content: "";
      transition: box-shadow 500ms, transform 500ms;
      background-color: #ffffff;
      top: 50%;
      right: 35px;
      width: 2px;
      height: 2px;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    transition: all .35s;
  }
}

// :checked
input:checked {
  + .accordion-title {
    &::after {
      box-shadow: -4px 0 0 #ffffff, -2px 0 0 #ffffff, 0 0 0 #ffffff, 2px 0 0 #ffffff, 4px 0 0 #ffffff, 0 0 0 #ffffff, 0 0 0 #ffffff, 0 0 0 #ffffff, 0 0 0 #ffffff;
      transform: rotate(0);
    }
  }
  ~ .accordion-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>
