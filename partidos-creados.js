$(document).ready(function() {
  var datosGuardados = localStorage.getItem("datosFormulario");
  var volver = $("#volver");
  

  if (datosGuardados) {
    var datosFormulario = JSON.parse(datosGuardados);

    // Usa los datos recuperados para lo que necesites en esta página
    // Por ejemplo, puedes asignar los valores a elementos HTML utilizando jQuery:
    $("#fecha-listo").text(datosFormulario.fecha);
    $("#hora-listo").text(datosFormulario.hora);
    $("#lugar-listo").text(datosFormulario.lugar);
    var jugadores = datosFormulario.jugadores;
    var listaJugadores = jugadores.map(function(jugador, indice) {
      return "<li>" + (indice+1) + ". " + jugador + "</li>";
    }).join("");

    $("#jugadores-listo").html(listaJugadores);
  }

  volver.click(function(){
    window.location.href = "index.html";
  })
});