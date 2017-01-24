var chung=chung||{};
chung.motions=chung.motions||{};
chung.motions.upDownFadeIn=chung.motions.upDownFadeIn||{};
/*var chung = chung || {};
chung.motions = chung.motions || {};*/

(function(){
	function upDownFadeIn(obj_up,obj_down,forward){
		//forward=forward||true;
		if(forward==undefined)forward=true;
			//console.log(forward);
		/*var mo1=parseInt(obj_up.css('margin-top'),10);
		var mo2=parseInt(obj_down.css('margin-top'),10);

		mo1=mo1||0;
		mo2=mo2||0;*/
		var tll=new TimelineLite();


		TweenMax.killChildTweensOf(obj_up); 
		TweenMax.killChildTweensOf(obj_down); 
		tll.to(obj_down,0,{marginTop:100,autoAlpha:0})
		.to(obj_up,0,{autoAlpha:0})
		.to(obj_down,.6,{marginTop:15,autoAlpha:1,ease:Power4.easeOut},0.1)
		.to(obj_up,.6,{autoAlpha:1,ease:Power4.easeOut},0.1);
		/*tll.to(obj_up,0,{marginTop:-50,autoAlpha:0})
		.to(obj_down,0,{marginTop:65,autoAlpha:0},0)
		.to(obj_up,1,{marginTop:0,autoAlpha:1,ease:Power4.easeOut},0)
		.to(obj_down,1,{marginTop:15,autoAlpha:1,ease:Power4.easeOut},0);
		tll.stop();
*/	
		tll.stop();
		if(!forward){
			tll.reverse(1);
			tll.onComplete(function(){
				console.log(123);

			})
			//console.log('re')
		}else{
			tll.restart();
		}
			
	}

	chung.motions.upDownFadeIn=upDownFadeIn;
})();