var tempSub_w;
var tempSub_h;
var tempSub_t;
var tempSub_l;

var initSubShowcasePage = function() {


    initResize_showCase();
    // initMotion_showCase();

    initSubItemClick_showCase();

    // initVideoPage();

    // document.getElementById('clozBtn_forShowCase').onclick = onBackBtn;
    $('.videoPage .clozBtn').on('click', clozVideoPop);
}

var clozVideoPop = function(e) {

    TweenMax.killAll(false, false, true, false);
    var vp = $('#videoPage');
    var vb = $('#vidoeBox');
    vb.find('iframe').attr('src', '')
    vb.empty();
    simpleHide(vp, 0.4);
    clozBlack();
   

    $('#header .headerContainer').removeClass('hideMenuBtn')
}

function openVideo(bBg, vid) {
    var vp = $('#videoPage');
    var vb = $('#vidoeBox');


    vp.css("background-image", "url(" + bBg + ")");
    simpleShow(vp, 0.8);
    chungTool.replayCssAni(vb, 'show');
    vp.find('.clozBtn').removeClass('show')
    TweenMax.delayedCall(0.6, function() {
        chungTool.addYouTube(vb, vid);
        vp.find('.clozBtn').addClass('show');

    });

    
}



var clozBlack = function() {

    var blackClip = $('#blackClip');
    var sh = document.documentElement.clientHeight;
    var sw = document.documentElement.clientWidth;




    TweenMax.to(blackClip, 0, { autoAlpha: 1, width: sw, height: sh, top: 0, left: 0 });
    TweenMax.to(blackClip, 0.9, { autoAlpha: 0.5, width: tempSub_w, height: tempSub_h, top: tempSub_t, left: tempSub_l, ease: Power3.easeInOut });
    TweenMax.to(blackClip, .3, { autoAlpha: 0, delay: .9 });
    TweenMax.to('#showCaseWall', 1, {
        transform: 'perspective(50em)  translateZ(0em)',
        ease: Power3.easeInOut,
        onComplete: function() {
            addScroller_showCase();
        }
    });
    TweenMax.to('#backBtn', 1, { right: 0, delay: .3, ease: Power4.easeOut });


}

var openBlack = function(thisSub, sideBorderAlpha, fn) {

    sideBorderAlpha = sideBorderAlpha || 0;

    var blackClip = $('#blackClip');
    var sh = document.documentElement.clientHeight;
    var sw = document.documentElement.clientWidth;

    tempSub_w = thisSub.width();
    tempSub_h = thisSub.height();
    tempSub_t = thisSub.offset().top;
    tempSub_l = thisSub.offset().left;


    $MouseMoveScroll.removeScroller('showCaseWall');
    TweenMax.to('#backBtn', .6, { right: -66, ease: Power4.easeIn });
    TweenMax.to('#showCaseWall', 1, { transform: 'perspective(50em)  translateZ(-5em)', ease: Power3.easeInOut });
    TweenMax.to(blackClip, 0, { autoAlpha: 0.4, width: tempSub_w, height: tempSub_h, top: tempSub_t, left: tempSub_l });
    TweenMax.to(blackClip, .9, { autoAlpha: 1, width: sw, height: sh, top: 0, left: 0, ease: Power3.easeInOut, onComplete: fn });



}

var initSubItemClick_showCase = function() {
    var clickCaseItem = function(e) {
        var t = $(this);


        if (t.hasClass('webBtn')) {
            window.open(t.attr('data-url'), '_blank')
        }

        if (t.hasClass('videoBtn')) {
            $('#header .headerContainer').addClass('hideMenuBtn')
            openBlack(t, 0, function() {
                openVideo(t.attr('data-BigBg'), t.attr('data-uTubeID'));
            });
        }

        // if(type=='poster'){
        //  TweenMax.delayedCall(.9,loadPic,[(rel)+'.jpg']);
        //  TweenMax.to('#posterPage',.6,{delay:.9,autoAlpha:1});
        //  TweenMax.delayedCall(.2,showClozBtn);

        //  TweenMax.to('#backBtn',.6,{right:-66,ease:Power4.easeIn});
        //  TweenMax.to('#menuBtn',.6,{autoAlpha:0});

        //  $MouseMoveScroll.removeScroller('showCaseWall');
        //  openBlack(thisSub,1);
        //  $isVideo=false;
        // }
    }

    var sub = $('.showCase-innerPage >.subItemWrap>.subItem')
    sub.click(clickCaseItem);

}






var loadPic = function(posterName) {

    var target = $sourcePath + 'showCase/' + posterName;
    //var loader=$('#preloader_poster');
    //var ani=new chung.MouseMoveScroll.ChangeMarginTop_withGap(200);

    //TweenMax.to(loader,0,{autoAlpha:1});
    TweenMax.to($('#posterContainer'), 0, { autoAlpha: 0, marginTop: 50 });

    $('#poster').attr('src', target);

    TweenMax.set('#posterloaderBar', { width: 0, autoAlpha: 1 });
    TweenMax.to('#posterloaderBar', 6, { width: '95%', ease: Power0.easeOut });
    $('#posterContainer').waitForImages(function() {
        // All descendant images have loaded, now slide up.
        TweenMax.to('#posterloaderBar', .6, {
            width: '100%',
            ease: Power4.easeOut,
            onComplete: function() {

                TweenMax.to('#posterloaderBar', .6, { autoAlpha: 0 });

                TweenMax.to($('#posterContainer'), 1, {
                    delay: .3,
                    autoAlpha: 1,
                    marginTop: 0,
                    ease: Power3.easeOut,
                    onComplete: function() {
                        var ani = new chung.MouseMoveScroll.ChangeMarginTop_withGap(200);
                        $MouseMoveScroll.addScroller('posterContainer', ani);
                    }
                });

            }
        });


        //TweenMax.to(loader,.3,{autoAlpha:0});

    });
}

var clozPic = function() {

    $MouseMoveScroll.removeScroller('posterContainer');
    //clearInterval(Interval);
}
var addScroller_showCase = function() {
    var ani = new chung.MouseMoveScroll.ChangeMarginTop_withGap(200);

    $MouseMoveScroll.addScroller('showCaseWall', ani);
}

var removeScroller_showCase = function() {


    $MouseMoveScroll.removeScroller('showCaseWall');

    // console.log('removeScroller_showCase');
}

var initResize_showCase = function() {
    var ani = new chung.ResizeManager.imgCoverMomDiv('center');

    $ResizeManager.addResizeObj($('.subItemWrap .picContainer'), ani);
    $ResizeManager.resize();


}
