import Vue from "vue";

const s = {
  template: "#reviews",
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
            reviews: {}
        };
    },
    created() {
        this.reviews = require("../data/reviews.json");
    }
});
