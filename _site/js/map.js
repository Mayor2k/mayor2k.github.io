var map;
function initMap() {
  var Novgorod = {lat: 56.296430, lng: 43.936086}
  var Kazan = {lat: 55.830426, lng: 49.06595}
  var Cheboksary = {lat: 56.116580 , lng: 47.263248}
  var Ulyanovsk = {lat: 54.317943 , lng: 48.384068}
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.433494, lng: 46.873169},
    zoom: 6,
    streetViewControl: false,
    mapTypeControl: false
  });
  var NovgorodInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Нижний Новгород</h3>'+
            '<div id="bodyContent">'+
            '<p>Площадь города:460 км²<p>'+'<p>Население:1 266 871 человек</p>'
            +'<p>Дата Основания:1221 год</p>'
            +'<p>Города-спутники:Кстово, Бор, Дзержинск</p>'
            '</div>'+
            '</div>';

  var KazanInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Казань</h3>'+
            '<div id="bodyContent">'+
            '<p>Площадь города:614,16 км²<p>'+'<p>Население: 1 231 878 человек</p>'
            +'<p>Дата Основания:1005 год</p>'
            +'<p>Города-спутники:Иннополис, Салават Купере, СМАРТ Сити Казань, Зелёный Дол</p>'
            '</div>'+
            '</div>';

  var CheboksaryInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Чебоксары</h3>'+
            '<div id="bodyContent">'+
            '<p>Площадь города:200 км²<p>'+'<p>Население: 480 536 человек</p>'
            +'<p>Дата Основания:1469 год</p>'
            +'<p>Город-спутник: Новочебоксарск</p>'
            '</div>'+
            '</div>';

  var UlyanovskInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">Ульяновск</h3>'+
            '<div id="bodyContent">'+
            '<p>Площадь города:200 км²<p>'+'<p>Население: 621 514 человек</p>'
            +'<p>Дата Основания:1648 год</p>'
            +'<p>Города-побратимы: Крефельд,Мейкон,Оклахома-Сити, Феодосия</p>'
            '</div>'+
            '</div>';

  /*Novgorod*/
  var infowindow = new google.maps.InfoWindow({
          content: NovgorodInfo
  });

  var marker = new google.maps.Marker({
          position: Novgorod,
          map: map,
          title: 'Нижний Новгород'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
  });
  /*Kazan*/
  var infowindow1 = new google.maps.InfoWindow({
          content: KazanInfo
  });

  var marker1 = new google.maps.Marker({
          position: Kazan,
          map: map,
          title: 'Казань'
       });
       marker1.addListener('click', function() {
         infowindow1.open(map, marker1);
  });
  /*Cheboksary*/
  var infowindow2 = new google.maps.InfoWindow({
          content: CheboksaryInfo
  });

  var marker2 = new google.maps.Marker({
          position: Cheboksary,
          map: map,
          title: 'Чебоксары'
       });
       marker2.addListener('click', function() {
         infowindow2.open(map, marker2);
  });
  /*Ulyanovsk*/
  var infowindow3 = new google.maps.InfoWindow({
          content: UlyanovskInfo
  });

  var marker3 = new google.maps.Marker({
          position: Ulyanovsk,
          map: map,
          title: 'Ульяновск'
       });
       marker3.addListener('click', function() {
         infowindow3.open(map, marker3);
  });
}
