document.addEventListener('DOMContentLoaded', () => {

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
  const mapTwo = document.querySelector('#mapTwo');

  //Id - Id блока карты, buttonId - Id кнопка, coordinatesX и coordinatesY координаты, заголовок и текст метки
  ymaps.ready(init('mapOne', 'buttonMapsOne', '52.428975', '31.007007', 'Бьюти База', 'г. Гомель, ул. Кирова, 20'));
  ymaps.ready(init('mapTwo', 'buttonMapsTwo', '52.404660', '30.941536', 'Бьюти База', 'г. Гомель, пр-т Октября, 95'));

  const menu = new Menu(root, menuContainer, menuButton, menuIcon, navigation, menuLinks);
  const selection = new Selection(selectionItems, 'selection__item', 'selection__header', 'selection__content', 'selection__button', '_opened');
  const createPopup = (...arg) => new Popup(...arg);
  const popups = new Popups(root, nails, servicesButtons, createPopup, 'popup', 'popup__button', '_opened');


  const mapOnePrompt = new Map(mapOne, 'contacts__maps_cover');
  const mapTwoPrompt = new Map(mapTwo, 'contacts__maps_cover');
  const glitchSlider = new rbgShiftSlider(glitchSliderConfig);
  const glitch = new Glitch(prazeArray, bannerText, 600);

  // --------------------------------------------------------------------------------------------------------------------





  // --------------------------------------------- GSAP -------------------------------------------


  // gsap.registerPlugin(ScrollTrigger);
  // let tl = gsap.timeline();

  // gsap.timeline()
  //   .from('.services__item_nails', {
  //     scrollTrigger: '.about__link',
  //     opacity: 0,
  //     duration: 3
  //   })
  //   .from('.services__item_brows', {
  //     scrollTrigger: '.about__link',
  //     opacity: 0,
  //     duration: 3
  //   })






  // ------------------------------------------- GSAP closed --------------------------------------



  glitch.run();
  menu.setEventListener();
  selection.setEventListeners();

  popups.setEventListeners();
  mapOnePrompt.setEventListener();
  mapTwoPrompt.setEventListener();
})

