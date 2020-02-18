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
        const data = require("../data/reviews.json");
        this.skills = data;
    }
});
