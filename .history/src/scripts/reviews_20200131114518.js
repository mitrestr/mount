import Vue from "vue";

const reviews = {
  template: "#reviews",
  props: {
    text: String,
    author: String,
    desc: String,
    pic: String
  }
};

new Vue({
    el: "#reviews-component",
    template: "#reviews-list",
    components: {
        reviews
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
