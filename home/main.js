var socket = io.connect("https://healt-care-station.herokuapp.com/");
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
socket.on('map', function(data){
  // location.reload();
  var platform = new H.service.Platform({
    "useCIT": true,
   'app_id': 'AV61acc3OidGoENk3zuE',
   'app_code': 'GVdjedVN0_233dVg-Qz0bA',
   'useHTTPS': true
   });

   var latitiude = data.lat,
       long = data.long;
  document.getElementById("lo").innerHTML = `longitude: ${long}`;

  document.getElementById("la").innerHTML = `latitude: ${latitiude}`;

   var maptypes = platform.createDefaultLayers();

   var map = new H.Map(
   document.getElementById('mapContainer'),
   maptypes.normal.map,
   {
     zoom: 15,
     center: { lng: long, lat: latitiude }
   });
   var berlinMarker = new H.map.Marker({
     lat: latitiude,
     lng: long
   });
   map.addObject(berlinMarker);
   console.log("hi");


});