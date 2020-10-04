var socket = io.connect("https://healt-care-station.herokuapp.com/");


var nav = $('#nav'),
    list = $('#list');

nav.click(function () {
  nav.toggleClass('clicked-nav');
  list.toggleClass('list-opened');
});


socket.on("help", function(data){

  setTimeout(function(){
    $(".help").css({
      transform: "translate(-50%, 0)"
    });
  }, 5000);

  setTimeout(function(){
    $(".help").css({
      transform: "translate(-50%, -100%)"
    });
  }, 6500);
});


function loc(){

  navigator.geolocation.watchPosition(showPosition);

  function showPosition(position) {
    socket.emit('loc', {lat: position.coords.latitude, long: position.coords.longitude});
  }
  $(".sent").css({
    transform: "translate(-50%, 0)"
  });

  setTimeout(function(){
    $(".sent").css({
      transform: "translate(-50%, -100%)"
    });
  }, 1000);
}