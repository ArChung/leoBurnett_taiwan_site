var pageArr;
var totalPage;
var isScrolling = false;


var scrollFn = function() {

    //總共幾頁?
    totalPage = 5;

    //第一頁是?
    //$pageChannel=1;

    //init PageArr 
    pageArr = ['', '#index', '#client', '#showCase', '#humanKind', '#contactUs']

    $('.p' + $pageChannel).addClass('currentPage');
    $('.sideMenu_item').eq(($pageChannel - 1)).addClass('sideMenu-on')

    //滾輪事件
    if (chungTool.isMoblie()) {
        chungTool.addSwipeEventTD($('#mainWrap .wrap-container .page'), function() {
            if (isScrolling) return;
            if ($isInSubPage) return;
            switchPage($pageChannel + 1);

        }, function() {
            if (isScrolling) return;
            if ($isInSubPage) return;

            switchPage($pageChannel - 1);
        })
    } else {
        $(document).on('mousewheel', onWheel);
    }


    //sideMenu
    $('.sideMenu_item').click(onSideMenu);

    //mainMenu
    // $('.navBtn').mouseenter(function() {
    //     TweenMax.to($(this), .3, { opacity: 0.5 });
    // });
    // $('.navBtn').mouseleave(function() {
    //     TweenMax.to($(this), .6, { opacity: 1, delay: 0.6 });
    // });
    $('.navBtn').click(onNavBtn);


    //clientPage_mainBtn
    $('#client_b1').click(open_ClientSubPage);



    //showCase_mainBtn
    $('#showCase_b1').click(open_ShowCaseSubPage);

    //HumanKind_mainBtn
    $('#humanKind_b1').click(open_humanKindSubPage);

    //backBtn
    $('#backBtn').click(function() {
        if ($pageChannel == 2) {
            close_ClientSubPage();
        }

        if ($pageChannel == 3) {

            close_ShowCaseSubPage();

        }

        if ($pageChannel == 4) {

            close_humanKindSubPage();
        }

    });


    //
    $('#index_b1').click(function() {
        switchPage(2);


    });

    $('#scrollDwonIcon').click(function() {
        if (!$isInSubPage && !isScrolling)
            switchPage($pageChannel + 1);

    });


    //快速瀏覽到子頁
    switch ($subPageOn) {
        case "client":
            open_ClientSubPage();
            break;
        case "showcase":
            open_ShowCaseSubPage();
            break;
        case "humanKind":
            open_humanKindSubPage();
            break;
    }



}


var open_ClientSubPage = function() {
    if (isScrolling) return;
    openSubPage();

    PageMotion.onMotion(6);

    TweenMax.delayedCall(1.3, function() {
        if (!chungTool.isMoblie()) {
            var ani = new chung.MouseMoveScroll.ChangeMarginTop_withGap(200);
            $MouseMoveScroll.addScroller('clientWall', ani);
        }

    });

}

var close_ClientSubPage = function() {

    clozSubPage();
    PageMotion.onMotion(7);
    if (!chungTool.isMoblie()) {
        $MouseMoveScroll.removeScroller('clientWall');
    }

}


var open_humanKindSubPage = function() {

    if (isScrolling) return;
    openSubPage();
    PageMotion.onMotion(10)

}
var close_humanKindSubPage = function() {


    clozSubPage();
    PageMotion.onMotion(11);



}

var open_ShowCaseSubPage = function(_timeScale) {
    if (isScrolling) return;
    _timeScale = _timeScale || 1;

    openSubPage();
    PageMotion.onMotion(8);;

    TweenMax.delayedCall(1.3, function() {
        if (!chungTool.isMoblie()) {
            addScroller_showCase();
        }

    });

}


var close_ShowCaseSubPage = function() {



    clozSubPage();
    PageMotion.onMotion(9);
    if (!chungTool.isMoblie()) {
        removeScroller_showCase();
    }
}


var openSubPage = function() {
    $isInSubPage = true;
    stopStar();
    hideBorder();
    $('#header .headerContainer').addClass("blackBgNav");
}


var clozSubPage = function() {
    playStar();
    showBorder();
    TweenMax.delayedCall(1.3, function() {
        $isInSubPage = false;
    });
    $('#header .headerContainer').removeClass("blackBgNav");
}



var onNavBtn = function(e) {
    if ($isInSubPage) {
        $isInSubPage = false;
        $('#backBtn').trigger("click");
        TweenMax.delayedCall(.6, switchPage, [$.inArray($(this).find('a').attr('pageId'), pageArr)])

    } else {
        switchPage($.inArray($(this).find('a').attr('pageId'), pageArr));
    }


}

var onSideMenu = function(e) {
    if (isScrolling) return;
    switchPage($.inArray($(this).find('a').attr('href'), pageArr), 0.1);
}



//滾輪事件
var onWheel = function(e) {
    if (isScrolling) return;
    if ($isInSubPage) return;

    //拿掉原本的滾輪事件
    e.preventDefault();

    //滾輪往上
    if (e.deltaY > 0)
        switchPage($pageChannel - 1);
    else
        switchPage($pageChannel + 1);

}

var hideBorder = function() {
    TweenMax.to("#sideBorder", 2, { autoAlpha: 0 });
    hideScrollIcon(1.6);
}

var showBorder = function() {
    TweenMax.to("#sideBorder", 2, { autoAlpha: 1, delay: 1.6 });
    TweenMax.delayedCall(1, showScrollIcon, [.6]);
}




var switchPage = function(_nextChannel, sideMenuDelay) {

    sideMenuDelay = sideMenuDelay || 1.6;

    if (_nextChannel >= pageArr.length || _nextChannel <= 0) return;
    if ($(pageArr[_nextChannel]).length == 0) return;

    TweenMax.killAll(false, false, true, false);


    var sh = document.documentElement.clientHeight,
        during = 3;

    isScrolling = true;


    //---Page moving---//
    var _nextPage = $(pageArr[_nextChannel]);
    var distant = _nextPage.offset().top;
    var containerX = $('.wrap-container').offset().top;



    TweenMax.to($('.wrap-container'), during, {
        delay: 0,
        top: containerX - distant,
        ease: Power4.easeInOut,
        onComplete: function() {


        }
    });

    TweenMax.delayedCall(2, function() {
        isScrolling = false;
        TweenMax.killChildTweensOf('.pagetitle');
    });

    TweenMax.lagSmoothing();

    //---Bg moving---//
    var _dy = ($('.bg-content').height() - 10 - sh) / (totalPage - 1);
    TweenMax.to($('.bg-content'), during + .3, { top: -_dy * (_nextChannel - 1), ease: Power4.easeInOut });

    //---BgStar moving---//
    var _dy2 = ($('.starBg').height() - sh) / (totalPage - 1);
    TweenMax.to($('.starBg'), during + .2, { delay: .06, top: -_dy2 * (_nextChannel - 1), ease: Power4.easeInOut });

    var _dy3 = ($('.starBg2').height() - sh) / (totalPage - 1);
    TweenMax.to($('.starBg2'), during + .2, { delay: .12, top: -_dy3 * (_nextChannel - 1), ease: Power4.easeInOut });

    //---BgStar motion---//

    PageMotion.onMotion(_nextChannel, during - .3);

    //---SideMenu---//
    TweenMax.delayedCall(sideMenuDelay, function() {
        $('.sideMenu_item').eq((_nextChannel - 1)).addClass('sideMenu-on').siblings('.sideMenu-on').removeClass('sideMenu-on');

    });





    $('.currentPage').removeClass('currentPage');
    _nextPage.addClass('currentPage');

    $pageChannel = _nextChannel;
    TweenMax.delayedCall(.8, checkEnd);
}

var checkEnd = function() {

    if ($('.p5').hasClass('currentPage')) {
        hideScrollIcon();
    } else {
        showScrollIcon();
    }

}
