$(document).ready(function() {

    PageMotion.loadingMotion();

    $('#mainContainer').waitForImages(function() {

        onLoaded();

        PageMotion.killLoading(function() {
            PageMotion.onMotion(0, .6);
        });

    }, function(loaded, all) {
        PageMotion.loadingUpdate((loaded / all) * 100);
    });

    function onLoaded() {
        TweenMax.set('#mainContainer', { display: 'block' });
        scrollFn();
        initNav();
        initSubShowcasePage();
        $(window).resize(stageResize);
        stageResize();


    }
});




var initNav = function() {


    //Nav//
    if (chungTool.isMoblie()) {
        $('.headerContainer').on("click", function() {
            $('#header .headerContainer').toggleClass('showNav');
            $('#header .borderContainer').toggleClass('showNav');
        });


    } else {
        $('.headerContainer').on("mouseenter", showNav);
        $('.headerContainer').on("mouseleave", hideNav);

    }



}

var stopStar = function() {
    $('.starBg').addClass('stopPlay');
}

var playStar = function() {
    $('.starBg').removeClass('stopPlay');
}

var showNav = function(during) {
    $('#header .headerContainer').addClass('showNav');
    $('#header .borderContainer').addClass('showNav');
}

var hideNav = function(during) {
    $('#header .headerContainer').removeClass('showNav');
    $('#header .borderContainer').removeClass('showNav');
}

var hideScrollIcon = function(during) {
    if (during != 0) during = .7;
    var sw = document.documentElement.clientWidth;

    TweenMax.to($('.scrollDwonIcon'), during, { bottom: -54, ease: Power2.easeIn });
    TweenMax.to($('.b-Bottom-left'), during - .10, { bottom: $border_distant, left: $border_distant + 2, width: sw / 2 - $border_distant - 2, ease: Power2.easeIn });
    TweenMax.to($('.b-Bottom-right'), during - .10, { bottom: $border_distant, right: $border_distant + 2, width: sw / 2 - $border_distant - 2, ease: Power2.easeIn });
    $('.scrollDwonIcon').addClass('hide');
}

var showScrollIcon = function(during) {
    if (during != 0) during = .8;
    $_d = (during == 0) ? 0 : .08;
    var sw = document.documentElement.clientWidth;

    TweenMax.to($('.scrollDwonIcon'), during, { bottom: 0, ease: Power2.easeOut });
    TweenMax.to($('.b-Bottom-left'), during - .10, { bottom: $border_distant, left: $border_distant + 2, delay: $_d, width: sw / 2 - ($border_distant + 39), ease: Power2.easeOut });
    TweenMax.to($('.b-Bottom-right'), during - .10, { bottom: $border_distant, right: $border_distant + 2, delay: $_d, width: sw / 2 - ($border_distant + 39), ease: Power2.easeOut });
    $('.scrollDwonIcon').removeClass('hide');

}
