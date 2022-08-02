export default class Ymaps {
  constructor(button, id, openClass, coordinatesX, coordinatesY, balloonHeader, balloonContent) {
    this.button = button;
    this.id = id;
    this.openClass = openClass;
    this.coordinatesX = coordinatesX;
    this.coordinatesY = coordinatesY;
    this.balloonHeader = balloonHeader;
    this.balloonContent = balloonContent;
    this.map = document.querySelector(`#${this.id}`);
    this.myMap;
  }

  _init() {

    if (!this.myMap) {
      // Создание экземпляра карты и его привязка к контейнеру с заданным id ("map")
      this.myMap = new ymaps.Map(`${this.id}`,
        {
          center: [this.coordinatesX, this.coordinatesY],
          zoom: 16
        },
        {
          searchControlProvider: 'yandex#search'
        })
        let myPlacemark = new ymaps.Placemark([this.coordinatesX, this.coordinatesY], {
          balloonContentHeader: `${this.balloonHeader}`,
          balloonContentBody: `${this.balloonContent}`,
          // balloonContentFooter: 'Телефон <a href="tel:+74959265423">+74959265423</a>',
        },
          {
            // ----- ИКОНКА Yandex-а
            preset: 'islands#violetDotIcon',
            iconColor: '#201F24'

          });

      this.myMap.geoObjects.add(myPlacemark);
      this.myMap.controls.remove('searchControl');
      this.myMap.controls.remove('trafficControl');
      //отключаем зум колёсиком мышки
      this.myMap.behaviors.disable('scrollZoom');
      //на мобильных устройствах... (проверяем по userAgent браузера)
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //... отключаем перетаскивание карты
        this.myMap.behaviors.disable('drag');
      }

      this.button.setAttribute('value', 'Скрыть карту');
      this.map.classList.add(`${this.openClass}`);
    }
    else {
      // Деструктор карты
      this.myMap.destroy();
      this.myMap = null;
      this.button.setAttribute('value', 'На карте');
      this.map.classList.remove(`${this.openClass}`);
    }
  }
  
  setEventListener() {
    this.button.addEventListener('click', (event) => {
      this._init();
      this.button.classList.toggle('button_active');
    })
  }
}