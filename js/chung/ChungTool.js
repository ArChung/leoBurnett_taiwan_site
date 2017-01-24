var chungTool = chungTool || {};
var simpleShow = simpleShow || {};
var simpleHide = simpleHide || {};

(function() {

    //回傳url參數array
    chungTool.getUrlParameterArray = getUrlParameterArray;
    //array亂數排列
    chungTool.shuffleArray = shuffleArray;
    //判斷手機
    chungTool.isMoblie = isMoblie;
    //補0
    chungTool.padLeft = padLeft;
    // 轉成數字
    chungTool.int = int;
    // 重跑css animation
    chungTool.replayCssAni = replayCssAni;
    // 取得背景圖案
    chungTool.getDivBgImage = getDivBgImage;
    // 加 youtube 到 el 裡
    chungTool.addYouTube = addYouTube;
    // 限制input的最大輸入數
    chungTool.maxlengthInpout = maxlengthInpout;
    // 計算中英文的長度 (中文2英文1)
    chungTool.txtByteLength = txtByteLength;
    // 移除特定開頭的class
    chungTool.removeClassWithFilter = removeClassWithFilter;
    // 回傳以prefix開頭的class拿掉以prefix開頭後的文字 
    chungTool.returnClassNameWithFilter = returnClassNameWithFilter;
    chungTool.capitalizeFirstLetter = capitalizeFirstLetter;
    chungTool.addSwipeEvent = addSwipeEvent;
    chungTool.addSwipeEventTD = addSwipeEventTD;
    chungTool.initLimitText = initLimitText;
    chungTool.getUrlParameter = getUrlParameter;
    chungTool.isOnline = isOnline;
    chungTool.isNull = isNull;
    chungTool.isIOS = isIOS;
    simpleShow = c_simpleShow;
    simpleHide = c_simpleHide;

    function shuffleArray(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    function isMoblie() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    function isIOS() {
        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            return true;
        } else {
            return false;
        }
    }

    function getUrlParameterArray() {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }


    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

    function isOnline() {
        if (window.location.protocol == 'file:') {
            console.log('在本機端喔');
            return false;
        } else {
            return true;
        }
    }

    function c_simpleShow(el, during) {
        if (isNull(during)) {
            during = 0.3;
        }
        el.each(function() {
            var t = $(this);
            t.removeClass('hide');
            TweenMax.killTweensOf(t);
            var tl = new TimelineMax();
            tl.set(t, {
                    autoAlpha: 0
                })
                .to(t, during, {
                    autoAlpha: 1
                });
        });
    }

    function c_simpleHide(el, during) {
        if (isNull(during)) {
            during = 0.3;
        }
        el.each(function() {
                var t = $(this);
                var tl = new TimelineMax();
                TweenMax.killTweensOf(t);
                tl.to(t, during, {
                        autoAlpha: 0
                    })
                    .call(function() {
                        t.addClass('hide');
                    });
            })
            // console.log(123)
    }

    function isNull(val) {
        return (typeof(val) === "undefined")
    }

    function initLimitText() {
        $('.limitTxt').each(function() {
            var t = $(this);
            var limitNum = parseInt(t.attr('data-limitTxtNum'), 10);
            var showBtn = (t.attr('data-showBtn') == 'true') ? true : false;

            if (!isNull(limitNum)) {

                var str = t.text(); // Getting the text
                str = str.replace(/ {2,}/g, ' ');
                str = str.replace(/\n\s*\n/g, '\n');

                if (str.length > limitNum) {

                    var strtemp = '<span class="hide">' + str.substr(limitNum, str.length) + '</span><a href="#" class="seeMoreContentBtn">more</a>';
                    str = str.substr(0, limitNum) + '<i class="dot"> ...</i>';

                    if (showBtn) {
                        str += strtemp;
                    }

                    t.html(str);
                }
            }
        });

        $('.seeMoreContentBtn').on('click', function(e) {
            e.preventDefault();
            $(this).addClass('hide').siblings('.hide').removeClass('hide').siblings('.dot').addClass('hide');
        });

    }

    function addSwipeEventTD(t, funcT, funcD) {
        // var touchObj = document.getElementById("index_banner_swipe");
        var start_y;
        var end_y;
        t.each(function(index, el) {
            var tt = $(this);
            tt.get(0).addEventListener('touchstart', touchStart);
            tt.get(0).addEventListener('touchmove', touchMove);
            tt.get(0).addEventListener('touchend', touchSwipe);

        });

        function touchStart(event) {
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控

            
            end_y=start_y = event.targetTouches[0].pageY;
            // console.log(end_y,start_y);
        }

        function touchMove(event) {
            event.preventDefault();
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控
            end_y = event.targetTouches[0].pageY;
            // console.log(end_y - start_y);
        }

        function touchSwipe(event) {
            if (end_y - start_y > 150) {
                funcD();

            } else if (end_y - start_y < -150) {
                funcT();
            }
        }
    }

    function addSwipeEvent(t, funcL, funcR) {
        // var touchObj = document.getElementById("index_banner_swipe");
        var start_x;
        var end_x;

        t.get(0).addEventListener('touchstart', touchStart, false);
        t.get(0).addEventListener('touchmove', touchMove, false);
        t.get(0).addEventListener('touchend', touchSwipe);

        function touchStart(event) {
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控

            // console.log(123);
            start_x = event.targetTouches[0].pageX;
            //alert(start_x);
        }

        function touchMove(event) {
            event.preventDefault();
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控
            end_x = event.targetTouches[0].pageX;
            //alert(end_x - start_x);
        }

        function touchSwipe(event) {
            if (end_x - start_x > 60) {
                funcR();

            } else if (end_x - start_x < -60) {
                funcL();
            }
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    /* 清除以prefix開頭的所有class*/
    function removeClassWithFilter(elemt, prefix) {
        elemt.each(function(i, el) {
            var classes = el.className.split(" ").filter(function(c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
    };

    /* 回傳以prefix開頭的class拿掉以prefix開頭後的文字*/
    function returnClassNameWithFilter(elemt, prefix) {
        var arr;
        elemt.each(function(i, el) {
            arr = el.className.split(" ").filter(function(c) {
                return c.lastIndexOf(prefix, 0) == 0;
            });
        });

        $.each(arr, function(index, value) {
            arr[index] = value.replace(prefix, "");
        })
        return arr;
    };

    /* 用來算中英混合的長度 */
    function txtByteLength(str) {

        if (str == null) return 0;
        if (typeof str != "string") {
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g, "01").length;

    }

    function maxlengthInpout(el, num) {
        el.on('keyup', function() {
            //get the limit from maxlength attribute  
            var limit = num;
            //get the current text inside the textarea  
            var text = $(this).val();
            //count the number of characters in the text  
            var chars = text.length;

            // console.log(chars);
            //check if there are more characters then allowed  
            if (chars > limit) {
                //and if there are use substr to get the text before the limit  
                var new_text = text.substr(0, limit);

                //and change the current text with the new text  
                $(this).val(new_text);
            }
        });
    }



    function addYouTube(el, vid) {
        // el.empty().append('<iframe allowfullscreen="" frameborder="0" height="100%" width="100%" src="http://www.youtube.com/embed/' + vid + '?rel=0&autoplay=1&modestbranding=0&showinfo=0"></iframe>');
        el.empty().append('<iframe allowfullscreen="" frameborder="0" height="100%" width="100%" src="http://www.youtube.com/embed/' + vid + '?rel=0&autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=1&controls=2&showinfo=1"></iframe>');
    }

    function getDivBgImage(el) {
        return el.css('background-image').replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    }

    function replayCssAni(el, className) {
        el.removeClass(className);
        el.offset().width = el.offset().width;
        el.addClass(className);
    }

    function int(s) {
        return parseInt(s, 10);
    }

    function padLeft(str, lenght) {
        lenght = lenght || "2";
        str += '';
        if (str.length >= lenght)
            return str;
        else
            return padLeft("0" + str, lenght);
    }




})();
