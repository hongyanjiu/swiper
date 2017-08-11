
$(window).ready(function () {
    var href = "http://bydtj.ad-mex.com/bydtj/";
    var noClick = true,time,is_car_show=false;
    $(".content_01 .check").animate({"opacity": 1}, 2000, function () {
        $(".content_01 .car_01").animate({"marginLeft": "5.25%"}, 1000, function () {
            $(".content_01 .yinying").animate({"opacity": 1}, 1000, function () {
                $(".content_01 .up").animate({"opacity": 1}, 1000);
            });
        });
    });
    $(".content_03 .bottom_car_01").on("click", function () {
        $(".content_03 .floating").css("display", "flex");
        is_car_show=true;
        if(is_car_show){
            time =setTimeout(function () {
                if (noClick)
                    location.href = href;
            }, 5000);
        }
    });
    $(".content_03 .floating").on("click", function () {
        location.href = href;
        clearTimeout(time);
    });
    var mySwiper = new Swiper('#swiper', {
        direction: 'vertical',
        onSlideChangeEnd: function (swiper) {
            if (swiper.activeIndex == 0) {
                $(".content_01 .check").animate({"opacity": 1}, 2000, function () {
                    $(".content_01 .car_01").animate({"marginLeft": "5.25%"}, 1000, function () {
                        $(".content_01 .yinying").animate({"opacity": 1}, 1000, function () {
                            $(".content_01 .up").animate({"opacity": 1}, 1000);
                        });
                    });
                });
            } else {
                $(".content_01 .check, .content_01 .yinying,.content_01 .up,.content_01 .car_01").stop();
                $(".content_01 .check, .content_01 .yinying,.up").css("opacity", 0);
                $(".content_01 .car_01").css({"marginLeft": "100%"});
            }

            /*page1*/
            if (swiper.activeIndex == 1) {
                $(".content_02 .check").animate({"opacity": 1}, 2000, function () {
                    $(".content_02 .car_01").animate({"marginLeft": "5.25%"}, 1000, function () {
                        $(".content_02 .yinying").animate({"opacity": 1}, 1000, function () {
                            $(".content_02 .up").animate({"opacity": 1}, 1000);
                        });
                    });
                });
            } else {
                $(".content_02 .check, .content_02 .yinying,.content_02 .up,.content_02 .car_01").stop();
                $(".content_02 .check,.content_02  .yinying,.content_02 .up").css("opacity", 0);
                $(" .content_02 .car_01").css({"marginLeft": "100%"});
            }

            /*page2*/
            if (swiper.activeIndex == 2) {
                $(".content_03 .check").animate({"opacity": 1}, 2000, function () {
                    $(".content_03 .car_01").animate({"marginLeft": "5.25%"}, 1000, function () {
                        $(".content_03 .yinying").animate({"opacity": 1}, 1000, function () {
                            $(".content_03 .finger").animate({"opacity": 1}, 1000,function(){
                            });
                        });
                    });
                });
            } else {
                $(".content_03 .check, .content_03 .yinying,.content_03 .finger,.content_03 .car_01").stop();
                $(".content_03 .check,.content_03 .yinying,.finger").css("opacity", 0);
                $(".content_03  .car_01").css({"marginLeft": "100%"});
            }

        }
    });
});

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);