<?php $this->load->view('common/header_admin'); ?>
<br>
<br>
<h4>Administrador de contenido.</h4>
<br>
<div class="row">
    <div class="col-xs-12 col-md-12">
        <ul class="nav nav-tabs" role="tablist" id="myTab">
            <li role="presentation" class="active"><a href="#resena" aria-controls="resena" role="tab" data-toggle="tab">Reseñas</a></li>
            <li role="presentation"><a href="#noticia" aria-controls="noticia" role="tab" data-toggle="tab">Noticia</a></li>
        </ul>

        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="resena">
                <?php foreach ($resena as $key => $value) { ?>

                    <?php echo form_open_multipart('administrador/cortesInformativos'); ?>
                    <div class="row">
                        <input type="hidden" name="id" value="<?php echo $value['idresena']; ?>">
                        <div class="col-xs-6 col-md-6">
                            <img class="img-responsive" alt="reseña" src="<?php echo base_url(); ?>noti_img/principales/<?php echo $value['principal'] ?>">
                            <br>
                            <img class="img-responsive" alt="reseña" src="<?php echo base_url(); ?>noti_img/principales/<?php echo $value['pequena'] ?>">
                        </div>
                        <div class="col-xs-6 col-md-6">
                            <br>
                            Titulo: <input type="text" class="form-control" name="titulo" value="<?php echo $value['titulo']; ?>">
                            Link del video:<br>
                            <input type="text" class="form-control" name="videoLink" 
                            value="<?php echo $value['videoLink']; ?>" placeholder="Ej. https://www.youtube.com/watch?v=z4f83DP0rlg">
                            
                            Redacte su reseñan:<br>
                            <textarea class="form-control" rows="7" name="resena"><?php echo $value['resena'] ?></textarea>
                            <br>
                            <?php echo form_open_multipart(); ?>
                            <p>Se aceptan imágenes terminación <br><strong>.gif | .jpg | .png | .jpeg</strong>:</p>
                            <?php //echo form_error('uploadedimages[]'); ?>
                            <?php echo form_upload('uploadedimages[]', '', 'multiple'); ?>

                            <?php echo form_submit('submit', 'Guardar', ' class="btn btn-success pull-right" id="carga"'); ?>

                            <?php echo form_close(); ?>
                        </div>
                    </div>
                    <?php echo form_close(); ?>
                    <br>
                <?php } ?>
            </div>

            <div role="tabpanel" class="tab-pane" id="noticia">
                <?php echo form_open('administrador/noticias'); ?>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Noticia: </label>
                    <div class="col-sm-10">
                        <textarea class="form-control" rows="3" name="noticia"><?php echo $noticia[0]['resumen']; ?></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <br>
                        <button type="submit" class="btn btn-success pull-right">Guardar</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    $(function () {
    var mostrar = '<?php echo $mostrar; ?>';
            if (mostrar == 'cintillo') {
    $('#myTab a:last').tab('show');
    } else {
    $('#myTab a:first').tab('show');
    }
    });</script>

<script>
            $('submit').click(funcition(){
    alert('hola');
    });
</script>

<?php $this->load->view('common/footer_admin'); ?>


