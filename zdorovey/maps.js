ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('YMapMain', {
            center: [54.879,26.858],
            zoom: 14,
            controls: ['smallMapDefaultSet']
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.geoObjects.add(new ymaps.Placemark([54.881544, 26.862877], {
          balloonContent: 'Беларусь, Минская область, Мядельский район, Мядельский сельский совет, деревня Никольцы, 11'}, {
          preset: 'islands#blueIcon'}));
}
