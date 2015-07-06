<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed')



    

;class Login_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    public function busca($post) {
        $q = $this->db->query("SELECT * FROM usuarios WHERE pass = '" . $post['pass'] . "' AND user = '" . $post['user'] . "' AND activo = 1");
        if ($q->num_rows() == 0) {
            $tmp = 0;
        } else {
            $tmp = 1;
        }
        return $tmp;
    }

    public function carga_sesion($post) {
        $q = $this->db->query("SELECT * FROM usuarios WHERE pass = '" . $post['pass'] . "' AND user = '" . $post['user'] . "' AND activo = 1");
        if ($q->num_rows() > 0) {
            $tmp = $q->result_array();
        } else {
            $tmp = array();
        }
        return $tmp[0];
    }

    public function existesesion() {
        if (!$this->session->userdata('nombre')) {
            redirect(base_url() . 'login');
        }
    }

    
    
}
