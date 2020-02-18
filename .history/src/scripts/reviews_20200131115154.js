import Vue from "vue";

const review = {
  template: "#review",
  props: {
    review: Object
  }
};

new Vue({
    el: "#reviews-component",
    template: "#reviews-list",
    components: {
        review
    },
    data() {
        return {
            reviews: []
        };
    },
    created() {
      const data = require("../data/works.json");
      this.works = this.makeArrWithRequiredImages(data);
    }
});
