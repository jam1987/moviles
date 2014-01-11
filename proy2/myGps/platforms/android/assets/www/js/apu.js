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
               + '<div class="apu-encab-logo"></div>'
               + '<div class="apu-encab-login"></div>'
               + '<div class="apu-encab-busqueda"></div>'
           + '</div>'
           + '<div class="apu-cuerpo">'
               + '<div class="apu-cuerpo-nav"></div>'
               + '<div class="apu-cuerpo-contenido"><p id="geolocation">Finding geolocation...</p></div>'
           + '</div>'
           + '<div class="apu-pie"></div>'
           + '<div class="apu-chat"> chat foo </div>'
           + '<div class="apu-modal"></div>'
          
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