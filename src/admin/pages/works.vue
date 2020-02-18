<template lang="pug">
  .works-section
    .container
        h1.page-title Блок "Работы"
        .works__block Редактирование работы
          .works__block-photo
            .works__block-content
              .works__block-content-text Перетащите или загрузите для загрузки изображения
              button.works__block-content-button Загрузить
            .works__block-text
              .works__block-write
                .works__block-write__title Название
                <input class="works__block-write__input">
                .works__block-write__title Ссылка
                <input class="works__block-write__input">
                .works__block-write__title Описание
                <textarea  class="works__block-write__textarea"></textarea>
                .works__block-write__title Добавление тэга
                <input class="works__block-write__input">
              .works__block-js
                .works__block-js__cell
                    .works__block-js__text HTML
                    .works__block-js__img
                      button
                        img(src="/dist/cancel.png")
                .works__block-js__cell
                    .works__block-js__text CSS
                    .works__block-js__img
                      button
                        img(src="/dist/cancel.png")
                .works__block-js__cell
                    .works__block-js__text Javascript
                    .works__block-js__img
                      button
                        img(src="/dist/cancel.png")
              .works__block-save
                .works__blocks-save__button
                    button.works__blocks-save__cancel Отмена
                    button.works__blocks-save__save Сохранить
          .works__block-cross
            .works__blocks-cross__button
              .works__blocks-cross__button-circle 
                button +
              .works__blocks-cross__button-text  
                p Добавить
                  br
                  This Работу
            .works__block-mywork
              .works__block-mywork__picture
                img(src="/dist/fine.png")   
              .works__block-mywork__picture-texts
                .works__block-mywork__picture-title Сайт школы образования    
                .works__block-mywork__picture-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .works__block-mywork__picture-link 
                  a(href='http://loftschool.ru') http://loftschool.ru
              .works__block-mywork__picture-cross__buttons 
                .works__block-mywork__picture-cross__button Править
                    img(src="/dist/pencil.png")
                .works__block-mywork__picture-cross__button Удалить 
                    img(src="/dist/cancel1.png")

                





</template>
      <style lang="postcss" scoped>
      .works__block-photo{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
      }
      .works__block-content{
        display:block;
        width:500px;
        height: 280px;
        background-color:#dee4ed;
      }
      .works__block-content-text{
        width: 250px;
        height: 50px;
        font-family: 'Open Sans Semibold', arial;
        font-size:16px;
        margin-bottom: 30px;
        color:#414c63;
        opacity:0.5;
      }
      .works__block-content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .works__block-content-button{
        background: url("/dist/rectangle.png") no-repeat;
        width: 185px;
        height: 50px;
        color:white;
        text-align: center;
        vertical-align: middle;
        line-height: 50px;
      }
      input.works__block-write__input{
      width: 100%;
      border: none;
      border-bottom: 1px solid #1f232d;
      background: transparent;
      color:#414c63;
      }
       .works__block-write__title{
      font-size:16px;
      margin: 10px 0 10px;
      color:#414c63;
      font-family: 'Open Sans Semibold', arial;
      opacity:0.5;
       }
      .works__block-write__textarea{
      height: 150px;
      padding: 1.25rem;
      border: 1px solid rgba(65,76,99,.2);
      resize: none;
      margin-top: 0.625rem;
      width: 100%;
      }
      .works__block-write{
      width: 550px;
      }
      h1.page-title{
      margin-bottom:30px;
      color:#414c63;
      font-family: 'Open Sans bold', arial;
      font-size:21px;
      }
      .works__block{
      color:#414c63;
      font-family: 'Open Sans bold', arial;
      font-size:18px;
      }
     .works__block-js__cell{
      display: flex;
      background: url("/dist/js.png") no-repeat;
      background-size: 100%; 
      margin-right:14px;
     }
     .works__block-js{
       display: flex;
       margin-top:20px;
     }
     .works__block-js__img img{
       display: inline-block;
     }
      .works__block-js__img button{  
        border:0;
        outline: none;
        background: 0;
      }   
      .works__block-js__text{
        margin-right:10px;
      }
      .works__blocks-save__save{
        background: url("/dist/rectangle.png") no-repeat;
        background-size: contain;
        height: 50px;
        width: 180px;
        color:white;
      }
      .works__blocks-save__button{
        text-align: end;
      }
      .works__blocks-save__cancel{
        color:#383bcf;
        background: 0;
        outline: none;
        border:0;
        margin-right: 65px;
      }
      .works__blocks-cross__button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
         width: 340px;
        height: 540px;
         background: #3f35cb;
      }
      .works__blocks-cross__button-circle>button{
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
      .works__blocks-cross__button-text{
        color:white;
        font-size: 18px;
        font-family: 'Open Sans',bold;
        text-align: center;
      }
      .works__block-cross{
        display: flex;
        justify-content:space-around;
      }
        .works__block-mywork{
          height: 320px;
          width: 340px;
        }
        .works__block-mywork__picture-link>a{
          color:#383bcf
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



