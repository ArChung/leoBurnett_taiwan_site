/**
 * jQuery.ItemMoveWithMouse
 * Version 1.0
 * Date: 08/11/2014
 **/


 (function($){
  $.fn.mouseX=function(e){
    mouseX = e.pageX - $(this).offset().left;
    return mouseX;
  };

  $.fn.mouseY=function(e){
    mouseY = e.pageY - $(this).offset().top;
    return mouseY;
  };
  
})(jQuery)