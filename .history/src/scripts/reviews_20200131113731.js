const reviews = {
  template: "#reviews",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
    el: "#reviews-component",
    template: "#skills-list",
    components: {
        skillsRow
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
