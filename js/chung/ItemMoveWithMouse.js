/**
 * jQuery.ItemMoveWithMouse
 * Version 1.0
 * Date: 08/11/2014
 **/


(function($){
  $.fn.ItemMoveWithMouse=function(_s){
    //console.log(_s);
    var item=$(this);
    /*var window=$(window);*/

    var _wX=$(window).width()/2;
    var _wY=$(window).height()/2;

    var _orinMarginTop=parseInt(item.css('margin-top'),10);
    var _orinMarginLeft=parseInt(item.css('margin-left'),10);

    

   // console.log(_orinMarginTop+":"+_orinMarginLeft);

    var onMove=function(e){
      var _dx=-Math.floor(_orinMarginTop+((e.pageX-_wX)/_wX*_s));
      var _dy=-Math.floor(_orinMarginLeft+((e.pageY-_wY)/_wY*_s));

     // console.log((e.pageX-_wX)+":"+(e.pageY-_wY));
     console.log(_dx);
     TweenMax.to(item,0,{marginLeft:_dx,marginTop:_dy,ease:Power2.easeOut});
      //TweenMax.to(item,0,{marginTop:_orinMarginTop+_dx,marginLeft:_orinMarginLeft+_dy});

    }

   // onMove();
   $(window).mousemove(onMove);
   $(window).resize(function(){
     // console.log(12321131231);
     _wX=$(window).width()/2;
     _wY=$(window).height()/2;
    // console.log(_wX);

  });
 }

})(jQuery)