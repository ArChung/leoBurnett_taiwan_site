
var ie=function(){
	console.log('ie');

	$(window).resize(onIeResize);
	onIeResize();
}


var onIeResize=function(){
	var sh=document.documentElement.clientHeight ;
	var sw=document.documentElement.clientWidth ;

	$('.client-subPage .subItem').css({'height':(sh-55)/3+'px'});


}

$(document).ready(ie);
