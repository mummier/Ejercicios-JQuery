
    $("#cerrar").on("click", function () {
        $("#banner").hide();
    })
    $("img").each(function(index) {
        $(this).on("click", function(){
            $(this).replaceWith("<p class='texto'>Añadido al carro</p>");
        });
    });


