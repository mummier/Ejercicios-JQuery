$('li').hover(
    function () {
        var imgsrc = $('img').attr('src');
        $(this).addClass("destacar")
        $('#elem1').mouseover(function () {
            $("img").attr("src", "img/arbol.jpg")
        })
        $('#elem2').mouseover(function () {
            $("img").attr("src", "img/rio.jpg")
        })
        $('#elem3').mouseover(function () {
            $("img").attr("src", "img/lago.jpg")
        })
        $('#elem4').mouseover(function () {
            $("img").attr("src", "img/sol.jpg")
        })
    },
    function () {
        $(this).removeClass("destacar");
        $("img").attr("src", "img/blanco.jpg");
    }
);


