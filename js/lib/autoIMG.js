// jQuery.autoIMG.js v0.3
// Tang Bin - http://planeArt.cn/ - MIT Licensed
(function ($) {
	
	var // ?置加???的替??像
		tempPath = './images/loading.png',
		// ?置加???的替??像
		errorPath = './images/error.png',
		// ??是否支持css2.1 max-width?性
		isMaxWidth = 'maxWidth' in document.documentElement.style,
		// ??是否IE7??器
		isIE7 = !-[1,] && !('prototype' in Image) && isMaxWidth;
		
	new Image().src = tempPath;
	
	$.fn.autoIMG = function () {
		var $this = this,
			// ?取容器?度
			maxWidth = $this.width();
			
		return $this.find('img').each(function (i, img) {
			
			// 如果支持max-width?性?使用此，否?使用下面?加?方式
			if (isMaxWidth) return img.style.maxWidth = maxWidth + 'px';
			
			var path = img.getAttribute('data-src') || img.src,
				next = img.nextSibling,
				parent = img.parentNode,
				temp = new Image();
			
			// ?除img?像，并替?成loading?片
			img.style.display = 'none';
			img.removeAttribute('src');
			img.parentNode.removeChild(img);
			temp.src = tempPath;
			next ? next.insertBefore(temp) : parent.appendChild(temp);
			
			// ?片尺寸就??行
			imgReady(path, function (width, height) {
				if (width > maxWidth) {
					// 等比例?放
					height = maxWidth / width * height,
					width = maxWidth;
					
					// ?除loading?像
					temp.parentNode.removeChild(temp);
					
					// 恢复?示?整后的原?像
					img.style.display = '';
					img.style.width = width + 'px';
					img.style.height = height + 'px';
					img.setAttribute('src', path);
					next ? next.insertBefore(img) : parent.appendChild(img);
				};
			}, function () {
				// 加???
				temp.src = errorPath;
				temp.title = 'Image load error!';
			});
			
		});
	};
	
	// IE7?放?片?失真，采用私有?性通?三次插值解?
	isIE7 && (function (c,d,s) {s=d.createElement('style');d.getElementsByTagName('head')[0].appendChild(s);s.styleSheet&&(s.styleSheet.cssText+=c)||s.appendChild(d.createTextNode(c))})('img {-ms-interpolation-mode:bicubic}',document);

	// ?片??据加?就?事件
	// http://www.planeart.cn/?p=1121
	// @param	{String}	?片路?
	// @param	{Function}	?取尺寸的回?函? (??1接收width；??2接收height)
	// @param	{Function}	加???的回?函? (可?)
	(function () {
		var list = [], intervalId = null,
		
		tick = function () {
			var i = 0;
			for (; i < list.length; i++) {
				list[i].end ? list.splice(i--, 1) : list[i]();
			};
			!list.length && stop();
		},
		
		stop = function () {
			clearInterval(intervalId);
			intervalId = null;
		};
		
		this.imgReady = function (url, callback, error) {
			var check, end, width, height, offsetWidth, offsetHeight, div,
				accuracy = 1024,
				doc = document,
				container = doc.body || doc.getElementsByTagName('head')[0],
				img = new Image();
					
			img.src = url;
			if (!callback) return img;
			
			// 如果?片被?存，?直接返回?存?据
			if (img.complete) return callback(img.width, img.height);
			
			// 向?面插入?秘?像，用??听?片是否占位
			div = doc.createElement('div');
			div.style.cssText = 'visibility:hidden;position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden';
			div.appendChild(img)
			container.appendChild(div);
			width = img.offsetWidth;
			height = img.offsetHeight;
			
			// 完全加?完?的事件
			img.onload = function () {
				end();
				callback(img.width, img.height);
			};
			
			// 加???后的事件
			img.onerror = function () {
				end();
				error && error();
			};
			
			// ???片是否已?占位
			check = function () {
				offsetWidth = img.offsetWidth;
				offsetHeight = img.offsetHeight;
				if (offsetWidth !== width || offsetHeight !== height || offsetWidth * offsetHeight > accuracy) {
					end();
					callback(offsetWidth, offsetHeight);
				};
			};
			check.url = url;
			
			// 操作?束后?行清理
			// ?除元素与事件，避免IE?存泄漏
			end = function () {
				check.end = true;
				img.onload = img.onerror = null;
				div.innerHTML = '';
				div.parentNode.removeChild(div);
			};
			
			// ????片是否占位的函?加入定?器列?定期?行
			// 同一?片只加入一???器
			// ??何?只允?出?一?定?器，?少??器性能?耗
			!check.end && check();
			for (var i = 0; i < list.length; i ++) {
				if (list[i].url === url) return;
			};
			if (!check.end) {
				list.push(check);
				if (!intervalId) intervalId = setInterval(tick, 150);
			};
		};
	})();

})(jQuery);