import Vue from "vue";

const review = {
  template: "#review",
  components: {
    review
  },
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
    methods: {
        makeReviewObjects(data) {
            return data.map(item => {
                return {
                    text: item.text,
                    author: item['author-name'],
                    desc: item['author-occ'],
                    pic: require(`../images/content/${item['author-pic']}`)
                };
            });
        },
    },
    created() {
      const data = require("../data/reviews.json");
      this.reviews = this.makeReviewObjects(data);
    }
});
