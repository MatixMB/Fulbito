$(document).ready(function(){
    var botonCrearPartido = $("#crear-partido").css("cursor", "pointer");
    var botonPartidosCreados = $("#partidos-creados").css("cursor", "pointer");
    var botonPaginaPrincipal = $("#volver").css("cursor", "pointer");
    var addPlayer = $('#add-player');
    var boxLiGenerados = $('.inputs-generados');
    var formulario = $(".formulario");

    function overButton(){
        $(this).css("background", "black");
        $(this).css("color", "white");
    }

    function outButton(){
        $(this).css("background", "white");
        $(this).css("color", "black");
    }

    botonCrearPartido.mouseover(overButton);
    botonCrearPartido.mouseout(outButton);
    botonPartidosCreados.mouseover(overButton);
    botonPartidosCreados.mouseout(outButton);

    botonCrearPartido.click(function(){
        window.location.href = "crear-partido.html";
    })

    botonPartidosCreados.click(function(){
        window.location.href = "partidos-creados.html";
    })

    botonPaginaPrincipal.click(function(){
        window.location.href = "index.html";
    })

    formulario.submit(function(event) {
        event.preventDefault();
      
        var fecha = $('#fecha').val();
        var fechaRevertida = fecha.split("-").reverse().join("-");
        var hora = $('#hora').val();
        var lugar = $("#lugar").val();
        var jugadores = $(".jugadores").map(function() {
          return $(this).val();
        }).get();
      
        var datosFormulario = {
            fecha: fechaRevertida,
            hora: hora,
            lugar: lugar,
            jugadores: jugadores
        };

        localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));
      
        // Limpia los campos del formulario después de guardar los datos
        $('#fecha').val('');
        $('#hora').val('');
        $('#lugar').val('');
        $('.jugadores').val('');
      });

      addPlayer.click(function(e) {
        e.preventDefault();
        boxLiGenerados.append('<li class="lista-ul-jugadores"><input type="text" name="integrantes" class="jugadores"><button id="remove-player"><img src="img/close_FILL0_wght400_GRAD0_opsz48.svg" alt="Agregar Jugadores"></button></li>');
      });

      $(document).on("click", "#remove-player", function(e) {
        e.preventDefault();
        $(this).closest("li.lista-ul-jugadores").remove();
      });
})