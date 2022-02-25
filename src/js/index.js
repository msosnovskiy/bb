import '../pages/index.css';
import Selection from './components/Selection.js';
import Menu from './components/Menu.js';
import Glitch from './components/Glitch.js';
import Map from './components/Map.js';
import Ymaps from './components/Ymaps';
import Popup from './components/Popup.js';
import Popups from './components/Popups.js';

document.addEventListener('DOMContentLoaded', () => {



  //избавиться от jquery в картах и переписать Ymap 
  //Не забыть про предзагрузку шрифтов

  const prazeArray = ['Beauti Baza', 'you are beautiful', 'Ты Прекрасна', '你很美丽', 'ты прыгожая', 'du bist schön', 'ти прекрасна', 'tu es belle', 'eres hermoso', 'jesteś piękna', 'BEAUTI BAZA'];
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
  const servicesButtons = document.querySelectorAll('.services__price-more');
  const mapOne = document.querySelector('#mapOne');
  const buttonMapsOne = document.querySelector('#buttonMapsOne');
  const mapTwo = document.querySelector('#mapTwo');
  const buttonMapsTwo = document.querySelector('#buttonMapsTwo');

  //Id - Id блока карты, buttonId - Id кнопка, coordinatesX и coordinatesY координаты, заголовок и текст метки


  const menu = new Menu(root, menuContainer, menuButton, menuIcon, navigation, menuLinks);
  const selection = new Selection(selectionItems, 'selection__item', 'selection__header', 'selection__content', 'selection__button', '_opened');
  const createPopup = (...arg) => new Popup(...arg);
  const popups = new Popups(root, nails, servicesButtons, createPopup, 'popup', 'popup__button', '_opened');
  const ymapsOne = new Ymaps(buttonMapsOne, 'mapOne', 'contacts__maps_opened', '52.428975', '31.007007', 'Бьюти База', 'г. Гомель, ул. Кирова, 20');
  const ymapsTwo = new Ymaps(buttonMapsTwo, 'mapTwo', 'contacts__maps_opened', '52.404660', '30.941536', 'Бьюти База', 'г. Гомель, пр-т Октября, 95');


  const glitch = new Glitch(prazeArray, bannerText, 600);
  // const glitchSlider = new rbgShiftSlider(glitchSliderConfig);
  const mapOnePrompt = new Map(mapOne, 'contacts__maps_cover');
  const mapTwoPrompt = new Map(mapTwo, 'contacts__maps_cover');


  // --------------------------------------------------------------------------------------------------------------------

  let scriptsLoaded = false;

  document.addEventListener('scroll', () => {
    const glitchSlider = () => {
      new rbgShiftSlider(glitchSliderConfig);
    };

    let createScript = (url, func) => {
      let script = document.createElement('script');
      script.src = url;
      document.head.append(script);
      script.onload = () => {
        if (func !== undefined) {
          setTimeout(func, 100);
        }
      };
    }

    if (!scriptsLoaded) {
      scriptsLoaded = true;

      createScript('./js/vendor/pixi.min.js');
      createScript('./js/vendor/TweenMax2.1.3.min.js');
      createScript('./js/vendor/rgbShiftSlider.min.js', glitchSlider);
      createScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=0c91191e-f3dd-4782-8118-aab2a666cfbb');

    }
    else return;
  });

  menu.setEventListener();
  glitch.run();
  selection.setEventListeners();
  ymapsOne.setEventListener();
  ymapsTwo.setEventListener();
  mapOnePrompt.setEventListener();
  mapTwoPrompt.setEventListener();
  popups.setEventListeners();

})

