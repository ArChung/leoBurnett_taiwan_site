var stageResize=function(){
	var sh=document.documentElement.clientHeight ;
	var sw=document.documentElement.clientWidth ;
	var _bg=$('#bg-content');

	
	if(_bg.height()<=500){
		// console.log(_bg.height());
		TweenMax.delayedCall(.1,stageResize);
		return;
	}
	
	//---Bg---//

	var _dy =(_bg.height()-sh)/(totalPage-1);
	TweenMax.set(_bg,{width:sw,top:-(_dy*($pageChannel-1))});
	//TweenMax.set(_bg,{width:sw+20,left:-10,top:-(_dy*($pageChannel-1))-10});
	
	

	//---scroll pageTop adjustment---//

	var distant=$('.currentPage').offset().top;
	var containerX = $('.wrap-container').offset().top;
	if(distant!=0){
		$('.wrap-container').css({'top': (containerX - distant)+'px' });
	}
	$('.wrap-container').css({'top': (containerX - distant)+'px' });



	//---border & scrollIcon---//
	
	hideNav(0);
	if($('.scrollDwonIcon').hasClass("hide"))
		hideScrollIcon(0);
	else
		showScrollIcon(0);

}














