<?php $this->load->view('common/header'); ?>
<div class="row">
    <!-- CONTENIDO 1 -->
    <div class="row">
        <div class="col-xs-12 col-md-8">
            <div class="row">
                <div class="col-xs-6 col-md-6">
                    <a href="#" id="lanzador" type="button" data-toggle="modal" data-target="#resena" data-id="">
                        <img id="cambia" class="img-responsive" alt="reseña" 
                             src="<?php echo base_url(); ?>noti_img/principales/<?php echo $resena[0]['principal'] ?>">
                    </a>
                </div>
                <div class="col-xs-6 col-md-6">
                    <?php foreach ($resena as $key => $value) { ?>
                        <a href="#" type="button">
                            <img data-grande="<?php echo $value['principal'] ?>" data-idresena="<?php echo $value['idresena'] ?>"
                                 class="cambio pequenas img-responsive" 
                                 alt="reseña" src="<?php echo base_url(); ?>noti_img/principales/<?php echo $value['pequena'] ?>">
                        </a>
                    <?php } ?>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-12">
                    <marquee bgcolor="#d32323" style="margin-top: 8px; height: 23px;" behavior="scroll" direction="left">
                        <font color="#FFFFFF" size="3"><?php echo $noticia[0]['resumen']; ?></font>
                    </marquee>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-4">
            <a class="twitter-timeline" href="https://twitter.com/MEXALDIA" data-widget-id="585444426199146498">Tweets por el @MEXALDIA.</a>
        </div>
    </div>
    <!-- FIN CONTENIDO 1 -->
    <!-- CONTENIDO 2 -->
    <div class="row">
        <div class="col-xs-12 col-md-8">
            <div class="row">
                <div class="col-xs-4 col-md-4" id="am-img">
                    <a href="#" type="button" data-toggle="modal" data-target="#am-resena">
                        <img class="img-responsive" alt="AM" src="<?php echo base_url(); ?>noti_img/noticiarios/AM.jpg">
                    </a>
                </div>
                <div class="col-xs-4 col-md-4" id="md-img">
                    <a href="#" type="button" data-toggle="modal" data-target="#md-resena">
                        <img class="img-responsive" alt="MD" src="<?php echo base_url(); ?>noti_img/noticiarios/MD.jpg">
                    </a>
                </div>
                <div class="col-xs-4 col-md-4" id="pm-img">
                    <a href="#" type="button" data-toggle="modal" data-target="#pm-resena">
                        <img class="img-responsive" alt="PM" src="<?php echo base_url(); ?>noti_img/noticiarios/PM.jpg">
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-4">
            <br><br>
            <div class="embed-responsive embed-responsive-16by9">            
                 <video controls class="centrar-video">
                    <source src="<?php echo base_url(); ?>video/noticiero.mp4" type="video/mp4">
                    Tu navegador no implementa el elemento <code>video</code>.
                </video> 
                <!-- Cambio por imagen -->
                <!--<a href="/ingeniotv">
                <img src="<?php echo base_url(); ?>/noti_img/Noti_Ingenio.jpg">
                </a> -->
            </div>
            <br><br>
        </div>
    </div>
    <!-- FIN CONTENIDO 2 -->
    <!-- CONTENIDO 3 -->
    <div class="row">
        <div class="col-xs-12 col-md-8" ><!-- Deportes -->
            <img id="banner-1" style="display: none;" class="img-responsive" alt="Deportes" src="<?php echo base_url(); ?>noti_img/deportes/deportes_1.jpg">
            <img id="banner-2" style="display: none;" class="img-responsive" alt="Deportes" src="<?php echo base_url(); ?>noti_img/deportes/deportes_2.jpg">
            <img id="banner-3" style="display: none;" class="img-responsive" alt="Deportes" src="<?php echo base_url(); ?>noti_img/deportes/deportes_3.jpg">
            <img id="banner-4" style="display: none;" class="img-responsive" alt="Deportes" src="<?php echo base_url(); ?>noti_img/deportes/deportes_4.jpg">
            <!-- Ultimos videos -->
            <div class="row youtube_videos"></div>
            <?php $this->load->view('media_view'); ?>
        </div>
        <div class="col-xs-12 col-md-4">
            <div class="panel panel-default">

                <?php $this->load->view('secciones_view'); ?>

            </div>
        </div>
        <!-- CONTENIDO 4 -->
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <p class="text-center"><h2 class="text-center"><p class="letra-color"><strong>CONDUCTORES</strong></p></h2></p><!-- Conductores -->
                <?php $this->load->view('conductores_view'); ?>
            </div>
            <div class="col-xs-12 col-md-4">
                <a href="#" type="button" data-toggle="modal" data-target="#sintonizanos">
                    <img class="img-responsive btn-block" alt="Sintonizanos" src="<?php echo base_url(); ?>noti_img/media/sintonizanos.jpg">
                </a>
                <div class="fb-page" data-href="https://www.facebook.com/mexico.aldia.1" data-width="369" data-height="400" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/mexico.aldia.1"><a href="https://www.facebook.com/mexico.aldia.1">México Al Día</a></blockquote></div></div>
            </div>
        </div>

        <?php $this->load->view('common/footer'); ?>

        <!-- FIN CONTENIDO 4 -->
        <?php $this->load->view('modales_view'); ?>

    </div>

</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>noti_js/scripts.js"></script>

<script>
    $(document).ready(function () {
        // carga una imagen aleatoria
        var num_img = Math.floor((Math.random() * 4) + 1);
        $('#banner-' + num_img).show();
        // fin carga imagen aleatoria

        var current_page = 1;
        current_page = 1;
        get_youtube_videos('', 0);
        $("body").on("keypress", function (e) {
            if (e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                current_page = 1;
                get_youtube_videos('', 0);
            }
        });
    });
</script>
<div id="fb-root"></div>
<script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.3";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<script>
    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
</script>
<script>
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $('.cambio').click(function () {
        var imagen = $(this).attr('data-grande');
        var resena = $(this).attr('data-idresena');
        $('#lanzador').attr('data-id', resena);
        $('#cambia').hide();
        $('#cambia').attr("src", "<?php echo base_url(); ?>noti_img/principales/" + imagen);
        $('#cambia').show();
    });

    $('#cambia').click(function () {
        var id = $('#lanzador').attr('data-id');
        $.ajax({
            method: "POST",
            url: "<?php echo site_url('reproduccion/resena'); ?>",
            data: {id: id}
        }).done(function (text) {
              $('#resume-resena').html(text);
        }).fail(function(){
            alert('Error de conección.');
        });
    });
</script>

<!--PARA HACER EL CAMBIO DE VIDEO-->
<script>
    $('.cierra-video').click(function () {
        $(".youtube_videos_playlist").empty();
    });
</script>
<script>
    function cambio_video(IDvideo, listaVideos, titulosVideos) {

        var menuVideos = '';
        var listados = ordenListado(IDvideo, listaVideos.split(','));
        var tiutlos = titulosVideos.split(',');

        $(".youtube_videos_playlist").empty();
        menuVideos += '<div class="col-xs-12 col-md-12">\n\
                        <div class="DocumentList">\n\
                        <ul class="list-inline">';
        for (var i = 0; i < listados.length; i++) {
            menuVideos += '<li class="DocumentItem">\n\
                            <div class="thumbnail">\n\
                            <a href="#" onclick="return cambio_video(' + "'" + listados[i] + "'" + ',' + "'" + listaVideos + "'" + ',' + "'" + titulosVideos + "'" + ');" class="siguiente">\n\
                            <img src="https://i.ytimg.com/vi/' + listados[i] + '/default.jpg"></a>\n\
                            <div class="caption"><p class="alinear">' + tiutlos[i] + '</p></div></div></li>';
        }
        menuVideos += '</div></div></ul>';
        $(".youtube_videos_playlist").append('<div class="col-xs-12 col-md-12 public">\n\
                                                <div class="embed-responsive embed-responsive-16by9">\n\
                                                    <iframe id="ytplayer" class="embed-responsive-item" \n\
                                                        src="http://www.youtube.com/embed/' + IDvideo + '" allowfullscreen="" frameborder="0">\n\
                                              </iframe></div></div>' + menuVideos);
        return false;
    }
</script>
<script>
    $('.lista-repro').click(function () {
        var nombre = $(this).attr('data-name');
        var lista;

        $('#titulo').html(nombre);

        lista = $(this).attr('data-list');
        $("#resource_param_playlist").val(lista);

        var current_page = 1;
        current_page = 1;
        get_youtube_videos_playlist('', 0);
        $("body").on("keypress", function (e) {
            if (e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                current_page = 1;
                get_youtube_videos_playlist('', 0);
            }
        });

    });
</script>
<!--FIN PARA HACER EL CAMBIO DE VIDEO-->
</body>
</html>
