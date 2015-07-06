<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Noticiero</title>
        <link rel="icon" type="image/png" href="<?php echo base_url(); ?>noti_img/favicon.ico" />
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="<?php echo base_url(); ?>noti_css/bootstrap.css">
        <link rel="stylesheet" href="<?php echo base_url(); ?>noti_css/styles.css">
        <link rel="stylesheet" href="<?php echo base_url(); ?>noti_css/main.css">
        <link href="<?php echo base_url(); ?>noti_css/demo.css" type="text/css" rel="stylesheet" />
        <!-- Latest compiled and minified JavaScript -->
        <script src="<?php echo base_url(); ?>noti_js/bootstrap.min.js"></script>
        <script src="<?php echo base_url(); ?>noti_js/main.js"></script>
        <script src="<?php echo base_url(); ?>noti_js/footer.js"></script>
        <script type="text/javascript" src="<?php echo base_url(); ?>noti_js/scripts.js"></script>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<script src="<?php echo base_url();?>/tinymce/js/tinymce/tinymce.min.js"></script>
<script>tinymce.init({selector:'textarea'});</script>

    </head>
    <body>
        <div class="container">
            <?php if ($this->session->userdata('nombre')) { ?>
                <!-- HEADER -->
                <div class="row">
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand"><strong><?php echo $this->session->userdata('nombre'); ?></strong></a>
                            </div>

                            <!-- Collect the nav links, forms, and other content for toggling -->
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="<?php echo site_url('login/salir');?>">Salir</a></li>
                                </ul>
                            </div><!-- /.navbar-collapse -->
                        </div><!-- /.container-fluid -->
                    </nav>
                </div>
            <?php } ?>           

            <?php echo validation_errors('<div class="alert alert-danger fade in" role="alert">
                                            <button type="button" class="close-lista" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span>
                                            </button><strong>', '</strong></div>'); ?>

            <?php
            $error = $this->session->flashdata('error');
            if (!empty($error)) {
                ?>
                <div class="alert alert-danger alert-dismissible" role="alert">
                    <button type="button" class="close-lista" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <?php echo $error; ?>
                </div>
            <?php } ?>

            <?php
            $acierto = $this->session->flashdata('acierto');
            if (!empty($acierto)) {
                ?>
                <div class="alert alert-success alert-dismissible" role="alert">
                    <button type="button" class="close-lista" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <?php echo $acierto; ?>
                </div>
                <?php }
            ?>

