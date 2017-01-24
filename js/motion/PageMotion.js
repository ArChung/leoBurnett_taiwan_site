var PageMotion = PageMotion || {};

(function() {




    var onMotion = function(page, delay) {
        //var page=1;
        if ($pageChannel == page) return;
        delay = delay || 0;

        // console.log('onMotion'+page);
        switch (page) {


            case 0: //intro
                //TweenMax.set('#indexTitle',{autoAlpha:0});
                TweenMax.delayedCall(delay, intro_motion);
                break;
            case 1:
                TweenMax.set('#indexTitle', { autoAlpha: 0 });
                TweenMax.delayedCall(delay, index_motion);
                break;
            case 2:
                TweenMax.set('#clientTitle', { autoAlpha: 0 });
                TweenMax.delayedCall(delay, client_motion);
                break;
            case 3:
                TweenMax.set('#showCaseTitle', { autoAlpha: 0 });
                TweenMax.delayedCall(delay, showCase_motion);
                break;
            case 4:
                TweenMax.set('#humanKindTitle', { autoAlpha: 0 });
                TweenMax.delayedCall(delay, humanKind_motion);
                break;
            case 5:
                TweenMax.set('#contactUsTitle', { autoAlpha: 0 });
                TweenMax.delayedCall(delay, contactUs_motion);
                break;

            case 6: //openClient
                openClientSubPage();
                break;

            case 7: //clozClient
                clozClientSubPage();
                break;

            case 8: //openShowCase
                openShowCaseSubPage();
                break;

            case 9: //clozShowCase
                clozShowCaseSubPage();
                break;

            case 10: //openHumanKind
                openHumanKindSubPage();
                break;

            case 11: //clozHumanKind
                clozHumanKindSubPage();
                break;
        }


        function intro_motion() {
            //console.log('playINtro');
            if (!$skipIntro) {
                //console.log('playINtro');
                var _sideMenu = $('.sideMenu'),
                    _loaderPage = $('.loadingPage'),
                    _borderContainer = $('.borderContainer'),
                    _introBlack = $('#introBlack'),
                    _header = $('.header');
                //_mainWrap=$('#mainWrap');



                var tl = new TimelineMax();

                tl
                    .call(hideScrollIcon, [0])
                    .set('#indexTitle', { autoAlpha: 0 })
                    .set([_header, _sideMenu, _borderContainer], { autoAlpha: 0 })
                    // .set([_header,_loaderPage,_sideMenu, _borderContainer],{autoAlpha:0})
                    //.call(index_motion,"+=.6");
                    .call(function() {
                        TweenMax.delayedCall(2.1, index_motion);
                    })
                    .to(_loaderPage.find('.blackBg'), 3, { autoAlpha: 0 })
                    .to(_loaderPage.find('.loadingLogo'), 1.6, { autoAlpha: 0, scale: 0.95, ease: Power2.easeIn }, 0.8)
                    .set(_loaderPage, { autoAlpha: 0 })
                    .to(_header, 2, { autoAlpha: 1 }, '-=2', 'fadeIn')
                    .to(_borderContainer, 2, { autoAlpha: 1 }, 'fadeIn-=1')
                    .to(_sideMenu, 2, { autoAlpha: 1 }, 'fadeIn-=.6')
                    .call(showScrollIcon, [10], this, '-=1');

            } else {
                TweenMax.set($('.loadingPage'), { autoAlpha: 0 });
                TweenMax.set($('#introBlack'), { autoAlpha: 0 });
            }
        }




        function index_motion() {

            TweenMax.set('#indexTitle', { autoAlpha: 1 });
            var target_name = '#index_t1';

            var target = $(target_name),
                targetkids = $(target_name + '>.motionText'),
                tl1 = new TimelineMax();

            TweenLite.set(target, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(targetkids, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set('#index_t2', { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set('#index_b1', { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            if (chungTool.isMoblie()) {
                // console.log('ism');
                tl1
                    .from('#index_t2', 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, 0)
                    .from('#index_b1', 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, 0.2);

            } else {
                tl1
                    .staggerFrom(targetkids, 3.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(0px) rotateY(90deg) ', ease: Power3.easeOut }, .03)
                    .from(target, 12, { transform: 'perspective(800px) translateZ(200px)', ease: Power4.easeOut }, 0)
                    .from('#index_t2', 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, 2.1)
                    .from('#index_b1', 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, 2.3);

            }

        }





        function client_motion() {
            pagetitle_motion('#clientTitle');
        }


        function showCase_motion() {
            pagetitle_motion('#showCaseTitle');
        }

        function humanKind_motion() {
            pagetitle_motion('#humanKindTitle');
        }


        function contactUs_motion() {

            TweenMax.set('#contactUsTitle', { autoAlpha: 1 });

            var target_name = '#contactUs_t1';

            var target = $(target_name),
                targetkids = $(target_name + '>.motionText'),
                t2 = $('#contactUs_t2'),
                t3 = $('#contactUs_t3'),
                pen = $('#LBpen'),
                t4 = $('#contactUs .mainPageTxt'),
                t5 = $('#contactUs .pageBtn'),
                //btn=$('#showCase_b1'),
                tl1 = new TimelineMax();

            //TweenLite.set(target, {autoAlpha:1,transform:'perspective(800px) translateZ(0px) rotateY(0deg) '});
            TweenLite.set(targetkids, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t2, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t3, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(pen, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t4, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t5, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            //TweenLite.set(btn, {autoAlpha:1,transform:'perspective(800px) translateZ(0px) rotateY(0deg) '});

            tl1
                .staggerFrom(targetkids, 1.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(0px) rotateY(90deg) ', ease: Power3.easeOut }, .06)
                .from(t2, 2.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(-30px)', ease: Power4.easeOut }, 0)
                .from(t3, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, 1)
                .from(pen, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, 1.2)
                .staggerFrom(t4, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, .1, 1.4)
                .from(t5, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, 1.6);
            //.from(btn,3,{autoAlpha:0,transform:'perspective(800px) translateY(20px)',ease:Power4.easeOut},1.2);

        }


        function openClientSubPage() {
            TweenMax.killChildTweensOf('.client-innerPage');

            TweenMax.set('#client-subPage', { visibility: 'visible', left: '105%' });
            TweenMax.set('.client-innerPage .subItem', { transform: 'perspective(50em) rotateY(0deg) translateX(0em) translateZ(0em)', autoAlpha: 1 });
            TweenMax.set('#clinet-innerPageWrap', { transform: 'perspective(50em)  translateZ(0em)' });
            // TweenMax.set('#client-menu',{top:-115});

            // TweenMax.set(".client-menuBtn > .onBtn",{autoAlpha:1});
            // TweenMax.set(".client-menuBtn > .offBtn",{autoAlpha:0});

            var tl = new TimelineLite();


            tl
                .to('.wrap-container', 2.6, { left: '-105%', ease: Power4.easeInOut })
                .to('#client-subPage', 2.6, { left: 0, ease: Power4.easeInOut }, 0)
                // .to('.navBlackBg',2.6,{top:0,ease:Power4.easeInOut},0)
                // .to('#client-menu',2.6,{top:0,ease:Power4.easeInOut},0.35)
                .to('.sideMenu', .6, { autoAlpha: 0 }, 0)
                .call(showSubBackBtn, [], this, 2.4)
                .staggerFrom('.client-innerPage .subItem', 2.6, { delay: .3, transform: 'rotateY(90deg) translateX(50em)', autoAlpha: 0, ease: Power4.easeOut }, .03, .5)

        }

        function clozClientSubPage() {
            TweenMax.killChildTweensOf('.client-innerPage');
            TweenMax.set('.client-innerPage', { transform: 'perspective(50em) translateZ(0em)' });
            TweenMax.set('#clinet-innerPageWrap', { transform: 'perspective(50em)  translateZ(0em)' });

            var tl = new TimelineLite();

            tl
                .to('#backBtn', 1, { right: -66, ease: Power4.easeIn })
                // .to('.navBlackBg',2.6,{top:-55,ease:Power4.easeInOut},.3)
                .to('.sideMenu', .6, { autoAlpha: 1 }, .6)
                .to('#clinet-innerPageWrap', 2.6, { transform: 'translateZ(-1.5em)', ease: Power1.easeOut }, 0)
                .to('.client-subPage', 2.6, { left: '105%', ease: Power4.easeInOut }, 0)
                .to('.wrap-container', 2.6, { left: '0', ease: Power4.easeInOut }, 0)

        }

        function openShowCaseSubPage() {
            TweenMax.killChildTweensOf('.showCase-subPage');

            TweenMax.set('.showCase-subPage', { autoAlpha: 1, right: '105%' })
            TweenMax.set('.showCase-subPage> .showCase-innerPage> .subItemWrap> .subItem', { transform: 'perspective(50em) rotateY(0deg) translateX(0em) translateZ(0em)', autoAlpha: 1 });


            var tl = new TimelineLite();
            tl
                .to('.wrap-container', 2.6, { left: '105%', ease: Power4.easeInOut })
                .to('.showCase-subPage', 2.6, { right: 0, ease: Power4.easeInOut }, 0)
                // .to('.navBlackBg',2.6,{top:0,ease:Power4.easeInOut},0)
                .to('.sideMenu', .6, { autoAlpha: 0 }, 0)
                .call(showSubBackBtn, [], this, 2.4)
                .staggerFrom('.showCase-subPage> .showCase-innerPage> .subItemWrap> .subItem', 2.6, { delay: .3, transform: 'perspective(50em) rotateY(-90deg) translateX(-50em)', autoAlpha: 1, ease: Power4.easeOut }, .035, .5);


        }

        function clozShowCaseSubPage() {


            TweenMax.killChildTweensOf('.showCase-subPage');

            TweenMax.set('.showCase-subPage', { transform: 'perspective(50em) translateZ(0em)' });


            var tl = new TimelineLite();

            tl
                .to('#backBtn', 1, { right: -66, ease: Power4.easeIn })
                .to('.wrap-container', 2.6, { left: '0', ease: Power4.easeInOut }, 0)
                .to('.showCase-subPage', 2.6, { right: '105%', ease: Power4.easeInOut }, 0)
                .to('.showCase-subPage', 2.6, { transform: 'translateZ(-5em)', ease: Power1.easeOut }, 0)
                //.to('.showCase-subPage',0,{autoAlpha:0,transform:'perspective(0em)  translateZ(0em)'})
                // .to('.navBlackBg',2.6,{top:-55,ease:Power4.easeInOut},0)
                .to('.sideMenu', .6, { autoAlpha: 1 }, .6);
        }

        function openHumanKindSubPage() {
            TweenMax.killChildTweensOf('#humanKind-subPage');

            TweenMax.set('#humanKind-subPage', { autoAlpha: 1, right: '105%' })
            TweenMax.set('#humanKind-innerPage', { transform: 'perspective(50em) rotateY(0deg) translateX(0em) translateZ(0em)', autoAlpha: 1 });


            var tl = new TimelineLite();
            tl
                .to('.wrap-container', 2.6, { left: '-105%', ease: Power4.easeInOut })
                .to('#humanKind-subPage', 2.6, { left: 0, ease: Power4.easeInOut }, 0)
                // .to('.navBlackBg',2.6,{top:0,ease:Power4.easeInOut},0)
                .to('.sideMenu', .6, { autoAlpha: 0 }, 0)
                .call(showSubBackBtn, [], this, 2.4)
                .from('#humanKind-innerPage', 2.6, { delay: 0, transform: 'translateZ(-50em)', autoAlpha: 0, ease: Power4.easeOut }, .5);

        }


        function clozHumanKindSubPage() {
            TweenMax.killChildTweensOf('#humanKind-subPage');

            TweenMax.set('#humanKind-innerPage', { transform: 'perspective(50em) rotateY(0deg) translateX(0em) translateZ(0em)', autoAlpha: 1 });


            var tl = new TimelineLite();

            tl
                .to('#backBtn', 1, { right: -66, ease: Power4.easeIn })
                .to('.wrap-container', 2.6, { left: '0', ease: Power4.easeInOut }, 0)
                .to('#humanKind-subPage', 2.6, { left: '105%', ease: Power4.easeInOut }, 0)
                .to('#humanKind-innerPage', 1.4, { transform: 'perspective(50em) translateZ(-8em)', ease: Power2.easeInOut }, 0)
                // .to('.navBlackBg',2.6,{top:-55,ease:Power4.easeInOut},0)
                .to('.sideMenu', .6, { autoAlpha: 1 }, .6);



        }

        function pagetitle_motion(target_name) {

            //var target = $(target_name),
            targetkids = $(target_name + ' > .en_title > .motionText'),
                t2 = $(target_name + '>.chi_title'),
                t3 = $(target_name + ' .mainPageTxt')
            btn = $(target_name + '>.pageBtn'),
                tl1 = new TimelineMax();

            TweenMax.set(target_name, { autoAlpha: 1 });
            TweenLite.set(targetkids, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t2, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t3, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(btn, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });

            if (chungTool.isMoblie()) {
                tl1
                    // .staggerFrom(targetkids, 1.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(0px) rotateY(90deg) ', ease: Power3.easeOut }, .06)
                    .from(t2, 2.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(-30px)', ease: Power4.easeOut }, 0)
                    .staggerFrom(t3, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, .13, .8)
                    .from(btn, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, "-=2.8");


            } else {
                tl1
                    .staggerFrom(targetkids, 1.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(0px) rotateY(90deg) ', ease: Power3.easeOut }, .06)
                    .from(t2, 2.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(-30px)', ease: Power4.easeOut }, 0)
                    .staggerFrom(t3, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, .13, .8)
                    .from(btn, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, "-=2.8");


            }

        }

        function pagetitle_motion2(target_name) {
            targetkids = $(target_name + ' > .en_title > .motionText'),
                t2 = $(target_name + '>.chi_title'),
                t3 = $(target_name + '> .mainPageTxt')
            btn = $(target_name + '>.pageBtn'),
                tl1 = new TimelineMax();

            TweenMax.set(target_name, { autoAlpha: 1 });
            TweenLite.set(targetkids, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t2, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(t3, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });
            TweenLite.set(btn, { autoAlpha: 1, transform: 'perspective(800px) translateZ(0px) rotateY(0deg) ' });


            tl1
                .staggerFrom(targetkids, 1.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(0px) rotateY(90deg) ', ease: Power3.easeOut }, .06)
                .from(t2, 2.6, { autoAlpha: 0, transform: 'perspective(800px) translateZ(-30px)', ease: Power4.easeOut }, 0)
                .staggerFrom(t3, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, .13, .8)
                .from(btn, 3, { autoAlpha: 0, transform: 'perspective(800px) translateY(20px)', ease: Power4.easeOut }, "-=2.8");

        }

        function showSubBackBtn() {
            TweenMax.set('#backBtn', { right: -66 });
            TweenMax.to('#backBtn', 1, { right: 0, ease: Power4.easeOut });
        }

        function hideSubBackBtn() {
            TweenMax.to('#backBtn', 1, { right: -66, ease: Power4.easeIn });
        }

    }




    var loadingMotion = function() {

        // var mask=$('#preloader > .loadingMask'),
        // logo=$('#preloader > .loadingLogo'),
        // tl=new TimelineMax({repeat:-1});



        // tl
        // .to(mask,2.6,{marginLeft:140,ease:Power0.easeOut})
        // .to(mask,0,{marginLeft:-850,ease:Power0.easeOut},'+=1.6')
        // .to(mask,2.6,{marginLeft:-355,ease:Power0.easeOut},'+=.6');



    }


    var loadingUpdate = function($present) {

        if ($present <= 1) $present = $present * 100;

        TweenMax.to('#loadingBar', .6, { width: $present + '%' });
    }

    var killLoading = function(_cf) {
        var mask = $('#preloader > .loadingMask'),
            logo = $('#preloader > .loadingLogo');
        if (!$skipIntro) {
            // TweenMax.to('#loadingBar',.6,{width:'100%'});
            // TweenMax.to(logo,2,{autoAlpha:0,scale:.95,ease:Power4.easeIn,onComplete:function(){

            // 	TweenMax.killChildTweensOf('.loadingPage');
            // 	if(_cf)_cf();

            // }});

            if (_cf) _cf();
        } else {
            if (_cf) _cf();
        }
    }


    PageMotion.onMotion = onMotion;
    PageMotion.killLoading = killLoading;
    PageMotion.loadingUpdate = loadingUpdate;
    PageMotion.loadingMotion = loadingMotion;

})();
