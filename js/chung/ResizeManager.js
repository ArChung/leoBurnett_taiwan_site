


var chung = chung || {};
chung.ResizeManager = chung.ResizeManager || {};



(function(){
	
	var ResizeManager_self;
	
	var ResizeManager=function( ){
		
		ResizeManager_self=this;
		ResizeManager_self.stageWidth=0;
		ResizeManager_self.stageHeight=0;
		ResizeManager_self.resize_objs= [];
		ResizeManager_self.action_Objs=[];
		// console.log('ResizeManagerNew');
		
	}


	ResizeManager.prototype.init = function(){
		
		$(window).resize(ResizeManager_self.resize)
	}

	

	ResizeManager.prototype.addResizeObj = function(obj,action_Obj){
		ResizeManager_self.resize_objs.push(obj);
		ResizeManager_self.resize_objs.push(obj);
		ResizeManager_self.action_Objs.push(action_Obj);
		ResizeManager_self.action_Objs.push(action_Obj);
		// console.log(ResizeManager_self.resize_objs.length,ResizeManager_self.resize_objs);
		
	}

	ResizeManager.prototype.removeResizeObj = function(obj){
		//console.log('ResizeManager.prototype.removeResizeObj',obj);
		var _i=ResizeManager_self.resize_objs.indexOf(obj);
		
		if(_i!=-1){
			ResizeManager_self.resize_objs.splice(i,1);
			ResizeManager_self.action_Objs.splice(i,1);
		}
	}

	ResizeManager.prototype.resize=function(){
		//console.log('ResizeManager.prototype.resize');
		for( var i = 0; i < ResizeManager_self.resize_objs.length ; i++){
			
			if(ResizeManager_self.resize_objs[i].length==undefined||ResizeManager_self.resize_objs[i].length==1){
				ResizeManager_self.action_Objs[i].handle(ResizeManager_self.resize_objs[i]);
				//console.log(ResizeManager_self.resize_objs[i].length,i,ResizeManager_self.resize_objs[i]);
			}else{
				//console.log('ResizeManager.prototype.resize2');
				for(var j=0;j< ResizeManager_self.resize_objs[i].length;j++){
					//console.log('ResizeManager.prototype.resize3');
					ResizeManager_self.action_Objs[i].handle(ResizeManager_self.resize_objs[i].eq(j));
					
				}
			}
			
		}
	}

	ResizeManager.prototype.cloz=function(){

		$(window).off("resize", ResizeManager_self.resize);
	}

	chung.ResizeManager=ResizeManager;

})();





(function(){
	var imgCoverMomDiv=function(obj){
		if(obj=='center')this.isCenter=true;
	}

	imgCoverMomDiv.prototype.handle=function(obj){
		var kid=obj;
		var mom=kid.parent();
		var kidW=kid.width();
		var kidH=kid.height();
		var kidRatio=kidW/kidH;
		var momW=mom.width();
		var momH=mom.height();
		var momRatio=momW/momH;
		//console.log(momH)


		if(momRatio>kidRatio){
			kid.css({'width':momW,'height':momW/kidRatio});
		}else{
			kid.css({'height':momH,'width':momH*kidRatio});
		}

		if(this.isCenter){
			kid.css({'margin-left':-(kid.width()-mom.width())/2,'margin-top':-(kid.height()-mom.height())/2});
		}
		
		//console.log('imgCoverMomDiv');
	}

	chung.ResizeManager.imgCoverMomDiv=imgCoverMomDiv;
	
})();


(function(){
	var divGoCenter=function(){
		
	}

	divGoCenter.prototype.handle=function(obj){
		var kid=obj;
		var mom=kid.parent();
		var kidW=kid.width();
		var kidH=kid.height();
		var kidRatio=kidW/kidH;
		var momW=mom.width();
		var momH=mom.height();
		var momRatio=momW/momH;


		
		kid.css({'margin-left':-(kidW-momW)/2,'margin-top':-(kidH-momH)/2});


	}

	chung.ResizeManager.divGoCenter=divGoCenter;
	
})();


(function(){
	var presentOfWindowHeight=function(obj){
		this.pre=obj;

	}

	presentOfWindowHeight.prototype.handle=function(obj){
		var sh=document.documentElement.clientHeight;
		var _h=sh*this.pre;
		var kid=obj;

		
		kid.css({'height':_h+'px'});
		
	}

	chung.ResizeManager.presentOfWindowHeight=presentOfWindowHeight;
	
})();


(function(){
	var FullWindowForVideoJs=function(){
		//this.pre=obj;

	}

	FullWindowForVideoJs.prototype.handle=function(obj){
		var sh=document.documentElement.clientHeight;
		var sw=document.documentElement.clientWidth;
		//sh=sh*this.pre;
		//sw=sw*this.pre;
		var kid=obj;
		
		kid.width(sw).height(sh);
		//kid.css({'height':sh+'px','width':sw+'px'});
		//console.log($('#showCasePlayer').videoWidth);
		//console.log(kid.videoHeight);

	}

	chung.ResizeManager.FullWindowForVideoJs=FullWindowForVideoJs;
	
	
})();