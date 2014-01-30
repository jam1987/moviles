
    
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
             + '<p id="geolocation">Finding geolocation...</p>'
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
             + '<div>'
             
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

function myAlert1() {
$(function() {
                document.addEventListener("deviceready", onDeviceReady, false);
                apu2.initModule($('#apu'));
                if (apu.estado._s_chat == "abierto") {
                    deslizarChat.intercambiar();
                }
                
            });
  return true;
	
}

function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
}

 function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
}

// onSuccess Geolocation
    //
function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Mi Latitud es: '           + position.coords.latitude         + '<br />' +
                            'Mi Longitud es: '          + position.coords.longitude        + '<br />' +
                            '<button class="button1"> Ver en Mapa </button>';
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

