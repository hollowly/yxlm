
    $(function()
    {
//------------------------头部内容-------------------------------------------
        //head div显示/隐藏
        //移入
        $('.head-ul').on('mouseenter',function()
        {
            $('.head-nav-sub-inner').stop(false,true).slideDown(400);
        });
        //移出
        $('.head-nav-sub-inner').on('mouseleave',function()
        {
            $(this).stop(false,true).hide(300);
        });
        
//----------------------------二维码-------------------------------------------
        $('#head-userinfo-normal > a > #img2').mouseenter(function()
        {
            $('#head-userinfo-normal > #img2-1').stop(false,true).fadeIn(450);
        }).mouseleave(function()
        {
            $('#head-userinfo-normal > #img2-1').stop(false,true).fadeOut(450);
        });
//----------------------------个人中心-------------------------------------------
        $('#head-userinfo-normal > a > #img3, #head-userinfo-normal > #welcome, #head-userinfo-normal > #sign').on('mouseenter',function()
        {
            $('#head-userinfo-normal > #head-login-hover').stop(true,true).fadeIn(500);
        });
        $('#head-userinfo-normal > #head-login-hover').on('mouseleave',function()
        {
            $(this).stop(false,true).fadeOut(300);
        })
//----------------------------轮播图-------------------------------------------
        //鼠标移入
        $('.promo-2 > input').on('mouseenter',function()
        {
            $(this).css(
            {
                'color':'#ab8e66',
                'background-color':' #f7f6f6',
                'border-bottom': '2px #cea861 solid',
            });
            $(this).siblings('input').css(
                {
                    'color':'black',
                    'background': 'rgb(227, 226, 226)',
                    'border-bottom': '1px',
                }
            );
        //图片轮播
            let idximg = $(this).index();
            $('.promo-1 > a').eq(idximg).stop(true,true).show(300).siblings('a').stop(true,true).hide(300);
        });
//----------------------------综合/公告/赛事/攻略/社区--------------------------------
        $('.r-promo > .part-ul-title > li').on('mouseenter',function()
        {
            $(this).css(
                {
                    'color':'#1da6ba',
                    'font-weight':'bold',
                }
            ).siblings('li').css(
                {
                    'color':'',
                    'font-weight':'',
                }
            )
            var idxb = $(this).index();
            
            $('.r-promo > a').eq(idxb).show().siblings('a').hide();
            $('.r-promo > .part-ul-content > ul').eq(idxb).show().siblings('ul').hide();
        });
//----------------------------热门活动>正在进行/商城特惠/长期活动------------------
        $('#activity > #underway > span').mouseenter(function()
        {
            $(this).css
            ({
                'color':'#1da6ba',
                'border-bottom':'2px solid #1da6ba',
                'font-weight':'bold',

            }).siblings('span').css
            ({
                'color':'#676767',
                'border-bottom':'0px',
                'font-weight':'',
            });

            var idxa = $(this).index();
            $('#activity > ul').eq(idxa).stop(true,false).show().siblings('ul').stop(true,false).hide();
        });
//-----------------------------图片上抬------------------------------------------------
        $('#activity > ul > a > #content').mouseenter(function()
        {
            $(this).stop(true,false).animate({'margin-top':'8px'},200,'linear');
            $(this).children('#content-inner').stop(true,false).fadeIn(200);
        }).mouseleave(function()
        {
            $(this).stop(true,false).animate({'margin-top':'20px'},200,'linear');
            $(this).children('#content-inner').stop(true,false).fadeOut(200);
        });
//--------------------------周免/西部天使/开发者日志--------------------------------------
        $('#new-hero-and-skin > .new-hero').mouseenter(function()
        {
            $('#new-hero-and-skin > .new-hero > .new-hero-inner').stop(false,true).fadeIn(300);
        }).mouseleave(function()
        {
            $('#new-hero-and-skin > .new-hero > .new-hero-inner').stop(false,true).fadeOut(300);
        });
        $('#new-hero-and-skin > .new-skin').mouseenter(function()
        {
            $('#new-hero-and-skin > .new-skin > .new-skin-inner').stop(false,true).fadeIn(300);
        }).mouseleave(function()
        {
            $('#new-hero-and-skin > .new-skin > .new-skin-inner').stop(false,true).fadeOut(300);
        });
        $('#week-free > .week-free-first').mouseenter(function()
        {
            $('#week-free > .week-free-first > .first-inner').stop(false,true).fadeIn(300);
        }).mouseleave(function()
        {
            $('#week-free > .week-free-first > .first-inner').stop(false,true).fadeOut(300);
        })
        $('#week-free > .week-free-second').mouseenter(function()
        {
            $(this).children('.second-inner').stop(false,true).fadeIn(300);
        }).mouseleave(function()
        {
            $(this).children('.second-inner').stop(false,true).fadeOut(300);
        });
        //周免
        $('#week-free > .week-free-fourth').mouseenter(function()
        {
            $('.free-hero').stop(false,false).slideDown();
        }).mouseleave(function()
        {
            $('.free-hero').stop(false,false).slideUp();
        });
        $('.free-hero').on('mouseenter',function()
        {
            $(this).stop(false,false).show();
        });
        $('body').on('mouseleave',function()
        {
            $('.free-hero').stop(false,false).slideUp();
        });
//--------------------------皮肤介绍隐藏div--------------------------------------
        $('.new-skin').on('mouseenter',function()
        {
            $('#new-skin-container').stop(false,true).slideDown(300);
        });
        $('#new-skin-container').on('mouseenter',function()
        {
            $(this).stop(false,false).show();
        });
        $('body').on('mouseleave',function()
        {
            $('#new-skin-container').stop(false,true).slideUp(300);
        });
//--------------------------赛事中心--------------------------------------
        $('#match-center > #match-center-subtitle > span').mouseenter(function()
        {
            $(this).css
            ({
                'color':'#1da6ba',
                'border-bottom':'2px solid #1da6ba',
                'font-weight':'bold',

            }).siblings('span').css
            ({
                'color':'#676767',
                'border-bottom':'0px',
                'font-weight':'',
            });

            var idxf = $(this).index();
            $('#match-center >  ul > div').eq(idxf).stop(true,false).slideDown(350).siblings('div').stop(true,false).slideUp(350);
        });
//--------------------------英雄资料--------------------------------------
        $('#hero-information > #hero-information-title > .hero-information-title-ul > li').click(function()
        {
            $(this).children('span').text('◆').parent('li').siblings('li').children('span').text('◇');
            $(this).css({'font-weight': '700','color': '#1da6ba'}).siblings('li').css({'font-weight': '500','color': '#676767'});
        });
        $('#hero-information > #hero-information-title > div > a').mouseenter(function()
        {
            $(this).css({'text-decoration':'underline','font-weight':'700','color':'#1da6ba'});
        }).mouseleave(function()
        {
            $(this).css({'text-decoration':'none','font-weight':'500','color':'#7ea1a6'})
        });
        // 所有英雄
        $('#hero-information > #hero-information-title > .hero-information-title-ul > .hero-all').click(function()
        {
               $('#hero-information-detailed > .hero-information-detailed-ul > li').show();
        });
        // 战士
        $('#hero-information > #hero-information-title > .hero-information-title-ul > .hero-warrior').click(function()
        {
               $('#hero-information-detailed > .hero-information-detailed-ul > li').hide();
               $('li.warrior').show();
        });
        //法师
        $('#hero-information > #hero-information-title > .hero-information-title-ul > .hero-master').click(function()
        {
               $('#hero-information-detailed > .hero-information-detailed-ul > li').hide();
               $('li.master').show();
        });
        //刺客
        $('#hero-information > #hero-information-title > .hero-information-title-ul > .hero-assassin').click(function()
        {
               $('#hero-information-detailed > .hero-information-detailed-ul > li').hide();
               $('li.assassin').show();
        });
        //坦克
        $('#hero-information > #hero-information-title > .hero-information-title-ul > .hero-tank').click(function()
        {
               $('#hero-information-detailed > .hero-information-detailed-ul > li').hide();
               $('li.tank').show();
        });
        //射手
        $('#hero-information > #hero-information-title > .hero-information-title-ul > .hero-shooter').click(function()
        {
               $('#hero-information-detailed > .hero-information-detailed-ul > li').hide();
               $('li.shooter').show();
        });
        //辅助
        $('#hero-information > #hero-information-title > .hero-information-title-ul > .hero-auxiliary').click(function()
        {
               $('#hero-information-detailed > .hero-information-detailed-ul > li').hide();
               $('li.auxiliary').show();
        });
//--------------------------FANART创作馆--------------------------------------
        $('#creative > a > div').mouseenter(function()
        {
            $(this).children('div').stop(true,true).fadeIn(300);
        }).mouseleave(function()
        {
            $(this).children('div').stop(true,true).fadeOut(300);
        });
//--------------------------用户调查/合作媒体--------------------------------------
       $('#user-survey > a > img').mouseenter(function()
       {
           $(this).stop(true,false).animate({'margin-top':'-15px'},200,'linear');
       }).mouseleave(function()
       {
            $(this).stop(true,false).animate({'margin-top':'0px'},200,'linear');
       });
       $('#user-survey > ul > li').mouseenter(function()
       {
           let idxc = $(this).index();
           $('#user-survey > ul > li > a > img').eq(idxc).stop(true,false).animate({'top':'-10px'},300,'linear');
       }).mouseleave(function()
       {
            let idxc = $(this).index();
            $('#user-survey > ul > li > a > img').eq(idxc).stop(true,false).animate({'top':'0px'},300,'linear');
       });
       $('#user-survey > ul > .user-survey-year').click(function()
       {
            alert('敬请期待');
       });
       $('#user-survey > ul > .media').mouseenter(function()
       {
           $('#user-survey > ul > li > .media-div').stop(true,true).fadeIn(300);
       }).mouseleave(function()
       {
            $('#user-survey > ul > li > .media-div').stop(true,true).fadeOut(300);
       });
//---------------------------------侧边栏-----------------------------------------
       $('#sidebar > li').mouseenter(function()
       {
           let idxe = $(this).index();
           $('#sidebar > li > a > img').eq(idxe).stop(true,true).animate({'top':'-15px'},300,'linear',function()
           {
               $('#sidebar > li > a > img').eq(idxe).stop(true,true).animate({'top':'0px'},300,'linear',function()
               {
                   $('#sidebar > li > a > img').eq(idxe).stop(true,true).animate({'top':'-7px'},320,'linear',function()
                   {
                       $('#sidebar > li > a > img').eq(idxe).stop(true,true).animate({'top':'0px'},320,'linear');
                   });
               });
           });
       });
    });
