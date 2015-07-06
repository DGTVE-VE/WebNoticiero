<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Home extends CI_Controller {

    public function __construct() {

        parent::__construct();

        $this->load->model('login_model', 'login');
        $this->load->model('administrador_model', 'admin');
        $this->load->database();
    }

    public function index() {
        $data['noticia'] = $this->admin->cintillo();
        $data['resena'] = $this->admin->resena();
        $this->load->view('home_view', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */