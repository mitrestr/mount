<template lang="pug">
  .reviews-section
    .container
      h1.page-title Блок "Отзывы"

    .reviews-container
      .container.card
        .card__title
          .card__title-text Текст
        .card__content
          .reviews__form   
            .reviews__form-content
              .reviews__form-userpic
                label.reviews__form-avatar-upload
                  input(
                    type="file"
                  ).reviews__form-file-input
                  .reviews__form-pic
                    .reviews__form-avatar-empty
                  .reviews__form-addphoto Добавить фото
              .reviews__form-col
                .reviews__form-row
                  .reviews__form-block
                    app-input(
                      title="Имя автора"
                    )
                  .reviews__form-block
                    app-input(
                      title="Титул автора"
                    )
                .reviews__form-row
                  .reviews__form-block
                    app-input(
                      title="Отзыв"
                      field-type="textarea"
                    )
      
          .edit-form__buttons
            .edit-form__buttons-item
              app-button(
                text="Отмена"
                class="plain"
              )
            .edit-form__buttons-item
              app-button(
                text="Загрузить"
              )
      .reviews__form-cross__buttons
        .reviews__form-cross__button
            .reviews__form-cross__button-circle 
              button +
            .reviews__form-cross__button-text  
              p Добавить
                br
                This Отзыв    
        .works__block-mywork
              .works__block-mywork__picture
                img(src="/dist/fine.png")   
              .works__block-mywork__picture-texts
                .works__block-mywork__picture-title Сайт школы образования    
                .works__block-mywork__picture-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .works__block-mywork__picture-cross__buttons 
                .works__block-mywork__picture-cross__button Править
                    img(src="/dist/pencil.png")
                .works__block-mywork__picture-cross__button Удалить 
                    img(src="/dist/cancel1.png")
        .works__block-mywork
              .works__block-mywork__picture
                img(src="/dist/fine.png")   
              .works__block-mywork__picture-texts
                .works__block-mywork__picture-title Сайт школы образования    
                .works__block-mywork__picture-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .works__block-mywork__picture-cross__buttons 
                .works__block-mywork__picture-cross__button Править
                    img(src="/dist/pencil.png")
                .works__block-mywork__picture-cross__button Удалить 
                    img(src="/dist/cancel1.png")

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    appInput: () => import("components/input.vue"),
    appButton: () => import("components/button.vue")
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.card {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &_plain {
    padding: 0;
  }
}

.card__title {
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}

.card__content {
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.container__reviews {
  background: #fff;
}

.reviews__form {
  margin-bottom: 30px;
}

.reviews__form-content {
  display: flex;

  @include tablets {
    padding-right: 0;
  }  

  @include phones {
    flex-direction: column;
  }  
}

.reviews__form-addphoto {
  text-align: center;
}

.reviews__form-row {
  display: flex;
  margin-bottom: 40px;
  @include tablets {
    flex-direction: column;
  }  
}
.reviews__form-col {
  flex: 1;
}

.reviews__form-block {
  flex: 1;
  margin-right: 30px;

  @include tablets {
    margin-right: 0;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }  

  &:last-child {
    margin-right: 0;
  }
}
.reviews__form-addphoto {
  color: #383bcf;
  font-weight: 600;
}

.reviews__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}

.reviews__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;

  @include phones {
    margin-right: 0;
    margin-bottom: 30px;
  }  
}

.reviews__form-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;

  &:before {
    content: "";
    height: 115px;
    width: 85px;
    background: svg-load("filled-user.svg", fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}

.reviews__form-avatar-upload {
  position: relative;

  &.error {
    .reviews__avatar-error {
      display: block;
    }
  }
}

.reviews__avatar-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}

.reviews__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}

.edit-form__buttons {
  display: flex;
  justify-content: flex-end;

  @include tablets {
    padding: 0 !important; 
  }
}

.edit-form__buttons-item {
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }
}
.reviews__form-cross__button{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 540px;
  background: #3f35cb;
}
.reviews__form-cross__button-circle>button{
  width: 160px;
  height: 160px;
  font-size: 72px;
  font-family: 'Open Sans light';
  border-radius: 50%;
  background: transparent;
  color:white;
  border: 2px solid white;
  margin-bottom: 30px;
}
 .reviews__form-cross__button-text {
  color:white;
  font-size: 18px;
  font-family: 'Open Sans',bold;
  text-align: center;
 }
  .reviews__form-cross__buttons{
  display: flex;
  margin:0 0 0 542px;
  margin-top:50px;
    }
  .works__block-mywork{
  height: 320px;
  width: 340px;
  margin-left:50px;
     }
  .works__block-mywork__picture-cross__button {
  display: inline-block;
  margin-right: 10px;
  }
  .works__block-mywork__picture-cross__button img{
  display: inline-block;
  margin-left:10px;
  }
</style>


