// jQuery.autoIMG.js v0.3
// Tang Bin - http://planeArt.cn/ - MIT Licensed
(function ($) {
	
	var // ?�m�[???����??��
		tempPath = './images/loading.png',
		// ?�m�[???����??��
		errorPath = './images/error.png',
		// ??�O�_���css2.1 max-width?��
		isMaxWidth = 'maxWidth' in document.documentElement.style,
		// ??�O�_IE7??��
		isIE7 = !-[1,] && !('prototype' in Image) && isMaxWidth;
		
	new Image().src = tempPath;
	
	$.fn.autoIMG = function () {
		var $this = this,
			// ?���e��?��
			maxWidth = $this.width();
			
		return $this.find('img').each(function (i, img) {
			
			// �p�G���max-width?��?�ϥΦ��A�_?�ϥΤU��?�[?�覡
			if (isMaxWidth) return img.style.maxWidth = maxWidth + 'px';
			
			var path = img.getAttribute('data-src') || img.src,
				next = img.nextSibling,
				parent = img.parentNode,
				temp = new Image();
			
			// ?��img?���A�}��?��loading?��
			img.style.display = 'none';
			img.removeAttribute('src');
			img.parentNode.removeChild(img);
			temp.src = tempPath;
			next ? next.insertBefore(temp) : parent.appendChild(temp);
			
			// ?���ؤo�N??��
			imgReady(path, function (width, height) {
				if (width > maxWidth) {
					// �����?��
					height = maxWidth / width * height,
					width = maxWidth;
					
					// ?��loading?��
					temp.parentNode.removeChild(temp);
					
					// ���`?��?��Z����?��
					img.style.display = '';
					img.style.width = width + 'px';
					img.style.height = height + 'px';
					img.setAttribute('src', path);
					next ? next.insertBefore(img) : parent.appendChild(img);
				};
			}, function () {
				// �[???
				temp.src = errorPath;
				temp.title = 'Image load error!';
			});
			
		});
	};
	
	// IE7?��?��?���u�A���Ψp��?�ʳq?�T�����ȸ�?
	isIE7 && (function (c,d,s) {s=d.createElement('style');d.getElementsByTagName('head')[0].appendChild(s);s.styleSheet&&(s.styleSheet.cssText+=c)||s.appendChild(d.createTextNode(c))})('img {-ms-interpolation-mode:bicubic}',document);

	// ?��??�u�[?�N?�ƥ�
	// http://www.planeart.cn/?p=1121
	// @param	{String}	?����?
	// @param	{Function}	?���ؤo���^?��? (??1����width�F??2����height)
	// @param	{Function}	�[???���^?��? (�i?)
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
			
			// �p�G?���Q?�s�A?������^?�s?�u
			if (img.complete) return callback(img.width, img.height);
			
			// �V?�����J?��?���A��??�v?���O�_�e��
			div = doc.createElement('div');
			div.style.cssText = 'visibility:hidden;position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden';
			div.appendChild(img)
			container.appendChild(div);
			width = img.offsetWidth;
			height = img.offsetHeight;
			
			// �����[?��?���ƥ�
			img.onload = function () {
				end();
				callback(img.width, img.height);
			};
			
			// �[???�Z���ƥ�
			img.onerror = function () {
				end();
				error && error();
			};
			
			// ???���O�_�w?�e��
			check = function () {
				offsetWidth = img.offsetWidth;
				offsetHeight = img.offsetHeight;
				if (offsetWidth !== width || offsetHeight !== height || offsetWidth * offsetHeight > accuracy) {
					end();
					callback(offsetWidth, offsetHeight);
				};
			};
			check.url = url;
			
			// �ާ@?���Z?��M�z
			// ?�������O�ƥ�A�קKIE?�s�n�|
			end = function () {
				check.end = true;
				img.onload = img.onerror = null;
				div.innerHTML = '';
				div.parentNode.removeChild(div);
			};
			
			// ????���O�_�e�쪺��?�[�J�w?���C?�w��?��
			// �P�@?���u�[�J�@???��
			// ??��?�u��?�X?�@?�w?���A?��??���ʯ�?��
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