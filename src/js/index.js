document.addEventListener('DOMContentLoaded', () => {

  const textArray = ['Beauti Baza', 'you are beautiful', 'Ты Прекрасна', '你很美丽', 'ты прыгожая', 'du bist schön', 'ти прекрасна', 'tu es belle', 'eres hermoso', 'jesteś piękna', 'BEAUTI BAZA'];
  const imagesGlitchSlider = [
    './images/about_1.jpg',
    './images/about_2.jpg',
    './images/about_3.jpg',
    './images/about_4.jpg',
    './images/about_5.jpg'
  ];

  const glitchSliderConfig = {
    nav: false,
    // navElement: '.scene-nav',
    slideImages: imagesGlitchSlider,
    stageWidth: 1920,
    stageHeight: 1080,

    displacementImage: './images/displace-circle.jpg',
    fullScreen: false,
    transitionDuration: 0.2, // must be 0.1 > transitionGhostDuration
    transitionGhostDuration: 0.25,
    transitionFilterIntensity: 350,
    transitionSpriteIntensity: 2,
    mouseDispIntensity: 3,
    interactive: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
  };


  const selectionItems = document.querySelectorAll('.selection__item');
  const bannerText = document.querySelector('.company__title');

  const root = document.querySelector('.root');
  const menuContainer = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu__button');
  const menuIcon = document.querySelector('.menu__icon');
  const navigation = document.querySelector('.header__navigation');
  const menuLinks = document.querySelectorAll('.header__link');
  const mapOne = document.querySelector('#mapOne');
  const mapTwo = document.querySelector('#mapTwo');



  // GSAP

  // var tl = gsap.timeline();
  // tl.to('.cards', { duration: 2 })


  // GSAP END


  // ----------------------------- Yandex maps OPENED ------------------------------------------------------------------
  //Id - Id блока карты, buttonId - Id кнопкм, coordinatesX и coordinatesY координаты, заголовок и текст метки

  ymaps.ready(init('mapOne', 'buttonMapsOne', '52.428975', '31.007007', 'Бьюти База', 'г. Гомель, ул. Кирова, 20'));
  ymaps.ready(init('mapTwo', 'buttonMapsTwo', '52.404660', '30.941536', 'Бьюти База', 'г. Гомель, пр-т Октября, 95'));

  const menu = new Menu(root, menuContainer, menuButton, menuIcon, navigation, menuLinks);
  const selection = new Selection(selectionItems, 'selection__item', 'selection__header', 'selection__content', 'selection__button', '_opened');

  const mapOnePrompt = new Map(mapOne, 'contacts__maps_cover');
  const mapTwoPrompt = new Map(mapTwo, 'contacts__maps_cover');
  const glitchSlider = new rbgShiftSlider(glitchSliderConfig);

// --------------------------------------------------------------------------------------------------------------------



  // Glitch для текста Opened-----------------

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


  menu.setEventListener();
  selection.setEventListeners();
  mapOnePrompt.setEventListener();
  mapTwoPrompt.setEventListener();
})



  // // animare 3D Cards OPENED ------------

    // .cards__wrapper {
    //   perspective: 1000px;
    //   transform-style: preserve-3d;
    // }

    // .cards{
    //   transition: transform 0.4s linear;
    // } 

  // const card = document.querySelector('.cards');


  // function startRotate(event) {
  //   const halfHeight = card.offsetHeight / 2;
  //   const halfWidth = card.offsetWidth / 2;
  //   card.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) /20 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 30 + 'deg)'
  // }

  // function stopRotate() {
  //   card.style.transform = 'rotate(0)'
  // }

  // // mousemove 
  // card.addEventListener('mousemove', (event) => {
  //   startRotate(event);
  // })
  // // mouseout
  // card.addEventListener('mouseout', (event) => {
  //   stopRotate(event);
  // })

  // // animare 3D Cards CLOSED ------------
