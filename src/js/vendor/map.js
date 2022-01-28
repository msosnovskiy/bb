function init(id, buttonId, coordinatesX, coordinatesY, balloonHeader, balloonContent) {

  var myMap;
  $(`#${buttonId}`).bind({
    click: function () {
      if (!myMap) {

        myMap = new ymaps.Map(`${id}`, {
          center: [coordinatesX, coordinatesY],
          zoom: 16
        }, {
          searchControlProvider: 'yandex#search'
        },
          myPlacemark = new ymaps.Placemark([coordinatesX, coordinatesY],
            {
              balloonContentHeader: `${balloonHeader}`,
              balloonContentBody: `${balloonContent}`,
            },
            {
              preset: 'islands#violetDotIcon',
              iconColor: '#201F24'
            }
          ));
        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        //... отключаем зум колесиком мыши
        myMap.behaviors.disable('scrollZoom');


        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          //... отключаем перетаскивание карты
          myMap.behaviors.disable('drag');
        }

        $(`#${buttonId}`).attr('value', 'Скрыть карту');
        $(`#${id}`).addClass('contacts__maps_opened');


      }
      else {
        // Деструктор карты
        myMap.destroy();
        myMap = null;
        $(`#${buttonId}`).attr('value', 'На карте');
        $(`#${id}`).removeClass('contacts__maps_opened');
      }
    }
  });
}