var socket = io.connect("https://healt-care-station.herokuapp.com/" || "https://localhost3000"),
    chatView = $("#chatView"),
    name,
    messVal;


$('#name').click(function(event){
  event.preventDefault();
  if( $('#name-val').val() != ""){
    name = $('#name-val').val();
  }else{
    name = "Anonymous"
  }
  $('.alert-name').css({
    display: "none"
  });
});

function addVol(message, name){
  var mess = '<div class="vol temp"> <span><i class="fas fa-user"></i></span> <h1>'+ name +'</h1> <p>'+ message +'</p></div>'
  chatView.append(mess);
}

function addDoc(message, name){
  var mess = '<div class="doc temp"> <span><i class="fas fa-user-md"></i></span> <h1>'+ name +'</h1> <p>'+ message +'</p></div>'
  chatView.append(mess);
}

$("#send-but").click(function(event){
  event.preventDefault();
  messVal = $("#mess-input").val();
  $("#mess-input").val("");
  socket.emit("vol", {message: messVal, name: name});

});


socket.on("volReplay", function(data){
  addVol(data.message, data.name);
  chatView.animate({ scrollTop: chatView[0].scrollHeight}, 2000);
});


socket.on("docReplay", function(data){
  addDoc(data.message, data.name);
  chatView.animate({ scrollTop: chatView[0].scrollHeight}, 2000);
});