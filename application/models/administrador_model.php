<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
    
    class Administrador_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    public function cintillo() {
        $q = $this->db->query("SELECT * FROM noticia WHERE  1 ORDER BY idnoticia DESC;");
        if ($q->num_rows() > 0) {
            $tmp = $q->result_array();
        } else {
            $tmp = array();
        }
        return $tmp;
    }

    public function resena($id = 0) {
        if ($id == 0) {
            $q = $this->db->query("SELECT * FROM resena WHERE  1 ORDER BY alta DESC;");
        } else {
            $q = $this->db->query("SELECT * FROM resena WHERE idresena = ".$id.";");
        }
        if ($q->num_rows() > 0) {
            $tmp = $q->result_array();
        } else {
            $tmp = array();
        }
        return $tmp;
    }

    public function actualizaCintillo($post) {
        $q = $this->db->query("INSERT INTO noticia (resumen) VALUES('" . $post['noticia'] . "')");
    }

    public function actualizaInformativosImg($post, $img) {
        if ($img[0]['file_size'] > $img[1]['file_size']) {
            $grnd = $img[0]['file_name'];
            $pqna = $img[1]['file_name'];
        } else {
            $grnd = $img[1]['file_name'];
            $pqna = $img[0]['file_name'];
        }
        $q = $this->db->query("UPDATE resena SET principal ='" . $grnd . "', pequena ='" . $pqna . "', alta = '" . date("Y-m-d H:i:s") . "', titulo = '" . $post['titulo'] . "' WHERE idresena = " . $post['id'] . ";");
    }

    public function actualizaInformativosResena($post) {
        $q = $this->db->query("UPDATE resena SET resena ='" . $post['resena'] . "', alta = '" . date("Y-m-d H:i:s") . "', titulo = '" . $post['titulo'] . "' , videoLink='".str_replace("watch?v=","embed/",$post['videoLink'])."' WHERE idresena = " . $post['id'] . ";");
    }

}
