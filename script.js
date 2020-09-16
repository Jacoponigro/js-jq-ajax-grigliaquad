// document.ready
$(document).ready(function functionName() {
  $(".grid-box").click(function() {
    var box = $(this);
    // richiesta ajax
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function(data, stato) {
          var randomNumb = data.response;
          generaNumero(randomNumb, box);
        },
        "error": function(richiesta, stato, errori) {
          alert("ERRORE");
        }
    });
    // fine richiesta ajax
  });
});
// fine document.ready
// funzione genera numero
function generaNumero(numbServer, element) {
  if (element.hasClass("green") || element.hasClass("yellow")) {
    alert("prova un altro numero, questo è già presente");
  }else {
    if (numbServer <= 5) {
      element.addClass("yellow");
    } else {
      element.addClass("green");
    }
    element.children("span").text(numbServer);
  }
}
// fine funzione genrea numero
