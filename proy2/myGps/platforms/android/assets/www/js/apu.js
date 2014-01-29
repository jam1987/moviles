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
             + '<button class="button1" onclick="alert();return false;">'
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

