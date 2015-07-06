<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Reproduccion extends CI_Controller {

    public function __construct() {
        parent::__construct();
        error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));
        $this->load->model('administrador_model', 'admin');
        $this->load->database();
    }

    public function index() {
        
    }

    public function lista() {
        $post = $this->input->post(NULL, TRUE);

        $videoIdPrimero = '';
// url
        $url = 'https://www.googleapis.com/youtube/v3/';
//key
        //$key = 'key=' . 'AIzaSyA6oW5D-ZlSIG-OHSBOR25TMd3YDRU7HdU';
	  $key = 'key=' . 'AIzaSyDvqRhL4JO53pFvnIfPEg82VX6jMYiVG4s';
        $channels_type = array('likes', 'favorites', 'uploads');

//resource
        $resource = 'playlistItems?';

//Required parameters
        $part = 'part=snippet&';


//Optional parameters
        $maxResults = 'maxResults=' . $post['maxResults'] . '&';

//playlists ID
        if ($post['resource'] == 'playlistItems' && !isset($post['especial'])) {
            $resource_param = 'playlistId=' . $post['resource_param'] . '&';

            $fields = 'fields=items(snippet),nextPageToken,prevPageToken,pageInfo';

            $request = $url . $resource . $part . $resource_param . $maxResults . $key;
            $str_datos = file_get_contents($request);
            $datos = json_decode($str_datos, true);
        }

//Video gallery
//-------------------------------
        if (!isset($post['resource_playlist']) && isset($post['especial'])) {
            //Mesa cuadrada,En corto
            $resource_param = array('PLuf-CjH3cFGDsHpr-3W3AAMxX3mPErm17', 'PLuf-CjH3cFGDQk95JRr6AsppQ-DWdX-mC');
            $youtube_videos = '';
            $cnt = 0;

            foreach ($resource_param as $value) {

                $request = $url . $resource . $part . 'playlistId=' . $value . '&' . $maxResults . $key;
                $str_datos = file_get_contents($request);
                $datos = json_decode($str_datos, true);


                foreach ($datos["items"] as $items) {
                    //$youtube_videos .= '<li>';
                    //check private thumbnail videos
                    if (!isset($items["snippet"]["thumbnails"]) && $items["snippet"]["title"] == 'Private video') {
                        //get private thumbnail videos
                        $thumbnail_url = 'https://i1.ytimg.com/vi/' . $items["snippet"]["resourceId"]["videoId"] . '/default.png';
                        $video_state = 'private';
                    } else {
                        $thumbnail_url = $items["snippet"]["thumbnails"]["default"]["url"];
                        $video_state = 'public';
                    }

                    $youtube_videos .= '<div class="visible-xs visible-sm col-xs-12 col-md-6 ' . $video_state . '">
                            <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item"
                            src="http://www.youtube.com/embed/' . $items["snippet"]["resourceId"]["videoId"] . '" frameborder="0" allowfullscreen>
                            </iframe>
                            </div>
                            </div>';
                    if ($cnt == 0) {
                        $youtube_videos .= '<div class="visible-md visible-lg col-md-6 ' . $video_state . '">
                            <iframe width="104%" height="320px"
                            src="https://www.youtube.com/embed/' . $items["snippet"]["resourceId"]["videoId"] . '"
                            frameborder="0" allowfullscreen></iframe>
                            </div>';
                        $cnt++;
                    } else {
                        $youtube_videos .= '<div class="visible-md visible-lg ' . $video_state . '">
                            <iframe width="385" height="320"
                            src="https://www.youtube.com/embed/' . $items["snippet"]["resourceId"]["videoId"] . '"
                            frameborder="0" allowfullscreen></iframe>
                            </div>';
                    }
                    //title
                    if (!empty($post['title'])) {
                        if ($post['resource'] == 'search') {
                            $videoId = $items["id"]["videoId"];
                        } else {
                            $videoId = $items["snippet"]["resourceId"]["videoId"];
                        }
                        $youtube_videos .= '<h3><a href="https://www.youtube.com/watch?v=' . $videoId . '">' . $items["snippet"]["title"] . '</a></h3>';
                    }
                }
            }
        }

//PLAYLIST DINAMICO
        if (isset($post['resource_playlist'])) {
            $youtube_videos = '';

            //gallery title
            if ($post['resource'] == 'search') {
                $gallery_title = $post['resource_param'];
            } else {
                $gallery_title = $datos["items"][0]["snippet"]["channelTitle"];
            }

            $youtube_videos .= '<div class="col-xs-12 col-md-12">
                <div class="DocumentList">';

            //gallery
            $youtube_videos .= '<ul class="list-inline">';
            $cnt1 = 0;
            $id_lista_videos = '';
            $titulos_lista_videos = '';
            foreach ($datos["items"] as $items) {
                $id_lista_videos .= $items["snippet"]["resourceId"]["videoId"] . ',';
                $titulos_lista_videos .= $items["snippet"]["title"] . ',';
            }
            foreach ($datos["items"] as $items) {
                $youtube_videos .= '<li class="DocumentItem">';

                $thumbnail_url = isset($items["snippet"]["thumbnails"]["default"]["url"]) ? $items["snippet"]["thumbnails"]["default"]["url"] : 'noti_img/assets/default.png';
                $video_state = 'public';
                //}
                //title
                if (!empty($post['title'])) {
                    if ($post['resource'] == 'search') {
                        $videoId = $items["id"]["videoId"];
                    } else {
                        $videoId = $items["snippet"]["resourceId"]["videoId"];
                    }

                    $youtube_videos .= '<div class="thumbnail">';
                    $youtube_videos .= '<a href="#" onClick="return cambio_video(' . "'" . $videoId . "'" . ',' . "'" . $id_lista_videos . "'" . ',' . "'" . str_replace('"', "", $titulos_lista_videos) . "'" . ');" class="siguiente">'
                            . '<img src="' . $thumbnail_url . '"></a>';
                    if ($cnt1 == 0) {
                        $videoIdPrimero .= '<div class="col-xs-12 col-md-12 ' . $video_state . '" >
                                    <div class="embed-responsive embed-responsive-16by9" id="player-main">
                                    <iframe id="ytplayer" class="embed-responsive-item"
                                    src="http://www.youtube.com/embed/' . $videoId . '" frameborder="0" allowfullscreen>
                                    </iframe>
                                    </div>
                                    </div>';
                        $cnt1++;
                    }

                    $youtube_videos .= '<div class="caption">';
//            $youtube_videos .= ' <cite><a href="https://www.youtube.com/watch?v=' . $videoId . '">' . $items["snippet"]["title"] . '</a></cite>';
//            $youtube_videos .= ' <p class="alinear">' . $items["snippet"]["title"] . '</p>';
                    $youtube_videos .= $items["snippet"]["title"];
                }
                $youtube_videos .= '</div></div></li>';
            }
            $youtube_videos .= '</ul></div></div>';
        }
        echo $videoIdPrimero;
        echo $youtube_videos;
    }

    public function resena() {
        $id = $this->input->post('id');
        $resenas = $this->admin->resena($id);
        echo '<br>
              <h3 class="text-center">'.$resenas[0]['titulo'].'</h3>
              <p class="text-justify">'.$resenas[0]['resena'].'</p>';
              
        if(!empty($resenas[0]['videoLink'])){
            echo '<iframe width="420" height="345"
			src="'.$resenas[0]['videoLink'].'">
                  </iframe>';
		}
		   
    }

}
