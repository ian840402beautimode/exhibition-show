let counter = 0;
const i = setInterval(function(){
  $("#loading-block .run-hex-text").html(counter + "%");
  counter++;
    
  if(counter == 101) {
    clearInterval(i);
    $("#loading-block").fadeOut()
  }
}, 20);