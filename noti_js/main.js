$(document).ready(function(){

    //menu principal
    $(".gran-link").hover(function(){
        $("#gran-menu").show();
        $(".da-subnav").hide();
        $(".subnav-"+$(this).attr("data")).show();
    });
    $("#gran-menu").hover(function(){
        $("#gran-menu").show();
    }, function() {
        $("#gran-menu").hide();
    });
    $(".no-link").hover(function(){
        $("#gran-menu").hide();
    }, function() {
        $("#gran-menu").hide();
    });





});