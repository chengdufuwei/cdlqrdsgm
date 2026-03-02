//niceScroll 
(function($){ 
	$(window).load(function(){   
		if(window.innerWidth <= 991){
			if ($(".subclass").length > 0){ $(".subclass").prev("a.n_a0").attr("href","javascript:void(0);"); };
		}; 
		
		if(window.innerWidth >= 1200){
			// ------- initParallax ---- //
			function initParallax() { 
				//$('.sec_sets').parallax("100%", 0.2);   
				//$('.sec_what').parallax("100%", 0.2);  
				//$('.sec_what02').parallax("100%", 0.2); 
			}
			initParallax();
		}; 
		
		
		
	});
})(jQuery);   


$(function(){   
	//bgImg
	$(".bgImg").each(function(i) {
		$(".bgImg").eq(i).css("background-image", "url(" + $(this).find("img").attr("src") + ")")
	});  
	//upgrade
	 $(".browserupgrade").animate({
		top: '0',opacity: '1'
	}, 500);
	$(".upgrade_close").click(function(){
		$(this).parent().hide();
	});  
	//menu_phone
    $(".menu_phone").click(function(){ 
		$(this).toggleClass("active");
        $(".header_bot").stop().fadeToggle();
    }); 
    $(".nav li").each(function( index ) {
        $(this).css({'animation-delay': (index/10)+'s'});
    });
	$(window).scroll(function(){  
		var s = $(window).scrollTop(); 
		var h = $(".banner_wrap").height() / 2; 
		if( s > h){
			$("header.header_pc").addClass("header_scr");
		}else{
			$("header.header_pc").removeClass("header_scr");
		}
	});

	//menu_phone02
    $("#menu_phone02").click(function(){ 
	$(this).toggleClass("active02");
        $(".header02_right").stop().fadeToggle();
    }); 
    $(".header02_nav li").each(function( index ) {
        $(this).css({'animation-delay': (index/10)+'s'});
    });
	
	//footer  
	$(window).scroll(function(){  
		var s = $(window).scrollTop(); 
		if( s >= 500){
			$(".passageway").slideDown();
		}else{
			$(".passageway").slideUp();
		}
	});
	$(".passageway_closed").click(function(){ 
		$(this).parent().addClass("active");
        $(this).parent().slideUp();
    });   
    $('.back_top').click(function(){
        $('html,body').animate({scrollTop: '0'}, 800); 
    });   
	
	//tan_wrap
	$(".tan_bg").click(function(){  
        $(this).parent().parent().stop().fadeOut();
    });  
	$(".tan_closed").click(function(){  
        $(this).parent().parent().parent().stop().fadeOut();
    });
	//get_link
    $(".get_link").click(function () {
        $("#templqtype").val("1");
        $("#get_wrap").stop().fadeIn();
    }); 
	
	//advance_scr
	$('#advance_scr').owlCarousel({
	  items: 5, 
	  slideBy: 1, 
	  margin:0,
	  autoWidth:true,
	  mouseDrag:true, 
	  autoplay:false,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: false,
	  nav: false,
	  dots:true,
	  responsive: { 
		  	0: {
			  items: 2,  
			}, 
			768: {
			  items: 3,  
			}, 
		    992: {
			  items: 5,  
			}, 
		}
	});
	 
  	//focus_scr
  	$("#focus_scr").owlCarousel({  
	  items: 1,
	  slideBy:1,
	  margin:0,
	  //animateOut: "fadeOut",
	  //animateIn: "fadeIn", 
	  mouseDrag:false,
	  autoplay: true,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:800,
	  nav: false, 
	  navText: ['previous', '<i>/</i>next'], 
	  dots: true,
	  loop: true, 
	});  
	
	//quick_scr 
	$('#quick_scr').owlCarousel({
	  items: 5, 
	  slideBy: 1, 
	  margin:0,
	  mouseDrag:true, 
	  autoplay:false,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: false,
	  nav: false,
	  dots:true,
	  responsive: { 
		  	0: {
			  items: 5,  
			}, 
			768: {
			  items: 5,  
			}, 
		    992: {
			  items: 5,   
			}, 
		}
	});
	
	
  //question_show
	var sync1 = $("#question_show");
	var sync2 = $("#question_thumbs");
	//var slidesPerPage = 3; //globaly define number of elements per page
	var syncedSecondary = false;

	sync1.owlCarousel({
	items : 1,
	mouseDrag:false,
	animateOut: "fadeOut",
	animateIn: "fadeIn", 
	autoplay: false,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
	smartSpeed:450,
	nav: false, 
	dots: false,
	loop: true,
	responsiveRefreshRate : 200, 
	}).on('changed.owl.carousel', syncPosition);

	sync2
	.on('initialized.owl.carousel', function () {
	  sync2.find(".owl-item").eq(0).addClass("current");
	})
	.owlCarousel({
	items : 8, 
	slideBy: 1, 
	margin:23,
	autoWidth:true,
	mouseDrag:false,
	dots: false,
	nav: false,
	loop:false,
	smartSpeed: 200,  
	responsiveRefreshRate : 100, 
	responsive: {
		0: {
		  items: 4,  
		}, 
		640: {
		  items: 6,  
		},
		992: {
		  items: 10,  
		} 
	 }
	}).on('changed.owl.carousel', syncPosition2);

	function syncPosition(el) {
	//if you set loop to false, you have to restore this next line
	//var current = el.item.index;

	//if you disable loop you have to comment this block
	var count = el.item.count-1;
	var current = Math.round(el.item.index - (el.item.count/2) - .5);

	if(current < 0) {
	  current = count;
	}
	if(current > count) {
	  current = 0;
	}

	//end block

	sync2
	  .find(".owl-item")
	  .removeClass("current")
	  .eq(current)
	  .addClass("current");
	var onscreen = sync2.find('.owl-item.active').length - 1;
	var start = sync2.find('.owl-item.active').first().index();
	var end = sync2.find('.owl-item.active').last().index();

	if (current > end) {
	  sync2.data('owl.carousel').to(current, 100, true);
	}
	if (current < start) {
	  sync2.data('owl.carousel').to(current - onscreen, 100, true);
	}
	}

	function syncPosition2(el) {
	if(syncedSecondary) {
	  var number = el.item.index;
	  sync1.data('owl.carousel').to(number, 100, true);
	}
	}

	sync2.on("mouseover", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).index();
	sync1.data('owl.carousel').to(number, 300, true);
	}); 
	
	//process_scr 
	$('#process_scr').owlCarousel({
	  items: 7, 
	  slideBy: 1, 
	  margin: 15,
	  mouseDrag:true, 
	  autoplay:false,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: false,
	  nav: false,
	  dots:true,
	  responsive: { 
		  	0: {
			   items: 3, 
			   margin: 5,
			}, 
			568: {
			  items: 5, 
			  margin: 10,
			}, 
		    992: {
			  items: 7,
				margin: 15,
			}, 
		}
	});
	
	//honor_scr 
	$('#honor_scr').owlCarousel({
	  items: 4,
	  margin: 30,
	  slideBy: 4,  
	  mouseDrag:true, 
	  autoplay:false,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: false,
	  nav: true, 
	  navContainer: '#honor_guide',
	  dots:true, 
	  dotsContainer: '#honor_dots',
	  responsive: { 
		  	0: {
			  items: 3,
			  slideBy: 3,
			  margin: 10,
			}, 
			568: {
			  items: 3,
			  slideBy: 3,
			  margin: 20,
			}, 
		    992: {
			  items: 4,
			  slideBy: 4,
			  margin: 20,
			},
		  	1200: {
			  items: 4,
			  slideBy: 4,
			  margin: 30,
			},
		}
	});
	
	//report_scr
	$('#report_scr').owlCarousel({
	  items: 7,
	  margin: 14,
	  slideBy: 1,  
	  mouseDrag:true, 
	  autoplay:true,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: true,
	  nav: false,  
	  dots:false,  
	  responsive: { 
		  	0: {
			  items: 4,
			  margin: 7,
			}, 
			568: {
			  items: 5,
	  		  margin: 10,
			},
		  	768: {
			  items: 6,
	  		  margin: 10,
			},
		    992: {
			  items: 7,
	  		  margin: 14,
			}, 
		}
	});
	
	
	//.map_switch
	$(".map_switch").click(function(){ 
		$(this).toggleClass("open");
        $(this).parent(".map_guide").toggleClass("active");
    });  
	
	//
	/*$(".map_switch").click(function(){ 
		$(this).toggleClass("open");
        $(this).parent(".map_guide").toggleClass("active");
    }); 
	*/
	
	//service_scr
	var sync3 = $("#service_show");
	var sync4 = $("#service_tabs");
	//var slidesPerPage = 3; //globaly define number of elements per page
	var syncedSecondary = false;

	sync3.owlCarousel({
	items : 1,
	mouseDrag:false,
	animateOut: "fadeOut",
	animateIn: "fadeIn", 
	autoplay: false,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
	smartSpeed:450,
	nav: false, 
	dots: false,
	loop: true,
	responsiveRefreshRate : 200, 
	responsive: {
		0: {
		  nav: true, 
		}, 
		568: {
		  nav: true,  
		},
		992: {
		  nav: false, 
		} 
	 }
	}).on('changed.owl.carousel', syncPosition3);

	sync4
	.on('initialized.owl.carousel', function () {
	  sync4.find(".owl-item").eq(0).addClass("current");
	})
	.owlCarousel({
	items : 9, 
	slideBy: 1, 
	margin:0,
	mouseDrag:false,
	dots: false,
	nav: false,
	loop:false,
	smartSpeed: 200,  
	responsiveRefreshRate : 100, 
	responsive: {
		0: {
		  items: 4,  
		}, 
		568: {
		  items: 7,  
		},
		992: {
		  items: 9,  
		} 
	 }
	}).on('changed.owl.carousel', syncPosition4);

	function syncPosition3(el) {
	//if you set loop to false, you have to restore this next line
	//var current = el.item.index;

	//if you disable loop you have to comment this block
	var count = el.item.count-1;
	var current = Math.round(el.item.index - (el.item.count/2) - .5);

	if(current < 0) {
	  current = count;
	}
	if(current > count) {
	  current = 0;
	}

	//end block

	sync4
	  .find(".owl-item")
	  .removeClass("current")
	  .eq(current)
	  .addClass("current");
	var onscreen = sync4.find('.owl-item.active').length - 1;
	var start = sync4.find('.owl-item.active').first().index();
	var end = sync4.find('.owl-item.active').last().index();

	if (current > end) {
	  sync4.data('owl.carousel').to(current, 100, true);
	}
	if (current < start) {
	  sync4.data('owl.carousel').to(current - onscreen, 100, true);
	}
	}

	function syncPosition4(el) {
	if(syncedSecondary) {
	  var number = el.item.index;
	  sync3.data('owl.carousel').to(number, 100, true);
	}
	}

	sync4.on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).index();
	sync3.data('owl.carousel').to(number, 300, true);
	});  
	
	//sets_scr 
	$('#sets_scr').owlCarousel({
	  items: 3,
	  margin: 50,
	  slideBy: 1,  
	  mouseDrag:true, 
	  autoplay:false,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: false,
	  nav: false,  
	  dots:true,  
	  responsive: { 
		  	0: {
			  items: 1,
			  margin: 0,
			  center: true,
			  loop: true, 
			  stagePadding: 60
			},  
			568: {
			  items: 2,
	  		  margin: 20,
			}, 
		    768: {
			  items: 3,
	  		   margin: 30,
			},
		    1440: {
			  items: 3,
	  		   margin: 50,
			}, 
		}
	});
	$('#sets_scr').trigger('destroy.owl.carousel').removeClass('owl-carousel');
	
	//trusteeship_scr
	$('#trusteeship_scr').owlCarousel({
	  items: 5,
	  margin: 25,
	  slideBy: 1,  
	  mouseDrag:true, 
	  autoplay:false,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: false,
	  nav: false,  
	  dots:true,  
	  responsive: { 
		  	0: {
			  items: 2,
			  margin: 10,
			}, 
			568: {
			  items: 3,
			  margin: 10,
			},
		  	768: {
			  items: 5,
	  		  margin: 15,
			},
		    992: {
			  items: 5,
	  		  margin: 25,
			}, 
		}
	});
	
	//recommend_scr
	$('#recommend_scr').owlCarousel({
	  items: 3,
	  margin: 28,
	  slideBy: 1,  
	  mouseDrag:true, 
	  autoplay:false,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
	  smartSpeed:450,
	  loop: false,
	  nav: false,  
	  dots:true,  
	  responsive: { 
		  	0: {
			  items: 1,
			  margin: 0,
			  center: true,
			  loop: true, 
			  stagePadding: 60
			}, 
			568: {
			  items: 2,
			  margin: 10,
			},
		  	768: {
			   items: 3,
	  		  margin: 20,
			},
		    992: {
			  items: 3,
	  		  margin: 28,
			}, 
		}
	});
	
	
	//header_sub 2020/08/27
	if ($(".header_sub").size()>0) {
		var navH = $(".header_sub").offset().top;
		$(window).scroll(function () {
			var sorH = $(this).scrollTop();
			if (sorH >= navH) {
				$('.header_sub').addClass("fxd");
			}
			else if (sorH < navH) {
				$('.header_sub').removeClass("fxd");
			}
		});
	}
	
	/*wow*/
	 $(".notice_dec02").addClass("wow fadeIn").css({
		'animation-duration': 1 +'s', 
		'animation-delay':0.2 +'s', 
	});
	$("aa").each(function( index ) {
        $(this).addClass("wow fadeInRight").css({
			'animation-duration': 1 +'s', 
			'animation-delay':0.2 + (index/5)+'s', 
		});
    });  
	  
	
	//wow
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		new WOW().init();
	};
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset:0,
		live: true,
		mobile: true
	});
	wow.init();

}); 
 
 

//question_overview
(function($){
	$.fn.moreText = function(options){
		var defaults = {
			maxLength:108,
			mainCell:".question_overview",
			openBtn:'全部',
			closeBtn:'收起'
		} 
		return this.each(function() {
		var _this = $(this);

		var opts = $.extend({},defaults,options);
		var maxLength = opts.maxLength;
		var TextBox = $(opts.mainCell,_this); 
		var openBtn = opts.openBtn;
		var closeBtn = opts.closeBtn;

		var countText = TextBox.html();
		var newHtml = '';
		if(countText.length > maxLength){
		newHtml = countText.substring(0,maxLength)+'...<a class="question_more">'+openBtn+'</a>';
		}else{
		newHtml = countText;
		}
		TextBox.html(newHtml);
		TextBox.on("click",".question_more",function(){
			if($(this).text()==openBtn){
				TextBox.html(countText+' <a class="question_more">'+closeBtn+'</a>');
			}else{
				TextBox.html(newHtml);
			}
		});
			
		$(".question_up").each(function( ) {
			$(this).click(function(){ 
				if($(this).parent().find(TextBox).find(".question_more").text()==openBtn){
					$(this).parent().find(TextBox).html(countText+' <a class="question_more">'+closeBtn+'</a>');
					//$(this).addClass("open");
				}else{
					$(this).parent().find(TextBox).html(newHtml);
					//$(this).removeClass("open");
				}
			}); 
		});   	
		
			 
		});
	};
	 
})(jQuery);

	(function($){
	$.fn.moreText02 = function(options){
		var defaults = {
			maxLength:108,
			mainCell:".comment_overview",
			openBtn:'查看详情',
			closeBtn:'收起详情'
		} 
		return this.each(function() {
		var _this = $(this);

		var opts = $.extend({},defaults,options);
		var maxLength = opts.maxLength;
		var TextBox = $(opts.mainCell,_this);
		var openBtn = opts.openBtn;
		var closeBtn = opts.closeBtn;

		var countText = TextBox.html();
		var newHtml = '';
		if(countText.length > maxLength){
		newHtml = countText.substring(0,maxLength)+'...<a class="comment_more">'+openBtn+'</a>';
		}else{
		newHtml = countText;
		}
		TextBox.html(newHtml);
		TextBox.on("click",".comment_more",function(){
		if($(this).text()==openBtn){
		TextBox.html(countText+' <a class="comment_more">'+closeBtn+'</a>');
		}else{
		TextBox.html(newHtml);
		}
		})
		})
	}
	})(jQuery);

	$(function(){
		$(".question_show li").moreText({
			maxLength: 200, //默认最大显示字数，超过...
			mainCell: '.question_overview' //文字容器
		});
		$(".comment_list li").moreText02({
			maxLength: 97, //默认最大显示字数，超过...
			mainCell: '.comment_overview' //文字容器
		});
	});

 