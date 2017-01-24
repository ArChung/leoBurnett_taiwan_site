


var chung = chung || {};
chung.MouseMoveScroll = chung.MouseMoveScroll || {};



(function(){
	
	var MouseMoveScroll_self;


	var MouseMoveScroll=function( ){
		
		MouseMoveScroll_self=this;
		MouseMoveScroll_self.mouseMove_objs= [];//*
		MouseMoveScroll_self.action_Objs=[];
		MouseMoveScroll_self.mouseX=0;
		MouseMoveScroll_self.mouseY=0;
		MouseMoveScroll_self.interval=0;
		////console.log('MouseMoveScroll');
		
	}


	MouseMoveScroll.prototype.init = function(){
		
		//$(document).on('mousemove',MouseMoveScroll_self.onMouseMove);

	}

	MouseMoveScroll.prototype.addMouseMoveEvent = function(){
		//console.log('addMouseMoveEvent');
		//$(document).on('mousemove',MouseMoveScroll_self.onMouseMove);

		MouseMoveScroll_self.interval=setInterval(update,1000/10);

	}

	MouseMoveScroll.prototype.removeMouseMoveEvent = function(){
		
		//$(document).off('mousemove',MouseMoveScroll_self.onMouseMove);

		clearInterval(MouseMoveScroll_self.interval);

	}

	MouseMoveScroll.prototype.onMouseMove=function(e){
		////console.log('onMouseMove');
		//MouseMoveScroll_self.mouseX=e.pageX;
		//MouseMoveScroll_self.mouseY=e.pageY;
		for( var i = 0; i < MouseMoveScroll_self.mouseMove_objs.length ; i++){
			MouseMoveScroll_self.action_Objs[i].handle(MouseMoveScroll_self.mouseMove_objs[i],MouseMoveScroll_self.mouseX,MouseMoveScroll_self.mouseY);
			
		}
	}

	
	MouseMoveScroll.prototype.resize=function(){

	}

	MouseMoveScroll.prototype.addScroller = function(obj_idName,action_Obj){
		console.log('addScroller:' +obj_idName);
		//console.log(MouseMoveScroll_self.mouseMove_objs.length);

		if(MouseMoveScroll_self.mouseMove_objs.length==0){

			MouseMoveScroll_self.addMouseMoveEvent();
		}

		var obj=document.getElementById(obj_idName);
		obj=$(obj);
		MouseMoveScroll_self.mouseMove_objs.push(obj);
		MouseMoveScroll_self.action_Objs.push(action_Obj);
		
	}


	MouseMoveScroll.prototype.removeScroller = function(obj_idName){
		
		for(var i=0;i<MouseMoveScroll_self.mouseMove_objs.length;i++){
			if(MouseMoveScroll_self.mouseMove_objs[i].attr('id')==obj_idName){
				
				console.log('removeScroller:' +obj_idName);
		
				TweenMax.killTweensOf('#'+obj_idName);
				MouseMoveScroll_self.mouseMove_objs.splice(i,1);
				MouseMoveScroll_self.action_Objs.splice(i,1);
				

				if(MouseMoveScroll_self.mouseMove_objs.length==0){
					MouseMoveScroll_self.removeMouseMoveEvent();
				}
			}
		}
	}


	MouseMoveScroll.prototype.update = function(){
		MouseMoveScroll_self.mouseX=e.pageX;
		MouseMoveScroll_self.mouseY=e.pageY;
		for( var i = 0; i < MouseMoveScroll_self.mouseMove_objs.length ; i++){
			MouseMoveScroll_self.action_Objs[i].handle(MouseMoveScroll_self.mouseMove_objs[i],MouseMoveScroll_self.mouseX,MouseMoveScroll_self.mouseY);
		}
	}

	MouseMoveScroll.prototype.cloz=function(){

		$(document).off('mousemove',MouseMoveScroll_self.onMouseMove);
	}

	chung.MouseMoveScroll=MouseMoveScroll;

})();





(function(){
	var ChangeMarginTop_withGap=function( gap ){
		this.gap=gap||100;
	}

	ChangeMarginTop_withGap.prototype.handle=function(obj,mx,my){
		

		/*var kid=obj;
		var mom=kid.parent();
		var pre=((my-mom.offset().top)-this.gap)/(mom.height()-this.gap*2);
		pre=(pre<0)?0:pre;
		pre=(pre>1)?1:pre;


		var TargetY=pre*(mom.height()-kid.height());
		//console.log(TargetY);
		//var _y=parseInt(kid.css('margin-top'),10);
		//TargetY-=_y;
		TweenMax.killTweensOf(kid);
		//TweenMax.to(kid,3,{marginTop:TargetY,ease:Power2.easeOut});
		//_y+=(TargetY-_y)/30;
		////console.log(_y);
		//kid.css('margin-top',TargetY+'px' );
		TweenMax.to(kid,.6,{marginTop:TargetY,ease:Power2.easeOut});*/

		var kid=obj,
		mom=kid.parent(),
		_y=my-(mom.offset().top+mom.height());



		console.log($(obj).name,_y);


	}

	chung.MouseMoveScroll.ChangeMarginTop_withGap=ChangeMarginTop_withGap;
	
})();


