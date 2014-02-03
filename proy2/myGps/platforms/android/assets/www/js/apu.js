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

function prepararForm() {
   $(function() {
      document.addEventListener("deviceready", onDeviceReady, false);
      apu3.initModule($('#apu'));
   });
   return true;
}

// 
//onSuccess Geolocation
//
function onSuccess1(position) {
   
   var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

   var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   
   var radio = 6371; //Radio de la tierra en Km
    var lat1 = 10.427093;
    var lat2=0.0;
    var long1 = -66.885036;
    var long2=0.0;
    var dlat=0.0;
    var dlong=0.0;
    var a=0.0;
    var c=0.0;
    var valueResult=0.0;
    var km=0.0;
    var res;
    var coord2;
    var marker1;
	var geocoder = new google.maps.Geocoder();
	var address = new Array();
	var coord2;
	var elementos = document.getElementById('direccion');
	
	geocoder.geocode({'address': 'universidad simon bolivar'},
	function(results,status)
	{
	    if (status == google.maps.GeocoderStatus.OK) {
	 
	        
	        coord2 = new google.maps.LatLng(results[0].geometry.location.lat(),results[0].geometry.location.lng());
	        
            km = google.maps.geometry.spherical.computeDistanceBetween(myLatlng,coord2);
            km = km / 1000;
            km = km.toFixed(2);
            
            	alert( "La distancia entre su posición actual y la posición buscada es: "+km+" Kil&oacute;metro(s)!");
	        marker1 = new google.maps.Marker({
                position: coord2,
                map: map,
                title: 'Posicion buscada'
            }); 
            
             google.maps.event.addListener(marker, 'mousedown', function() {
                 infowindow.open(map,marker1);
            }); 
	        
	        
	    } else {
	        alert("Direccion incorrecta");
	    }
	    
   
	    
	});
	

   
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
      '<div id="bodyContent">'+
      '<p><b>Coordenadas</b></p>'+
      '<p>Latitud: '+position.coords.latitude+'</p>'+
      '<p>Longitud: '+position.coords.longitude+'</p>'+
      '</div>'+
      '</div>'; 

   var infowindow = new google.maps.InfoWindow({
      content: contentString
   });

   var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<p><b>Coordenadas</b></p>'+
      '<p>Latitud: '+position.coords.latitude+'</p>'+
      '<p>Longitud: '+position.coords.longitude+'</p>'+
      '</div>'+
      '</div>'; 

   var infowindow1 = new google.maps.InfoWindow({
      content: contentString1
   });
   google.maps.event.addListener(marker, 'mousedown', function() {
      infowindow.open(map,marker);
   });
   
  


}

function onError1(error) {
   alert('code: '    + error.code    + '\n' +
   'message: ' + error.message + '\n');
}


// Cordova is ready
function onDeviceReady1() {
   navigator.geolocation.getCurrentPosition(onSuccess1, onError1);
}

function myDistance() {
   $(function() {
      document.addEventListener("deviceready", onDeviceReady1, false);
      apu4.initModule($('#apu'));
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
             + '<button class="button1" onclick="prepararForm()"> Ver distancias  </button>'
             + '<div>'
             
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

var apu3 = (function() {
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
             + '<H1> Calcular Distancias </H1>'
             + '</br>'
             + '</br>'
             + '<p> Favor introducir una direcci&oacute;n para obtener la distancia entre <\p>'
             + '<p> dicho punto y su ubicaci&oacute;n actual <\p>'
             + 'Direcci&oacute;n a Buscar: <input type="text" name="direccion" id="direccion">'
             + '</br>'
             + '</br>'
             + '<button class="button1" onclick="myDistance()"> Enviar </button>'
             + '</form>'
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

var apu4 = (function() {
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
           + '<div class="apu-cuerpo" id="cuerpo1" >'
           + '</br>'
             + '<H1> Distancia Calculada </H1>'
             + '<h3 id="cuerpo1"></h3>'
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