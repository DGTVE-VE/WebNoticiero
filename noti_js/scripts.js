//variables
var current_page = 1;

//funcion para cargar los ultimos videos subidos por el canal
function get_youtube_videos(pageToken, page) {
    if ($('#show_title').is(':checked')) {
        var title = 'true';
    }
    if ($('#show_description').is(':checked')) {
        var description = 'true';
    }
    current_page = current_page + page;
    var values = {
        "resource": 'playlistItems',
        "especial": 'especial',
        "maxResults": '1'
    };
    $.ajax({
        data: values,
        url: 'http://www.televisioneducativa.gob.mx/noticiario/index.php/reproduccion/lista',
        type: 'post',
        dataType: "html",
        beforeSend: function () {
            $(".message").html("Loading...");
        },
        success: function (youtube_videos) {
            $(".message").html("");
            $(".youtube_videos").html(youtube_videos)
        }
    });
}
//funcion para cargar las listas de reproduccion dinamicas
function get_youtube_videos_playlist(pageToken, page) {
    var title = 'true';
    if ($('#show_description').is(':checked')) {
        var description = 'true';
    }
    current_page = current_page + page;
    var values = {
        "resource": $("#resource_playlist").val(),
        "resource_param": $("#resource_param_playlist").val(),
        "resource_playlist": $("#resource_playlist").val(),
        "maxResults": $("#maxResults_playlist").val(),
        "title": title
    };
    $.ajax({
        data: values,
        url: 'http://www.televisioneducativa.gob.mx/noticiario/index.php/reproduccion/lista',
        type: 'post',
        dataType: "html",
        beforeSend: function () {
            $(".message").html("Loading...");
        },
        success: function (youtube_videos) {
            $(".message").html("");
            $(".youtube_videos_playlist").html(youtube_videos)
        }
    });
}

function ordenListado(limite, lista) {
    console.log('orden');
    console.log(lista.toString());
    var tmp = new Array();
    var inicio = new Array();
    var movidos = new Array();
    var j = 0;
    var fin = 0;
    
    for (var i = 0; i < lista.length-1; i++) {
        console.log(lista[i]);
        if (limite == lista[i] || j > 0) {
            inicio[j] = lista[i];
            j++;
        }
    }
    console.log(inicio.toString());
    for (var i = 0; i < lista.length; i++) {
        if (limite != lista[i] && fin === 0) {
            movidos[i] = lista[i];
            console.log(movidos[j]);
        }else{
            fin++;
        }
    }
    console.log(movidos.toString());
    tmp = inicio.concat(movidos);
    console.log(tmp.toString());
    return tmp;
}