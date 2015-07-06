<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Administrador extends CI_Controller {

    private $_uploaded;

    public function __construct() {

        parent::__construct();

        $this->load->model('login_model', 'login');
        $this->load->model('administrador_model', 'admin');
        $this->load->database();
        $this->login->existesesion();
    }

    public function index() {
        $data['noticia'] = $this->admin->cintillo();
        $data['resena'] = $this->admin->resena();
        $this->load->view('administrador_view', $data);
    }

    public function noticias() {
        $post = $this->input->post(NULL, TRUE);
        if (empty($post)) {
            $data['noticia'] = $this->admin->cintillo();
            $data['resena'] = $this->admin->resena();
            $data['mostrar'] = 'cintillo';
            $this->load->view('administrador_view', $data);
        } else {
            $this->admin->actualizaCintillo($post);
            $this->session->set_flashdata('acierto', 'La noticia del cintillo se actualizo con éxito.');
            redirect('administrador/noticias');
        }
    }

    public function cortesInformativos() {
        $this->load->helper('form');
        $post = $this->input->post(NULL, TRUE);
        $this->form_validation->set_rules('uploadedimages[]', 'Upload image', 'callback_subida');

        if ($this->input->post()) {
            if ($this->form_validation->run()) {
//        echo '<pre>';
//        print_r($post);
//        print_r($this->_uploaded);
//        echo '</pre>';
                $this->admin->actualizaInformativosImg($post,$this->_uploaded);
                $this->admin->actualizaInformativosResena($post);
                $this->session->set_flashdata('acierto', 'El contenido de ha actualizado.');
                redirect('administrador');
                exit;
            }
        }
        $this->admin->actualizaInformativosResena($post);
        redirect('administrador');
    }

    public function subida() {

        $number_of_files = sizeof($_FILES['uploadedimages']['tmp_name']);

        $files = $_FILES['uploadedimages'];

        for ($i = 0; $i < $number_of_files; $i++) {
            if ($_FILES['uploadedimages']['error'][$i] != 0) {
                $this->session->set_flashdata('acierto', 'Se ha guardado sólo la reseña.');
//                redirect('administrador');
            }
        }
        $this->load->library('upload');
        $config['upload_path'] = FCPATH . 'noti_img/principales/';
        ;
        $config['allowed_types'] = 'gif|jpg|png|jpeg';
        echo $config['upload_path'] = FCPATH . 'noti_img/principales/';
        for ($i = 0; $i < $number_of_files; $i++) {
            $_FILES['uploadedimage']['name'] = $files['name'][$i];
            $_FILES['uploadedimage']['type'] = $files['type'][$i];
            $_FILES['uploadedimage']['tmp_name'] = $files['tmp_name'][$i];
            $_FILES['uploadedimage']['error'] = $files['error'][$i];
            $_FILES['uploadedimage']['size'] = $files['size'][$i];

            $this->upload->initialize($config);
            if ($this->upload->do_upload('uploadedimage')) {
                $this->_uploaded[$i] = $this->upload->data();
            } else {
//                $this->form_validation->set_message('subida', $this->upload->display_errors());
//                return FALSE;
//                $this->session->set_flashdata('error', 'El formato de alguna imagen es incorrecto.');
//                redirect('administrador');
                return FALSE;
            }
        }
        return TRUE;
    }

}
