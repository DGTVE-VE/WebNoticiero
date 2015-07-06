<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Conductores extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        
    }

    public function lista($nombre) {
        $this->load->view('conductores/'.$nombre);
    }

}
