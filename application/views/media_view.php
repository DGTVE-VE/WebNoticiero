

<form action="" method="post">
    <input type="hidden" id="resource_playlist" name="resource_playlist" value="playlistItems">
    <!--<input type="hidden" id="resource_playlist" name="resource_playlist" value="playlist">-->
    <input type="hidden" name="resource_param_playlist"  id="resource_param_playlist"  type="text" size="20" value="PLuf-CjH3cFGA3XPhkyIhsxJ-4_0ycXXfZ">
    <input type="hidden" id="maxResults_playlist" name="maxResults_playlist" value="20" min="1" max="50" required="">
</form>
<div class="row" class="img-responsive" id="contenedor">
    <div id="contenido">
        <div class="col-xs-6 col-md-3">
            <a type="button" class="btn btn-link btn-lg lista-repro" data-toggle="modal" data-target="#myModal"
               data-name="Reportajes" data-list="PLuf-CjH3cFGD_a0guK3VFRgQdD2UK4KnM" >
                <img class="img-responsive center-block" alt="Reportajes" src="<?php echo base_url();?>noti_img/media/reportajes.png">
            </a>
        </div>
        <div class="col-xs-6 col-md-3">
            <a type="button" class="btn btn-link btn-lg lista-repro" data-toggle="modal" data-target="#myModal"
               data-name="Entrevistas" data-list="PLuf-CjH3cFGBV-fFaI_aOUeWdQBIBcjRN" >
                <img alt="Entrevistas" src="<?php echo base_url();?>noti_img/media/entrevistas.png">
            </a>
        </div>
        <div class="col-xs-6 col-md-3">
            <a type="button" class="btn btn-link btn-lg lista-repro" data-toggle="modal" data-target="#myModal"
               data-name="Reflexiones" data-list="PLuf-CjH3cFGBIFjzz4z_horMugoy2lLJ5" >
                <img alt="Reflexiones" src="<?php echo base_url();?>noti_img/media/reflexiones.png">
            </a>
        </div>
        <div class="col-xs-6 col-md-3">
            <a type="button" class="btn btn-link btn-lg lista-repro" data-toggle="modal" data-target="#myModal"
               data-name="Efemérides" data-list="PLuf-CjH3cFGBRcKScpMy0HtelOXlfK3xW" >
                <img alt="Efemerides" src="<?php echo base_url();?>noti_img/media/efemerides.png">
            </a>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content-lista">
            <div class="modal-header">
                <button type="button" class="close-lista cierra-video" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 id="titulo"></h4>
            </div>
            <div class="modal-body">
                <div class="youtube_videos_playlist"></div>
                <br><br><br>
            </div>
            <div class="modal-footer">
                <br>
                <br>
            </div>
        </div>
    </div>
</div>


