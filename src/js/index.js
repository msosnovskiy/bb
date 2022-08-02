import '../pages/index.css';
import Selection from './components/Selection.js';
import Menu from './components/Menu.js';
import Glitch from './components/Glitch.js';
import Map from './components/Map.js';
import Ymaps from './components/Ymaps';
import Popup from './components/Popup.js';
import Popups from './components/Popups.js';
import Footer from './components/Footer.js';
import Scroll from './components/Scroll.js';
import gsap from './components/GSAP.js';

document.addEventListener('DOMContentLoaded', () => {

  const prazeArray = ['Beauti Baza', 'Beauti Baza', 'Beauti Baza', 'you are beautiful', 'Ты Прекрасна', '你很美丽', 'ты прыгожая', 'du bist schön', 'ти прекрасна', 'tu es belle', 'eres hermoso', 'jesteś piękna', 'BEAUTI BAZA'];
  const imagesGlitchSlider = ['./images/about_1.jpg', './images/about_2.jpg', './images/about_3.jpg', './images/about_4.jpg', './images/about_5.jpg', './images/about_6.jpg'];

  const glitchSliderConfig = {

    nav: false,
    // navElement: '.scene-nav',
    slideImages: imagesGlitchSlider,
    stageWidth: 1280,
    stageHeight: 720,
    // stageWidth: 1920,
    // stageHeight: 1080,
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

  const root = document.querySelector('.root');
  const company = document.querySelector('.company');
  const bannerText = document.querySelector('.company__title');
  const menuContainer = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu__button');
  const menuIcon = document.querySelector('.menu__icon');
  const navigation = document.querySelector('.menu__navigation');
  const menuLinks = document.querySelectorAll('.menu__link');
  const servicesButtons = document.querySelectorAll('.services__price-more');
  const selectionItems = document.querySelectorAll('.selection__item');
  const mapOne = document.querySelector('#mapOne');
  const buttonMapsOne = document.querySelector('#buttonMapsOne');
  const mapTwo = document.querySelector('#mapTwo');
  const buttonMapsTwo = document.querySelector('#buttonMapsTwo');
  const spinner = document.querySelector('.spinner');
  const footerText = document.querySelector('#footerText');

  //Id - Id блока карты, buttonId - Id кнопка, coordinatesX и coordinatesY координаты, заголовок и текст метки

  const scroll = new Scroll(root);
  const menu = new Menu(root, menuContainer, menuButton, menuIcon, navigation, menuLinks, scroll);
  const glitch = new Glitch(prazeArray, bannerText, 600);
  const selection = new Selection(selectionItems, 'selection__item', 'selection__header', 'selection__content', 'selection__button', '_opened');
  const createPopup = (...arg) => new Popup(...arg);
  const popups = new Popups(root, [nails, brows, face, lashes, hair, men], servicesButtons, createPopup, 'popup', 'popup__button', '_opened', scroll, menuContainer);
  const ymapsOne = new Ymaps(buttonMapsOne, 'mapOne', 'contacts__maps_opened', '52.428975', '31.007007', 'Бьюти База', 'г. Гомель, ул. Кирова, 20');
  const ymapsTwo = new Ymaps(buttonMapsTwo, 'mapTwo', 'contacts__maps_opened', '52.404897', '30.941707', 'Бьюти База', 'г. Гомель, пр-т Октября, 95');
  const mapOnePrompt = new Map(mapOne, 'contacts__maps_cover');
  const mapTwoPrompt = new Map(mapTwo, 'contacts__maps_cover');
  const footer = new Footer(footerText, '©Beauti Baza');
  // --------------------------------------------------------------------------------------------------------------------

  // const swiper = new Swiper('.swiper', {
  //   // navigation: {
  //   //   nextEl: '.swiper-button-next', 
  //   //   prevEL: '.swiper-button-prev'
  //   // },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     // type: 'fraction',
  //   },
  //   direction: 'vertical'
  // });



  // let useragent = detect.parse(navigator.userAgent);
  // alert(useragent.browser.family); 

  // if (useragent.browser.family === 'Mobile Safari') {
  // company.style.height = '90vh';
  // company.style.color = 'red';
  // }

  // Выводим нужные значения в консоли браузера
  // console.log(
  // useragent.browser
  // useragent.browser.family,
  // useragent.browser.version,
  // useragent.os.name
  // )


  /////////////////////////////////////////////

  // let docWidth = document.documentElement.clientWidth;
  // const subtitle = document.querySelector('#subtitle');

  // function removeTitleSpan() {
  //   if (docWidth > 1600) {
  //     subtitle.classList.remove('span_br');
  //   }
  //   else {
  //     subtitle.classList.add('span_br');
  //   }
  // }

  // removeTitleSpan();

  // window.addEventListener('resize', () => {
  //   docWidth = document.documentElement.clientWidth;
  //   removeTitleSpan();
  // });

  /////////////////////////////////////////////


  let scriptsLoaded = false;

  document.addEventListener('scroll', () => {
    let addScript = (url, func) => {

      let script = document.createElement('script');
      script.src = url;
      document.body.append(script);

      if (func !== undefined) {
        script.onload = () => {
          setTimeout(func, 1);
        }
      };
    }

    if (!scriptsLoaded) {
      scriptsLoaded = true;
      addScript('./js/vendor/TweenMax2.1.3.min.js');
      // addScript('./js/vendor/rgbShiftSlider.min.js');
      addScript('./js/vendor/rgbShiftSlider.js');
      const glitchSlider = () => new rbgShiftSlider(glitchSliderConfig);
      addScript('./js/vendor/pixi.min.js', glitchSlider);
      spinner.classList.add('spinner_hidden');

      addScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=0c91191e-f3dd-4782-8118-aab2a666cfbb');
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
  footer.setContent();

})


