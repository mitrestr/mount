<template lang="pug">
  tr(v-if="editmode === false")
    td {{skill.title}}
    td {{skill.percent}}
    td
      button(type="button" @click="removeExistedSkill") удалить
      button(type="button" @click="editmode = true") изменить

  tr(v-else)
    td 
      input(type="text" placeholder="Title" v-model="editedSkill.title")
    td 
      input(type="text" placeholder="percent" v-model="editedSkill.percent")
    td 
      button(type="button" @click="editExistedSkill") изменить
      button(type="button" @click="editmode = false") cancell

</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill }
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {}
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {

      }
    }
  }
};
</script>