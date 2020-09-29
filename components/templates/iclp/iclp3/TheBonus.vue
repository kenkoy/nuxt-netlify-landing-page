<template>
  <div class="bonus">
    <section class="campaign">
      <div v-for="(datum, index) of bonusData" :key="index">
        <div class="campaign__box twitter">
          <h3 class="campaign__box__title">
            <img
              :src="datum.box_title_image"
              :alt="datum.box_title_image.replace(/^.*[\\\/]/, '')"
              v-lazy-load
            />
          </h3>
          <p class="campaign__box__summary" v-html="formatSummary(datum)"></p>
          <a class="campaign__box__item__link" :href="datum.box_button_image_url" alt="">
            <img
              :src="datum.box_button_image"
              :alt="datum.box_button_image.replace(/^.*[\\\/]/, '')"
              v-lazy-load
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Bonus',
  props: {
    bonusData: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatSummary: function (data) {
      let summary = data.summary.split(/\r?\n/)
        .filter(summary => summary)
        .map(summary => summary.slice(-1) === '\\'
          ? summary.substring(0, summary.length - 1) : summary
        );
      
      if (data.higlighted_phrases) {
        let idx_1 = 0;
        data.higlighted_phrases.filter(phrase => phrase)
          .forEach(phrase => {
            while (summary.length > idx_1) {
              if (summary[idx_1].includes(phrase)) {
                summary[idx_1] = summary[idx_1].replace(phrase, `<b>${phrase}</b>`);
                break;
              } else {
                idx_1++;
              }
            }
          });
      }
      
      if (data.highlighted_link_phrases) {
        let idx_2 = 0;
        data.highlighted_link_phrases.filter(phrase => phrase)
          .forEach(phrase => {
            while (summary.length > idx_2) {
              if (summary[idx_2].includes(phrase.text)) {
                summary[idx_2] = summary[idx_2].replace(phrase.text,
                  `<a href="${phrase.link}" target="_blank" rel="noopener">${phrase.text}</a>`);
                break;
              } else {
                idx_2++;
              }
            }
          });
      }

      return summary.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal;
      });
    }
  }
};
</script>

