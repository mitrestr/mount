import Vue from "vue";

new Vue({
    el: "#reviews-component",
    template: "#reviews-list",
    data() {
        return {
            reviews: [],
            currentSlide: 0,
            slider: null,
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
        move(inc) {
            const newValue = this.currentSlide + inc;
            if (newValue >= 0 && newValue < this.reviews.length) {
                this.currentSlide = newValue;
                this.slider.style.marginLeft = -newValue * 50 + '%';
            }
        }
    },
    created() {
      const data = require("../data/reviews.json");
      this.reviews = this.makeReviewObjects(data);
      this.slider = document.querySelector('.reviews__content-wrapper');
    }
});