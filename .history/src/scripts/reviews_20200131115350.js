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
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.author-pic}`);
                item.pic = requiredPic;
                return item;
            });
        },
    },
    created() {
      const data = require("../data/reviews.json");
      this.works = this.makeArrWithRequiredImages(data);
    }
});
