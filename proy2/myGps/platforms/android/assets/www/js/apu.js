//Módulo de Cambio de Páginas

// 
//onSuccess Geolocation
//
function onSuccess(position) {
   
   // Habilitar recarga visual
   google.maps.visualRefresh = true;
   
   var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

   var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   
   var map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);
   
   var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Ubicación Actual'
   });
   
   var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading">Ubicaci&oacute;n Actual</h2>'+
      '<div id="bodyContent">'+
      '<p><b>Coordenadas</b></p>'+
      '<p>Latitud: '+position.coords.latitude+'</p>'+
      '<p>Longitud: '+position.coords.longitude+'</p>'+
      '</div>'+
      '</div>';

   var infowindow = new google.maps.InfoWindow({
      content: contentString
   });

   google.maps.event.addListener(marker, 'mousedown', function() {
      infowindow.open(map,marker);
   });


}

function onError(error) {
   alert('code: '    + error.code    + '\n' +
   'message: ' + error.message + '\n');
}


// Cordova is ready
function onDeviceReady() {
   navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function menuPrincipal() {
   $(function() {
      apu1.initModule($('#apu')); 
   });
  return true;
}

function myAlert1() {
   $(function() {
      document.addEventListener("deviceready", onDeviceReady, false);
      apu2.initModule($('#apu'));
   });
   return true;
}

function myDistance() {
    var radio = 6371; //Radio de la tierra en Km
    var lat1 = 33.639975;
    var lat2 = -84.44403199999999;
    var long1 = 33.95260200000001;
    var long2 = -84.5499327;
    var dlat  = ((lat2-lat1) * Math.PI)/180;
    var dlong  = ((long2-long1)*Math.PI)/180;
    var a = Math.sin(dlat/2) * Math.sin(dlat/2)  + 
            Math.cos((lat1*Math.PI/180)) * Math.cos(lat2*Math.PI/180) *
            Math.sin(dlong / 2) * Math.sin(dlong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var valueResult = radio * c;
    var km = valueResult * 1;
    //var newFormat = new DecimalFormat("FFFF");
	//alert(km);
	var geocoder = new google.maps.Geocoder();
	var address = new Array();
	geocoder.geocode({'address': 'calle loma redonda, lomas del prado'},function(results,status)
	{
	    if (status == google.maps.GeocoderStatus.OK) {
	        alert(results[0].geometry.location);
	    } else {
	    }
	});
}



//--------------------------------------------------------------------------------

var apu = (function() {
     var mapaConfig = {
               esquema_mapa_ancla: {
                   chat: {abierto:true, cerrado:true}
               }};
    var mapaEstado = {
                   $contenedor: null,
                   mapa_ancla : {},
                   chat_retraido: true
               };
    var initModule = function($container) {
        $container.html(
             
             '<div class="apu-encab">'
           + '</div>'
           + '<div class="apu-cuerpo">'
           + '</br>'
           + '</br>'
             + '<H1> BIENVENIDO A  MyGPS </H1>'
             + '</br>'
             + '</br>'
             + '<button class="button1" onclick="menuPrincipal()">'
          + '    Iniciar Sesi&oacute;n </button>'
             + '</br>'
             + '</br>'
             + '</br>'
             + '</br>'
             + '<button class="button1"> Registrarse  </button>'
             + '<div> </li>'
             + '</ul>'
           + '</div>'
           + '<div class="apu-pie"></div>'
         
            );
            $.uriAnchor.configModule({
              schema_map : mapaConfig.esquema_mapa_ancla
           });
          
    };
     var estado = $.uriAnchor.makeAnchorMap();
    return {initModule: initModule, estado:estado};
}());

var apu1 = (function() {
     var mapaConfig = {
               esquema_mapa_ancla: {
                   chat: {abierto:true, cerrado:true}
               }};
    var mapaEstado = {
                   $contenedor: null,
                   mapa_ancla : {},
                   chat_retraido: true
               };
    var initModule = function($container) {
        $container.html(
             
             '<div class="apu-encab">'
           + '</div>'
           + '<div class="apu-cuerpo">'
           + '</br>'
           + '</br>'
             + '<H1> Menu Principal </H1>'
             + '</br>'
             + '</br>'
             + '<button class="button1" onclick="myAlert1()">'
          + '    Ver mi posici&oacute;n Actual </button>'
             + '</br>'
             + '</br>'
             + '</br>'
             + '</br>'
             + '<button class="button1" onclick="myDistance()"> Ver distancias  </button>'
             + '<div>'
             
           + '</div>'
           + '<div class="apu-pie"></div>'
          
            );
            $.uriAnchor.configModule({
              schema_map : mapaConfig.esquema_mapa_ancla
           });
          
    };
     var estado = $.uriAnchor.makeAnchorMap();
    return {initModule: initModule, estado:estado};
}());


var apu2 = (function() {
     var mapaConfig = {
               esquema_mapa_ancla: {
                   chat: {abierto:true, cerrado:true}
               }};
    var mapaEstado = {
                   $contenedor: null,
                   mapa_ancla : {},
                   chat_retraido: true
               };
    var initModule = function($container) {
        $container.html(
             
             '<div class="apu-encab">'
            + '</div>'
            + '<div class="apu-cuerpo">'
            + '</br>'
            + '</br>'
            + '<H1> Mi Posici&oacute;n Actual </H1>'
            + '</br>'
            + '</br>'
            + '<div id="map_canvas" style="width: 100%; height: 100%"></div>'
            + '</div>'
            + '<div class="apu-pie">'
            +     '<button class="backButton" onclick="menuPrincipal()">'
            +        'Atr&aacute;s' 
            +     '</button>'
            +'</div>'
         
            );
        
        
            $.uriAnchor.configModule({
              schema_map : mapaConfig.esquema_mapa_ancla
           });
          
    };
     var estado = $.uriAnchor.makeAnchorMap();
    return {initModule: initModule, estado:estado};
}());

//--------------------------------------------------------------------------