/*
if(isIE()){  runs in all versions of IE after 4 before standards-mode 10  }

if(isIE(8)){  runs in IE8  }

if(isIE(9)){  runs in IE9  }

if(isIE(8,'lte')){  runs in IE8 or below  }

if(isIE(6,'lte')){  if you need this, I pity you...  }

	*/


var chung = chung || {};
chung.browserTool = chung.browserTool || {};

(function(){

	var  isIE=function( version, comparison ){
		var $div = $('<div style="display:none;"/>').appendTo($('body'));
		$div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
		var ieTest = $div.find('a').length;
		$div.remove();
		return ieTest;
	}


	var addEvent=function(evnt, elem, func) {

  		if (elem.addEventListener) {
  			elem.addEventListener(evnt,func,false);
  			// console.log('addEvent:W3C');
   		} else if (elem.attachEvent) { // IE DOM
   			elem.attachEvent("on"+evnt, func);
   			// console.log('addEvent:IE');
   		}
  		else { // No much to do
  			elem[evnt] = func;
  			// console.log('addEvent:none');
  		}
  	}

  	chung.browserTool.isIE = isIE;
  	chung.browserTool.addEvent = addEvent;

  })();


