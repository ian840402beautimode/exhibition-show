export const loadingEvent = () => {
  let counter = 0;

  const loading = setInterval(function(){
    $("#loading-block .run-hex-text").html(counter + "%");
    counter++;
      
    if(counter == 101) {
      clearInterval(loading);
      $("#loading-block").fadeOut()
    }
  }, 20);
}