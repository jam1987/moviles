
    
var apu2 = (function() {
     var element = document.getElementById('geolocation');
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
             + 'Latitude: '           + element.coords.latitude              + '<br />' +
                            'Longitude: '          + element.coords.longitude             + '<br />' +
                            'Altitude: '           + element.coords.altitude              + '<br />' +
                            'Accuracy: '           + element.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + element.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + element.coords.heading               + '<br />' +
                            'Speed: '              + element.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   element.timestamp   
           + '</div>'
           + '<div class="apu-pie"></div>'
         
           
          
            );
            $.uriAnchor.configModule({
              schema_map : mapaConfig.esquema_mapa_ancla
           });
          
           
           
           var chat =  deslizarChat;
           
           chat.iniciar(jQuery('#apu'));
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
             + '<div> </li>'
             + '</ul>'
           + '</div>'
           + '<div class="apu-pie"></div>'
         
           
          
            );
            $.uriAnchor.configModule({
              schema_map : mapaConfig.esquema_mapa_ancla
           });
          
           
           
           var chat =  deslizarChat;
           
           chat.iniciar(jQuery('#apu'));
    };
     var estado = $.uriAnchor.makeAnchorMap();
    return {initModule: initModule, estado:estado};
}());



function myAlert() {
 $(function() {
                apu1.initModule($('#apu'));
                if (apu.estado._s_chat == "abierto") {
                    deslizarChat.intercambiar();
                }
                
            });
  return true;
}

function myAlert1(position) {

    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + new Date(position.timestamp)      + '\n');

}

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
          
           
           
           var chat =  deslizarChat;
           
           chat.iniciar(jQuery('#apu'));
    };
     var estado = $.uriAnchor.makeAnchorMap();
    return {initModule: initModule, estado:estado};
}());

