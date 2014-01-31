//Módulo de Cambio de Páginas

function myAlert() {
   $(function() {
      apu1.initModule($('#apu')); 
   });
  return true;
}

// 
//onSuccess Geolocation
//
function onSuccess(position) {

   var mapOptions = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   
   var map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

}

function onError(error) {
   alert('code: '    + error.code    + '\n' +
   'message: ' + error.message + '\n');
}


// Cordova is ready
function onDeviceReady() {
   navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


function myAlert1() {
   $(function() {
      document.addEventListener("deviceready", onDeviceReady, false);
      apu2.initModule($('#apu'));
   });
   return true;
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
             + '<button class="button1" onclick="myAlert()">'
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
             + '<button class="button1"> Ver distancias  </button>'
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
           + '<div class="apu-pie"></div>'
         
            );
        
        
            $.uriAnchor.configModule({
              schema_map : mapaConfig.esquema_mapa_ancla
           });
          
    };
     var estado = $.uriAnchor.makeAnchorMap();
    return {initModule: initModule, estado:estado};
}());

//--------------------------------------------------------------------------