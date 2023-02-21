jQuery(function($) {
	/**********************************************************************************************/
	/**********************************          HEADER          **********************************/
	/**********************************************************************************************/
	$("body.home .menubar__menuitem.scrl").click(function(e) {
		e.preventDefault();
		var targetDist = $( $(this).attr("href") ).offset().top - 99;
		$("html, body").animate({ scrollTop: targetDist }, "slow", function() {
			activeMenu();
			setTimeout( function() { $("body").removeClass("mobmenu-on"); }, 200);
		});
	});
	
	$(document).scroll(function() {
		var scrTop = $(window).scrollTop();
		if ( scrTop > 50 )
			$(".header .menubar").addClass("sticky");
		else $(".header .menubar").removeClass("sticky");
		
		if ( $("body").hasClass("home") )
			activeMenu();
	});
	
	function activeMenu() {
		var scrTop = $(window).scrollTop() + 100;
		if ( scrTop <= $("#d3gamma").offset().top ) {
			$(".menubar .menubar__menuitem.active").removeClass("active");
			$(".menubar .menubar__menuitem:nth-child(1)").addClass("active");
		}
		else if ( scrTop > $("#d3gamma").offset().top && scrTop <= $("#instruction").offset().top ) {
			$(".menubar .menubar__menuitem.active").removeClass("active");
			$(".menubar .menubar__menuitem:nth-child(2)").addClass("active");
		}
		else if (
			scrTop > $("#instruction").offset().top && scrTop <= $("#vitamin-d3").offset().top ) {
			$(".menubar .menubar__menuitem.active").removeClass("active");
			$(".menubar .menubar__menuitem:nth-child(3)").addClass("active");
		}
		else  {
			$(".menubar .menubar__menuitem.active").removeClass("active");
			$(".menubar .menubar__menuitem:nth-child(4)").addClass("active");
		}
	}

	$(".header__menuicon").click(function() {
		$("body").addClass("mobmenu-on");
	});
	
	$(".header__mask, .menubar__close").click(function() {
		$("body").removeClass("mobmenu-on");
	});
	
	if ( window.location.hash ) scroll(0,0);
	setTimeout( function() { scroll(0,0); }, 1);
	
	$(window).on("load", function() {
		if ( window.location.hash ) {
			var targetDist = $( window.location.hash ).offset().top - 99;
			$("html, body").animate({ scrollTop: targetDist }, "slow", function() {
				if ( $("body").hasClass("home") ) activeMenu();
				setTimeout( function() { $("body").removeClass("mobmenu-on"); }, 200);
			});
		}
	});
	
	
	/**********************************************************************************************/
	/**********************************          FOOTER          **********************************/
	/**********************************************************************************************/
	$(".footer__top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	
	/**********************************************************************************************/
	/**********************************           VIDEO          **********************************/
	/**********************************************************************************************/
	if ( $("body").hasClass("home") ) {
		var defaultVolume = 0.5;
		videojs("d3-promo-player", {}, function() {
			this.volume(defaultVolume);
		});
	}
	
	
	/**********************************************************************************************/
	/**********************************            FAQ           **********************************/
	/**********************************************************************************************/
	$(".page-faq .faqnav__item").click(function() {
		if ( !$(this).hasClass("active") ) {
			$(".faqnav__item.active").removeClass("active");
			$(this).addClass("active");
			$(".faqbody__item").slideUp("slow");
			$(".faqbody__item[data-id=" + $(this).data("id") + "]").slideDown("slow");
		}
	});
});