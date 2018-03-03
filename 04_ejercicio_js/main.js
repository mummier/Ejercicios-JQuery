$("#anuncio").text("Click aquí para cambiar de color!").width(500)
        .height(500)
        .hide()
        .fadeIn(500)
        .on("click", function () {
            var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
            var random = colors[Math.floor(Math.random() * colors.length)];
            $('div').css('background', random);
        });