<?php $this->load->view('common/header_admin'); ?>
<div class="col-md-6 col-md-offset-3">
    <?php echo form_open('login/inicio'); ?>
    <form class="form-signin" role="form">
        <h2 class="form-signin-heading">Noticiario</h2>
        <input type="text" class="form-control" placeholder="Usuario" name="user">
        <input type="password" class="form-control" placeholder="Contraseña" name="pass">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
    </form>
    <?php echo form_close(); ?>
</div>
<?php $this->load->view('common/footer_admin'); ?>

