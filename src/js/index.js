document.addEventListener('DOMContentLoaded', () => {


  const textArray = ['you are beautiful', 'Ты Прекрасна', '你很美丽', 'ты прыгожая', 'du bist schön', 'ти прекрасна', 'tu es belle', 'eres hermoso', 'jesteś piękna', 'BEAUTI BAZA'];

  const selectionItems = document.querySelectorAll('.selection__item');
  const bannerText = document.querySelector('.company__title');

  const root = document.querySelector('.root');
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu__button');
  const navigation = document.querySelector('.header__navigation');
  const menuLinks = document.querySelectorAll('.header__link');

  const toggle = document.querySelector('#toggle');


  // Yandex MAP -------------------------------------------------------

  ymaps.ready(init);

  function init() {

    var myMap;
    $('#toggle').bind({
      click: function () {
        if (!myMap) {

          myMap = new ymaps.Map('map', {
            center: [55.010251, 82.958437], // Новосибирск
            zoom: 9
          }, {
            searchControlProvider: 'yandex#search'
          });

          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //... отключаем перетаскивание карты
            myMap.behaviors.disable('drag');
          }
          
          $("#toggle").attr('value', 'Скрыть карту');
          $("#map").addClass('contacts__maps_opened');


        }
        else {
          myMap.destroy();// Деструктор карты
          myMap = null;
          $("#toggle").attr('value', 'На карте');
          $("#map").removeClass('contacts__maps_opened');
        }
      }

    });


  }

  // --------------------------------------------------------------------


  // === OOP ===
  const selection = new Selection(selectionItems, 'selection__item', 'selection__header', 'selection__content', 'selection__button', '_opened');
  // === OOP closed ===






  menu.onclick = function () {
    document.querySelector('.menu__icon').classList.toggle('menu__icon_active');
    root.classList.toggle('overflow-hidden');
    // блокировка скрола
    navigation.classList.toggle('header__navigation_opened');
    // затемнение страницы при открытии меню
    // root.classList.toggle('root__opened');
    navigation.closest('.header__navigation_opened') ? menuButton.textContent = 'Закрыть' : menuButton.textContent = 'Меню';
  }

  menuLinks.forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('.menu__icon').classList.toggle('menu__icon_active');
      // блокировка скрола
      root.classList.toggle('overflow-hidden');
      // затемнение страницы при открытии меню
      // root.classList.toggle('root__opened');
      navigation.classList.toggle('header__navigation_opened');
      navigation.closest('.header__navigation_opened') ? menuButton.textContent = 'Закрыть' : menuButton.textContent = 'Меню';
    })
  })

  let i = 0;
  const slideText = (item, index, arrayLength) => {
    //если фраза состоит более 2 слов - вставляем через перенос слова
    if (item.split(' ').length > 1) {
      let phrase = item.split(' ').join('<br>');
      bannerText.innerHTML = phrase;

      //Добавляем анимацию последнему слову
      if (index === arrayLength - 1) {
        bannerText.classList.add('company__title_glitch');
        let spanFirst = document.createElement('span');
        spanFirst.classList.add('company__title_span')
        let spanSecond = document.createElement('span');
        spanSecond.classList.add('company__title_span')
        bannerText.prepend(spanFirst);
        bannerText.prepend(spanSecond);
        spanFirst.innerHTML = phrase;
        spanSecond.innerHTML = phrase;

      }
    }

    //если фраза состоит из одного слова то просто меняем текст
    else bannerText.textContent = item;
  }

  let intervalID = setInterval(() => {
    if (textArray[i] != undefined) {
      slideText(textArray[i], i, textArray.length);
      i++;
    }
    // Приостанавливаем выполнение функции если массив пуст
    else {
      clearInterval(intervalID);
    }
  }, 600);


  selection.setEventListeners();

})
