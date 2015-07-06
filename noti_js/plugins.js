// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//flester
;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:0,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));

//bxslider
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);

/*
 * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
 */
(function( $, window, document, Math, undefined ) {

    /*
     * Feature tests and global variables
     */
    var div = document.createElement("div"),
        divStyle = div.style,
        suffix = "Transform",
        testProperties = [
            "O" + suffix,
            "ms" + suffix,
            "Webkit" + suffix,
            "Moz" + suffix
        ],
        i = testProperties.length,
        supportProperty,
        supportMatrixFilter,
        supportFloat32Array = "Float32Array" in window,
        propertyHook,
        propertyGet,
        rMatrix = /Matrix([^)]*)/,
        rAffine = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,
        _transform = "transform",
        _transformOrigin = "transformOrigin",
        _translate = "translate",
        _rotate = "rotate",
        _scale = "scale",
        _skew = "skew",
        _matrix = "matrix";

// test different vendor prefixes of these properties
    while ( i-- ) {
        if ( testProperties[i] in divStyle ) {
            $.support[_transform] = supportProperty = testProperties[i];
            $.support[_transformOrigin] = supportProperty + "Origin";
            continue;
        }
    }
// IE678 alternative
    if ( !supportProperty ) {
        $.support.matrixFilter = supportMatrixFilter = divStyle.filter === "";
    }

// px isn't the default unit of these properties
    $.cssNumber[_transform] = $.cssNumber[_transformOrigin] = true;

    /*
     * fn.css() hooks
     */
    if ( supportProperty && supportProperty != _transform ) {
        // Modern browsers can use jQuery.cssProps as a basic hook
        $.cssProps[_transform] = supportProperty;
        $.cssProps[_transformOrigin] = supportProperty + "Origin";

        // Firefox needs a complete hook because it stuffs matrix with "px"
        if ( supportProperty == "Moz" + suffix ) {
            propertyHook = {
                get: function( elem, computed ) {
                    return (computed ?
                        // remove "px" from the computed matrix
                        $.css( elem, supportProperty ).split("px").join(""):
                        elem.style[supportProperty]
                    );
                },
                set: function( elem, value ) {
                    // add "px" to matrices
                    elem.style[supportProperty] = /matrix\([^)p]*\)/.test(value) ?
                        value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, _matrix+"$1$2px,$3px"):
                        value;
                }
            };
            /* Fix two jQuery bugs still present in 1.5.1
             * - rupper is incompatible with IE9, see http://jqbug.com/8346
             * - jQuery.css is not really jQuery.cssProps aware, see http://jqbug.com/8402
             */
        } else if ( /^1\.[0-5](?:\.|$)/.test($.fn.jquery) ) {
            propertyHook = {
                get: function( elem, computed ) {
                    return (computed ?
                        $.css( elem, supportProperty.replace(/^ms/, "Ms") ):
                        elem.style[supportProperty]
                    );
                }
            };
        }
        /* TODO: leverage hardware acceleration of 3d transform in Webkit only
         else if ( supportProperty == "Webkit" + suffix && support3dTransform ) {
         propertyHook = {
         set: function( elem, value ) {
         elem.style[supportProperty] =
         value.replace();
         }
         }
         }*/

    } else if ( supportMatrixFilter ) {
        propertyHook = {
            get: function( elem, computed, asArray ) {
                var elemStyle = ( computed && elem.currentStyle ? elem.currentStyle : elem.style ),
                    matrix, data;

                if ( elemStyle && rMatrix.test( elemStyle.filter ) ) {
                    matrix = RegExp.$1.split(",");
                    matrix = [
                        matrix[0].split("=")[1],
                        matrix[2].split("=")[1],
                        matrix[1].split("=")[1],
                        matrix[3].split("=")[1]
                    ];
                } else {
                    matrix = [1,0,0,1];
                }

                if ( ! $.cssHooks[_transformOrigin] ) {
                    matrix[4] = elemStyle ? parseInt(elemStyle.left, 10) || 0 : 0;
                    matrix[5] = elemStyle ? parseInt(elemStyle.top, 10) || 0 : 0;

                } else {
                    data = $._data( elem, "transformTranslate", undefined );
                    matrix[4] = data ? data[0] : 0;
                    matrix[5] = data ? data[1] : 0;
                }

                return asArray ? matrix : _matrix+"(" + matrix + ")";
            },
            set: function( elem, value, animate ) {
                var elemStyle = elem.style,
                    currentStyle,
                    Matrix,
                    filter,
                    centerOrigin;

                if ( !animate ) {
                    elemStyle.zoom = 1;
                }

                value = matrix(value);

                // rotate, scale and skew
                Matrix = [
                    "Matrix("+
                    "M11="+value[0],
                    "M12="+value[2],
                    "M21="+value[1],
                    "M22="+value[3],
                    "SizingMethod='auto expand'"
                ].join();
                filter = ( currentStyle = elem.currentStyle ) && currentStyle.filter || elemStyle.filter || "";

                elemStyle.filter = rMatrix.test(filter) ?
                    filter.replace(rMatrix, Matrix) :
                filter + " progid:DXImageTransform.Microsoft." + Matrix + ")";

                if ( ! $.cssHooks[_transformOrigin] ) {

                    // center the transform origin, from pbakaus's Transformie http://github.com/pbakaus/transformie
                    if ( (centerOrigin = $.transform.centerOrigin) ) {
                        elemStyle[centerOrigin == "margin" ? "marginLeft" : "left"] = -(elem.offsetWidth/2) + (elem.clientWidth/2) + "px";
                        elemStyle[centerOrigin == "margin" ? "marginTop" : "top"] = -(elem.offsetHeight/2) + (elem.clientHeight/2) + "px";
                    }

                    // translate
                    // We assume that the elements are absolute positionned inside a relative positionned wrapper
                    elemStyle.left = value[4] + "px";
                    elemStyle.top = value[5] + "px";

                } else {
                    $.cssHooks[_transformOrigin].set( elem, value );
                }
            }
        };
    }
// populate jQuery.cssHooks with the appropriate hook if necessary
    if ( propertyHook ) {
        $.cssHooks[_transform] = propertyHook;
    }
// we need a unique setter for the animation logic
    propertyGet = propertyHook && propertyHook.get || $.css;

    /*
     * fn.animate() hooks
     */
    $.fx.step.transform = function( fx ) {
        var elem = fx.elem,
            start = fx.start,
            end = fx.end,
            pos = fx.pos,
            transform = "",
            precision = 1E5,
            i, startVal, endVal, unit;

        // fx.end and fx.start need to be converted to interpolation lists
        if ( !start || typeof start === "string" ) {

            // the following block can be commented out with jQuery 1.5.1+, see #7912
            if ( !start ) {
                start = propertyGet( elem, supportProperty );
            }

            // force layout only once per animation
            if ( supportMatrixFilter ) {
                elem.style.zoom = 1;
            }

            // replace "+=" in relative animations (-= is meaningless with transforms)
            end = end.split("+=").join(start);

            // parse both transform to generate interpolation list of same length
            $.extend( fx, interpolationList( start, end ) );
            start = fx.start;
            end = fx.end;
        }

        i = start.length;

        // interpolate functions of the list one by one
        while ( i-- ) {
            startVal = start[i];
            endVal = end[i];
            unit = +false;

            switch ( startVal[0] ) {

                case _translate:
                    unit = "px";
                case _scale:
                    unit || ( unit = "");

                    transform = startVal[0] + "(" +
                    Math.round( (startVal[1][0] + (endVal[1][0] - startVal[1][0]) * pos) * precision ) / precision + unit +","+
                    Math.round( (startVal[1][1] + (endVal[1][1] - startVal[1][1]) * pos) * precision ) / precision + unit + ")"+
                    transform;
                    break;

                case _skew + "X":
                case _skew + "Y":
                case _rotate:
                    transform = startVal[0] + "(" +
                    Math.round( (startVal[1] + (endVal[1] - startVal[1]) * pos) * precision ) / precision +"rad)"+
                    transform;
                    break;
            }
        }

        fx.origin && ( transform = fx.origin + transform );

        propertyHook && propertyHook.set ?
            propertyHook.set( elem, transform, +true ):
            elem.style[supportProperty] = transform;
    };

    /*
     * Utility functions
     */

// turns a transform string into its "matrix(A,B,C,D,X,Y)" form (as an array, though)
    function matrix( transform ) {
        transform = transform.split(")");
        var
            trim = $.trim
            , i = -1
        // last element of the array is an empty string, get rid of it
            , l = transform.length -1
            , split, prop, val
            , prev = supportFloat32Array ? new Float32Array(6) : []
            , curr = supportFloat32Array ? new Float32Array(6) : []
            , rslt = supportFloat32Array ? new Float32Array(6) : [1,0,0,1,0,0]
            ;

        prev[0] = prev[3] = rslt[0] = rslt[3] = 1;
        prev[1] = prev[2] = prev[4] = prev[5] = 0;

        // Loop through the transform properties, parse and multiply them
        while ( ++i < l ) {
            split = transform[i].split("(");
            prop = trim(split[0]);
            val = split[1];
            curr[0] = curr[3] = 1;
            curr[1] = curr[2] = curr[4] = curr[5] = 0;

            switch (prop) {
                case _translate+"X":
                    curr[4] = parseInt(val, 10);
                    break;

                case _translate+"Y":
                    curr[5] = parseInt(val, 10);
                    break;

                case _translate:
                    val = val.split(",");
                    curr[4] = parseInt(val[0], 10);
                    curr[5] = parseInt(val[1] || 0, 10);
                    break;

                case _rotate:
                    val = toRadian(val);
                    curr[0] = Math.cos(val);
                    curr[1] = Math.sin(val);
                    curr[2] = -Math.sin(val);
                    curr[3] = Math.cos(val);
                    break;

                case _scale+"X":
                    curr[0] = +val;
                    break;

                case _scale+"Y":
                    curr[3] = val;
                    break;

                case _scale:
                    val = val.split(",");
                    curr[0] = val[0];
                    curr[3] = val.length>1 ? val[1] : val[0];
                    break;

                case _skew+"X":
                    curr[2] = Math.tan(toRadian(val));
                    break;

                case _skew+"Y":
                    curr[1] = Math.tan(toRadian(val));
                    break;

                case _matrix:
                    val = val.split(",");
                    curr[0] = val[0];
                    curr[1] = val[1];
                    curr[2] = val[2];
                    curr[3] = val[3];
                    curr[4] = parseInt(val[4], 10);
                    curr[5] = parseInt(val[5], 10);
                    break;
            }

            // Matrix product (array in column-major order)
            rslt[0] = prev[0] * curr[0] + prev[2] * curr[1];
            rslt[1] = prev[1] * curr[0] + prev[3] * curr[1];
            rslt[2] = prev[0] * curr[2] + prev[2] * curr[3];
            rslt[3] = prev[1] * curr[2] + prev[3] * curr[3];
            rslt[4] = prev[0] * curr[4] + prev[2] * curr[5] + prev[4];
            rslt[5] = prev[1] * curr[4] + prev[3] * curr[5] + prev[5];

            prev = [rslt[0],rslt[1],rslt[2],rslt[3],rslt[4],rslt[5]];
        }
        return rslt;
    }

// turns a matrix into its rotate, scale and skew components
// algorithm from http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp
    function unmatrix(matrix) {
        var
            scaleX
            , scaleY
            , skew
            , A = matrix[0]
            , B = matrix[1]
            , C = matrix[2]
            , D = matrix[3]
            ;

        // Make sure matrix is not singular
        if ( A * D - B * C ) {
            // step (3)
            scaleX = Math.sqrt( A * A + B * B );
            A /= scaleX;
            B /= scaleX;
            // step (4)
            skew = A * C + B * D;
            C -= A * skew;
            D -= B * skew;
            // step (5)
            scaleY = Math.sqrt( C * C + D * D );
            C /= scaleY;
            D /= scaleY;
            skew /= scaleY;
            // step (6)
            if ( A * D < B * C ) {
                A = -A;
                B = -B;
                skew = -skew;
                scaleX = -scaleX;
            }

            // matrix is singular and cannot be interpolated
        } else {
            // In this case the elem shouldn't be rendered, hence scale == 0
            scaleX = scaleY = skew = 0;
        }

        // The recomposition order is very important
        // see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
        return [
            [_translate, [+matrix[4], +matrix[5]]],
            [_rotate, Math.atan2(B, A)],
            [_skew + "X", Math.atan(skew)],
            [_scale, [scaleX, scaleY]]
        ];
    }

// build the list of transform functions to interpolate
// use the algorithm described at http://dev.w3.org/csswg/css3-2d-transforms/#animation
    function interpolationList( start, end ) {
        var list = {
                start: [],
                end: []
            },
            i = -1, l,
            currStart, currEnd, currType;

        // get rid of affine transform matrix
        ( start == "none" || isAffine( start ) ) && ( start = "" );
        ( end == "none" || isAffine( end ) ) && ( end = "" );

        // if end starts with the current computed style, this is a relative animation
        // store computed style as the origin, remove it from start and end
        if ( start && end && !end.indexOf("matrix") && toArray( start ).join() == toArray( end.split(")")[0] ).join() ) {
            list.origin = start;
            start = "";
            end = end.slice( end.indexOf(")") +1 );
        }

        if ( !start && !end ) { return; }

        // start or end are affine, or list of transform functions are identical
        // => functions will be interpolated individually
        if ( !start || !end || functionList(start) == functionList(end) ) {

            start && ( start = start.split(")") ) && ( l = start.length );
            end && ( end = end.split(")") ) && ( l = end.length );

            while ( ++i < l-1 ) {
                start[i] && ( currStart = start[i].split("(") );
                end[i] && ( currEnd = end[i].split("(") );
                currType = $.trim( ( currStart || currEnd )[0] );

                append( list.start, parseFunction( currType, currStart ? currStart[1] : 0 ) );
                append( list.end, parseFunction( currType, currEnd ? currEnd[1] : 0 ) );
            }

            // otherwise, functions will be composed to a single matrix
        } else {
            list.start = unmatrix(matrix(start));
            list.end = unmatrix(matrix(end))
        }

        return list;
    }

    function parseFunction( type, value ) {
        var
        // default value is 1 for scale, 0 otherwise
            defaultValue = +(!type.indexOf(_scale)),
            scaleX,
        // remove X/Y from scaleX/Y & translateX/Y, not from skew
            cat = type.replace( /e[XY]/, "e" );

        switch ( type ) {
            case _translate+"Y":
            case _scale+"Y":

                value = [
                    defaultValue,
                    value ?
                        parseFloat( value ):
                        defaultValue
                ];
                break;

            case _translate+"X":
            case _translate:
            case _scale+"X":
                scaleX = 1;
            case _scale:

                value = value ?
                ( value = value.split(",") ) &&	[
                    parseFloat( value[0] ),
                    parseFloat( value.length>1 ? value[1] : type == _scale ? scaleX || value[0] : defaultValue+"" )
                ]:
                    [defaultValue, defaultValue];
                break;

            case _skew+"X":
            case _skew+"Y":
            case _rotate:
                value = value ? toRadian( value ) : 0;
                break;

            case _matrix:
                return unmatrix( value ? toArray(value) : [1,0,0,1,0,0] );
                break;
        }

        return [[ cat, value ]];
    }

    function isAffine( matrix ) {
        return rAffine.test(matrix);
    }

    function functionList( transform ) {
        return transform.replace(/(?:\([^)]*\))|\s/g, "");
    }

    function append( arr1, arr2, value ) {
        while ( value = arr2.shift() ) {
            arr1.push( value );
        }
    }

// converts an angle string in any unit to a radian Float
    function toRadian(value) {
        return ~value.indexOf("deg") ?
        parseInt(value,10) * (Math.PI * 2 / 360):
            ~value.indexOf("grad") ?
            parseInt(value,10) * (Math.PI/200):
                parseFloat(value);
    }

// Converts "matrix(A,B,C,D,X,Y)" to [A,B,C,D,X,Y]
    function toArray(matrix) {
        // remove the unit of X and Y for Firefox
        matrix = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(matrix);
        return [matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6]];
    }

    $.transform = {
        centerOrigin: "margin"
    };

})( jQuery, window, document, Math );
//flowplayer
(function(){function g(o){console.log("$f.fireEvent",[].slice.call(o))}function k(q){if(!q||typeof q!="object"){return q}var o=new q.constructor();for(var p in q){if(q.hasOwnProperty(p)){o[p]=k(q[p])}}return o}function m(t,q){if(!t){return}var o,p=0,r=t.length;if(r===undefined){for(o in t){if(q.call(t[o],o,t[o])===false){break}}}else{for(var s=t[0];p<r&&q.call(s,p,s)!==false;s=t[++p]){}}return t}function c(o){return document.getElementById(o)}function i(q,p,o){if(typeof p!="object"){return q}if(q&&p){m(p,function(r,s){if(!o||typeof s!="function"){q[r]=s}})}return q}function n(s){var q=s.indexOf(".");if(q!=-1){var p=s.slice(0,q)||"*";var o=s.slice(q+1,s.length);var r=[];m(document.getElementsByTagName(p),function(){if(this.className&&this.className.indexOf(o)!=-1){r.push(this)}});return r}}function f(o){o=o||window.event;if(o.preventDefault){o.stopPropagation();o.preventDefault()}else{o.returnValue=false;o.cancelBubble=true}return false}function j(q,o,p){q[o]=q[o]||[];q[o].push(p)}function e(){return"_"+(""+Math.random()).slice(2,10)}var h=function(t,r,s){var q=this,p={},u={};q.index=r;if(typeof t=="string"){t={url:t}}i(this,t,true);m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var v="on"+this;if(v.indexOf("*")!=-1){v=v.slice(0,v.length-1);var w="onBefore"+v.slice(2);q[w]=function(x){j(u,w,x);return q}}q[v]=function(x){j(u,v,x);return q};if(r==-1){if(q[w]){s[w]=q[w]}if(q[v]){s[v]=q[v]}}});i(this,{onCuepoint:function(x,w){if(arguments.length==1){p.embedded=[null,x];return q}if(typeof x=="number"){x=[x]}var v=e();p[v]=[x,w];if(s.isLoaded()){s._api().fp_addCuepoints(x,r,v)}return q},update:function(w){i(q,w);if(s.isLoaded()){s._api().fp_updateClip(w,r)}var v=s.getConfig();var x=(r==-1)?v.clip:v.playlist[r];i(x,w,true)},_fireEvent:function(v,y,w,A){if(v=="onLoad"){m(p,function(B,C){if(C[0]){s._api().fp_addCuepoints(C[0],r,B)}});return false}A=A||q;if(v=="onCuepoint"){var z=p[y];if(z){return z[1].call(s,A,w)}}if(y&&"onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v)!=-1){i(A,y);if(y.metaData){if(!A.duration){A.duration=y.metaData.duration}else{A.fullDuration=y.metaData.duration}}}var x=true;m(u[v],function(){x=this.call(s,A,y,w)});return x}});if(t.onCuepoint){var o=t.onCuepoint;q.onCuepoint.apply(q,typeof o=="function"?[o]:o);delete t.onCuepoint}m(t,function(v,w){if(typeof w=="function"){j(u,v,w);delete t[v]}});if(r==-1){s.onCuepoint=this.onCuepoint}};var l=function(p,r,q,t){var o=this,s={},u=false;if(t){i(s,t)}m(r,function(v,w){if(typeof w=="function"){s[v]=w;delete r[v]}});i(this,{animate:function(y,z,x){if(!y){return o}if(typeof z=="function"){x=z;z=500}if(typeof y=="string"){var w=y;y={};y[w]=z;z=500}if(x){var v=e();s[v]=x}if(z===undefined){z=500}r=q._api().fp_animate(p,y,z,v);return o},css:function(w,x){if(x!==undefined){var v={};v[w]=x;w=v}r=q._api().fp_css(p,w);i(o,r);return o},show:function(){this.display="block";q._api().fp_showPlugin(p);return o},hide:function(){this.display="none";q._api().fp_hidePlugin(p);return o},toggle:function(){this.display=q._api().fp_togglePlugin(p);return o},fadeTo:function(y,x,w){if(typeof x=="function"){w=x;x=500}if(w){var v=e();s[v]=w}this.display=q._api().fp_fadeTo(p,y,x,v);this.opacity=y;return o},fadeIn:function(w,v){return o.fadeTo(1,w,v)},fadeOut:function(w,v){return o.fadeTo(0,w,v)},getName:function(){return p},getPlayer:function(){return q},_fireEvent:function(w,v,x){if(w=="onUpdate"){var z=q._api().fp_getPlugin(p);if(!z){return}i(o,z);delete o.methods;if(!u){m(z.methods,function(){var B=""+this;o[B]=function(){var C=[].slice.call(arguments);var D=q._api().fp_invoke(p,B,C);return D==="undefined"||D===undefined?o:D}});u=true}}var A=s[w];if(A){var y=A.apply(o,v);if(w.slice(0,1)=="_"){delete s[w]}return y}return o}})};function b(q,G,t){var w=this,v=null,D=false,u,s,F=[],y={},x={},E,r,p,C,o,A;i(w,{id:function(){return E},isLoaded:function(){return(v!==null&&v.fp_play!==undefined&&!D)},getParent:function(){return q},hide:function(H){if(H){q.style.height="0px"}if(w.isLoaded()){v.style.height="0px"}return w},show:function(){q.style.height=A+"px";if(w.isLoaded()){v.style.height=o+"px"}return w},isHidden:function(){return w.isLoaded()&&parseInt(v.style.height,10)===0},load:function(J){if(!w.isLoaded()&&w._fireEvent("onBeforeLoad")!==false){var H=function(){if(u&&!flashembed.isSupported(G.version)){q.innerHTML=""}if(J){J.cached=true;j(x,"onLoad",J)}flashembed(q,G,{config:t})};var I=0;m(a,function(){this.unload(function(K){if(++I==a.length){H()}})})}return w},unload:function(J){if(u.replace(/\s/g,"")!==""){if(w._fireEvent("onBeforeUnload")===false){if(J){J(false)}return w}D=true;try{if(v){if(v.fp_isFullscreen()){v.fp_toggleFullscreen()}v.fp_close();w._fireEvent("onUnload")}}catch(H){}var I=function(){v=null;q.innerHTML=u;D=false;if(J){J(true)}};if(/WebKit/i.test(navigator.userAgent)&&!/Chrome/i.test(navigator.userAgent)){setTimeout(I,0)}else{I()}}else{if(J){J(false)}}return w},getClip:function(H){if(H===undefined){H=C}return F[H]},getCommonClip:function(){return s},getPlaylist:function(){return F},getPlugin:function(H){var J=y[H];if(!J&&w.isLoaded()){var I=w._api().fp_getPlugin(H);if(I){J=new l(H,I,w);y[H]=J}}return J},getScreen:function(){return w.getPlugin("screen")},getControls:function(){return w.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return w.getPlugin("logo")._fireEvent("onUpdate")}catch(H){}},getPlay:function(){return w.getPlugin("play")._fireEvent("onUpdate")},getConfig:function(H){return H?k(t):t},getFlashParams:function(){return G},loadPlugin:function(K,J,M,L){if(typeof M=="function"){L=M;M={}}var I=L?e():"_";w._api().fp_loadPlugin(K,J,M,I);var H={};H[I]=L;var N=new l(K,null,w,H);y[K]=N;return N},getState:function(){return w.isLoaded()?v.fp_getState():-1},play:function(I,H){var J=function(){if(I!==undefined){w._api().fp_play(I,H)}else{w._api().fp_play()}};if(w.isLoaded()){J()}else{if(D){setTimeout(function(){w.play(I,H)},50)}else{w.load(function(){J()})}}return w},getVersion:function(){var I="flowplayer.js 3.2.11";if(w.isLoaded()){var H=v.fp_getVersion();H.push(I);return H}return I},_api:function(){if(!w.isLoaded()){throw"Flowplayer "+w.id()+" not loaded when calling an API method"}return v},setClip:function(H){m(H,function(I,J){if(typeof J=="function"){j(x,I,J);delete H[I]}else{if(I=="onCuepoint"){$f(q).getCommonClip().onCuepoint(H[I][0],H[I][1])}}});w.setPlaylist([H]);return w},getIndex:function(){return p},bufferAnimate:function(H){v.fp_bufferAnimate(H===undefined||H);return w},_swfHeight:function(){return v.clientHeight}});m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var H="on"+this;if(H.indexOf("*")!=-1){H=H.slice(0,H.length-1);var I="onBefore"+H.slice(2);w[I]=function(J){j(x,I,J);return w}}w[H]=function(J){j(x,H,J);return w}});m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var H=this;w[H]=function(J,I){if(!w.isLoaded()){return w}var K=null;if(J!==undefined&&I!==undefined){K=v["fp_"+H](J,I)}else{K=(J===undefined)?v["fp_"+H]():v["fp_"+H](J)}return K==="undefined"||K===undefined?w:K}});w._fireEvent=function(Q){if(typeof Q=="string"){Q=[Q]}var R=Q[0],O=Q[1],M=Q[2],L=Q[3],K=0;if(t.debug){g(Q)}if(!w.isLoaded()&&R=="onLoad"&&O=="player"){v=v||c(r);o=w._swfHeight();m(F,function(){this._fireEvent("onLoad")});m(y,function(S,T){T._fireEvent("onUpdate")});s._fireEvent("onLoad")}if(R=="onLoad"&&O!="player"){return}if(R=="onError"){if(typeof O=="string"||(typeof O=="number"&&typeof M=="number")){O=M;M=L}}if(R=="onContextMenu"){m(t.contextMenu[O],function(S,T){T.call(w)});return}if(R=="onPluginEvent"||R=="onBeforePluginEvent"){var H=O.name||O;var I=y[H];if(I){I._fireEvent("onUpdate",O);return I._fireEvent(M,Q.slice(3))}return}if(R=="onPlaylistReplace"){F=[];var N=0;m(O,function(){F.push(new h(this,N++,w))})}if(R=="onClipAdd"){if(O.isInStream){return}O=new h(O,M,w);F.splice(M,0,O);for(K=M+1;K<F.length;K++){F[K].index++}}var P=true;if(typeof O=="number"&&O<F.length){C=O;var J=F[O];if(J){P=J._fireEvent(R,M,L)}if(!J||P!==false){P=s._fireEvent(R,M,L,J)}}m(x[R],function(){P=this.call(w,O,M);if(this.cached){x[R].splice(K,1)}if(P===false){return false}K++});return P};function B(){if($f(q)){$f(q).getParent().innerHTML="";p=$f(q).getIndex();a[p]=w}else{a.push(w);p=a.length-1}A=parseInt(q.style.height,10)||q.clientHeight;E=q.id||"fp"+e();r=G.id||E+"_api";G.id=r;u=q.innerHTML;if(typeof t=="string"){t={clip:{url:t}}}t.playerId=E;t.clip=t.clip||{};if(q.getAttribute("href",2)&&!t.clip.url){t.clip.url=q.getAttribute("href",2)}s=new h(t.clip,-1,w);t.playlist=t.playlist||[t.clip];var I=0;m(t.playlist,function(){var L=this;if(typeof L=="object"&&L.length){L={url:""+L}}m(t.clip,function(M,N){if(N!==undefined&&L[M]===undefined&&typeof N!="function"){L[M]=N}});t.playlist[I]=L;L=new h(L,I,w);F.push(L);I++});m(t,function(L,M){if(typeof M=="function"){if(s[L]){s[L](M)}else{j(x,L,M)}delete t[L]}});m(t.plugins,function(L,M){if(M){y[L]=new l(L,M,w)}});if(!t.plugins||t.plugins.controls===undefined){y.controls=new l("controls",null,w)}y.canvas=new l("canvas",null,w);u=q.innerHTML;function K(L){if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(F[0].url)&&!J()){return true}if(!w.isLoaded()&&w._fireEvent("onBeforeClick")!==false){w.load()}return f(L)}function J(){return w.hasiPadSupport&&w.hasiPadSupport()}function H(){if(u.replace(/\s/g,"")!==""){if(q.addEventListener){q.addEventListener("click",K,false)}else{if(q.attachEvent){q.attachEvent("onclick",K)}}}else{if(q.addEventListener&&!J()){q.addEventListener("click",f,false)}w.load()}}setTimeout(H,0)}if(typeof q=="string"){var z=c(q);if(!z){throw"Flowplayer cannot access element: "+q}q=z;B()}else{B()}}var a=[];function d(o){this.length=o.length;this.each=function(q){m(o,q)};this.size=function(){return o.length};var p=this;for(name in b.prototype){p[name]=function(){var q=arguments;p.each(function(){this[name].apply(this,q)})}}}window.flowplayer=window.$f=function(){var p=null;var o=arguments[0];if(!arguments.length){m(a,function(){if(this.isLoaded()){p=this;return false}});return p||a[0]}if(arguments.length==1){if(typeof o=="number"){return a[o]}else{if(o=="*"){return new d(a)}m(a,function(){if(this.id()==o.id||this.id()==o||this.getParent()==o){p=this;return false}});return p}}if(arguments.length>1){var t=arguments[1],q=(arguments.length==3)?arguments[2]:{};if(typeof t=="string"){t={src:t}}t=i({bgcolor:"#000000",version:[10,1],expressInstall:"http://releases.flowplayer.org/swf/expressinstall.swf",cachebusting:false},t);if(typeof o=="string"){if(o.indexOf(".")!=-1){var s=[];m(n(o),function(){s.push(new b(this,k(t),k(q)))});return new d(s)}else{var r=c(o);return new b(r!==null?r:k(o),k(t),k(q))}}else{if(o){return new b(o,k(t),k(q))}}}return null};i(window.$f,{fireEvent:function(){var o=[].slice.call(arguments);var q=$f(o[0]);return q?q._fireEvent(o.slice(1)):null},addPlugin:function(o,p){b.prototype[o]=p;return $f},each:m,extend:i});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(q,p){if(!arguments.length||typeof arguments[0]=="number"){var o=[];this.each(function(){var r=$f(this);if(r){o.push(r)}});return arguments.length?o[arguments[0]]:new d(o)}return this.each(function(){$f(this,k(q),p?k(p):{})})}}})();(function(){var h=document.all,j="http://get.adobe.com/flashplayer",c=typeof jQuery=="function",e=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,b={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function i(m,l){if(l){for(var f in l){if(l.hasOwnProperty(f)){m[f]=l[f]}}}return m}function a(f,n){var m=[];for(var l in f){if(f.hasOwnProperty(l)){m[l]=n(f[l])}}return m}window.flashembed=function(f,m,l){if(typeof f=="string"){f=document.getElementById(f.replace("#",""))}if(!f){return}if(typeof m=="string"){m={src:m}}return new d(f,i(i({},b),m),l)};var g=i(window.flashembed,{conf:b,getVersion:function(){var m,f;try{f=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(o){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");f=m&&m.GetVariable("$version")}catch(n){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");f=m&&m.GetVariable("$version")}catch(l){}}}f=e.exec(f);return f?[1*f[1],1*f[(f[1]*1>9?2:3)]*1]:[0,0]},asString:function(l){if(l===null||l===undefined){return null}var f=typeof l;if(f=="object"&&l.push){f="array"}switch(f){case"string":l=l.replace(new RegExp('(["\\\\])',"g"),"\\$1");l=l.replace(/^\s?(\d+\.?\d*)%/,"$1pct");return'"'+l+'"';case"array":return"["+a(l,function(o){return g.asString(o)}).join(",")+"]";case"function":return'"function()"';case"object":var m=[];for(var n in l){if(l.hasOwnProperty(n)){m.push('"'+n+'":'+g.asString(l[n]))}}return"{"+m.join(",")+"}"}return String(l).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(o,l){o=i({},o);var n='<object width="'+o.width+'" height="'+o.height+'" id="'+o.id+'" name="'+o.id+'"';if(o.cachebusting){o.src+=((o.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(o.w3c||!h){n+=' data="'+o.src+'" type="application/x-shockwave-flash"'}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(o.w3c||h){n+='<param name="movie" value="'+o.src+'" />'}o.width=o.height=o.id=o.w3c=o.src=null;o.onFail=o.version=o.expressInstall=null;for(var m in o){if(o[m]){n+='<param name="'+m+'" value="'+o[m]+'" />'}}var p="";if(l){for(var f in l){if(l[f]){var q=l[f];p+=f+"="+(/function|object/.test(typeof q)?g.asString(q):q)+"&"}}p=p.slice(0,-1);n+='<param name="flashvars" value=\''+p+"' />"}n+="</object>";return n},isSupported:function(f){return k[0]>f[0]||k[0]==f[0]&&k[1]>=f[1]}});var k=g.getVersion();function d(f,n,m){if(g.isSupported(n.version)){f.innerHTML=g.getHTML(n,m)}else{if(n.expressInstall&&g.isSupported([6,65])){f.innerHTML=g.getHTML(i(n,{src:n.expressInstall}),{MMredirectURL:encodeURIComponent(location.href),MMplayerType:"PlugIn",MMdoctitle:document.title})}else{if(!f.innerHTML.replace(/\s/g,"")){f.innerHTML="<h2>Flash version "+n.version+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(f.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+j+"'>here</a></p>");if(f.tagName=="A"||f.tagName=="DIV"){f.onclick=function(){location.href=j}}}if(n.onFail){var l=n.onFail.call(this);if(typeof l=="string"){f.innerHTML=l}}}}if(h){window[n.id]=document.getElementById(n.id)}i(this,{getRoot:function(){return f},getOptions:function(){return n},getConf:function(){return m},getApi:function(){return f.firstChild}})}if(c){jQuery.tools=jQuery.tools||{version:"3.2.11"};jQuery.tools.flashembed={conf:b};jQuery.fn.flashembed=function(l,f){return this.each(function(){$(this).data("flashembed",flashembed(this,l,f))})}}})();

/*!
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}var mejs=mejs||{};mejs.version="2.16.4",mejs.meIndex=0,mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube","application/x-mpegURL"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]},mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");return b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>',b.firstChild.href},getScriptPath:function(a){for(var b,c,d,e,f,g,h=0,i="",j="",k=document.getElementsByTagName("script"),l=k.length,m=a.length;l>h;h++){for(e=k[h].src,c=e.lastIndexOf("/"),c>-1?(g=e.substring(c+1),f=e.substring(0,c+1)):(g=e,f=""),b=0;m>b;b++)if(j=a[b],d=g.indexOf(j),d>-1){i=f;break}if(""!==i)break}return i},secondsToTimeCode:function(a,b,c,d){"undefined"==typeof c?c=!1:"undefined"==typeof d&&(d=25);var e=Math.floor(a/3600)%24,f=Math.floor(a/60)%60,g=Math.floor(a%60),h=Math.floor((a%1*d).toFixed(3)),i=(b||e>0?(10>e?"0"+e:e)+":":"")+(10>f?"0"+f:f)+":"+(10>g?"0"+g:g)+(c?":"+(10>h?"0"+h:h):"");return i},timeCodeToSeconds:function(a,b,c,d){"undefined"==typeof c?c=!1:"undefined"==typeof d&&(d=25);var e=a.split(":"),f=parseInt(e[0],10),g=parseInt(e[1],10),h=parseInt(e[2],10),i=0,j=0;return c&&(i=parseInt(e[3])/d),j=3600*f+60*g+h+i},convertSMPTEtoSeconds:function(a){if("string"!=typeof a)return!1;a=a.replace(",",".");var b=0,c=-1!=a.indexOf(".")?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++)d=1,e>0&&(d=Math.pow(60,e)),b+=Number(a[e])*d;return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);b&&/object|embed/i.test(b.nodeName)&&(mejs.MediaFeatures.isIE?(b.style.display="none",function(){4==b.readyState?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))},removeObjectInIE:function(a){var b=document.getElementById(a);if(b){for(var c in b)"function"==typeof b[c]&&(b[c]=null);b.parentNode.removeChild(b)}}},mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];return b[1]=b[1]||0,b[2]=b[2]||0,c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?!0:!1},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e,f,g,h=[0,0,0];if("undefined"!=typeof this.nav.plugins&&"object"==typeof this.nav.plugins[a]){if(e=this.nav.plugins[a].description,e&&("undefined"==typeof this.nav.mimeTypes||!this.nav.mimeTypes[b]||this.nav.mimeTypes[b].enabledPlugin))for(h=e.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split("."),f=0;f<h.length;f++)h[f]=parseInt(h[f].match(/\d+/),10)}else if("undefined"!=typeof window.ActiveXObject)try{g=new ActiveXObject(c),g&&(h=d(g))}catch(i){}return h}},mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[],c=a.GetVariable("$version");return c&&(c=c.split(" ")[1].split(","),b=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]),b}),mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(a,b,c,d){for(;a.isVersionSupported(b[0]+"."+b[1]+"."+b[2]+"."+b[3]);)b[c]+=d;b[c]-=d};return c(a,b,0,1),c(a,b,1,1),c(a,b,2,1e4),c(a,b,2,1e3),c(a,b,2,100),c(a,b,2,10),c(a,b,2,1),c(a,b,3,1),b}),mejs.MediaFeatures={init:function(){var a,b,c=this,d=document,e=mejs.PluginDetector.nav,f=mejs.PluginDetector.ua.toLowerCase(),g=["source","track","audio","video"];c.isiPad=null!==f.match(/ipad/i),c.isiPhone=null!==f.match(/iphone/i),c.isiOS=c.isiPhone||c.isiPad,c.isAndroid=null!==f.match(/android/i),c.isBustedAndroid=null!==f.match(/android 2\.[12]/),c.isBustedNativeHTTPS="https:"===location.protocol&&(null!==f.match(/android [12]\./)||null!==f.match(/macintosh.* version.* safari/)),c.isIE=-1!=e.appName.toLowerCase().indexOf("microsoft")||null!==e.appName.toLowerCase().match(/trident/gi),c.isChrome=null!==f.match(/chrome/gi),c.isChromium=null!==f.match(/chromium/gi),c.isFirefox=null!==f.match(/firefox/gi),c.isWebkit=null!==f.match(/webkit/gi),c.isGecko=null!==f.match(/gecko/gi)&&!c.isWebkit&&!c.isIE,c.isOpera=null!==f.match(/opera/gi),c.hasTouch="ontouchstart"in window,c.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(a=0;a<g.length;a++)b=document.createElement(g[a]);c.supportsMediaTag="undefined"!=typeof b.canPlayType||c.isBustedAndroid;try{b.canPlayType("video/mp4")}catch(h){c.supportsMediaTag=!1}c.hasSemiNativeFullScreen="undefined"!=typeof b.webkitEnterFullscreen,c.hasNativeFullscreen="undefined"!=typeof b.requestFullscreen,c.hasWebkitNativeFullScreen="undefined"!=typeof b.webkitRequestFullScreen,c.hasMozNativeFullScreen="undefined"!=typeof b.mozRequestFullScreen,c.hasMsNativeFullScreen="undefined"!=typeof b.msRequestFullscreen,c.hasTrueNativeFullScreen=c.hasWebkitNativeFullScreen||c.hasMozNativeFullScreen||c.hasMsNativeFullScreen,c.nativeFullScreenEnabled=c.hasTrueNativeFullScreen,c.hasMozNativeFullScreen?c.nativeFullScreenEnabled=document.mozFullScreenEnabled:c.hasMsNativeFullScreen&&(c.nativeFullScreenEnabled=document.msFullscreenEnabled),c.isChrome&&(c.hasSemiNativeFullScreen=!1),c.hasTrueNativeFullScreen&&(c.fullScreenEventName="",c.hasWebkitNativeFullScreen?c.fullScreenEventName="webkitfullscreenchange":c.hasMozNativeFullScreen?c.fullScreenEventName="mozfullscreenchange":c.hasMsNativeFullScreen&&(c.fullScreenEventName="MSFullscreenChange"),c.isFullScreen=function(){return c.hasMozNativeFullScreen?d.mozFullScreen:c.hasWebkitNativeFullScreen?d.webkitIsFullScreen:c.hasMsNativeFullScreen?null!==d.msFullscreenElement:void 0},c.requestFullScreen=function(a){c.hasWebkitNativeFullScreen?a.webkitRequestFullScreen():c.hasMozNativeFullScreen?a.mozRequestFullScreen():c.hasMsNativeFullScreen&&a.msRequestFullscreen()},c.cancelFullScreen=function(){c.hasWebkitNativeFullScreen?document.webkitCancelFullScreen():c.hasMozNativeFullScreen?document.mozCancelFullScreen():c.hasMsNativeFullScreen&&document.msExitFullscreen()}),c.hasSemiNativeFullScreen&&f.match(/mac os x 10_5/i)&&(c.hasNativeFullScreen=!1,c.hasSemiNativeFullScreen=!1)}},mejs.MediaFeatures.init(),mejs.HtmlMediaElement={pluginType:"native",isFullScreen:!1,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if("string"==typeof a)this.src=a;else{var c,d;for(c=0;c<a.length;c++)if(d=a[c],this.canPlayType(d.type)){this.src=d.src;break}}},setVideoSize:function(a,b){this.width=a,this.height=b}},mejs.PluginMediaElement=function(a,b,c){this.id=a,this.pluginType=b,this.src=c,this.events={},this.attributes={}},mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:!1,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:!0,ended:!1,seeking:!1,duration:0,error:null,tagName:"",muted:!1,volume:1,currentTime:0,play:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.playVideo():this.pluginApi.playMedia(),this.paused=!1)},load:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType||this.pluginApi.loadMedia(),this.paused=!1)},pause:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia(),this.paused=!0)},stop:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.stopVideo():this.pluginApi.stopMedia(),this.paused=!0)},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++)if(d=e[b],mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably";return""},positionFullscreenButton:function(a,b,c){null!=this.pluginApi&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){null!=this.pluginApi&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if("string"==typeof a)this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)),this.src=mejs.Utility.absolutizeUrl(a);else{var b,c;for(b=0;b<a.length;b++)if(c=a[b],this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)),this.src=mejs.Utility.absolutizeUrl(a);break}}},setCurrentTime:function(a){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a),this.currentTime=a)},setVolume:function(a){null!=this.pluginApi&&(this.pluginApi.setVolume("youtube"==this.pluginType?100*a:a),this.volume=a)},setMuted:function(a){null!=this.pluginApi&&("youtube"==this.pluginType?(a?this.pluginApi.mute():this.pluginApi.unMute(),this.muted=a,this.dispatchEvent("volumechange")):this.pluginApi.setMuted(a),this.muted=a)},setVideoSize:function(a,b){this.pluginElement&&this.pluginElement.style&&(this.pluginElement.style.width=a+"px",this.pluginElement.style.height=b+"px"),null!=this.pluginApi&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!0)},exitFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!1)},addEventListener:function(a,b){this.events[a]=this.events[a]||[],this.events[a].push(b)},removeEventListener:function(a,b){if(!a)return this.events={},!0;var c=this.events[a];if(!c)return!0;if(!b)return this.events[a]=[],!0;for(var d=0;d<c.length;d++)if(c[d]===b)return this.events[a].splice(d,1),!0;return!1},dispatchEvent:function(a){var b,c,d=this.events[a];if(d)for(c=Array.prototype.slice.call(arguments,1),b=0;b<d.length;b++)d[b].apply(this,c)},hasAttribute:function(a){return a in this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){return this.hasAttribute(a)?this.attributes[a]:""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id),mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}},mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b,this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a],delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case"flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case"silverlight":b.pluginElement=document.getElementById(b.id),b.pluginApi=b.pluginElement.Content.MediaElementJS}null!=b.pluginApi&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e,f,g=this.pluginMediaElements[a];if(g){d={type:b,target:g};for(e in c)g[e]=c[e],d[e]=c[e];f=c.bufferedTime||0,d.target.buffered=d.buffered={start:function(){return 0},end:function(){return f},length:1},g.dispatchEvent(d.type,d)}}},mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:!1,httpsBasicAuthSite:!1,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:!1,enablePseudoStreaming:!1,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:.8,success:function(){},error:function(){}},mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)},mejs.HtmlMediaElementShim={create:function(a,b){var c,d,e=mejs.MediaElementDefaults,f="string"==typeof a?document.getElementById(a):a,g=f.tagName.toLowerCase(),h="audio"===g||"video"===g,i=f.getAttribute(h?"src":"href"),j=f.getAttribute("poster"),k=f.getAttribute("autoplay"),l=f.getAttribute("preload"),m=f.getAttribute("controls");for(d in b)e[d]=b[d];return i="undefined"==typeof i||null===i||""==i?null:i,j="undefined"==typeof j||null===j?"":j,l="undefined"==typeof l||null===l||"false"===l?"none":l,k=!("undefined"==typeof k||null===k||"false"===k),m=!("undefined"==typeof m||null===m||"false"===m),c=this.determinePlayback(f,e,mejs.MediaFeatures.supportsMediaTag,h,i),c.url=null!==c.url?mejs.Utility.absolutizeUrl(c.url):"","native"==c.method?(mejs.MediaFeatures.isBustedAndroid&&(f.src=c.url,f.addEventListener("click",function(){f.play()},!1)),this.updateNative(c,e,k,l)):""!==c.method?this.createPlugin(c,e,j,k,l,m):(this.createErrorMessage(c,e,j),this)},determinePlayback:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=[],r={method:"",url:"",htmlMediaElement:a,isVideo:"audio"!=a.tagName.toLowerCase()};if("undefined"!=typeof b.type&&""!==b.type)if("string"==typeof b.type)q.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)q.push({type:b.type[f],url:e});else if(null!==e)k=this.formatType(e,a.getAttribute("type")),q.push({type:k,url:e});else for(f=0;f<a.childNodes.length;f++)j=a.childNodes[f],1==j.nodeType&&"source"==j.tagName.toLowerCase()&&(e=j.getAttribute("src"),k=this.formatType(e,j.getAttribute("type")),p=j.getAttribute("media"),(!p||!window.matchMedia||window.matchMedia&&window.matchMedia(p).matches)&&q.push({type:k,url:e}));if(!d&&q.length>0&&null!==q[0].url&&this.getTypeFromFile(q[0].url).indexOf("audio")>-1&&(r.isVideo=!1),mejs.MediaFeatures.isBustedAndroid&&(a.canPlayType=function(a){return null!==a.match(/video\/(mp4|m4v)/gi)?"maybe":""}),mejs.MediaFeatures.isChromium&&(a.canPlayType=function(a){return null!==a.match(/video\/(webm|ogv|ogg)/gi)?"maybe":""}),!(!c||"auto"!==b.mode&&"auto_plugin"!==b.mode&&"native"!==b.mode||mejs.MediaFeatures.isBustedNativeHTTPS&&b.httpsBasicAuthSite===!0)){for(d||(o=document.createElement(r.isVideo?"video":"audio"),a.parentNode.insertBefore(o,a),a.style.display="none",r.htmlMediaElement=a=o),f=0;f<q.length;f++)if("video/m3u8"==q[f].type||""!==a.canPlayType(q[f].type).replace(/no/,"")||""!==a.canPlayType(q[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")||""!==a.canPlayType(q[f].type.replace(/m4a/,"mp4")).replace(/no/,"")){r.method="native",r.url=q[f].url;break}if("native"===r.method&&(null!==r.url&&(a.src=r.url),"auto_plugin"!==b.mode))return r}if("auto"===b.mode||"auto_plugin"===b.mode||"shim"===b.mode)for(f=0;f<q.length;f++)for(k=q[f].type,g=0;g<b.plugins.length;g++)for(l=b.plugins[g],m=mejs.plugins[l],h=0;h<m.length;h++)if(n=m[h],null==n.version||mejs.PluginDetector.hasPluginVersion(l,n.version))for(i=0;i<n.types.length;i++)if(k==n.types[i])return r.method=l,r.url=q[f].url,r;return"auto_plugin"===b.mode&&"native"===r.method?r:(""===r.method&&q.length>0&&(r.url=q[0].url),r)},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];var b=a.substring(a.lastIndexOf(".")+1).toLowerCase();return(/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b)?"video":"audio")+"/"+this.getTypeFromExtension(b)},getTypeFromExtension:function(a){switch(a){case"mp4":case"m4v":case"m4a":return"mp4";case"webm":case"webma":case"webmv":return"webm";case"ogg":case"oga":case"ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+"px",e.style.height=d.height+"px"}catch(f){}e.innerHTML=b.customError?b.customError:""!==c?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>",d.parentNode.insertBefore(e,d),d.style.display="none",b.error(d)},createPlugin:function(a,b,c,d,e,f){var g,h,i,j=a.htmlMediaElement,k=1,l=1,m="me_"+a.method+"_"+mejs.meIndex++,n=new mejs.PluginMediaElement(m,a.method,a.url),o=document.createElement("div");n.tagName=j.tagName;for(var p=0;p<j.attributes.length;p++){var q=j.attributes[p];1==q.specified&&n.setAttribute(q.name,q.value)}for(h=j.parentNode;null!==h&&"body"!==h.tagName.toLowerCase()&&null!=h.parentNode;){if("p"===h.parentNode.tagName.toLowerCase()){h.parentNode.parentNode.insertBefore(h,h.parentNode);break}h=h.parentNode}switch(a.isVideo?(k=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:null!==j.getAttribute("width")?j.getAttribute("width"):b.defaultVideoWidth,l=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:null!==j.getAttribute("height")?j.getAttribute("height"):b.defaultVideoHeight,k=mejs.Utility.encodeUrl(k),l=mejs.Utility.encodeUrl(l)):b.enablePluginDebug&&(k=320,l=240),n.success=b.success,mejs.MediaPluginBridge.registerPluginElement(m,n,j),o.className="me-plugin",o.id=m+"_container",a.isVideo?j.parentNode.insertBefore(o,j):document.body.insertBefore(o,document.body.childNodes[0]),i=["id="+m,"jsinitfunction=mejs.MediaPluginBridge.initPlugin","jscallbackfunction=mejs.MediaPluginBridge.fireEvent","isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+k,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+l,"pseudostreamstart="+b.pseudoStreamingStartQueryParam],null!==a.url&&i.push("flash"==a.method?"file="+mejs.Utility.encodeUrl(a.url):"file="+a.url),b.enablePluginDebug&&i.push("debug=true"),b.enablePluginSmoothing&&i.push("smoothing=true"),b.enablePseudoStreaming&&i.push("pseudostreaming=true"),f&&i.push("controls=true"),b.pluginVars&&(i=i.concat(b.pluginVars)),a.method){case"silverlight":o.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+m+'" name="'+m+'" width="'+k+'" height="'+l+'" class="mejs-shim"><param name="initParams" value="'+i.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case"flash":mejs.MediaFeatures.isIE?(g=document.createElement("div"),o.appendChild(g),g.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+m+'" width="'+k+'" height="'+l+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+i.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'):o.innerHTML='<embed id="'+m+'" name="'+m+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+i.join("&")+'" width="'+k+'" height="'+l+'" scale="default"class="mejs-shim"></embed>';break;case"youtube":var r;-1!=a.url.lastIndexOf("youtu.be")?(r=a.url.substr(a.url.lastIndexOf("/")+1),-1!=r.indexOf("?")&&(r=r.substr(0,r.indexOf("?")))):r=a.url.substr(a.url.lastIndexOf("=")+1),youtubeSettings={container:o,containerId:o.id,pluginMediaElement:n,pluginId:m,videoId:r,height:l,width:k},mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case"vimeo":var s=m+"_player";if(n.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1),o.innerHTML='<iframe src="//player.vimeo.com/video/'+n.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+s+'" width="'+k+'" height="'+l+'" frameborder="0" class="mejs-shim" id="'+s+'" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',"function"==typeof $f){var t=$f(o.childNodes[0]);t.addEvent("ready",function(){function a(a,b,c,d){var e={type:c,target:b};"timeupdate"==c&&(b.currentTime=e.currentTime=d.seconds,b.duration=e.duration=d.duration),b.dispatchEvent(e.type,e)}t.playVideo=function(){t.api("play")},t.stopVideo=function(){t.api("unload")},t.pauseVideo=function(){t.api("pause")},t.seekTo=function(a){t.api("seekTo",a)},t.setVolume=function(a){t.api("setVolume",a)},t.setMuted=function(a){a?(t.lastVolume=t.api("getVolume"),t.api("setVolume",0)):(t.api("setVolume",t.lastVolume),delete t.lastVolume)},t.addEvent("play",function(){a(t,n,"play"),a(t,n,"playing")}),t.addEvent("pause",function(){a(t,n,"pause")}),t.addEvent("finish",function(){a(t,n,"ended")}),t.addEvent("playProgress",function(b){a(t,n,"timeupdate",b)}),n.pluginElement=o,n.pluginApi=t,mejs.MediaPluginBridge.initPlugin(m)})}else console.warn("You need to include froogaloop for vimeo to work")}return j.style.display="none",j.removeAttribute("autoplay"),n},updateNative:function(a,b){var c,d=a.htmlMediaElement;for(c in mejs.HtmlMediaElement)d[c]=mejs.HtmlMediaElement[c];return b.success(d,d),d}},mejs.YouTubeApi={isIframeStarted:!1,isIframeLoaded:!1,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b),this.isIframeStarted=!0}},iframeQueue:[],enqueueIframe:function(a){this.isLoaded?this.createIframe(a):(this.loadIframeApi(),this.iframeQueue.push(a))},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c,mejs.MediaPluginBridge.initPlugin(a.pluginId),setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(a){mejs.YouTubeApi.handleStateChange(a.data,c,b)}}})},createEvent:function(a,b,c){var d={type:c,target:b};if(a&&a.getDuration){b.currentTime=d.currentTime=a.getCurrentTime(),b.duration=d.duration=a.getDuration(),d.paused=b.paused,d.ended=b.ended,d.muted=a.isMuted(),d.volume=a.getVolume()/100,d.bytesTotal=a.getVideoBytesTotal(),d.bufferedBytes=a.getVideoBytesLoaded();var e=d.bufferedBytes/d.bytesTotal*d.duration;d.target.buffered=d.buffered={start:function(){return 0},end:function(){return e},length:1}}b.dispatchEvent(d.type,d)},iFrameReady:function(){for(this.isLoaded=!0,this.isIframeLoaded=!0;this.iframeQueue.length>0;){var a=this.iframeQueue.pop();this.createIframe(a)}},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";mejs.MediaFeatures.isIE?(b=document.createElement("div"),a.container.appendChild(b),b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'):a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c,mejs.MediaPluginBridge.initPlugin(a),c.cueVideoById(b.videoId);var e=b.containerId+"_callback";window[e]=function(a){mejs.YouTubeApi.handleStateChange(a,c,d)},c.addEventListener("onStateChange",e),setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250),mejs.YouTubeApi.createEvent(c,d,"canplay")},handleStateChange:function(a,b,c){switch(a){case-1:c.paused=!0,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=!1,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=!1,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"play"),mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=!0,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress");break;case 5:}}},window.mejs=mejs,window.MediaElement=mejs.MediaElement,function(a,b){"use strict";var c={locale:{language:b.i18n&&b.i18n.locale.language||"",strings:b.i18n&&b.i18n.locale.strings||{}},ietf_lang_regex:/^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,methods:{}};c.getLanguage=function(){var a=c.locale.language||window.navigator.userLanguage||window.navigator.language;return c.ietf_lang_regex.exec(a)?a:null},"undefined"!=typeof mejsL10n&&(c.locale.language=mejsL10n.language),c.methods.checkPlain=function(a){var b,c,d={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};a=String(a);for(b in d)d.hasOwnProperty(b)&&(c=new RegExp(b,"g"),a=a.replace(c,d[b]));return a},c.methods.t=function(a,b){return c.locale.strings&&c.locale.strings[b.context]&&c.locale.strings[b.context][a]&&(a=c.locale.strings[b.context][a]),c.methods.checkPlain(a)},c.t=function(a,b){if("string"==typeof a&&a.length>0){var d=c.getLanguage();return b=b||{context:d},c.methods.t(a,b)}throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."}},b.i18n=c}(document,mejs),function(a){"use strict";"undefined"!=typeof mejsL10n&&(a[mejsL10n.language]=mejsL10n.strings)}(mejs.i18n.locale.strings),/*!
 *
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
    "undefined"!=typeof jQuery?mejs.$=jQuery:"undefined"!=typeof ender&&(mejs.$=ender),function(a){mejs.MepDefaults={poster:"",showPosterWhenEnded:!1,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return.05*a.duration},defaultSeekForwardInterval:function(a){return.05*a.duration},setDimensions:!0,audioWidth:-1,audioHeight:-1,startVolume:.8,loop:!1,autoRewind:!0,enableAutosize:!0,alwaysShowHours:!1,showTimecodeFrameCount:!1,framesPerSecond:25,autosizeProgress:!0,alwaysShowControls:!1,hideVideoControlsOnLoad:!1,clickToPlayPause:!0,iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:!0,enableKeyboard:!0,pauseOtherPlayers:!0,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?a.play():a.pause()}},{keys:[38],action:function(a,b){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.min(b.volume+.1,1);b.setVolume(c)}},{keys:[40],action:function(a,b){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.max(b.volume-.1,0);b.setVolume(c)}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){"undefined"!=typeof a.enterFullScreen&&(a.isFullScreen?a.exitFullScreen():a.enterFullScreen())}},{keys:[77],action:function(a){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer()),a.setMuted(a.media.muted?!1:!0)}}]},mejs.mepIndex=0,mejs.players={},mejs.MediaElementPlayer=function(b,c){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(b,c);var d=this;return d.$media=d.$node=a(b),d.node=d.media=d.$media[0],"undefined"!=typeof d.node.player?d.node.player:(d.node.player=d,"undefined"==typeof c&&(c=d.$node.data("mejsoptions")),d.options=a.extend({},mejs.MepDefaults,c),d.id="mep_"+mejs.mepIndex++,mejs.players[d.id]=d,d.init(),d)},mejs.MediaElementPlayer.prototype={hasFocus:!1,controlsAreVisible:!0,init:function(){var b=this,c=mejs.MediaFeatures,d=a.extend(!0,{},b.options,{success:function(a,c){b.meReady(a,c)},error:function(a){b.handleError(a)}}),e=b.media.tagName.toLowerCase();if(b.isDynamic="audio"!==e&&"video"!==e,b.isVideo=b.isDynamic?b.options.isVideo:"audio"!==e&&b.options.isVideo,c.isiPad&&b.options.iPadUseNativeControls||c.isiPhone&&b.options.iPhoneUseNativeControls)b.$media.attr("controls","controls"),c.isiPad&&null!==b.media.getAttribute("autoplay")&&b.play();else if(c.isAndroid&&b.options.AndroidUseNativeControls);else{b.$media.removeAttr("controls");var f=mejs.i18n.t(b.isVideo?"Video Player":"Audio Player");if(a('<span class="mejs-offscreen">'+f+"</span>").insertBefore(b.$media),b.container=a('<div id="'+b.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'" tabindex="0" role="application" aria-label="'+f+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function(){if(!b.controlsAreVisible){b.showControls(!0);var a=b.container.find(".mejs-playpause-button > button");a.focus()}}),b.container.addClass((c.isAndroid?"mejs-android ":"")+(c.isiOS?"mejs-ios ":"")+(c.isiPad?"mejs-ipad ":"")+(c.isiPhone?"mejs-iphone ":"")+(b.isVideo?"mejs-video ":"mejs-audio ")),c.isiOS){var g=b.$media.clone();b.container.find(".mejs-mediaelement").append(g),b.$media.remove(),b.$node=b.$media=g,b.node=b.media=g[0]}else b.container.find(".mejs-mediaelement").append(b.$media);b.controls=b.container.find(".mejs-controls"),b.layers=b.container.find(".mejs-layers");var h=b.isVideo?"video":"audio",i=h.substring(0,1).toUpperCase()+h.substring(1);b.width=b.options[h+"Width"]>0||b.options[h+"Width"].toString().indexOf("%")>-1?b.options[h+"Width"]:""!==b.media.style.width&&null!==b.media.style.width?b.media.style.width:null!==b.media.getAttribute("width")?b.$media.attr("width"):b.options["default"+i+"Width"],b.height=b.options[h+"Height"]>0||b.options[h+"Height"].toString().indexOf("%")>-1?b.options[h+"Height"]:""!==b.media.style.height&&null!==b.media.style.height?b.media.style.height:null!==b.$media[0].getAttribute("height")?b.$media.attr("height"):b.options["default"+i+"Height"],b.setPlayerSize(b.width,b.height),d.pluginWidth=b.width,d.pluginHeight=b.height}mejs.MediaElement(b.$media[0],d),"undefined"!=typeof b.container&&b.controlsAreVisible&&b.container.trigger("controlsshown")},showControls:function(a){var b=this;a="undefined"==typeof a||a,b.controlsAreVisible||(a?(b.controls.css("visibility","visible").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0,b.container.trigger("controlsshown")}),b.container.find(".mejs-control").css("visibility","visible").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0})):(b.controls.css("visibility","visible").css("display","block"),b.container.find(".mejs-control").css("visibility","visible").css("display","block"),b.controlsAreVisible=!0,b.container.trigger("controlsshown")),b.setControlsSize())},hideControls:function(b){var c=this;b="undefined"==typeof b||b,!c.controlsAreVisible||c.options.alwaysShowControls||c.keyboardAction||(b?(c.controls.stop(!0,!0).fadeOut(200,function(){a(this).css("visibility","hidden").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")}),c.container.find(".mejs-control").stop(!0,!0).fadeOut(200,function(){a(this).css("visibility","hidden").css("display","block")})):(c.controls.css("visibility","hidden").css("display","block"),c.container.find(".mejs-control").css("visibility","hidden").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")))},controlsTimer:null,startControlsTimer:function(a){var b=this;a="undefined"!=typeof a?a:1500,b.killControlsTimer("start"),b.controlsTimer=setTimeout(function(){b.hideControls(),b.killControlsTimer("hide")},a)},killControlsTimer:function(){var a=this;null!==a.controlsTimer&&(clearTimeout(a.controlsTimer),delete a.controlsTimer,a.controlsTimer=null)},controlsEnabled:!0,disableControls:function(){var a=this;a.killControlsTimer(),a.hideControls(!1),this.controlsEnabled=!1},enableControls:function(){var a=this;a.showControls(!1),a.controlsEnabled=!0},meReady:function(b,c){var d,e,f=this,g=mejs.MediaFeatures,h=c.getAttribute("autoplay"),i=!("undefined"==typeof h||null===h||"false"===h);if(!f.created){if(f.created=!0,f.media=b,f.domNode=c,!(g.isAndroid&&f.options.AndroidUseNativeControls||g.isiPad&&f.options.iPadUseNativeControls||g.isiPhone&&f.options.iPhoneUseNativeControls)){f.buildposter(f,f.controls,f.layers,f.media),f.buildkeyboard(f,f.controls,f.layers,f.media),f.buildoverlays(f,f.controls,f.layers,f.media),f.findTracks();for(d in f.options.features)if(e=f.options.features[d],f["build"+e])try{f["build"+e](f,f.controls,f.layers,f.media)}catch(j){}f.container.trigger("controlsready"),f.setPlayerSize(f.width,f.height),f.setControlsSize(),f.isVideo&&(mejs.MediaFeatures.hasTouch?f.$media.bind("touchstart",function(){f.controlsAreVisible?f.hideControls(!1):f.controlsEnabled&&f.showControls(!1)}):(f.clickToPlayPauseCallback=function(){f.options.clickToPlayPause&&(f.media.paused?f.play():f.pause())},f.media.addEventListener("click",f.clickToPlayPauseCallback,!1),f.container.bind("mouseenter mouseover",function(){f.controlsEnabled&&(f.options.alwaysShowControls||(f.killControlsTimer("enter"),f.showControls(),f.startControlsTimer(2500)))}).bind("mousemove",function(){f.controlsEnabled&&(f.controlsAreVisible||f.showControls(),f.options.alwaysShowControls||f.startControlsTimer(2500))}).bind("mouseleave",function(){f.controlsEnabled&&(f.media.paused||f.options.alwaysShowControls||f.startControlsTimer(1e3))})),f.options.hideVideoControlsOnLoad&&f.hideControls(!1),i&&!f.options.alwaysShowControls&&f.hideControls(),f.options.enableAutosize&&f.media.addEventListener("loadedmetadata",function(a){f.options.videoHeight<=0&&null===f.domNode.getAttribute("height")&&!isNaN(a.target.videoHeight)&&(f.setPlayerSize(a.target.videoWidth,a.target.videoHeight),f.setControlsSize(),f.media.setVideoSize(a.target.videoWidth,a.target.videoHeight))},!1)),b.addEventListener("play",function(){var a;for(a in mejs.players){var b=mejs.players[a];b.id==f.id||!f.options.pauseOtherPlayers||b.paused||b.ended||b.pause(),b.hasFocus=!1}f.hasFocus=!0},!1),f.media.addEventListener("ended",function(){if(f.options.autoRewind)try{f.media.setCurrentTime(0),window.setTimeout(function(){a(f.container).find(".mejs-overlay-loading").parent().hide()},20)}catch(b){}f.media.pause(),f.setProgressRail&&f.setProgressRail(),f.setCurrentRail&&f.setCurrentRail(),f.options.loop?f.play():!f.options.alwaysShowControls&&f.controlsEnabled&&f.showControls()},!1),f.media.addEventListener("loadedmetadata",function(){f.updateDuration&&f.updateDuration(),f.updateCurrent&&f.updateCurrent(),f.isFullScreen||(f.setPlayerSize(f.width,f.height),f.setControlsSize())},!1),f.container.focusout(function(b){if(b.relatedTarget){var c=a(b.relatedTarget);f.keyboardAction&&0===c.parents(".mejs-container").length&&(f.keyboardAction=!1,f.hideControls(!0))}}),setTimeout(function(){f.setPlayerSize(f.width,f.height),f.setControlsSize()},50),f.globalBind("resize",function(){f.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||f.setPlayerSize(f.width,f.height),f.setControlsSize()}),"youtube"==f.media.pluginType&&(g.isiOS||g.isAndroid)&&f.container.find(".mejs-overlay-play").hide()}i&&"native"==b.pluginType&&f.play(),f.options.success&&("string"==typeof f.options.success?window[f.options.success](f.media,f.domNode,f):f.options.success(f.media,f.domNode,f))}},handleError:function(a){var b=this;b.controls.hide(),b.options.error&&b.options.error(a)},setPlayerSize:function(b,c){var d=this;if(!d.options.setDimensions)return!1;if("undefined"!=typeof b&&(d.width=b),"undefined"!=typeof c&&(d.height=c),d.height.toString().indexOf("%")>0||"100%"===d.$node.css("max-width")||d.$node[0].currentStyle&&"100%"===d.$node[0].currentStyle.maxWidth){var e=function(){return d.isVideo?d.media.videoWidth&&d.media.videoWidth>0?d.media.videoWidth:null!==d.media.getAttribute("width")?d.media.getAttribute("width"):d.options.defaultVideoWidth:d.options.defaultAudioWidth}(),f=function(){return d.isVideo?d.media.videoHeight&&d.media.videoHeight>0?d.media.videoHeight:null!==d.media.getAttribute("height")?d.media.getAttribute("height"):d.options.defaultVideoHeight:d.options.defaultAudioHeight}(),g=d.container.parent().closest(":visible").width(),h=d.container.parent().closest(":visible").height(),i=d.isVideo||!d.options.autosizeProgress?parseInt(g*f/e,10):f;isNaN(i)&&(i=h),"body"===d.container.parent()[0].tagName.toLowerCase()&&(g=a(window).width(),i=a(window).height()),i&&g&&(d.container.width(g).height(i),d.$media.add(d.container.find(".mejs-shim")).width("100%").height("100%"),d.isVideo&&d.media.setVideoSize&&d.media.setVideoSize(g,i),d.layers.children(".mejs-layer").width("100%").height("100%"))}else d.container.width(d.width).height(d.height),d.layers.children(".mejs-layer").width(d.width).height(d.height);var j=d.layers.find(".mejs-overlay-play"),k=j.find(".mejs-overlay-button");j.height(d.container.height()-d.controls.height()),k.css("margin-top","-"+(k.height()/2-d.controls.height()/2).toString()+"px")},setControlsSize:function(){var b=this,c=0,d=0,e=b.controls.find(".mejs-time-rail"),f=b.controls.find(".mejs-time-total"),g=(b.controls.find(".mejs-time-current"),b.controls.find(".mejs-time-loaded"),e.siblings()),h=g.last(),i=null;if(b.container.is(":visible")&&e.length&&e.is(":visible")){b.options&&!b.options.autosizeProgress&&(d=parseInt(e.css("width"),10)),0!==d&&d||(g.each(function(){var b=a(this);"absolute"!=b.css("position")&&b.is(":visible")&&(c+=a(this).outerWidth(!0))}),d=b.controls.width()-c-(e.outerWidth(!0)-e.width()));do e.width(d),f.width(d-(f.outerWidth(!0)-f.width())),"absolute"!=h.css("position")&&(i=h.position(),d--);while(null!==i&&i.top>0&&d>0);b.setProgressRail&&b.setProgressRail(),b.setCurrentRail&&b.setCurrentRail()}},buildposter:function(b,c,d,e){var f=this,g=a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),h=b.$media.attr("poster");""!==b.options.poster&&(h=b.options.poster),h?f.setPoster(h):g.hide(),e.addEventListener("play",function(){g.hide()},!1),b.options.showPosterWhenEnded&&b.options.autoRewind&&e.addEventListener("ended",function(){g.show()},!1)},setPoster:function(b){var c=this,d=c.container.find(".mejs-poster"),e=d.find("img");0===e.length&&(e=a('<img width="100%" height="100%" />').appendTo(d)),e.attr("src",b),d.css({"background-image":"url("+b+")"})},buildoverlays:function(b,c,d,e){var f=this;if(b.isVideo){var g=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),h=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),i=a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click",function(){f.options.clickToPlayPause&&e.paused&&e.play()});e.addEventListener("play",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("playing",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("seeking",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("seeked",function(){g.hide(),c.find(".mejs-time-buffering").hide()},!1),e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||i.show()},!1),e.addEventListener("waiting",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("loadeddata",function(){g.show(),c.find(".mejs-time-buffering").show(),mejs.MediaFeatures.isAndroid&&(e.canplayTimeout=window.setTimeout(function(){if(document.createEvent){var a=document.createEvent("HTMLEvents");return a.initEvent("canplay",!0,!0),e.dispatchEvent(a)}},300))},!1),e.addEventListener("canplay",function(){g.hide(),c.find(".mejs-time-buffering").hide(),clearTimeout(e.canplayTimeout)},!1),e.addEventListener("error",function(){g.hide(),c.find(".mejs-time-buffering").hide(),h.show(),h.find("mejs-overlay-error").html("Error loading this resource")},!1),e.addEventListener("keydown",function(a){f.onkeydown(b,e,a)},!1)}},buildkeyboard:function(b,c,d,e){var f=this;f.container.keydown(function(){f.keyboardAction=!0}),f.globalBind("keydown",function(a){return f.onkeydown(b,e,a)}),f.globalBind("click",function(c){b.hasFocus=0!==a(c.target).closest(".mejs-container").length})},onkeydown:function(a,b,c){if(a.hasFocus&&a.options.enableKeyboard)for(var d=0,e=a.options.keyActions.length;e>d;d++)for(var f=a.options.keyActions[d],g=0,h=f.keys.length;h>g;g++)if(c.keyCode==f.keys[g])return"function"==typeof c.preventDefault&&c.preventDefault(),f.action(a,b,c.keyCode),!1;return!0},findTracks:function(){var b=this,c=b.$media.find("track");b.tracks=[],c.each(function(c,d){d=a(d),b.tracks.push({srclang:d.attr("srclang")?d.attr("srclang").toLowerCase():"",src:d.attr("src"),kind:d.attr("kind"),label:d.attr("label")||"",entries:[],isLoaded:!1})})},changeSkin:function(a){this.container[0].className="mejs-container "+a,this.setPlayerSize(this.width,this.height),this.setControlsSize()},play:function(){this.load(),this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},load:function(){this.isLoaded||this.media.load(),this.isLoaded=!0},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b,c=this;for(a in c.options.features)if(b=c.options.features[a],c["clean"+b])try{c["clean"+b](c)}catch(d){}c.isDynamic?c.$node.insertBefore(c.container):(c.$media.prop("controls",!0),c.$node.clone().insertBefore(c.container).show(),c.$node.remove()),"native"!==c.media.pluginType&&c.media.remove(),delete mejs.players[c.id],"object"==typeof c.container&&c.container.remove(),c.globalUnbind(),delete c.node.player},rebuildtracks:function(){var a=this;a.findTracks(),a.buildtracks(a,a.controls,a.layers,a.media)}},function(){function b(b,d){var e={d:[],w:[]};return a.each((b||"").split(" "),function(a,b){var f=b+"."+d;0===f.indexOf(".")?(e.d.push(f),e.w.push(f)):e[c.test(b)?"w":"d"].push(f)}),e.d=e.d.join(" "),e.w=e.w.join(" "),e}var c=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,d,e){var f=this;c=b(c,f.id),c.d&&a(document).bind(c.d,d,e),c.w&&a(window).bind(c.w,d,e)},mejs.MediaElementPlayer.prototype.globalUnbind=function(c,d){var e=this;c=b(c,e.id),c.d&&a(document).unbind(c.d,d),c.w&&a(window).unbind(c.w,d)}}(),"undefined"!=typeof a&&(a.fn.mediaelementplayer=function(b){return this.each(b===!1?function(){var b=a(this).data("mediaelementplayer");b&&b.remove(),a(this).removeData("mediaelementplayer")}:function(){a(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,b))}),this},a(document).ready(function(){a(".mejs-player").mediaelementplayer()})),window.MediaElementPlayer=mejs.MediaElementPlayer}(mejs.$),function(a){a.extend(mejs.MepDefaults,{playText:mejs.i18n.t("Play"),pauseText:mejs.i18n.t("Pause")}),a.extend(MediaElementPlayer.prototype,{buildplaypause:function(b,c,d,e){function f(a){"play"===a?(i.removeClass("mejs-play").addClass("mejs-pause"),j.attr({title:h.pauseText,"aria-label":h.pauseText})):(i.removeClass("mejs-pause").addClass("mejs-play"),j.attr({title:h.playText,"aria-label":h.playText}))}var g=this,h=g.options,i=a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+g.id+'" title="'+h.playText+'" aria-label="'+h.playText+'"></button></div>').appendTo(c).click(function(a){return a.preventDefault(),e.paused?e.play():e.pause(),!1}),j=i.find("button");f("pse"),e.addEventListener("play",function(){f("play")},!1),e.addEventListener("playing",function(){f("play")},!1),e.addEventListener("pause",function(){f("pse")},!1),e.addEventListener("paused",function(){f("pse")},!1)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{stopText:"Stop"}),a.extend(MediaElementPlayer.prototype,{buildstop:function(b,c,d,e){{var f=this;a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+f.id+'" title="'+f.options.stopText+'" aria-label="'+f.options.stopText+'"></button></div>').appendTo(c).click(function(){e.paused||e.pause(),e.currentTime>0&&(e.setCurrentTime(0),e.pause(),c.find(".mejs-time-current").width("0px"),c.find(".mejs-time-handle").css("left","0px"),c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)),c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)),d.find(".mejs-poster").show())})}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{progessHelpText:mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")}),a.extend(MediaElementPlayer.prototype,{buildprogress:function(b,c,d,e){a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></div>').appendTo(c),c.find(".mejs-time-buffering").hide();var f=this,g=c.find(".mejs-time-total"),h=c.find(".mejs-time-loaded"),i=c.find(".mejs-time-current"),j=c.find(".mejs-time-handle"),k=c.find(".mejs-time-float"),l=c.find(".mejs-time-float-current"),m=c.find(".mejs-time-slider"),n=function(a){var b,c=g.offset(),d=g.outerWidth(!0),f=0,h=0,i=0;b=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageX:a.pageX,e.duration&&(b<c.left?b=c.left:b>d+c.left&&(b=d+c.left),i=b-c.left,f=i/d,h=.02>=f?0:f*e.duration,o&&h!==e.currentTime&&e.setCurrentTime(h),mejs.MediaFeatures.hasTouch||(k.css("left",i),l.html(mejs.Utility.secondsToTimeCode(h)),k.show()))},o=!1,p=!1,q=0,r=!1,s=b.options.autoRewind,t=function(){var a=e.currentTime,b=mejs.i18n.t("Time Slider"),c=mejs.Utility.secondsToTimeCode(a),d=e.duration;m.attr({"aria-label":b,"aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":a,"aria-valuetext":c,role:"slider",tabindex:0})},u=function(){var a=new Date;a-q>=1e3&&e.play()};m.bind("focus",function(){b.options.autoRewind=!1}),m.bind("blur",function(){b.options.autoRewind=s}),m.bind("keydown",function(a){new Date-q>=1e3&&(r=e.paused);var b=a.keyCode,c=e.duration,d=e.currentTime;switch(b){case 37:d-=1;break;case 39:d+=1;break;case 38:d+=Math.floor(.1*c);break;case 40:d-=Math.floor(.1*c);break;case 36:d=0;break;case 35:d=c;break;case 10:return void(e.paused?e.play():e.pause());case 13:return void(e.paused?e.play():e.pause());default:return}return d=0>d?0:d>=c?c:Math.floor(d),q=new Date,r||e.pause(),d<e.duration&&!r&&setTimeout(u,1100),e.setCurrentTime(d),a.preventDefault(),a.stopPropagation(),!1}),g.bind("mousedown touchstart",function(a){(1===a.which||0===a.which)&&(o=!0,n(a),f.globalBind("mousemove.dur touchmove.dur",function(a){n(a)}),f.globalBind("mouseup.dur touchend.dur",function(){o=!1,k.hide(),f.globalUnbind(".dur")}))}).bind("mouseenter",function(){p=!0,f.globalBind("mousemove.dur",function(a){n(a)}),mejs.MediaFeatures.hasTouch||k.show()}).bind("mouseleave",function(){p=!1,o||(f.globalUnbind(".dur"),k.hide())}),e.addEventListener("progress",function(a){b.setProgressRail(a),b.setCurrentRail(a)},!1),e.addEventListener("timeupdate",function(a){b.setProgressRail(a),b.setCurrentRail(a),t(a)},!1),f.loaded=h,f.total=g,f.current=i,f.handle=j},setProgressRail:function(a){var b=this,c=void 0!==a?a.target:b.media,d=null;c&&c.buffered&&c.buffered.length>0&&c.buffered.end&&c.duration?d=c.buffered.end(0)/c.duration:c&&void 0!==c.bytesTotal&&c.bytesTotal>0&&void 0!==c.bufferedBytes?d=c.bufferedBytes/c.bytesTotal:a&&a.lengthComputable&&0!==a.total&&(d=a.loaded/a.total),null!==d&&(d=Math.min(1,Math.max(0,d)),b.loaded&&b.total&&b.loaded.width(b.total.width()*d))},setCurrentRail:function(){var a=this;if(void 0!==a.media.currentTime&&a.media.duration&&a.total&&a.handle){var b=Math.round(a.total.width()*a.media.currentTime/a.media.duration),c=b-Math.round(a.handle.outerWidth(!0)/2);a.current.width(b),a.handle.css("left",c)}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"}),a.extend(MediaElementPlayer.prototype,{buildcurrent:function(b,c,d,e){var f=this;a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">'+(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(c),f.currenttime=f.controls.find(".mejs-currenttime"),e.addEventListener("timeupdate",function(){b.updateCurrent()},!1)},buildduration:function(b,c,d,e){var f=this;c.children().last().find(".mejs-currenttime").length>0?a(f.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(f.options.duration>0?mejs.Utility.secondsToTimeCode(f.options.duration,f.options.alwaysShowHours||f.media.duration>3600,f.options.showTimecodeFrameCount,f.options.framesPerSecond||25):(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(c.find(".mejs-time")):(c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"),a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(f.options.duration>0?mejs.Utility.secondsToTimeCode(f.options.duration,f.options.alwaysShowHours||f.media.duration>3600,f.options.showTimecodeFrameCount,f.options.framesPerSecond||25):(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(c)),f.durationD=f.controls.find(".mejs-duration"),e.addEventListener("timeupdate",function(){b.updateDuration()},!1)},updateCurrent:function(){var a=this;a.currenttime&&a.currenttime.html(mejs.Utility.secondsToTimeCode(a.media.currentTime,a.options.alwaysShowHours||a.media.duration>3600,a.options.showTimecodeFrameCount,a.options.framesPerSecond||25))},updateDuration:function(){var a=this;a.container.toggleClass("mejs-long-video",a.media.duration>3600),a.durationD&&(a.options.duration>0||a.media.duration)&&a.durationD.html(mejs.Utility.secondsToTimeCode(a.options.duration>0?a.options.duration:a.media.duration,a.options.alwaysShowHours,a.options.showTimecodeFrameCount,a.options.framesPerSecond||25))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),allyVolumeControlText:mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),hideVolumeOnTouchDevices:!0,audioVolume:"horizontal",videoVolume:"vertical"}),a.extend(MediaElementPlayer.prototype,{buildvolume:function(b,c,d,e){if(!mejs.MediaFeatures.isAndroid&&!mejs.MediaFeatures.isiOS||!this.options.hideVolumeOnTouchDevices){var f=this,g=f.isVideo?f.options.videoVolume:f.options.audioVolume,h="horizontal"==g?a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">'+f.options.allyVolumeControlText+'</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c):a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">'+f.options.allyVolumeControlText+'</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),i=f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),j=f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),k=f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),l=f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),m=function(a,b){if(!i.is(":visible")&&"undefined"==typeof b)return i.show(),m(a,!0),void i.hide();a=Math.max(0,a),a=Math.min(a,1),0===a?h.removeClass("mejs-mute").addClass("mejs-unmute"):h.removeClass("mejs-unmute").addClass("mejs-mute");var c=j.position();if("vertical"==g){var d=j.height(),e=d-d*a;l.css("top",Math.round(c.top+e-l.height()/2)),k.height(d-e),k.css("top",c.top+e)}else{var f=j.width(),n=f*a;l.css("left",Math.round(c.left+n-l.width()/2)),k.width(Math.round(n))}},n=function(a){var b=null,c=j.offset();if("vertical"===g){var d=j.height(),f=(parseInt(j.css("top").replace(/px/,""),10),a.pageY-c.top);if(b=(d-f)/d,0===c.top||0===c.left)return}else{var h=j.width(),i=a.pageX-c.left;b=i/h}b=Math.max(0,b),b=Math.min(b,1),m(b),e.setMuted(0===b?!0:!1),e.setVolume(b)},o=!1,p=!1;h.hover(function(){i.show(),p=!0},function(){p=!1,o||"vertical"!=g||i.hide()});var q=function(){var a=Math.floor(100*e.volume);i.attr({"aria-label":mejs.i18n.t("volumeSlider"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a,"aria-valuetext":a+"%",role:"slider",tabindex:0})};i.bind("mouseover",function(){p=!0}).bind("mousedown",function(a){return n(a),f.globalBind("mousemove.vol",function(a){n(a)}),f.globalBind("mouseup.vol",function(){o=!1,f.globalUnbind(".vol"),p||"vertical"!=g||i.hide()}),o=!0,!1}).bind("keydown",function(a){var b=a.keyCode,c=e.volume;switch(b){case 38:c+=.1;break;case 40:c-=.1;break;default:return!0}return o=!1,m(c),e.setVolume(c),!1}).bind("blur",function(){i.hide()}),h.find("button").click(function(){e.setMuted(!e.muted)}),h.find("button").bind("focus",function(){i.show()}),e.addEventListener("volumechange",function(a){o||(e.muted?(m(0),h.removeClass("mejs-mute").addClass("mejs-unmute")):(m(e.volume),h.removeClass("mejs-unmute").addClass("mejs-mute"))),q(a)},!1),f.container.is(":visible")&&(m(b.options.startVolume),0===b.options.startVolume&&e.setMuted(!0),"native"===e.pluginType&&e.setVolume(b.options.startVolume))}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{usePluginFullScreen:!0,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")}),a.extend(MediaElementPlayer.prototype,{isFullScreen:!1,isNativeFullScreen:!1,isInIframe:!1,buildfullscreen:function(b,c,d,e){if(b.isVideo){if(b.isInIframe=window.location!=window.parent.location,mejs.MediaFeatures.hasTrueNativeFullScreen){var f=function(){b.isFullScreen&&(mejs.MediaFeatures.isFullScreen()?(b.isNativeFullScreen=!0,b.setControlsSize()):(b.isNativeFullScreen=!1,b.exitFullScreen()))};b.globalBind(mejs.MediaFeatures.fullScreenEventName,f)}var g=this,h=(b.container,a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+g.id+'" title="'+g.options.fullscreenText+'" aria-label="'+g.options.fullscreenText+'"></button></div>').appendTo(c));if("native"===g.media.pluginType||!g.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)h.click(function(){var a=mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||b.isFullScreen;a?b.exitFullScreen():b.enterFullScreen()});else{var i=null,j=function(){var a,b=document.createElement("x"),c=document.documentElement,d=window.getComputedStyle;return"pointerEvents"in b.style?(b.style.pointerEvents="auto",b.style.pointerEvents="x",c.appendChild(b),a=d&&"auto"===d(b,"").pointerEvents,c.removeChild(b),!!a):!1}();if(j&&!mejs.MediaFeatures.isOpera){var k,l,m=!1,n=function(){if(m){for(var a in o)o[a].hide();h.css("pointer-events",""),g.controls.css("pointer-events",""),g.media.removeEventListener("click",g.clickToPlayPauseCallback),m=!1}},o={},p=["top","left","right","bottom"],q=function(){var a=h.offset().left-g.container.offset().left,b=h.offset().top-g.container.offset().top,c=h.outerWidth(!0),d=h.outerHeight(!0),e=g.container.width(),f=g.container.height();for(k in o)o[k].css({position:"absolute",top:0,left:0});o.top.width(e).height(b),o.left.width(a).height(d).css({top:b}),o.right.width(e-a-c).height(d).css({top:b,left:a+c}),o.bottom.width(e).height(f-d-b).css({top:b+d})};for(g.globalBind("resize",function(){q()}),k=0,l=p.length;l>k;k++)o[p[k]]=a('<div class="mejs-fullscreen-hover" />').appendTo(g.container).mouseover(n).hide();h.on("mouseover",function(){if(!g.isFullScreen){var a=h.offset(),c=b.container.offset();e.positionFullscreenButton(a.left-c.left,a.top-c.top,!1),h.css("pointer-events","none"),g.controls.css("pointer-events","none"),g.media.addEventListener("click",g.clickToPlayPauseCallback);for(k in o)o[k].show();q(),m=!0}}),e.addEventListener("fullscreenchange",function(){g.isFullScreen=!g.isFullScreen,g.isFullScreen?g.media.removeEventListener("click",g.clickToPlayPauseCallback):g.media.addEventListener("click",g.clickToPlayPauseCallback),n()}),g.globalBind("mousemove",function(a){if(m){var b=h.offset();(a.pageY<b.top||a.pageY>b.top+h.outerHeight(!0)||a.pageX<b.left||a.pageX>b.left+h.outerWidth(!0))&&(h.css("pointer-events",""),g.controls.css("pointer-events",""),m=!1)
}})}else h.on("mouseover",function(){null!==i&&(clearTimeout(i),delete i);var a=h.offset(),c=b.container.offset();e.positionFullscreenButton(a.left-c.left,a.top-c.top,!0)}).on("mouseout",function(){null!==i&&(clearTimeout(i),delete i),i=setTimeout(function(){e.hideFullscreenButton()},1500)})}b.fullscreenBtn=h,g.globalBind("keydown",function(a){(mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||g.isFullScreen)&&27==a.keyCode&&b.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},containerSizeTimeout:null,enterFullScreen:function(){var b=this;if("native"===b.media.pluginType||!mejs.MediaFeatures.isFirefox&&!b.options.usePluginFullScreen){if(a(document.documentElement).addClass("mejs-fullscreen"),normalHeight=b.container.height(),normalWidth=b.container.width(),"native"===b.media.pluginType)if(mejs.MediaFeatures.hasTrueNativeFullScreen)mejs.MediaFeatures.requestFullScreen(b.container[0]),b.isInIframe&&setTimeout(function d(){if(b.isNativeFullScreen){var c=window.devicePixelRatio||1,e=.002,f=c*a(window).width(),g=screen.width,h=Math.abs(g-f),i=g*e;h>i?b.exitFullScreen():setTimeout(d,500)}},500);else if(mejs.MediaFeatures.hasSemiNativeFullScreen)return void b.media.webkitEnterFullscreen();if(b.isInIframe){var c=b.options.newWindowCallback(this);if(""!==c){if(!mejs.MediaFeatures.hasTrueNativeFullScreen)return b.pause(),void window.open(c,b.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");setTimeout(function(){b.isNativeFullScreen||(b.pause(),window.open(c,b.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no"))},250)}}b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"),b.containerSizeTimeout=setTimeout(function(){b.container.css({width:"100%",height:"100%"}),b.setControlsSize()},500),"native"===b.media.pluginType?b.$media.width("100%").height("100%"):(b.container.find(".mejs-shim").width("100%").height("100%"),b.media.setVideoSize(a(window).width(),a(window).height())),b.layers.children("div").width("100%").height("100%"),b.fullscreenBtn&&b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"),b.setControlsSize(),b.isFullScreen=!0,b.container.find(".mejs-captions-text").css("font-size",screen.width/b.width*1*100+"%"),b.container.find(".mejs-captions-position").css("bottom","45px")}},exitFullScreen:function(){var b=this;return clearTimeout(b.containerSizeTimeout),"native"!==b.media.pluginType&&mejs.MediaFeatures.isFirefox?void b.media.setFullscreen(!1):(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||b.isFullScreen)&&mejs.MediaFeatures.cancelFullScreen(),a(document.documentElement).removeClass("mejs-fullscreen"),b.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight),"native"===b.media.pluginType?b.$media.width(normalWidth).height(normalHeight):(b.container.find(".mejs-shim").width(normalWidth).height(normalHeight),b.media.setVideoSize(normalWidth,normalHeight)),b.layers.children("div").width(normalWidth).height(normalHeight),b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"),b.setControlsSize(),b.isFullScreen=!1,b.container.find(".mejs-captions-text").css("font-size",""),void b.container.find(".mejs-captions-position").css("bottom",""))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{speeds:["2.00","1.50","1.25","1.00","0.75"],defaultSpeed:"1.00",speedChar:"x"}),a.extend(MediaElementPlayer.prototype,{buildspeed:function(b,c,d,e){var f=this;if("native"==f.media.pluginType){var g=null,h=null,i='<div class="mejs-button mejs-speed-button"><button type="button">'+f.options.defaultSpeed+f.options.speedChar+'</button><div class="mejs-speed-selector"><ul>';-1===a.inArray(f.options.defaultSpeed,f.options.speeds)&&f.options.speeds.push(f.options.defaultSpeed),f.options.speeds.sort(function(a,b){return parseFloat(b)-parseFloat(a)});for(var j=0,k=f.options.speeds.length;k>j;j++)i+='<li><input type="radio" name="speed" value="'+f.options.speeds[j]+'" id="'+f.options.speeds[j]+'" '+(f.options.speeds[j]==f.options.defaultSpeed?" checked":"")+' /><label for="'+f.options.speeds[j]+'" '+(f.options.speeds[j]==f.options.defaultSpeed?' class="mejs-speed-selected"':"")+">"+f.options.speeds[j]+f.options.speedChar+"</label></li>";i+="</ul></div></div>",g=a(i).appendTo(c),h=g.find(".mejs-speed-selector"),playbackspeed=f.options.defaultSpeed,h.on("click",'input[type="radio"]',function(){var b=a(this).attr("value");playbackspeed=b,e.playbackRate=parseFloat(b),g.find("button").html(b+f.options.speedChar),g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"),g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")}),h.height(g.find(".mejs-speed-selector ul").outerHeight(!0)+g.find(".mejs-speed-translations").outerHeight(!0)).css("top",-1*h.height()+"px")}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:!0,toggleCaptionsButtonWhenOnlyOne:!1,slidesSelector:""}),a.extend(MediaElementPlayer.prototype,{hasChapters:!1,cleartracks:function(a){a&&(a.captions&&a.captions.remove(),a.chapters&&a.chapters.remove(),a.captionsText&&a.captionsText.remove(),a.captionsButton&&a.captionsButton.remove())},buildtracks:function(b,c,d,e){if(0!==b.tracks.length){var f,g=this;if(g.domNode.textTracks)for(f=g.domNode.textTracks.length-1;f>=0;f--)g.domNode.textTracks[f].mode="hidden";g.cleartracks(b,c,d,e),b.chapters=a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(),b.captions=a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" role="log" aria-live="assertive" aria-atomic="false"><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(),b.captionsText=b.captions.find(".mejs-captions-text"),b.captionsButton=a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+g.id+'" title="'+g.options.tracksText+'" aria-label="'+g.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+b.id+'_captions" id="'+b.id+'_captions_none" value="none" checked="checked" /><label for="'+b.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(c);var h=0;for(f=0;f<b.tracks.length;f++)"subtitles"==b.tracks[f].kind&&h++;for(g.options.toggleCaptionsButtonWhenOnlyOne&&1==h?b.captionsButton.on("click",function(){lang=null===b.selectedTrack?b.tracks[0].srclang:"none",b.setTrack(lang)}):(b.captionsButton.on("mouseenter focusin",function(){a(this).find(".mejs-captions-selector").css("visibility","visible")}).on("click","input[type=radio]",function(){lang=this.value,b.setTrack(lang)}),b.captionsButton.on("mouseleave focusout",function(){a(this).find(".mejs-captions-selector").css("visibility","hidden")})),b.options.alwaysShowControls?b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):b.container.bind("controlsshown",function(){b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")}),b.trackToLoad=-1,b.selectedTrack=null,b.isLoadingTrack=!1,f=0;f<b.tracks.length;f++)"subtitles"==b.tracks[f].kind&&b.addTrackButton(b.tracks[f].srclang,b.tracks[f].label);b.loadNextTrack(),e.addEventListener("timeupdate",function(){b.displayCaptions()},!1),""!==b.options.slidesSelector&&(b.slidesContainer=a(b.options.slidesSelector),e.addEventListener("timeupdate",function(){b.displaySlides()},!1)),e.addEventListener("loadedmetadata",function(){b.displayChapters()},!1),b.container.hover(function(){b.hasChapters&&(b.chapters.css("visibility","visible"),b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))},function(){b.hasChapters&&!e.paused&&b.chapters.fadeOut(200,function(){a(this).css("visibility","hidden"),a(this).css("display","block")})}),null!==b.node.getAttribute("autoplay")&&b.chapters.css("visibility","hidden")}},setTrack:function(a){var b,c=this;if("none"==a)c.selectedTrack=null,c.captionsButton.removeClass("mejs-captions-enabled");else for(b=0;b<c.tracks.length;b++)if(c.tracks[b].srclang==a){null===c.selectedTrack&&c.captionsButton.addClass("mejs-captions-enabled"),c.selectedTrack=c.tracks[b],c.captions.attr("lang",c.selectedTrack.srclang),c.displayCaptions();break}},loadNextTrack:function(){var a=this;a.trackToLoad++,a.trackToLoad<a.tracks.length?(a.isLoadingTrack=!0,a.loadTrack(a.trackToLoad)):(a.isLoadingTrack=!1,a.checkForTracks())},loadTrack:function(b){var c=this,d=c.tracks[b],e=function(){d.isLoaded=!0,c.enableTrackButton(d.srclang,d.label),c.loadNextTrack()};a.ajax({url:d.src,dataType:"text",success:function(a){d.entries="string"==typeof a&&/<tt\s+xml/gi.exec(a)?mejs.TrackFormatParser.dfxp.parse(a):mejs.TrackFormatParser.webvtt.parse(a),e(),"chapters"==d.kind&&c.media.addEventListener("play",function(){c.media.duration>0&&c.displayChapters(d)},!1),"slides"==d.kind&&c.setupSlides(d)},error:function(){c.loadNextTrack()}})},enableTrackButton:function(b,c){var d=this;""===c&&(c=mejs.language.codes[b]||b),d.captionsButton.find("input[value="+b+"]").prop("disabled",!1).siblings("label").html(c),d.options.startLanguage==b&&a("#"+d.id+"_captions_"+b).prop("checked",!0).trigger("click"),d.adjustLanguageBox()},addTrackButton:function(b,c){var d=this;""===c&&(c=mejs.language.codes[b]||b),d.captionsButton.find("ul").append(a('<li><input type="radio" name="'+d.id+'_captions" id="'+d.id+"_captions_"+b+'" value="'+b+'" disabled="disabled" /><label for="'+d.id+"_captions_"+b+'">'+c+" (loading)</label></li>")),d.adjustLanguageBox(),d.container.find(".mejs-captions-translations option[value="+b+"]").remove()},adjustLanguageBox:function(){var a=this;a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0)+a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))},checkForTracks:function(){var a=this,b=!1;if(a.options.hideCaptionsButtonWhenEmpty){for(i=0;i<a.tracks.length;i++)if("subtitles"==a.tracks[i].kind){b=!0;break}b||(a.captionsButton.hide(),a.setControlsSize())}},displayCaptions:function(){if("undefined"!=typeof this.tracks){var a,b=this,c=b.selectedTrack;if(null!==c&&c.isLoaded){for(a=0;a<c.entries.times.length;a++)if(b.media.currentTime>=c.entries.times[a].start&&b.media.currentTime<=c.entries.times[a].stop)return b.captionsText.html(c.entries.text[a]).attr("class","mejs-captions-text "+(c.entries.times[a].identifier||"")),void b.captions.show().height(0);b.captions.hide()}else b.captions.hide()}},setupSlides:function(a){var b=this;b.slides=a,b.slides.entries.imgs=[b.slides.entries.text.length],b.showSlide(0)},showSlide:function(b){if("undefined"!=typeof this.tracks&&"undefined"!=typeof this.slidesContainer){var c=this,d=c.slides.entries.text[b],e=c.slides.entries.imgs[b];"undefined"==typeof e||"undefined"==typeof e.fadeIn?c.slides.entries.imgs[b]=e=a('<img src="'+d+'">').on("load",function(){e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()}):e.is(":visible")||e.is(":animated")||e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if("undefined"!=typeof this.slides){var a,b=this,c=b.slides;for(a=0;a<c.entries.times.length;a++)if(b.media.currentTime>=c.entries.times[a].start&&b.media.currentTime<=c.entries.times[a].stop)return void b.showSlide(a)}},displayChapters:function(){var a,b=this;for(a=0;a<b.tracks.length;a++)if("chapters"==b.tracks[a].kind&&b.tracks[a].isLoaded){b.drawChapters(b.tracks[a]),b.hasChapters=!0;break}},drawChapters:function(b){var c,d,e=this,f=0,g=0;for(e.chapters.empty(),c=0;c<b.entries.times.length;c++)d=b.entries.times[c].stop-b.entries.times[c].start,f=Math.floor(d/e.media.duration*100),(f+g>100||c==b.entries.times.length-1&&100>f+g)&&(f=100-g),e.chapters.append(a('<div class="mejs-chapter" rel="'+b.entries.times[c].start+'" style="left: '+g.toString()+"%;width: "+f.toString()+'%;"><div class="mejs-chapter-block'+(c==b.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+b.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(b.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(b.entries.times[c].stop)+"</span></div></div>")),g+=f;e.chapters.find("div.mejs-chapter").click(function(){e.media.setCurrentTime(parseFloat(a(this).attr("rel"))),e.media.paused&&e.media.play()}),e.chapters.show()}}),mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",fl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}},mejs.TrackFormatParser={webvtt:{pattern_timecode:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(b){for(var c,d,e,f=0,g=mejs.TrackFormatParser.split2(b,/\r?\n/),h={text:[],times:[]};f<g.length;f++){if(c=this.pattern_timecode.exec(g[f]),c&&f<g.length){for(f-1>=0&&""!==g[f-1]&&(e=g[f-1]),f++,d=g[f],f++;""!==g[f]&&f<g.length;)d=d+"\n"+g[f],f++;d=a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),h.text.push(d),h.times.push({identifier:e,start:0===mejs.Utility.convertSMPTEtoSeconds(c[1])?.2:mejs.Utility.convertSMPTEtoSeconds(c[1]),stop:mejs.Utility.convertSMPTEtoSeconds(c[3]),settings:c[5]})}e=""}return h}},dfxp:{parse:function(b){b=a(b).filter("tt");var c,d,e=0,f=b.children("div").eq(0),g=f.find("p"),h=b.find("#"+f.attr("style")),i={text:[],times:[]};if(h.length){var j=h.removeAttr("id").get(0).attributes;if(j.length)for(c={},e=0;e<j.length;e++)c[j[e].name.split(":")[1]]=j[e].value}for(e=0;e<g.length;e++){var k,l={start:null,stop:null,style:null};if(g.eq(e).attr("begin")&&(l.start=mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))),!l.start&&g.eq(e-1).attr("end")&&(l.start=mejs.Utility.convertSMPTEtoSeconds(g.eq(e-1).attr("end"))),g.eq(e).attr("end")&&(l.stop=mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))),!l.stop&&g.eq(e+1).attr("begin")&&(l.stop=mejs.Utility.convertSMPTEtoSeconds(g.eq(e+1).attr("begin"))),c){k="";for(var m in c)k+=m+":"+c[m]+";"}k&&(l.style=k),0===l.start&&(l.start=.2),i.times.push(l),d=a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),i.text.push(d),0===i.times.start&&(i.times.start=2)}return i}},split2:function(a,b){return a.split(b)}},3!="x\n\ny".split(/\n/gi).length&&(mejs.TrackFormatParser.split2=function(a,b){var c,d=[],e="";for(c=0;c<a.length;c++)e+=a.substring(c,c+1),b.test(e)&&(d.push(e.replace(b,"")),e="");return d.push(e),d})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){return"undefined"==typeof a.enterFullScreen?null:mejs.i18n.t(a.isFullScreen?"Turn off Fullscreen":"Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return mejs.i18n.t(a.media.muted?"Unmute":"Mute")},click:function(a){a.setMuted(a.media.muted?!1:!0)}},{isSeparator:!0},{render:function(){return mejs.i18n.t("Download Video")},click:function(a){window.location.href=a.media.currentSrc}}]}),a.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(b){b.contextMenu=a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(),b.container.bind("contextmenu",function(a){return b.isContextMenuEnabled?(a.preventDefault(),b.renderContextMenu(a.clientX-1,a.clientY-1),!1):void 0}),b.container.bind("click",function(){b.contextMenu.hide()}),b.contextMenu.bind("mouseleave",function(){b.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},isContextMenuEnabled:!0,enableContextMenu:function(){this.isContextMenuEnabled=!0},disableContextMenu:function(){this.isContextMenuEnabled=!1},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer(),a.contextMenuTimer=setTimeout(function(){a.hideContextMenu(),a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;null!=a&&(clearTimeout(a),delete a,a=null)},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(b,c){for(var d=this,e="",f=d.options.contextMenuItems,g=0,h=f.length;h>g;g++)if(f[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var i=f[g].render(d);null!=i&&(e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+1e6*Math.random()+'">'+i+"</div>")}d.contextMenu.empty().append(a(e)).css({top:c,left:b}).show(),d.contextMenu.find(".mejs-contextmenu-item").each(function(){var b=a(this),c=parseInt(b.data("itemindex"),10),e=d.options.contextMenuItems[c];"undefined"!=typeof e.show&&e.show(b,d),b.click(function(){"undefined"!=typeof e.click&&e.click(d),d.contextMenu.hide()})}),setTimeout(function(){d.killControlsTimer("rev3")},100)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")}),a.extend(MediaElementPlayer.prototype,{buildpostroll:function(b,c,d){var e=this,f=e.container.find('link[rel="postroll"]').attr("href");"undefined"!=typeof f&&(b.postroll=a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+e.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(),e.media.addEventListener("ended",function(){a.ajax({dataType:"html",url:f,success:function(a){d.find(".mejs-postroll-layer-content").html(a)}}),b.postroll.show()},!1))}})}(mejs.$);

/*
 * jQuery easyShare plugin
 * Update on 28 december 2011
 * Version 1.0
 *
 * Licensed under GPL <http://en.wikipedia.org/wiki/GNU_General_Public_License>
 * Copyright (c) 2008, Stéphane Litou <contact@mushtitude.com>
 * All rights reserved.
 *
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function($){
    $.fn.easyPaginate = function (options) {
        var defaults = {
            paginateElement: 'li',
            hashPage: 'page',
            elementsPerPage: 10,
            effect: 'default',
            slideOffset: 200,
            firstButton: true,
            firstButtonText: '<<',
            lastButton: true,
            lastButtonText: '>>',
            prevButton: true,
            prevButtonText: '<',
            nextButton: true,
            nextButtonText: '>',
            onFinish : function() {
            }
        }

        return this.each (function (instance) {

            var plugin = Object;
            plugin.el = $(this);
            plugin.el.addClass('easyPaginateList');

            plugin.settings = {
                pages: 0,
                objElements: Object,
                currentPage: 1
            }

            var getNbOfPages = function() {
                return Math.ceil(plugin.settings.objElements.length / plugin.settings.elementsPerPage);
            };

            var displayNav = function() {
                htmlNav = '<div class="easyPaginateNav">';

                if(plugin.settings.firstButton) {
                    htmlNav += '<a href="#'+plugin.settings.hashPage+':1" title="First page" rel="1" class="first">'+plugin.settings.firstButtonText+'</a>';
                }

                if(plugin.settings.prevButton) {
                    htmlNav += '<a href="" title="Previous" rel="" class="prev">'+plugin.settings.prevButtonText+'</a>';
                }

                for(i = 1;i <= plugin.settings.pages;i++) {
                    htmlNav += '<a href="#'+plugin.settings.hashPage+':'+i+'" title="Page '+i+'" rel="'+i+'" class="page">'+i+'</a>';
                };

                if(plugin.settings.nextButton) {
                    htmlNav += '<a href="" title="Next" rel="" class="next">'+plugin.settings.nextButtonText+'</a>';
                }

                if(plugin.settings.lastButton) {
                    htmlNav += '<a href="#'+plugin.settings.hashPage+':'+plugin.settings.pages+'" title="Last page" rel="'+plugin.settings.pages+'" class="last">'+plugin.settings.lastButtonText+'</a>';
                }

                htmlNav += '</div>';
                plugin.nav = $(htmlNav);
                plugin.nav.css({
                    'width': plugin.el.width()
                });
                plugin.el.after(plugin.nav);

                $('.easyPaginateNav a.page, .easyPaginateNav a.first, .easyPaginateNav a.last', plugin).on('click', function(e) {
                    e.preventDefault();
                    displayPage($(this).attr('rel'));
                });

                $('.easyPaginateNav a.prev', plugin).on('click', function(e) {
                    e.preventDefault();
                    page = plugin.settings.currentPage > 1?parseInt(plugin.settings.currentPage) - 1:1;
                    displayPage(page);
                });

                $('.easyPaginateNav a.next', plugin).on('click', function(e) {
                    e.preventDefault();
                    page = plugin.settings.currentPage < plugin.settings.pages?parseInt(plugin.settings.currentPage) + 1:plugin.settings.pages;
                    displayPage(page);
                });
            };

            var displayPage = function(page, forceEffect) {
                if(plugin.settings.currentPage != page) {
                    plugin.settings.currentPage = parseInt(page);
                    offsetStart = (page - 1) * plugin.settings.elementsPerPage;
                    offsetEnd = page * plugin.settings.elementsPerPage;
                    if(typeof(forceEffect) != 'undefined') {
                        eval("transition_"+forceEffect+"("+offsetStart+", "+offsetEnd+")");
                    }else {
                        eval("transition_"+plugin.settings.effect+"("+offsetStart+", "+offsetEnd+")");
                    }

                    plugin.nav.find('.current').removeClass('current');
                    plugin.nav.find('a.page:eq('+(page - 1)+')').addClass('current');

                    switch(plugin.settings.currentPage) {
                        case 1:
                            $('.easyPaginateNav a', plugin).removeClass('disabled');
                            $('.easyPaginateNav a.first, .easyPaginateNav a.prev', plugin).addClass('disabled');
                            break;
                        case plugin.settings.pages:
                            $('.easyPaginateNav a', plugin).removeClass('disabled');
                            $('.easyPaginateNav a.last, .easyPaginateNav a.next', plugin).addClass('disabled');
                            break;
                        default:
                            $('.easyPaginateNav a', plugin).removeClass('disabled');
                            break;
                    }

                    plugin.settings.onFinish();
                }
            };

            var transition_default = function(offsetStart, offsetEnd) {
                plugin.currentElements.hide();
                plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
                plugin.el.html(plugin.currentElements);
                plugin.currentElements.show();
            };

            var transition_fade = function(offsetStart, offsetEnd) {
                plugin.currentElements.fadeOut();
                plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
                plugin.el.html(plugin.currentElements);
                plugin.currentElements.fadeIn();
            };

            var transition_slide = function(offsetStart, offsetEnd) {
                plugin.currentElements.animate({
                    'margin-left': plugin.settings.slideOffset * -1,
                    'opacity': 0
                }, function() {
                    $(this).remove();
                });

                plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
                plugin.currentElements.css({
                    'margin-left': plugin.settings.slideOffset,
                    'display': 'block',
                    'opacity': 0,
                    'min-width': plugin.el.width() / 2
                });
                plugin.el.html(plugin.currentElements);
                plugin.currentElements.animate({
                    'margin-left': 0,
                    'opacity': 1
                });
            };

            var transition_climb = function(offsetStart, offsetEnd) {
                plugin.currentElements.each(function(i) {
                    var $objThis = $(this);
                    setTimeout(function() {
                        $objThis.animate({
                            'margin-left': plugin.settings.slideOffset * -1,
                            'opacity': 0
                        }, function() {
                            $(this).remove();
                        });
                    }, i * 200);
                });

                plugin.currentElements = plugin.settings.objElements.slice(offsetStart, offsetEnd).clone();
                plugin.currentElements.css({
                    'margin-left': plugin.settings.slideOffset,
                    'display': 'block',
                    'opacity': 0,
                    'min-width': plugin.el.width() / 2
                });
                plugin.el.html(plugin.currentElements);
                plugin.currentElements.each(function(i) {
                    var $objThis = $(this);
                    setTimeout(function() {
                        $objThis.animate({
                            'margin-left': 0,
                            'opacity': 1
                        });
                    }, i * 200);
                });
            };

            plugin.settings = $.extend({}, defaults, options);

            plugin.currentElements = $([]);
            plugin.settings.objElements = plugin.el.find(plugin.settings.paginateElement);
            plugin.settings.pages = getNbOfPages();
            if(plugin.settings.pages > 1) {
                plugin.el.html();

                // Here we go
                displayNav();

                page = 1;
                if(document.location.hash.indexOf('#'+plugin.settings.hashPage+':') != -1) {
                    page = parseInt(document.location.hash.replace('#'+plugin.settings.hashPage+':', ''));
                    if(page.length <= 0 || page < 1 || page > plugin.settings.pages) {
                        page = 1;
                    }
                }

                displayPage(page, 'default');
            } else {
                plugin.settings.onFinish();
            }
        });
    };
})(jQuery);

/*!
 PowerTip - v1.2.0 - 2013-04-03
 http://stevenbenner.github.com/jquery-powertip/
 Copyright (c) 2013 Steven Benner (http://stevenbenner.com/).
 Released under MIT license.
 https://raw.github.com/stevenbenner/jquery-powertip/master/LICENSE.txt
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    // useful private variables
    var $document = $(document),
        $window = $(window),
        $body = $('body');

    // constants
    var DATA_DISPLAYCONTROLLER = 'displayController',
        DATA_HASACTIVEHOVER = 'hasActiveHover',
        DATA_FORCEDOPEN = 'forcedOpen',
        DATA_HASMOUSEMOVE = 'hasMouseMove',
        DATA_MOUSEONTOTIP = 'mouseOnToPopup',
        DATA_ORIGINALTITLE = 'originalTitle',
        DATA_POWERTIP = 'powertip',
        DATA_POWERTIPJQ = 'powertipjq',
        DATA_POWERTIPTARGET = 'powertiptarget',
        RAD2DEG = 180 / Math.PI;

    /**
     * Session data
     * Private properties global to all powerTip instances
     */
    var session = {
        isTipOpen: false,
        isFixedTipOpen: false,
        isClosing: false,
        tipOpenImminent: false,
        activeHover: null,
        currentX: 0,
        currentY: 0,
        previousX: 0,
        previousY: 0,
        desyncTimeout: null,
        mouseTrackingActive: false,
        delayInProgress: false,
        windowWidth: 0,
        windowHeight: 0,
        scrollTop: 0,
        scrollLeft: 0
    };

    /**
     * Collision enumeration
     * @enum {number}
     */
    var Collision = {
        none: 0,
        top: 1,
        bottom: 2,
        left: 4,
        right: 8
    };

    /**
     * Display hover tooltips on the matched elements.
     * @param {(Object|string)} opts The options object to use for the plugin, or
     *     the name of a method to invoke on the first matched element.
     * @param {*=} [arg] Argument for an invoked method (optional).
     * @return {jQuery} jQuery object for the matched selectors.
     */
    $.fn.powerTip = function(opts, arg) {
        // don't do any work if there were no matched elements
        if (!this.length) {
            return this;
        }

        // handle api method calls on the plugin, e.g. powerTip('hide')
        if ($.type(opts) === 'string' && $.powerTip[opts]) {
            return $.powerTip[opts].call(this, this, arg);
        }

        // extend options and instantiate TooltipController
        var options = $.extend({}, $.fn.powerTip.defaults, opts),
            tipController = new TooltipController(options);

        // hook mouse and viewport dimension tracking
        initTracking();

        // setup the elements
        this.each(function elementSetup() {
            var $this = $(this),
                dataPowertip = $this.data(DATA_POWERTIP),
                dataElem = $this.data(DATA_POWERTIPJQ),
                dataTarget = $this.data(DATA_POWERTIPTARGET),
                title;

            // handle repeated powerTip calls on the same element by destroying the
            // original instance hooked to it and replacing it with this call
            if ($this.data(DATA_DISPLAYCONTROLLER)) {
                $.powerTip.destroy($this);
            }

            // attempt to use title attribute text if there is no data-powertip,
            // data-powertipjq or data-powertiptarget. If we do use the title
            // attribute, delete the attribute so the browser will not show it
            title = $this.attr('title');
            if (!dataPowertip && !dataTarget && !dataElem && title) {
                $this.data(DATA_POWERTIP, title);
                $this.data(DATA_ORIGINALTITLE, title);
                $this.removeAttr('title');
            }

            // create hover controllers for each element
            $this.data(
                DATA_DISPLAYCONTROLLER,
                new DisplayController($this, options, tipController)
            );
        });

        // attach events to matched elements if the manual options is not enabled
        if (!options.manual) {
            this.on({
                // mouse events
                'mouseenter.powertip': function elementMouseEnter(event) {
                    $.powerTip.show(this, event);
                },
                'mouseleave.powertip': function elementMouseLeave() {
                    $.powerTip.hide(this);
                },
                // keyboard events
                'focus.powertip': function elementFocus() {
                    $.powerTip.show(this);
                },
                'blur.powertip': function elementBlur() {
                    $.powerTip.hide(this, true);
                },
                'keydown.powertip': function elementKeyDown(event) {
                    // close tooltip when the escape key is pressed
                    if (event.keyCode === 27) {
                        $.powerTip.hide(this, true);
                    }
                }
            });
        }

        return this;
    };

    /**
     * Default options for the powerTip plugin.
     */
    $.fn.powerTip.defaults = {
        fadeInTime: 200,
        fadeOutTime: 100,
        followMouse: false,
        popupId: 'powerTip',
        intentSensitivity: 7,
        intentPollInterval: 100,
        closeDelay: 100,
        placement: 'n',
        smartPlacement: false,
        offset: 10,
        mouseOnToPopup: false,
        manual: false
    };

    /**
     * Default smart placement priority lists.
     * The first item in the array is the highest priority, the last is the lowest.
     * The last item is also the default, which will be used if all previous options
     * do not fit.
     */
    $.fn.powerTip.smartPlacementLists = {
        n: ['n', 'ne', 'nw', 's'],
        e: ['e', 'ne', 'se', 'w', 'nw', 'sw', 'n', 's', 'e'],
        s: ['s', 'se', 'sw', 'n'],
        w: ['w', 'nw', 'sw', 'e', 'ne', 'se', 'n', 's', 'w'],
        nw: ['nw', 'w', 'sw', 'n', 's', 'se', 'nw'],
        ne: ['ne', 'e', 'se', 'n', 's', 'sw', 'ne'],
        sw: ['sw', 'w', 'nw', 's', 'n', 'ne', 'sw'],
        se: ['se', 'e', 'ne', 's', 'n', 'nw', 'se'],
        'nw-alt': ['nw-alt', 'n', 'ne-alt', 'sw-alt', 's', 'se-alt', 'w', 'e'],
        'ne-alt': ['ne-alt', 'n', 'nw-alt', 'se-alt', 's', 'sw-alt', 'e', 'w'],
        'sw-alt': ['sw-alt', 's', 'se-alt', 'nw-alt', 'n', 'ne-alt', 'w', 'e'],
        'se-alt': ['se-alt', 's', 'sw-alt', 'ne-alt', 'n', 'nw-alt', 'e', 'w']
    };

    /**
     * Public API
     */
    $.powerTip = {
        /**
         * Attempts to show the tooltip for the specified element.
         * @param {jQuery|Element} element The element to open the tooltip for.
         * @param {jQuery.Event=} event jQuery event for hover intent and mouse
         *     tracking (optional).
         */
        show: function apiShowTip(element, event) {
            if (event) {
                trackMouse(event);
                session.previousX = event.pageX;
                session.previousY = event.pageY;
                $(element).data(DATA_DISPLAYCONTROLLER).show();
            } else {
                $(element).first().data(DATA_DISPLAYCONTROLLER).show(true, true);
            }
            return element;
        },

        /**
         * Repositions the tooltip on the element.
         * @param {jQuery|Element} element The element the tooltip is shown for.
         */
        reposition: function apiResetPosition(element) {
            $(element).first().data(DATA_DISPLAYCONTROLLER).resetPosition();
            return element;
        },

        /**
         * Attempts to close any open tooltips.
         * @param {(jQuery|Element)=} element The element with the tooltip that
         *     should be closed (optional).
         * @param {boolean=} immediate Disable close delay (optional).
         */
        hide: function apiCloseTip(element, immediate) {
            if (element) {
                $(element).first().data(DATA_DISPLAYCONTROLLER).hide(immediate);
            } else {
                if (session.activeHover) {
                    session.activeHover.data(DATA_DISPLAYCONTROLLER).hide(true);
                }
            }
            return element;
        },

        /**
         * Destroy and roll back any powerTip() instance on the specified element.
         * @param {jQuery|Element} element The element with the powerTip instance.
         */
        destroy: function apiDestroy(element) {
            $(element).off('.powertip').each(function destroy() {
                var $this = $(this),
                    dataAttributes = [
                        DATA_ORIGINALTITLE,
                        DATA_DISPLAYCONTROLLER,
                        DATA_HASACTIVEHOVER,
                        DATA_FORCEDOPEN
                    ];

                if ($this.data(DATA_ORIGINALTITLE)) {
                    $this.attr('title', $this.data(DATA_ORIGINALTITLE));
                    dataAttributes.push(DATA_POWERTIP);
                }

                $this.removeData(dataAttributes);
            });
            return element;
        }
    };

    // API aliasing
    $.powerTip.showTip = $.powerTip.show;
    $.powerTip.closeTip = $.powerTip.hide;

    /**
     * Creates a new CSSCoordinates object.
     * @private
     * @constructor
     */
    function CSSCoordinates() {
        var me = this;

        // initialize object properties
        me.top = 'auto';
        me.left = 'auto';
        me.right = 'auto';
        me.bottom = 'auto';

        /**
         * Set a property to a value.
         * @private
         * @param {string} property The name of the property.
         * @param {number} value The value of the property.
         */
        me.set = function(property, value) {
            if ($.isNumeric(value)) {
                me[property] = Math.round(value);
            }
        };
    }

    /**
     * Creates a new tooltip display controller.
     * @private
     * @constructor
     * @param {jQuery} element The element that this controller will handle.
     * @param {Object} options Options object containing settings.
     * @param {TooltipController} tipController The TooltipController object for
     *     this instance.
     */
    function DisplayController(element, options, tipController) {
        var hoverTimer = null;

        /**
         * Begins the process of showing a tooltip.
         * @private
         * @param {boolean=} immediate Skip intent testing (optional).
         * @param {boolean=} forceOpen Ignore cursor position and force tooltip to
         *     open (optional).
         */
        function openTooltip(immediate, forceOpen) {
            cancelTimer();
            if (!element.data(DATA_HASACTIVEHOVER)) {
                if (!immediate) {
                    session.tipOpenImminent = true;
                    hoverTimer = setTimeout(
                        function intentDelay() {
                            hoverTimer = null;
                            checkForIntent();
                        },
                        options.intentPollInterval
                    );
                } else {
                    if (forceOpen) {
                        element.data(DATA_FORCEDOPEN, true);
                    }
                    tipController.showTip(element);
                }
            }
        }

        /**
         * Begins the process of closing a tooltip.
         * @private
         * @param {boolean=} disableDelay Disable close delay (optional).
         */
        function closeTooltip(disableDelay) {
            cancelTimer();
            session.tipOpenImminent = false;
            if (element.data(DATA_HASACTIVEHOVER)) {
                element.data(DATA_FORCEDOPEN, false);
                if (!disableDelay) {
                    session.delayInProgress = true;
                    hoverTimer = setTimeout(
                        function closeDelay() {
                            hoverTimer = null;
                            tipController.hideTip(element);
                            session.delayInProgress = false;
                        },
                        options.closeDelay
                    );
                } else {
                    tipController.hideTip(element);
                }
            }
        }

        /**
         * Checks mouse position to make sure that the user intended to hover on the
         * specified element before showing the tooltip.
         * @private
         */
        function checkForIntent() {
            // calculate mouse position difference
            var xDifference = Math.abs(session.previousX - session.currentX),
                yDifference = Math.abs(session.previousY - session.currentY),
                totalDifference = xDifference + yDifference;

            // check if difference has passed the sensitivity threshold
            if (totalDifference < options.intentSensitivity) {
                tipController.showTip(element);
            } else {
                // try again
                session.previousX = session.currentX;
                session.previousY = session.currentY;
                openTooltip();
            }
        }

        /**
         * Cancels active hover timer.
         * @private
         */
        function cancelTimer() {
            hoverTimer = clearTimeout(hoverTimer);
            session.delayInProgress = false;
        }

        /**
         * Repositions the tooltip on this element.
         * @private
         */
        function repositionTooltip() {
            tipController.resetPosition(element);
        }

        // expose the methods
        this.show = openTooltip;
        this.hide = closeTooltip;
        this.cancel = cancelTimer;
        this.resetPosition = repositionTooltip;
    }

    /**
     * Creates a new Placement Calculator.
     * @private
     * @constructor
     */
    function PlacementCalculator() {
        /**
         * Compute the CSS position to display a tooltip at the specified placement
         * relative to the specified element.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         * @param {string} placement The placement for the tooltip.
         * @param {number} tipWidth Width of the tooltip element in pixels.
         * @param {number} tipHeight Height of the tooltip element in pixels.
         * @param {number} offset Distance to offset tooltips in pixels.
         * @return {CSSCoordinates} A CSSCoordinates object with the position.
         */
        function computePlacementCoords(element, placement, tipWidth, tipHeight, offset) {
            var placementBase = placement.split('-')[0], // ignore 'alt' for corners
                coords = new CSSCoordinates(),
                position;

            if (isSvgElement(element)) {
                position = getSvgPlacement(element, placementBase);
            } else {
                position = getHtmlPlacement(element, placementBase);
            }

            // calculate the appropriate x and y position in the document
            switch (placement) {
                case 'n':
                    coords.set('left', position.left - (tipWidth / 2));
                    coords.set('bottom', session.windowHeight - position.top + offset);
                    break;
                case 'e':
                    coords.set('left', position.left + offset);
                    coords.set('top', position.top - (tipHeight / 2));
                    break;
                case 's':
                    coords.set('left', position.left - (tipWidth / 2));
                    coords.set('top', position.top + offset);
                    break;
                case 'w':
                    coords.set('top', position.top - (tipHeight / 2));
                    coords.set('right', session.windowWidth - position.left + offset);
                    break;
                case 'nw':
                    coords.set('bottom', session.windowHeight - position.top + offset);
                    coords.set('right', session.windowWidth - position.left - 20);
                    break;
                case 'nw-alt':
                    coords.set('left', position.left);
                    coords.set('bottom', session.windowHeight - position.top + offset);
                    break;
                case 'ne':
                    coords.set('left', position.left - 20);
                    coords.set('bottom', session.windowHeight - position.top + offset);
                    break;
                case 'ne-alt':
                    coords.set('bottom', session.windowHeight - position.top + offset);
                    coords.set('right', session.windowWidth - position.left);
                    break;
                case 'sw':
                    coords.set('top', position.top + offset);
                    coords.set('right', session.windowWidth - position.left - 20);
                    break;
                case 'sw-alt':
                    coords.set('left', position.left);
                    coords.set('top', position.top + offset);
                    break;
                case 'se':
                    coords.set('left', position.left - 20);
                    coords.set('top', position.top + offset);
                    break;
                case 'se-alt':
                    coords.set('top', position.top + offset);
                    coords.set('right', session.windowWidth - position.left);
                    break;
            }

            return coords;
        }

        /**
         * Finds the tooltip attachment point in the document for a HTML DOM element
         * for the specified placement.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         * @param {string} placement The placement for the tooltip.
         * @return {Object} An object with the top,left position values.
         */
        function getHtmlPlacement(element, placement) {
            var objectOffset = element.offset(),
                objectWidth = element.outerWidth(),
                objectHeight = element.outerHeight(),
                left,
                top;

            // calculate the appropriate x and y position in the document
            switch (placement) {
                case 'n':
                    //left = objectOffset.left + objectWidth / 2;
                    var ss = (session.windowWidth - 1200) / 2
                    left = (objectOffset.left - ss) + (objectWidth / 2);
                    top = objectOffset.top - 10;
                    break;
                case 'e':
                    left = objectOffset.left + objectWidth;
                    top = objectOffset.top + objectHeight / 2;
                    break;
                case 's':
                    left = objectOffset.left + objectWidth / 2;
                    top = objectOffset.top + objectHeight;
                    break;
                case 'w':
                    left = objectOffset.left;
                    top = objectOffset.top + objectHeight / 2;
                    break;
                case 'nw':
                    left = objectOffset.left;
                    top = objectOffset.top;
                    break;
                case 'ne':
                    left = objectOffset.left + objectWidth;
                    top = objectOffset.top;
                    break;
                case 'sw':
                    left = objectOffset.left;
                    top = objectOffset.top + objectHeight;
                    break;
                case 'se':
                    left = objectOffset.left + objectWidth;
                    top = objectOffset.top + objectHeight;
                    break;
            }

            return {
                top: top,
                left: left
            };
        }

        /**
         * Finds the tooltip attachment point in the document for a SVG element for
         * the specified placement.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         * @param {string} placement The placement for the tooltip.
         * @return {Object} An object with the top,left position values.
         */
        function getSvgPlacement(element, placement) {
            var svgElement = element.closest('svg')[0],
                domElement = element[0],
                point = svgElement.createSVGPoint(),
                boundingBox = domElement.getBBox(),
                matrix = domElement.getScreenCTM(),
                halfWidth = boundingBox.width / 2,
                halfHeight = boundingBox.height / 2,
                placements = [],
                placementKeys = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'],
                coords,
                rotation,
                steps,
                x;

            function pushPlacement() {
                placements.push(point.matrixTransform(matrix));
            }

            // get bounding box corners and midpoints
            point.x = boundingBox.x;
            point.y = boundingBox.y;
            pushPlacement();
            point.x += halfWidth;
            pushPlacement();
            point.x += halfWidth;
            pushPlacement();
            point.y += halfHeight;
            pushPlacement();
            point.y += halfHeight;
            pushPlacement();
            point.x -= halfWidth;
            pushPlacement();
            point.x -= halfWidth;
            pushPlacement();
            point.y -= halfHeight;
            pushPlacement();

            // determine rotation
            if (placements[0].y !== placements[1].y || placements[0].x !== placements[7].x) {
                rotation = Math.atan2(matrix.b, matrix.a) * RAD2DEG;
                steps = Math.ceil(((rotation % 360) - 22.5) / 45);
                if (steps < 1) {
                    steps += 8;
                }
                while (steps--) {
                    placementKeys.push(placementKeys.shift());
                }
            }

            // find placement
            for (x = 0; x < placements.length; x++) {
                if (placementKeys[x] === placement) {
                    coords = placements[x];
                    break;
                }
            }

            return {
                top: coords.y + session.scrollTop,
                left: coords.x + session.scrollLeft
            };
        }

        // expose methods
        this.compute = computePlacementCoords;
    }

    /**
     * Creates a new tooltip controller.
     * @private
     * @constructor
     * @param {Object} options Options object containing settings.
     */
    function TooltipController(options) {
        var placementCalculator = new PlacementCalculator(),
            tipElement = $('#' + options.popupId);

        // build and append tooltip div if it does not already exist
        if (tipElement.length === 0) {
            tipElement = $('<div/>', { id: options.popupId });
            // grab body element if it was not populated when the script loaded
            // note: this hack exists solely for jsfiddle support
            if ($body.length === 0) {
                $body = $('body');
            }
            $body.append(tipElement);
        }

        // hook mousemove for cursor follow tooltips
        if (options.followMouse) {
            // only one positionTipOnCursor hook per tooltip element, please
            if (!tipElement.data(DATA_HASMOUSEMOVE)) {
                $document.on('mousemove', positionTipOnCursor);
                $window.on('scroll', positionTipOnCursor);
                tipElement.data(DATA_HASMOUSEMOVE, true);
            }
        }

        // if we want to be able to mouse onto the tooltip then we need to attach
        // hover events to the tooltip that will cancel a close request on hover and
        // start a new close request on mouseleave
        if (options.mouseOnToPopup) {
            tipElement.on({
                mouseenter: function tipMouseEnter() {
                    // we only let the mouse stay on the tooltip if it is set to let
                    // users interact with it
                    if (tipElement.data(DATA_MOUSEONTOTIP)) {
                        // check activeHover in case the mouse cursor entered the
                        // tooltip during the fadeOut and close cycle
                        if (session.activeHover) {
                            session.activeHover.data(DATA_DISPLAYCONTROLLER).cancel();
                        }
                    }
                },
                mouseleave: function tipMouseLeave() {
                    // check activeHover in case the mouse cursor entered the
                    // tooltip during the fadeOut and close cycle
                    if (session.activeHover) {
                        session.activeHover.data(DATA_DISPLAYCONTROLLER).hide();
                    }
                }
            });
        }

        /**
         * Gives the specified element the active-hover state and queues up the
         * showTip function.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         */
        function beginShowTip(element) {
            element.data(DATA_HASACTIVEHOVER, true);
            // show tooltip, asap
            tipElement.queue(function queueTipInit(next) {
                showTip(element);
                next();
            });
        }

        /**
         * Shows the tooltip, as soon as possible.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         */
        function showTip(element) {
            var tipContent;

            // it is possible, especially with keyboard navigation, to move on to
            // another element with a tooltip during the queue to get to this point
            // in the code. if that happens then we need to not proceed or we may
            // have the fadeout callback for the last tooltip execute immediately
            // after this code runs, causing bugs.
            if (!element.data(DATA_HASACTIVEHOVER)) {
                return;
            }

            // if the tooltip is open and we got asked to open another one then the
            // old one is still in its fadeOut cycle, so wait and try again
            if (session.isTipOpen) {
                if (!session.isClosing) {
                    hideTip(session.activeHover);
                }
                tipElement.delay(100).queue(function queueTipAgain(next) {
                    showTip(element);
                    next();
                });
                return;
            }

            // trigger powerTipPreRender event
            element.trigger('powerTipPreRender');

            // set tooltip content
            tipContent = getTooltipContent(element);
            if (tipContent) {
                tipElement.empty().append(tipContent);
            } else {
                // we have no content to display, give up
                return;
            }

            // trigger powerTipRender event
            element.trigger('powerTipRender');

            session.activeHover = element;
            session.isTipOpen = true;

            tipElement.data(DATA_MOUSEONTOTIP, options.mouseOnToPopup);

            // set tooltip position
            if (!options.followMouse) {
                positionTipOnElement(element);
                session.isFixedTipOpen = true;
            } else {
                positionTipOnCursor();
            }

            // fadein
            tipElement.fadeIn(options.fadeInTime, function fadeInCallback() {
                // start desync polling
                if (!session.desyncTimeout) {
                    session.desyncTimeout = setInterval(closeDesyncedTip, 500);
                }

                // trigger powerTipOpen event
                element.trigger('powerTipOpen');
            });
        }

        /**
         * Hides the tooltip.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         */
        function hideTip(element) {
            // reset session
            session.isClosing = true;
            session.activeHover = null;
            session.isTipOpen = false;

            // stop desync polling
            session.desyncTimeout = clearInterval(session.desyncTimeout);

            // reset element state
            element.data(DATA_HASACTIVEHOVER, false);
            element.data(DATA_FORCEDOPEN, false);

            // fade out
            tipElement.fadeOut(options.fadeOutTime, function fadeOutCallback() {
                var coords = new CSSCoordinates();

                // reset session and tooltip element
                session.isClosing = false;
                session.isFixedTipOpen = false;
                tipElement.removeClass();

                // support mouse-follow and fixed position tips at the same time by
                // moving the tooltip to the last cursor location after it is hidden
                coords.set('top', session.currentY + options.offset);
                coords.set('left', session.currentX + options.offset);
                tipElement.css(coords);

                // trigger powerTipClose event
                element.trigger('powerTipClose');
            });
        }

        /**
         * Moves the tooltip to the users mouse cursor.
         * @private
         */
        function positionTipOnCursor() {
            // to support having fixed tooltips on the same page as cursor tooltips,
            // where both instances are referencing the same tooltip element, we
            // need to keep track of the mouse position constantly, but we should
            // only set the tip location if a fixed tip is not currently open, a tip
            // open is imminent or active, and the tooltip element in question does
            // have a mouse-follow using it.
            if (!session.isFixedTipOpen && (session.isTipOpen || (session.tipOpenImminent && tipElement.data(DATA_HASMOUSEMOVE)))) {
                // grab measurements
                var tipWidth = tipElement.outerWidth(),
                    tipHeight = tipElement.outerHeight(),
                    coords = new CSSCoordinates(),
                    collisions,
                    collisionCount;

                // grab collisions
                coords.set('top', session.currentY + options.offset);
                coords.set('left', session.currentX + options.offset);
                collisions = getViewportCollisions(
                    coords,
                    tipWidth,
                    tipHeight
                );

                // handle tooltip view port collisions
                if (collisions !== Collision.none) {
                    collisionCount = countFlags(collisions);
                    if (collisionCount === 1) {
                        // if there is only one collision (bottom or right) then
                        // simply constrain the tooltip to the view port
                        if (collisions === Collision.right) {
                            coords.set('left', session.windowWidth - tipWidth);
                        } else if (collisions === Collision.bottom) {
                            coords.set('top', session.scrollTop + session.windowHeight - tipHeight);
                        }
                    } else {
                        // if the tooltip has more than one collision then it is
                        // trapped in the corner and should be flipped to get it out
                        // of the users way
                        coords.set('left', session.currentX - tipWidth - options.offset);
                        coords.set('top', session.currentY - tipHeight - options.offset);
                    }
                }

                // position the tooltip
                tipElement.css(coords);
            }
        }

        /**
         * Sets the tooltip to the correct position relative to the specified target
         * element. Based on options settings.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         */
        function positionTipOnElement(element) {
            var priorityList,
                finalPlacement;

            if (options.smartPlacement) {
                priorityList = $.fn.powerTip.smartPlacementLists[options.placement];

                // iterate over the priority list and use the first placement option
                // that does not collide with the view port. if they all collide
                // then the last placement in the list will be used.
                $.each(priorityList, function(idx, pos) {
                    // place tooltip and find collisions
                    var collisions = getViewportCollisions(
                        placeTooltip(element, pos),
                        tipElement.outerWidth(),
                        tipElement.outerHeight()
                    );

                    // update the final placement variable
                    finalPlacement = pos;

                    // break if there were no collisions
                    if (collisions === Collision.none) {
                        return false;
                    }
                });
            } else {
                // if we're not going to use the smart placement feature then just
                // compute the coordinates and do it
                placeTooltip(element, options.placement);
                finalPlacement = options.placement;
            }

            // add placement as class for CSS arrows
            tipElement.addClass(finalPlacement);
        }

        /**
         * Sets the tooltip position to the appropriate values to show the tip at
         * the specified placement. This function will iterate and test the tooltip
         * to support elastic tooltips.
         * @private
         * @param {jQuery} element The element that the tooltip should target.
         * @param {string} placement The placement for the tooltip.
         * @return {CSSCoordinates} A CSSCoordinates object with the top, left, and
         *     right position values.
         */
        function placeTooltip(element, placement) {
            var iterationCount = 0,
                tipWidth,
                tipHeight,
                coords = new CSSCoordinates();

            // set the tip to 0,0 to get the full expanded width
            coords.set('top', 0);
            coords.set('left', 0);
            tipElement.css(coords);

            // to support elastic tooltips we need to check for a change in the
            // rendered dimensions after the tooltip has been positioned
            do {
                // grab the current tip dimensions
                tipWidth = tipElement.outerWidth();
                tipHeight = tipElement.outerHeight();

                // get placement coordinates
                coords = placementCalculator.compute(
                    element,
                    placement,
                    tipWidth,
                    tipHeight,
                    options.offset
                );

                // place the tooltip
                tipElement.css(coords);
            } while (
                // sanity check: limit to 5 iterations, and...
            ++iterationCount <= 5 &&
                // try again if the dimensions changed after placement
            (tipWidth !== tipElement.outerWidth() || tipHeight !== tipElement.outerHeight())
                );

            return coords;
        }

        /**
         * Checks for a tooltip desync and closes the tooltip if one occurs.
         * @private
         */
        function closeDesyncedTip() {
            var isDesynced = false;
            // It is possible for the mouse cursor to leave an element without
            // firing the mouseleave or blur event. This most commonly happens when
            // the element is disabled under mouse cursor. If this happens it will
            // result in a desynced tooltip because the tooltip was never asked to
            // close. So we should periodically check for a desync situation and
            // close the tip if such a situation arises.
            if (session.isTipOpen && !session.isClosing && !session.delayInProgress) {
                // user moused onto another tip or active hover is disabled
                if (session.activeHover.data(DATA_HASACTIVEHOVER) === false || session.activeHover.is(':disabled')) {
                    isDesynced = true;
                } else {
                    // hanging tip - have to test if mouse position is not over the
                    // active hover and not over a tooltip set to let the user
                    // interact with it.
                    // for keyboard navigation: this only counts if the element does
                    // not have focus.
                    // for tooltips opened via the api: we need to check if it has
                    // the forcedOpen flag.
                    if (!isMouseOver(session.activeHover) && !session.activeHover.is(':focus') && !session.activeHover.data(DATA_FORCEDOPEN)) {
                        if (tipElement.data(DATA_MOUSEONTOTIP)) {
                            if (!isMouseOver(tipElement)) {
                                isDesynced = true;
                            }
                        } else {
                            isDesynced = true;
                        }
                    }
                }

                if (isDesynced) {
                    // close the desynced tip
                    hideTip(session.activeHover);
                }
            }
        }

        // expose methods
        this.showTip = beginShowTip;
        this.hideTip = hideTip;
        this.resetPosition = positionTipOnElement;
    }

    /**
     * Determine whether a jQuery object is an SVG element
     * @private
     * @param {jQuery} element The element to check
     * @return {boolean} Whether this is an SVG element
     */
    function isSvgElement(element) {
        return window.SVGElement && element[0] instanceof SVGElement;
    }

    /**
     * Initializes the viewport dimension cache and hooks up the mouse position
     * tracking and viewport dimension tracking events.
     * Prevents attaching the events more than once.
     * @private
     */
    function initTracking() {
        if (!session.mouseTrackingActive) {
            session.mouseTrackingActive = true;

            // grab the current viewport dimensions on load
            $(function getViewportDimensions() {
                session.scrollLeft = $window.scrollLeft();
                session.scrollTop = $window.scrollTop();
                session.windowWidth = $window.width();
                session.windowHeight = $window.height();
            });

            // hook mouse move tracking
            $document.on('mousemove', trackMouse);

            // hook viewport dimensions tracking
            $window.on({
                resize: function trackResize() {
                    session.windowWidth = $window.width();
                    session.windowHeight = $window.height();
                },
                scroll: function trackScroll() {
                    var x = $window.scrollLeft(),
                        y = $window.scrollTop();
                    if (x !== session.scrollLeft) {
                        session.currentX += x - session.scrollLeft;
                        session.scrollLeft = x;
                    }
                    if (y !== session.scrollTop) {
                        session.currentY += y - session.scrollTop;
                        session.scrollTop = y;
                    }
                }
            });
        }
    }

    /**
     * Saves the current mouse coordinates to the session object.
     * @private
     * @param {jQuery.Event} event The mousemove event for the document.
     */
    function trackMouse(event) {
        session.currentX = event.pageX;
        session.currentY = event.pageY;
    }

    /**
     * Tests if the mouse is currently over the specified element.
     * @private
     * @param {jQuery} element The element to check for hover.
     * @return {boolean}
     */
    function isMouseOver(element) {
        // use getBoundingClientRect() because jQuery's width() and height()
        // methods do not work with SVG elements
        // compute width/height because those properties do not exist on the object
        // returned by getBoundingClientRect() in older versions of IE
        var elementPosition = element.offset(),
            elementBox = element[0].getBoundingClientRect(),
            elementWidth = elementBox.right - elementBox.left,
            elementHeight = elementBox.bottom - elementBox.top;

        return session.currentX >= elementPosition.left &&
            session.currentX <= elementPosition.left + elementWidth &&
            session.currentY >= elementPosition.top &&
            session.currentY <= elementPosition.top + elementHeight;
    }

    /**
     * Fetches the tooltip content from the specified element's data attributes.
     * @private
     * @param {jQuery} element The element to get the tooltip content for.
     * @return {(string|jQuery|undefined)} The text/HTML string, jQuery object, or
     *     undefined if there was no tooltip content for the element.
     */
    function getTooltipContent(element) {
        var tipText = element.data(DATA_POWERTIP),
            tipObject = element.data(DATA_POWERTIPJQ),
            tipTarget = element.data(DATA_POWERTIPTARGET),
            targetElement,
            content;

        if (tipText) {
            if ($.isFunction(tipText)) {
                tipText = tipText.call(element[0]);
            }
            content = tipText;
        } else if (tipObject) {
            if ($.isFunction(tipObject)) {
                tipObject = tipObject.call(element[0]);
            }
            if (tipObject.length > 0) {
                content = tipObject.clone(true, true);
            }
        } else if (tipTarget) {
            targetElement = $('#' + tipTarget);
            if (targetElement.length > 0) {
                content = targetElement.html();
            }
        }

        return content;
    }

    /**
     * Finds any viewport collisions that an element (the tooltip) would have if it
     * were absolutely positioned at the specified coordinates.
     * @private
     * @param {CSSCoordinates} coords Coordinates for the element.
     * @param {number} elementWidth Width of the element in pixels.
     * @param {number} elementHeight Height of the element in pixels.
     * @return {number} Value with the collision flags.
     */
    function getViewportCollisions(coords, elementWidth, elementHeight) {
        var viewportTop = session.scrollTop,
            viewportLeft =  session.scrollLeft,
            viewportBottom = viewportTop + session.windowHeight,
            viewportRight = viewportLeft + session.windowWidth,
            collisions = Collision.none;

        if (coords.top < viewportTop || Math.abs(coords.bottom - session.windowHeight) - elementHeight < viewportTop) {
            collisions |= Collision.top;
        }
        if (coords.top + elementHeight > viewportBottom || Math.abs(coords.bottom - session.windowHeight) > viewportBottom) {
            collisions |= Collision.bottom;
        }
        if (coords.left < viewportLeft || coords.right + elementWidth > viewportRight) {
            collisions |= Collision.left;
        }
        if (coords.left + elementWidth > viewportRight || coords.right < viewportLeft) {
            collisions |= Collision.right;
        }

        return collisions;
    }

    /**
     * Counts the number of bits set on a flags value.
     * @param {number} value The flags value.
     * @return {number} The number of bits that have been set.
     */
    function countFlags(value) {
        var count = 0;
        while (value) {
            value &= value - 1;
            count++;
        }
        return count;
    }

}));
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function(){"use strict";var t=this,i=t.Chart,e=function(t){this.canvas=t.canvas,this.ctx=t;var i=function(t,i){return t["offset"+i]?t["offset"+i]:document.defaultView.getComputedStyle(t).getPropertyValue(i)},e=this.width=i(t.canvas,"Width"),n=this.height=i(t.canvas,"Height");t.canvas.width=e,t.canvas.height=n;var e=this.width=t.canvas.width,n=this.height=t.canvas.height;return this.aspectRatio=this.width/this.height,s.retinaScale(this),this};e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var s=e.helpers={},n=s.each=function(t,i,e){var s=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var n;for(n=0;n<t.length;n++)i.apply(e,[t[n],n].concat(s))}else for(var o in t)i.apply(e,[t[o],o].concat(s))},o=s.clone=function(t){var i={};return n(t,function(e,s){t.hasOwnProperty(s)&&(i[s]=e)}),i},a=s.extend=function(t){return n(Array.prototype.slice.call(arguments,1),function(i){n(i,function(e,s){i.hasOwnProperty(s)&&(t[s]=e)})}),t},h=s.merge=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift({}),a.apply(null,t)},l=s.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(s.where=function(t,i){var e=[];return s.each(t,function(t){i(t)&&e.push(t)}),e},s.findNextWhere=function(t,i,e){e||(e=-1);for(var s=e+1;s<t.length;s++){var n=t[s];if(i(n))return n}},s.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var s=e-1;s>=0;s--){var n=t[s];if(i(n))return n}},s.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},s=function(){this.constructor=e};return s.prototype=i.prototype,e.prototype=new s,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=s.noop=function(){},u=s.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=s.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},p=s.amd="function"==typeof define&&define.amd,f=s.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=s.max=function(t){return Math.max.apply(Math,t)},m=s.min=function(t){return Math.min.apply(Math,t)},v=(s.cap=function(t,i,e){if(f(i)){if(t>i)return i}else if(f(e)&&e>t)return e;return t},s.getDecimalPlaces=function(t){return t%1!==0&&f(t)?t.toString().split(".")[1].length:0}),S=s.radians=function(t){return t*(Math.PI/180)},x=(s.getAngleFromPoint=function(t,i){var e=i.x-t.x,s=i.y-t.y,n=Math.sqrt(e*e+s*s),o=2*Math.PI+Math.atan2(s,e);return 0>e&&0>s&&(o+=2*Math.PI),{angle:o,distance:n}},s.aliasPixel=function(t){return t%2===0?0:.5}),y=(s.splineCurve=function(t,i,e,s){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=s*n/(n+o),h=s*o/(n+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},s.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),C=(s.calculateScaleRange=function(t,i,e,s,n){var o=2,a=Math.floor(i/(1.5*e)),h=o>=a,l=g(t),r=m(t);l===r&&(l+=.5,r>=.5&&!s?r-=.5:l+=.5);for(var c=Math.abs(l-r),u=y(c),d=Math.ceil(l/(1*Math.pow(10,u)))*Math.pow(10,u),p=s?0:Math.floor(r/(1*Math.pow(10,u)))*Math.pow(10,u),f=d-p,v=Math.pow(10,u),S=Math.round(f/v);(S>a||a>2*S)&&!h;)if(S>a)v*=2,S=Math.round(f/v),S%1!==0&&(h=!0);else if(n&&u>=0){if(v/2%1!==0)break;v/=2,S=Math.round(f/v)}else v/=2,S=Math.round(f/v);return h&&(S=o,v=f/S),{steps:S,stepValue:v,min:p,max:p+S*v}},s.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):s[t]=s[t];return i?e(i):e}if(t instanceof Function)return t(i);var s={};return e(t,i)}),w=(s.generateLabels=function(t,i,e,s){var o=new Array(i);return labelTemplateString&&n(o,function(i,n){o[n]=C(t,{value:e+s*(n+1)})}),o},s.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)))},easeOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),s*Math.pow(2,-10*t)*Math.sin(2*(1*t-i)*Math.PI/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:2==(t/=.5)?1:(e||(e=.3*1.5),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e):s*Math.pow(2,-10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-w.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*w.easeInBounce(2*t):.5*w.easeOutBounce(2*t-1)+.5}}),b=s.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=s.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),L=(s.animationLoop=function(t,i,e,s,n,o){var a=0,h=w[e]||w.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),s.call(o,r,e),i>a?o.animationFrame=b(l):n.apply(o)};b(l)},s.getRelativePosition=function(t){var i,e,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,o=n.getBoundingClientRect();return s.touches?(i=s.touches[0].clientX-o.left,e=s.touches[0].clientY-o.top):(i=s.clientX-o.left,e=s.clientY-o.top),{x:i,y:e}},s.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),k=s.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},F=(s.bindEvents=function(t,i,e){t.events||(t.events={}),n(i,function(i){t.events[i]=function(){e.apply(t,arguments)},L(t.chart.canvas,i,t.events[i])})},s.unbindEvents=function(t,i){n(i,function(i,e){k(t.chart.canvas,e,i)})}),R=s.getMaximumWidth=function(t){var i=t.parentNode;return i.clientWidth},T=s.getMaximumHeight=function(t){var i=t.parentNode;return i.clientHeight},A=(s.getMaximumSize=s.getMaximumWidth,s.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,s=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=s+"px",i.canvas.height=s*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),M=s.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},W=s.fontString=function(t,i,e){return i+" "+t+"px "+e},z=s.longestText=function(t,i,e){t.font=i;var s=0;return n(e,function(i){var e=t.measureText(i).width;s=e>s?e:s}),s},B=s.drawRoundedRectangle=function(t,i,e,s,n,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+s-o,e),t.quadraticCurveTo(i+s,e,i+s,e+o),t.lineTo(i+s,e+n-o),t.quadraticCurveTo(i+s,e+n,i+s-o,e+n),t.lineTo(i+o,e+n),t.quadraticCurveTo(i,e+n,i,e+n-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,s){this.options=i,this.chart=s,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return M(this.chart),this},stop:function(){return P(this.animationFrame),this},resize:function(t){this.stop();var i=this.chart.canvas,e=R(this.chart.canvas),s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:T(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=s,A(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){return t&&this.reflow(),this.options.animation&&!t?s.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return C(this.options.legendTemplate,this)},destroy:function(){this.clear(),F(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),-1===h);r--);var c=[],u=[],d=function(){var t,i,e,n,o,a=[],l=[],r=[];return s.each(this.datasets,function(i){t=i.points||i.bars||i.segments,t[h]&&t[h].hasValue()&&a.push(t[h])}),s.each(a,function(t){l.push(t.x),r.push(t.y),c.push(s.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),o=m(r),e=g(r),n=m(l),i=g(l),{x:n>this.chart.width/2?n:i,y:(o+e)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:t[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else n(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:C(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,s=function(){return i.apply(this,arguments)};if(s.prototype=o(i.prototype),a(s.prototype,t),s.extend=e.Type.extend,t.name||i.prototype.name){var n=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[n]=a(l,t.defaults),e.types[n]=s,e.prototype[n]=function(t,i){var o=h(e.defaults.global,e.defaults[n],i||{});return new s(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?n(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return n(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return n(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return f(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=s.getAngleFromPoint(this,{x:t,y:i}),n=e.angle>=this.startAngle&&e.angle<=this.endAngle,o=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return n&&o},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,s=this.x+i,n=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,s-=o,n+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,n),t.lineTo(s,n),t.lineTo(s,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,n=s+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-n<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-n;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}B(t,o,a,e,s,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+s/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=W(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=z(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var s=this.height/2;this.y-s<0?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleFontSize/2:i+(1.5*this.fontSize*e+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){if(this.custom)this.custom(this);else{B(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,s.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?z(this.ctx,this.font,this.yLabels):0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint-this.startPoint;for(this.calculateYRange(i),this.buildYLabels(),this.calculateXLabelRotation();i>this.endPoint-this.startPoint;)i=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(i),this.buildYLabels(),t<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,s=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=s/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth+10?e/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var n,o=z(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)n=Math.cos(S(this.xLabelRotation)),t=n*e,i=n*s,t+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=n*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(S(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),s=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=e/2),Math.round(s)},update:function(t){s.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,n(this.yLabels,function(n,o){var a=this.endPoint-i*o,h=Math.round(a),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(n,e-10,a),0!==o||l||(l=!0),l&&t.beginPath(),o>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h+=s.aliasPixel(t.lineWidth),l&&(t.moveTo(e,h),t.lineTo(this.width,h),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-5,h),t.lineTo(e,h),t.stroke(),t.closePath()},this),n(this.xLabels,function(i,e){var s=this.calculateX(e)+x(this.lineWidth),n=this.calculateX(e-(this.offsetGridLines?.5:0))+x(this.lineWidth),o=this.xLabelRotation>0,a=this.showVerticalLines;0!==e||a||(a=!0),a&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),a&&(t.moveTo(n,this.endPoint),t.lineTo(n,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(n,this.endPoint),t.lineTo(n,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(s,o?this.endPoint+12:this.endPoint+8),t.rotate(-1*S(this.xLabelRotation)),t.font=this.font,t.textAlign=o?"right":"center",t.textBaseline=o?"middle":"top",t.fillText(i,0,0),t.restore()},this))}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=m([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,s,n,o,a,h,l,r,c,u,d=m([this.height/2-this.pointLabelFontSize-5,this.width/2]),p=this.width,g=0;for(this.ctx.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(C(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=e/2,t.x+s>p&&(p=t.x+s,n=i),t.x-s<g&&(g=t.x-s,a=i)):i<this.valuesCount/2?t.x+e>p&&(p=t.x+e,n=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(p-this.width),o=this.getIndexAngle(n),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=f(c)?c:0,u=f(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,s=t+this.drawingArea;this.xCenter=(s+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(n(this.yLabels,function(i,e){if(e>0){var s,n=e*(this.drawingArea/this.steps),o=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)s=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var e=this.getPointPosition(i,this.calculateCenterOffset(this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(e.x,e.y),t.stroke(),t.closePath()}var s=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var o=this.labels.length,a=this.labels.length/2,h=a/2,l=h>i||i>o-h,r=i===h||i===o-h;t.textAlign=0===i?"center":i===a?"center":a>i?"left":"right",t.textBaseline=r?"middle":l?"bottom":"top",t.fillText(this.labels[i],s.x,s.y)}}}}}),s.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){n(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),p?define(function(){return e}):"object"==typeof module&&module.exports&&(module.exports=e),t.Chart=e,e.noConflict=function(){return t.Chart=i,e}}).call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Bar",defaults:s,initialize:function(t){var s=this.options;this.ScaleClass=i.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,i,e){var n=this.calculateBaseWidth(),o=this.calculateX(e)-n/2,a=this.calculateBarWidth(t);return o+a*i+i*s.barDatasetSpacing+a/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*s.barValueSpacing},calculateBarWidth:function(t){var i=this.calculateBaseWidth()-(t-1)*s.barDatasetSpacing;return i/t}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),this.BarClass=i.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,bars:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.bars.push(new this.BarClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.strokeColor,fillColor:i.fillColor,highlightFill:i.highlightFill||i.fillColor,highlightStroke:i.highlightStroke||i.strokeColor}))},this)},this),this.buildScale(t.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,i,s){e.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,s,i),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){e.each(this.datasets,function(i,s){e.each(i.bars,t,this,s)},this)},getBarsAtEvent:function(t){for(var i,s=[],n=e.getRelativePosition(t),o=function(t){s.push(t.bars[i])},a=0;a<this.datasets.length;a++)for(i=0;i<this.datasets[a].bars.length;i++)if(this.datasets[a].bars[i].inRange(n.x,n.y))return e.each(this.datasets,o),s;return s},buildScale:function(t){var i=this,s=function(){var t=[];return i.eachBars(function(i){t.push(i.value)}),t},n={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(s(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(n,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(n)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].bars.push(new this.BarClass({value:t,label:i,x:this.scale.calculateBarX(this.datasets.length,e,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[e].strokeColor,fillColor:this.datasets[e].fillColor}))
},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){e.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();this.chart.ctx;this.scale.draw(i),e.each(this.datasets,function(t,s){e.each(t.bars,function(t,e){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,s,e),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},i).draw())},this)},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Doughnut",defaults:s,initialize:function(t){this.segments=[],this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=i.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.calculateTotal(t),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({value:t.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:t.color,highlightColor:t.highlight||t.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(t.value),label:t.label})),e||(this.reflow(),this.update())},calculateCircumference:function(t){return 2*Math.PI*(Math.abs(t)/this.total)},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=Math.abs(t.value)},this)},update:function(){this.calculateTotal(this.segments),e.each(this.activeElements,function(t){t.restore(["fillColor"])}),e.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,e.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(t){var i=t?t:1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},i),t.endAngle=t.startAngle+t.circumference,t.draw(),0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle)},this)}}),i.types.Doughnut.extend({name:"Pie",defaults:e.merge(s,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Line",defaults:s,initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this),this.buildScale(t.labels),this.eachPoints(function(t,i){e.extend(t,{x:this.scale.calculateX(i),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.datasets,function(t){e.each(t.points,function(t){t.inRange(s.x,s.y)&&i.push(t)})},this),i},buildScale:function(t){var s=this,n=function(){var t=[];return s.eachPoints(function(i){t.push(i.value)}),t},o={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(o,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new i.Scale(o)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();var s=this.chart.ctx,n=function(t){return null!==t.value},o=function(t,i,s){return e.findNextWhere(i,n,s)||t},a=function(t,i,s){return e.findPreviousWhere(i,n,s)||t};this.scale.draw(i),e.each(this.datasets,function(t){var h=e.where(t.points,n);e.each(t.points,function(t,e){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(e)},i)},this),this.options.bezierCurve&&e.each(h,function(t,i){var s=i>0&&i<h.length-1?this.options.bezierCurveTension:0;t.controlPoints=e.splineCurve(a(t,h,i),t,o(t,h,i),s),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(h,function(t,i){if(0===i)s.moveTo(t.x,t.y);else if(this.options.bezierCurve){var e=a(t,h,i);s.bezierCurveTo(e.controlPoints.outer.x,e.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else s.lineTo(t.x,t.y)},this),s.stroke(),this.options.datasetFill&&h.length>0&&(s.lineTo(h[h.length-1].x,this.scale.endPoint),s.lineTo(h[0].x,this.scale.endPoint),s.fillStyle=t.fillColor,s.closePath(),s.fill()),e.each(h,function(t){t.draw()})},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"PolarArea",defaults:s,initialize:function(t){this.segments=[],this.SegmentArc=i.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:t.length}),this.updateScaleRange(t),this.scale.update(),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({fillColor:t.color,highlightColor:t.highlight||t.color,label:t.label,value:t.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(t.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),e||(this.reflow(),this.update())},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(t){var i=[];e.each(t,function(t){i.push(t.value)});var s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s,{size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),e.each(this.segments,function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),e.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),e.each(this.segments,function(t){t.update({outerRadius:this.scale.calculateCenterOffset(t.value)})},this)},draw:function(t){var i=t||1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(t.value)},i),t.endAngle=t.startAngle+t.circumference,0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle),t.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){var o;this.scale.animation||(o=this.scale.getPointPosition(n,this.scale.calculateCenterOffset(e))),s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,x:this.options.animation?this.scale.xCenter:o.x,y:this.options.animation?this.scale.yCenter:o.y,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=e.getRelativePosition(t),s=e.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),n=2*Math.PI/this.scale.valuesCount,o=Math.round((s.angle-1.5*Math.PI)/n),a=[];return(o>=this.scale.valuesCount||0>o)&&(o=0),s.distance<=this.scale.drawingArea&&e.each(this.datasets,function(t){a.push(t.points[o])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i=function(){var i=[];return e.each(t,function(t){t.data?i=i.concat(t.data):e.each(t.points,function(t){i.push(t.value)})}),i}(),s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s)},addData:function(t,i){this.scale.valuesCount++,e.each(t,function(t,e){var s=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:s.x,y:s.y,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.labels.push(i),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),e.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var i=t||1,s=this.chart.ctx;this.clear(),this.scale.draw(),e.each(this.datasets,function(t){e.each(t.points,function(t,e){t.hasValue()&&t.transition(this.scale.getPointPosition(e,this.scale.calculateCenterOffset(t.value)),i)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(t.points,function(t,i){0===i?s.moveTo(t.x,t.y):s.lineTo(t.x,t.y)},this),s.closePath(),s.stroke(),s.fillStyle=t.fillColor,s.fill(),e.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this);