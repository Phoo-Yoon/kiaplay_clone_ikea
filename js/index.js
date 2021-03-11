$(document).ready(function(){

    // window 가로 / 세로값을 ww변수, wh변수로 지정
    var ww = $(window).width();
    var wh = $(window).height();
    
    // 변경되어지는 수치값들만 옮겨적기
    function layout(){
        // 조건문 사용 -> 반응형 제작
        if(ww >= 1440){

            // PC Ver.
            // $('header').css({
            //     backgroundColor : 'yellow'
            // });
            $('#wrap').css({
                width : ww
            });
            $('h4').css({
                fontSize : ww*0.0072916+'px'
            });

            // header Start
            $('header').css({
                width : ww*0.15625
            });
            $('#headLogo').css({
                width : ww*0.10416,
                height : ww*0.10416,
                margin : ww*0.0260416+'px auto'
            });
            $('#mainMenu').css({
                width : ww*0.10416,
                height : ww*0.1302083,
                // margin : ww*0.0416+'px'+ww*0.0260416+'px auto' 로 사용했을 때 렉이 걸림
                marginTop : ww*0.0416+'px auto',
                marginLeft : ww*0.0260416+'px'
            });
            $('.menuLi').css({
                width : ww*0.10416,
                height : ww*0.0260416,
                lineHeight : ww*0.0260416+'px',
                fontSize : ww*0.0078125+'px'
            });
            $('#findHashMenu').css({
                width : ww*0.10416,
                height : ww*0.10416,
                margin : ww*0.0260416+'px'
            });
            $('#findWrap').css({
                // width : ww*0.10416,
                width : ww*0.0360416,
                height : ww*0.0260416
            });
            $('input').css({
                // width : ww*0.078125,
                width : 0,
                height : ww*0.0260416
            });
            $('#zoom').css({
                width : ww*0.0260416,
                height : ww*0.0260416
            });
            $('.hashBox').css({
                width : ww*0.10416,
                height : ww*0.015625,
                lineHeight : ww*0.015625+'px',
                marginTop : ww*0.00416+'px',
                fontSize : ww*0.00677083+'px'
            });
            $('.hashInBox').css({
                fontSize : ww*0.00677083+'px'
            });

            $('#zoom').hover(function(){
                $('input').animate({
                    width : ww*0.078125
                });
                $('#findWrap').animate({
                    width : ww*0.10416
                });
            },function(){
                $('input').animate({
                    width : 0
                });
                $('#findWrap').animate({
                    width : ww*0.0360416
                });
            });
            // header End

            // section Start
            $('section').css({
                // 제이쿼리 리사이즈 계산공식 -> 화면 가로 or 세로값 x (본인의 값 / 최대값)
                // css반응형 -> 본인의 값 / 최대값 x 100
                width : ww*0.84375,
                left : ww*0.15625
            });

            // arti1 Start
            $('#arti1').css({
                width : ww*0.84375,
                // 반올림은 절대 하지 않도록!
                // 세로 값도 가로값 계산!
                height : ww*0.364583
            });
            $('#swiper_box').css({
                width : ww*0.46875,
                height : ww*0.364583
            });
            $('.swiper_img').css({
                width : ww*0.46875,
                height : ww*0.364583
            });
            $('.main_more').css({
                width : ww*0.104166,
                height : ww*0.0260416,
                lineHeight : ww*0.0260416+'px',
                borderRadius : ww*0.0078125+'px',
                bottom : ww*0.02604166+'px',
                right : ww*0.02604166+'px',
                fontSize : ww*0.00833+'px'
            });
            $('#main_text1').css({
                fontSize : ww*0.013020833+'px',
                right : ww*0.0104166+'px',
                top : ww*0.04166+'px'
            });
            $('#main_text2').css({
                fontSize : ww*0.013020833+'px',
                bottom : ww*0.02604166+'px',
                left : ww*0.015625+'px'
            });
            $('#main_text3').css({
                fontSize : ww*0.013020833+'px',
                right : ww*0.02604166+'px',
                top : ww*0.078125+'px'
            });
            
            $('#arti1_RightBox').css({
                width : ww*0.359375,
                height : ww*0.364583
            });
            // px과 auto는 문자열로 처리
            $('#recentPopTitle').css({
                width : ww*0.26,
                height : ww*0.026,
                margin : ww*0.015625+'px auto'
            });
            $('.tab').css({
                width : (ww*0.26)/2,
                height : ww * 0.026,
                lineHeight : ww*0.026+'px'
            });
            $('#recentPopImgWrap').css({
                width : ww*0.26,
                height : ww*0.2864,
                margin : ww*0.015625+'px auto'
            });
            $('.recentPopInBox').css({
                width : ww*0.26,
                height : ww*0.2864 
            });
            $('.recentPop').css({
                width : ww*0.12239583,
                height : ww*0.135416
            });
            $('.lately_pop_img').css({
                width : ww*0.12239583,
                height : ww*0.10416
            });
            $('.lately_pop_text').css({
                width : ww*0.12239583,
                height : ww*0.03125
            });
            $('.recentPop:first-child ').css({
                marginRight : ww*0.01302083
            });
            $('.recentPop:nth-child(3)').css({
                marginRight : ww*0.01302083,
                marginTop : ww*0.01302083
            });
            $('.recentPop:last-child').css({
                marginTop : ww*0.01302083
            });

            // arti1 End

            // arti2 Start
            $('#arti2').css({
                width : ww*0.84375
            });
            $('.arti2_Box').css({
                width : ww*0.84375,
                height : ww*0.234375,
                marginTop : ww*0.0260416
            });
            $('.arti2_TitleBox').css({
                width : ww*0.84375,
                height : ww*0.02864583
            });
            // 요기까지
            $('.arti2_Title').css({
                width : ww*0.2083,
                height : ww*0.02864583
            });
            $('.title').css({
                width : ww*0.078125,
                height : ww*0.02864583,
                lineHeight : ww*0.02864583+'px',
                fontSize : ww*0.01302083+'px'
            });
            $('.secHash').css({
                width : ww*0.125,
                height : ww*0.02864583,
                lineHeight : ww*0.02864583+'px',
                fontSize : ww*0.0078125+'px'
            });
            $('.arti2_more').css({
                width : ww*0.052083,
                height : ww*0.02864583,
                lineHeight : ww*0.02864583+'px'
            });
            $('.arti2_ImgText').css({
                width : ww*0.84375,
                height : ww*0.13802083
            });
            $('.arti2_BigBox').css({
                width : ww*1.71875,
                height : ww*0.13802083
            });
            $('.arti2_InBox').css({
                width : ww*0.171875,
                height : ww*0.1302083
            });
            $('.arti2_Img').css({
                width : ww*0.14583,
                height : ww*0.10416
            })
            $('.arti2_Text').css({
                width : ww*0.14583,
                height : ww*0.0260416
            })

            $('.btn').css({
                width : ww*0.0260416,
                height : ww*0.0260416,
                top : ww*0.055989583
            });

            $('h5').css({
                fontSize : ww*0.00677083+'px'
            });
            $('.arti2_span').css({
                fontSize : ww*0.00677083+'px'
            });
            // arti2 End
            // section End

            // footer Start
            $('footer').css({
                width : ww,
                height : ww*0.0677083
            });
            $('#leftFooter').css({
                width : ww*0.46875,
                height : ww*0.0677083,
                marginLeft : ww*0.0260416
            });
            $('#footerLogo').css({
                width : ww*0.0416,
                height : ww*0.0416,
                marginRight : ww*0.010416
            });
            $('#footerMenu').css({
                width : ww*0.416,
                height : ww*0.052083
            });
            $('#footerTopMenu').css({
                width : ww*0.416,
                height : ww*0.0260416
            });
            $('.footerLi').css({
                width : ww*0.072916,
                height : ww*0.0260416,
                lineHeight : ww*0.0260416+'px',
                fontSize : ww*0.00625+'px'
            });
            $('#footerCopyright').css({
                width : ww*0.416,
                height : ww*0.0260416,
                lineHeight : ww*0.0260416+'px',
                fontSize : ww*0.00625+'px'
            });
            $('#rightFooter').css({
                width : ww*0.260416,
                height : ww*0.052083,
                marginTop : ww*0.0052083+'px'
            });
            $('#footerSNS').css({
                width : ww*0.15625,
                height : ww*0.052083
            });
            $('.sns').css({
                width : ww*0.02083,
                height : ww*0.02083
            });
            $('.sns').eq(4).css({
                width : ww*0.0260416,
                height : ww*0.02083
            })
            $('select').css({
                width : ww*0.052083,
                height : ww*0.015625
            });
            // footer End

            

        } else if(ww < 1439 && ww >= 960){
            // TAB Ver.
            // resize 할 때 기준 사이즈는 1440으로
            // $('header').css({
            //     backgroundColor : 'red'
            // });
            
            // wrap Start
            $('#wrap').css({
                width : ww
            });
            // warp End

            // header Start
            $('header').css({
                width : ww*0.17361
            });
            $('#headLogo').css({
                width : ww*0.125,
                height : ww*0.125,
                margin : ww*0.03472+'px auto'
            });
            $('#mainMenu').css({
                width : ww*0.125,
                height : ww*0.17361,
                marginTop : ww*0.05+'px auto',
                marginLeft : ww*0.03472+'px'
            });
            $('.menuLi').css({
                width : ww*0.125,
                height : ww*0.03472,
                lineHeight : ww*0.03472+'px',
                paddingLeft : ww*0.0052083+'px',
                fontSize : ww*0.0078125+'px'
            });
            $('#findHashMenu').css({
                width : ww*0.125,
                height : ww*0.138,
                margin : ww*0.024305+'px'
            });
            $('#findWrap').css({
                // width : ww*0.125,
                width : ww*0.04472, 
                height : ww*0.03472
            });
            $('input').css({
                // width : ww*0.09027,
                width : 0,
                height : ww*0.03472
            });
            $('#zoom').css({
                width : ww*0.03472,
                height : ww*0.03472,
                lineHeight : ww*0.03472+'px'
            });
            $('.hashBox').css({
                width : ww*0.125,
                height : ww*0.02083,
                lineHeight : ww*0.02083+'px',
                marginTop : ww*0.005+'px'
            });
            $('.hashInBox').css({
                fontSize : ww*0.00677083+'px'
            });


            $('#zoom').hover(function(){
                $('input').animate({
                    width : ww*0.09027
                });
                $('#findWrap').animate({
                    width : ww*0.125
                });
            },function(){
                $('input').animate({
                    width : 0
                });
                $('#findWrap').animate({
                    width : ww*0.04472
                });
            });
            // header End

            // section Strat
            $('section').css({
                width : ww*0.82638,
                left : ww*0.17361
            });
            $('#arti1').css({
                width : ww*0.82638,
                height : ww*0.416
            });
            $('#swiper_box').css({
                width : ww*0.52083,
                height : ww*0.416
            });
            $('.swiper_img').css({
                width : ww*0.52083,
                height : ww*0.416
            });
            $('.main_more').css({
                width : ww*0.104166,
                height : ww*0.0260416,
                lineHeight : ww*0.0260416+'px',
                borderRadius : ww*0.0078125+'px',
                bottom : ww*0.02604166+'px',
                right : ww*0.02604166+'px',
                fontSize : ww*0.011+'px'
            });
            $('#main_text1').css({
                fontSize : ww*0.01527+'px',
                right : ww*0.0104166+'px',
                top : ww*0.04166+'px'
            });
            $('#main_text2').css({
                fontSize : ww*0.01527+'px',
                bottom : ww*0.02604166+'px',
                left : ww*0.015625+'px'
            });
            $('#main_text3').css({
                fontSize : ww*0.01527+'px',
                right : ww*0.02604166+'px',
                top : ww*0.078125+'px'
            });
            $('#arti1_RightBox').css({
                width : ww*0.305,
                height : ww*0.416
            });
            $('#recentPopTitle').css({
                width : ww*0.24305,
                height : ww*0.03472,
                margin : ww*0.017361+'px auto'
            });
            $('.tab').css({
                width : (ww*0.24305)/2,
                height : ww*0.03472,
                lineHeight : ww*0.03472+'px',
                fontSize : ww*0.010416+'px'
            });
            $('#recentPopImgWrap').css({
                width : ww*0.27,
                height : ww*0.27,
                margin : ww*0.017361+'px auto'
            });
            $('.recentPopInBox').css({
                width : ww*0.27,
                height : ww*0.27
            });
            $('.recentPop').css({
                width : ww*0.125,
                height : ww*0.125
            });
            $('.lately_pop_img').css({
                width : ww*0.125,
                height : ww*0.10416
            });
            $('.lately_pop_text').css({
                width : ww*0.125,
                height : ww*0.02083,
                fontSize : ww*0.00972+'px'
            });
            $('.lately_pop_span').css({
                fontSize : ww*0.009027+'px'
            });
            $('.recentPop:first-child').css({
                marginRight : ww*0.0138+'px'
            });
            $('.recentPop:nth-child(3)').css({
                marginRight : ww*0.0138+'px',
                // marginTop : ww*0.0138+'px'
                marginTop : ww*0.055+'px'
            });
            $('.recentPop:last-child').css({
                // marginTop : ww*0.0138+'px'
                marginTop : ww*0.055+'px'
            });
            $('#arti2').css({
                width : ww*0.82638
            });
            $('.arti2_Box').css({
                width : ww*0.82638,
                height : ww*0.2638,
                marginTop : ww*0.03472+'px'
            });
            $('.arti2_TitleBox').css({
                width : ww*0.82638,
                height : ww*0.038194
            });
            $('.arti2_Title').css({
                width : ww*0.27,
                height : ww*0.038194
            });
            $('.title').css({
                width : ww*0.10416,
                height : ww*0.038194,
                lineHeight : ww*0.038194+'px',
                fontSize : ww*0.017361+'px'
            });
            $('.secHash').css({
                width : ww*0.1388888888888889,
                height : ww*0.038194,
                lineHeight : ww*0.038194+'px'
            });
            $('.secInHash').css({
                fontSize : ww*0.010416+'px'
            });
            $('.arti2_more').css({
                width : ww*0.0694,
                height : ww*0.038194,
                lineHeight : ww*0.038194+'px'
            });
            $('.arti2_ImgText').css({
                width : ww*0.82638,
                height : ww*0.1388888888888889
            });
            $('.arti2_BigBox').css({
                width : ww*1.666666666666667,
                height : ww*0.1388888888888889
            });
            $('.arti2_InBox').css({
                width : ww*0.166,
                height : ww*0.125
            });
            $('.arti2_Img').css({
                width : ww*0.138,
                height : ww*0.1076388888888889
            });
            $('.arti2_Text').css({
                width : ww*0.138,
                height : ww*0.0173611111111111
            });
            $('h5').css({
                fontSize : ww*0.009027+'px'
            });
            $('.arti2_span').css({
                fontSize : ww*0.009027+'px'
            });

            $('.btn').css({
                width : ww*0.03472,
                height : ww*0.03472,
                top : ww*0.052083+'px'
            });

            // section End

            // footer Start
            $('footer').css({
                width : ww,
                height : ww*0.09027
            });
            $('#leftFooter').css({
                width : ww*0.416,
                height : ww*0.09027,
                marginLeft : ww*0.03472+'px'
            });
            $('#footerLogo').css({
                width : ww*0.05,
                height : ww*0.05,
                marginRight : ww*0.0138+'px'
            });
            $('#footerMenu').css({
                width : ww*0.625,
                height : ww*0.0694
            });
           $('#footerTopMenu').css({
               width : ww*0.55,
               height : ww*0.03472
           });

           $('.footerLi').css({
               width : ww*0.111,
               height : ww*0.03472,
               lineHeight : ww*0.03472+'px',
               fontSize : ww*0.0034722+'px'
           });
           $('#footerCopyright').css({
               width : ww*0.55,
               height : ww*0.03472,
               lineHeight : ww*0.03472+'px'
           });
           $('#rightFooter').css({
               width : ww*0.2083,
               height : ww*0.0694
           });
           $('#footerSNS').css({
               width : ww*0.138,
               height : ww*0.0694
           });
           $('.sns').css({
               width : ww*0.027,
               height : ww*0.027
           });
           $('select').css({
               width : ww*0.0694,
               height : ww*0.02083
           });

        } else if(ww < 960){
            // MOBILE Ver.
            // $('header').css({
            //     backgroundColor : 'green'
            // });
            // mWrap Start
            $('#mWrap').css({
                width : ww
            });
            
            // mHeader Start
            $('#mHeader').css({
                width : ww,
                height : ww*0.083
            });
            $('#m_logo').css({
                width : ww*0.083,
                height : ww*0.083
            });
            $('#m_header_right').css({
                width : ww*0.16,
                height : ww*0.083
            });
            $('#m_header_right li').css({
                width : ww*0.0625,
                height : ww*0.0625
            });
            // mHeader End

            // m_section Start
            $('#m_main_swiper').css({
                width : ww,
                height : ww*1.0416
            });
            $('.m_swiper_wrapper').css({
                height : ww*1.0416
            });
            $('.m_swiper_silde').css({
                width : ww,
                height : ww*1.0416
            });
            $('#mSec').css({
                width : ww
            });

            // mArti1 Start
            $('#mArti1').css({
                width : ww,
                height : ww*1.041666
            });
            $('.m_swiper1').css({
                height : ww*0.5208333333333333
            });
            $('.m_swiper2').css({
                height : ww*0.5208333333333333
            });
            $('.mNewPoName').css({
                width : ww,
                height : ww*0.052083,
                lineHeight : ww*0.052083+'px'
            });
 
            // mArti1 End

            // mArti2 Start
            $('#mArti2').css({
                width : ww,
                height : ww*1.5625
            });
            $('.m_swiper3').css({
                height : ww*0.520833
            });
            $('.m_swiper4').css({
                height : ww*0.520833
            });
            $('.m_swiper5').css({
                height : ww*0.520833
            });
            $('.mNameWrap').css({
                width : ww,
                height : ww*0.052083
            });
            $('.mNameHash').css({
                width : ww*0.4166,
                height : ww*0.052083,
            });
            $('.mName').css({
                width : ww*0.104166+'px',
                height : ww*0.052083,
                lineHeight : ww*0.052083+'px',
                fontSize : ww*0.020833+'px'
            });
            $('.mHash').css({
                lineHeight : ww*0.052083+'px',
                fontSize : ww*0.0166+'px'
            });
            $('.mArrow').css({
                width : ww*0.0520833,
                height : ww*0.0520833
            });
            // mArti2 End
            // m_section End

            // mFooter Start
            $('#mFooter').css({
                width : ww,
                height : ww*0.20833,
                marginTop : ww*0.01041666+'px'
            });
            $('#mSnsWrap').css({
                width : ww,
                height : ww*0.052083
            });
            $('.mSNS').css({
                width : ww*0.052083,
                height : ww*0.052083
            });
            $('#mFooterBot').css({
                width : ww,
                height : ww*0.10416
            });
            $('#mFooterMenuWrap').css({
                width : ww,
                height : ww*0.083,
                marginTop : ww*0.020833+'px'
            });
            $('.mFooterMenu').css({
                width : ww*0.5,
                height : ww*0.083
            });
            $('.mFooterLi').css({
                width : ww*0.5,
                height : ww*0.0416,
                lineHeight : ww*0.0416+'px'
            });
            $('#mFooterCopyright').css({
                width : ww,
                height : ww*0.0416666666666667,
                marginTop : ww*0.0104166+'px'
            });

            
        }
    }
    // layout() 호출
    layout();

    // resize 기능 사용
    $(window).resize(function(){
        ww = $(window).width();
        wh = $(window).height();
        layout();
        click_num_double = 0;
        click_num_child = 0;
        click_num_loft = 0;
        img_move = $('.arti2_InBox').width();
        $('.arti2_BigBox').css({
            left : 0
        });
    });

    // 개인 작업 진행

    // $('#recent').click(function(){
    //     $('.recentPopInBox').eq(0).css({
    //         display : 'block'
    //     });
    //     $('.recentPopInBox').eq(1).css({
    //         display : 'none'
    //     });
    //     $(this).css({
    //         backgroundColor : 'burlywood'
    //     });
    //     $('#pop').css({
    //         backgroundColor : 'cornsilk'
    //     });
    // });
    // $('#pop').click(function(){
    //     $('.recentPopInBox').eq(0).css({
    //         display : 'none'
    //     });
    //     $('.recentPopInBox').eq(1).css({
    //         display : 'block'
    //     });
    //     $(this).css({
    //         backgroundColor : 'burlywood'
    //     });
    //     $('#recent').css({
    //         backgroundColor : 'cornsilk'
    //     });
    // });


    // recent-pop 영역 index값으로 설정하기
    $('.tab').click(function(){
        click = $(this).index();
        $('.recentPopInBox').css({
            display : 'none',
        });
        $('.recentPopInBox').eq(click).css({
            display : 'block',
        });

        $('.tab').removeClass('on');
        $('.tab').eq(click).addClass('on');
    });


    // arti2_ImgText eq(0) 슬라이드
    img_move = $('.arti2_InBox').width();
    click_num_double = 0;
    $('#carRight').click(function(){
        click_num_double++;
        if(click_num_double > 5){
            click_num_double = 0;
        }
        $('.arti2_BigBox').eq(0).animate({
            left : -img_move*click_num_double,
        });
    });

    $('#carLeft').click(function(){
        click_num_double--;
        if(click_num_double <= 0){
            click_num_double = 0;
        }
        $('.arti2_BigBox').eq(0).animate({
            left : -img_move*click_num_double,
        });
    });


// arti2_ImgText eq(1) 슬라이드
    click_num_child = 0;
    $('#tipRight').click(function(){
        click_num_child++;
        if(click_num_child > 5){
            click_num_child = 0;
        }
        $('.arti2_BigBox').eq(1).animate({
            left : -img_move*click_num_child,
        });
    });

    $('#tipLeft').click(function(){
        click_num_child--;
        if(click_num_child <= 0){
            click_num_child = 0;
        }
        $('.arti2_BigBox').eq(1).animate({
            left : -img_move*click_num_child,
        });
    });


    // arti2_ImgText eq(2) 슬라이드
    click_num_loft = 0;
    $('#brandRight').click(function(){
        click_num_loft++;
        if(click_num_loft > 5){
            click_num_loft = 0;
        }
        $('.arti2_BigBox').eq(2).animate({
            left : -img_move*click_num_loft,
        });
    });

    $('#brandLeft').click(function(){
        click_num_loft--;
        if(click_num_loft <= 0){
            click_num_loft = 0;
        }
        $('.arti2_BigBox').eq(2).animate({
            left : -img_move*click_num_loft,
        });
    });



    // arti2_img hover
    // 비효율적임.. 효율적인 방법 구상....
    $('.arti2_Img').eq(0).hover(function(){
        $('.double_img').eq(0).css({
            display : 'none'
        });
        $('.double_img_dif').eq(0).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(0).css({
            display : 'block'
        });
        $('.double_img_dif').eq(0).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(1).hover(function(){
        $('.double_img').eq(1).css({
            display : 'none'
        });
        $('.double_img_dif').eq(1).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(1).css({
            display : 'block'
        });
        $('.double_img_dif').eq(1).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(2).hover(function(){
        $('.double_img').eq(2).css({
            display : 'none'
        });
        $('.double_img_dif').eq(2).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(2).css({
            display : 'block'
        });
        $('.double_img_dif').eq(2).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(3).hover(function(){
        $('.double_img').eq(3).css({
            display : 'none'
        });
        $('.double_img_dif').eq(3).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(3).css({
            display : 'block'
        });
        $('.double_img_dif').eq(3).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(4).hover(function(){
        $('.double_img').eq(4).css({
            display : 'none'
        });
        $('.double_img_dif').eq(4).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(4).css({
            display : 'block'
        });
        $('.double_img_dif').eq(4).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(5).hover(function(){
        $('.double_img').eq(5).css({
            display : 'none'
        });
        $('.double_img_dif').eq(5).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(5).css({
            display : 'block'
        });
        $('.double_img_dif').eq(5).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(6).hover(function(){
        $('.double_img').eq(6).css({
            display : 'none'
        });
        $('.double_img_dif').eq(6).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(6).css({
            display : 'block'
        });
        $('.double_img_dif').eq(6).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(7).hover(function(){
        $('.double_img').eq(7).css({
            display : 'none'
        });
        $('.double_img_dif').eq(7).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(7).css({
            display : 'block'
        });
        $('.double_img_dif').eq(7).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(8).hover(function(){
        $('.double_img').eq(8).css({
            display : 'none'
        });
        $('.double_img_dif').eq(8).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(8).css({
            display : 'block'
        });
        $('.double_img_dif').eq(8).css({
            display : 'none'
        });
    });
    $('.arti2_Img').eq(9).hover(function(){
        $('.double_img').eq(9).css({
            display : 'none'
        });
        $('.double_img_dif').eq(9).css({
            display : 'block'
        });
    },function(){
        $('.double_img').eq(9).css({
            display : 'block'
        });
        $('.double_img_dif').eq(9).css({
            display : 'none'
        });
    });

    // child_img hover
    $('.arti2_Img').eq(10).hover(function(){
        $('.child_img').eq(0).css({
            display : 'none'
        });
        $('.child_img_dif').eq(0).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(0).css({
            display : 'block'
        });
        $('.child_img_dif').eq(0).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(11).hover(function(){
        $('.child_img').eq(1).css({
            display : 'none'
        });
        $('.child_img_dif').eq(1).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(1).css({
            display : 'block'
        });
        $('.child_img_dif').eq(1).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(12).hover(function(){
        $('.child_img').eq(2).css({
            display : 'none'
        });
        $('.child_img_dif').eq(2).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(2).css({
            display : 'block'
        });
        $('.child_img_dif').eq(2).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(13).hover(function(){
        $('.child_img').eq(3).css({
            display : 'none'
        });
        $('.child_img_dif').eq(3).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(3).css({
            display : 'block'
        });
        $('.child_img_dif').eq(3).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(14).hover(function(){
        $('.child_img').eq(4).css({
            display : 'none'
        });
        $('.child_img_dif').eq(4).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(4).css({
            display : 'block'
        });
        $('.child_img_dif').eq(4).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(15).hover(function(){
        $('.child_img').eq(5).css({
            display : 'none'
        });
        $('.child_img_dif').eq(5).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(5).css({
            display : 'block'
        });
        $('.child_img_dif').eq(5).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(16).hover(function(){
        $('.child_img').eq(6).css({
            display : 'none'
        });
        $('.child_img_dif').eq(6).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(6).css({
            display : 'block'
        });
        $('.child_img_dif').eq(6).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(17).hover(function(){
        $('.child_img').eq(7).css({
            display : 'none'
        });
        $('.child_img_dif').eq(7).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(7).css({
            display : 'block'
        });
        $('.child_img_dif').eq(7).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(18).hover(function(){
        $('.child_img').eq(8).css({
            display : 'none'
        });
        $('.child_img_dif').eq(8).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(8).css({
            display : 'block'
        });
        $('.child_img_dif').eq(8).css({
            display : 'none'
        });
    });


    $('.arti2_Img').eq(19).hover(function(){
        $('.child_img').eq(9).css({
            display : 'none'
        });
        $('.child_img_dif').eq(9).css({
            display : 'block'
        });
    },function(){
        $('.child_img').eq(9).css({
            display : 'block'
        });
        $('.child_img_dif').eq(9).css({
            display : 'none'
        });
    });


    // loft_img hover
    $('.arti2_Img').eq(20).hover(function(){
        $('.loft_img').eq(0).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(0).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(0).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(0).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(21).hover(function(){
        $('.loft_img').eq(1).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(1).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(1).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(1).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(22).hover(function(){
        $('.loft_img').eq(2).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(2).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(2).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(2).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(23).hover(function(){
        $('.loft_img').eq(3).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(3).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(3).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(3).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(24).hover(function(){
        $('.loft_img').eq(4).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(4).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(4).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(4).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(25).hover(function(){
        $('.loft_img').eq(5).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(5).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(5).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(5).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(26).hover(function(){
        $('.loft_img').eq(6).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(6).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(6).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(6).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(27).hover(function(){
        $('.loft_img').eq(7).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(7).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(7).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(7).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(28).hover(function(){
        $('.loft_img').eq(8).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(8).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(8).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(8).css({
            display : 'none'
        });
    });

    $('.arti2_Img').eq(29).hover(function(){
        $('.loft_img').eq(9).css({
            display : 'none'
        });
        $('.loft_img_dif').eq(9).css({
            display : 'block'
        });
    },function(){
        $('.loft_img').eq(9).css({
            display : 'block'
        });
        $('.loft_img_dif').eq(9).css({
            display : 'none'
        });
    });



    
});
// End