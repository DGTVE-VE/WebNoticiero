<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Login extends CI_Controller {

    public function __construct() {

        parent::__construct();

        $this->load->model('login_model', 'login');

        $this->load->database();
    }

    public function index() {
        $this->load->view('login_view');
    }

    public function inicio() {

        $post = $this->input->post();
        if ($this->form_validation->run('login') == FALSE) {
            $this->load->view('login_view');
        } else {
            $resp = $this->login->busca($post);
            if ($resp == 1) {
                $this->carga_sesion($post);
                $this->session->set_flashdata('acierto', 'Su sesión a iniciado correctamente. ');
                redirect('administrador');
            } else {
                $this->session->set_flashdata('error', 'El usuario y/o contaseña son incorrectos. ');
                redirect('login/index');
            }
        }
    }

    private function carga_sesion($post) {

        $data = $this->login->carga_sesion($post);
        $nuevosdatos = array(
            'id' => $data['idusuario'],
            'nombre' => $data['nombre'],
            'user' => $data['user'],
            'pass' => $data['pass'],
            'alta' => $data['alta'],
            'activo' => $data['activo']
        );
        $this->session->set_userdata($nuevosdatos);
    }

    public function salir() {
        $this->session->sess_destroy();
        redirect('login');
    }

}

/* End of file home.php */

/* Location: ./application/controllers/home.php */








