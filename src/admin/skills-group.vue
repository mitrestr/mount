<template lang="pug">
  .skill-container
    .skill-container__form
      .skill-container__text
        h2 {{category.category}}
          hr
      .skill-container__button
        .skill-container__button-cross
          form(
            @submit.prevent="delCategory(category)"
          )
            button
              img(src="/dist/cross.png")
        .skill-container__button-ok
          button
            img(src="/dist/tick.png")
    table
      skill-item(
        v-for="skill in category.skills"
        :key="skill.id"
        :skill="skill"
      )
    form(
      @submit.prevent="addNewSkill"
      :class={blocked: loading}
    ).add-skill-wrapper
      .add-skill-wrapper__name
        input(type="text" placeholder="Name" v-model="skill.title")   
      .add-skill-wrapper__percent
        input(type="text" placeholder="Percent" v-model="skill.percent")
      .add-skill-wrapper__button
        button.circle(
          type="submit"
          :disabled="loading"
        ) 
          img(src='/dist/+.png' width="16px")
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillItem: () => import("./skill-item")
  },
  data() {
    return {
      loading: false,
      file: {},
      skill: {
        title: "",
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    },
    delCategory: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleFile(e) {
      const file = e.target.files[0];

      this.file = file;

      const formData = new FormData();

      formData.append("photo", this.file);

    },
    ...mapActions("skills", ["addSkill", "delGroup"]),
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);

        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
.skill-container button{
  background: transparent;
  outline: none;
  border: 0;
}
.skill-container__button-cross ,.skill-container__button-ok{
   float: right;
}
.skill-container__text{
  width:400px; 
}
.skill-container__form{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid #dedee0;
}
.skill-container__button{
  width: 900px;
}

.skill-container__form{
  margin-bottom:250px;
}
.add-skill-wrapper{
  display: flex;
  justify-content:flex-end;
  flex-direction:row;
  align-items: flex-end;
}
.add-skill-wrapper__button{
  position:relative;
  width: 45px;
  height: 45px;
  line-height: 10em;
  border-radius: 50px;
  background-image: -webkit-gradient(linear,left top,right top,from(#006aed),to(#3f35cb));
  background-image: linear-gradient(90deg,#006aed,#3f35cb);
  line-height: 1.25rem;
  text-align: center;
  color: #fff;
  margin-left: 0.8125rem;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-preferred-size: 1.25rem;
}
button.circle{
  position:absolute;
  width: 30px;
  height: 30px;
  top:9px;
  right:7px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}
.add-skill-wrapper input {
  border: 0;
  border-bottom: 1px solid black;
  background: transparent;
  padding: 10px 15px;
}
.skill-container__text>hr{
  width: 500px;
}
.add-skill-wrapper__name{
  margin-right: 20px;
}
.add-skill-wrapper__percent > input {
  width: 90px;
}
</style>


