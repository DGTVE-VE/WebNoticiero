<?php $this->load->view('common/header'); ?>

<div id="player" width="100%" height="100%" style="visibility: visible;">
<img id="disp" src="<?php echo base_url();?>noti_img/video-no-disponible.png" style="display: none">
</div>
<div align="center">
<iframe width="720" height="480" src="http://cdn.livestream.com/embed/canal44tv?
layout=4&color=0x9de691&autoPlay=true&mute=false&iconColorOver=0x57be46&iconColor=0x459738&allowchat=true&height=480&width=720" 
style="border:0;outline:0" frameborder="0" scrolling="no"></iframe>
</div>
<!--
<script type="text/javascript" src="https://d2iwzbhgddzdwl.cloudfront.net/resources/player/infinitehd3/swfobject.js"></script>

<script type="text/javascript">

	var ua = navigator.userAgent.toLowerCase();
	function isMobile(){
	   if( ua.search(/iphone|ipod|ipad|android/) > -1 ){
		   return true;
	   }else{
		   	return false;
	   }
	}
	if(isMobile()){  
       $('#disp').show();
	}
    else{

        var player_id = "player";      

        var player_streams = [

        {

        id: 'live',

stream: 'octoshape://streams.octoshape.net/udg/live/ch3/auto'

        }

        ];

 

        //optional. starts the stream when the player is ready

        var player_stream = "live";

var player_language = "es";

var player_controlsPlacement = "overlay";

        var params = {allowFullScreen: true, scale: 'noscale', allowScriptAccess: 'always'};

        var attributes = {id: player_id, name: player_id};

   swfobject.embedSWF(document.location.protocol+'//d2iwzbhgddzdwl.cloudfront.net/resources/player/infinitehd3/player.swf', player_id, "100%", "495", "10.2.0", null, null, params, attributes);
}
</script>
-->
<?php $this->load->view('common/footer'); ?>
