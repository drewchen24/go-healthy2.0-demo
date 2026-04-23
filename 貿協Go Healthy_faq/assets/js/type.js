$(document).ready(function(){


	/* ajax */
	$(".ajax_nav").load("ajax_nav.html");
	$(".ajax_footer").load("ajax_footer.html");


	/* btn: one_box Submit Now */
	$(".one_box .submit_now").hover(
		function () {
			$(this).children().addClass("action");
		},
		function () {
			$(this).children().removeClass("action");
		}
	);

	/* btn: fixed Submit Now */
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 800) {
			$('.submit_now.fixed').fadeIn();
		} else {
			$('.submit_now.fixed').fadeOut();
		}
	});
	$(".submit_now.fixed").hover(
		function () {
			$(this).children().removeClass("action");
		},
		function () {
			$(this).children().addClass("action");
		}
	);


	/* text_box button */
	$(".text_box .button").hover(
		function () {
			$(this).children(".icon.on").hide();
			$(this).children(".icon.off").show();
		},
		function () {
			$(this).children(".icon.on").show();
			$(this).children(".icon.off").hide();
		}
	); 


	/* wow */
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true,
		callback: function(box) {
		},
		scrollContainer: null
	});
	wow.init();


	/* two_box Swiper */
	var swiper = new Swiper('.swiper_box.marquee .swiper-container', {

		// 自適應佈局
		breakpoints: {
			700: { // <= 視窗小於 px
				slidesPerView: 1,
				spaceBetween: 30,
				slidesPerGroup: 1,
			},
			1000: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerGroup: 1,
			},
			1300: {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesPerGroup: 1,
			},
		},
		slidesPerView: 'auto', //佈局：123行的數量 //：跑馬燈：'auto'
		spaceBetween: 30, //佈局：格間距
		slidesPerGroup: 1, //佈局：格群組數量

		effect: "slide", //主題：幻燈片-slide, 淡入淡出-fade, 立方體-cube, 封面流-coverflow,翻轉-flip
		direction: "horizontal", //滑塊方向：水平-horizontal, 垂直-vertical
		mousewheel: false, //滑鼠滾輪切換
		centeredSlides: true, //佈局：置中
		grabCursor: true, //佈局：手形鼠標
		loop: true, //滑塊循環：
		loopFillGroupWithBlank: true, //滑塊不足時補足空白滑塊

		speed: 3000, //滑塊速度
		autoplay: {
			delay: 0, //自動播放速度
			disableOnInteraction: false //滑動後繼續播放 預設-true, 啟動-false
		},
		autoplay: true, //自動播放

		/* 延遲加載 */
		lazy: {
			loadPrevNext: true, //加載前後幻燈片
		},
		lazy: true,

		/* 導航前後 */
		navigation: {
			nextEl: '.swiper_box.marquee .swiper-button-next',
			prevEl: '.swiper_box.marquee .swiper-button-prev',
		},

	});


	/* six_box slide_list_box */
	$(".six_box .slide_title_box .icon.add").click(function(){
		$(this).hide();
		$(this).siblings(".icon.reduce").show();
		$(this).parent().nextAll().slideDown(400);
	});
	$(".six_box .slide_title_box .icon.reduce").click(function(){
		$(this).hide();
		$(this).siblings(".icon.add").show();
		$(this).parent().nextAll().slideUp(400);
	});


	/* ten_box */
	$(".ten_box .am_box").hover(
		function () {
			$(this).children(".am.off").addClass("on");
			$(this).children(".am.action").addClass("off");
		},
		function () {
			$(this).children(".am.off").removeClass("on");
			$(this).children(".am.action").removeClass("off");
		}
	);


	/* Tailwind CSS 滾動轉向：垂直轉水平轉垂直 */
	let lastKnownScrollPosition = 0;
	let deltaY = 0;

	window.addEventListener("scroll", wheelHandler);
        
	document.querySelectorAll('.sticky-container').forEach(function(container) {
		const stikyContainerHeight = (container.querySelector('main').offsetWidth + window.innerHeight);
		container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
	});

	function isElementInViewport(el) {
		const rect = el.getBoundingClientRect();
		return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
	}

	function wheelHandler(event) {

		deltaY = window.scrollY - lastKnownScrollPosition;
		lastKnownScrollPosition = window.scrollY;

		console.log('deltaY', deltaY);

		const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container) {
			return isElementInViewport(container);
		})[0];

		if (!containerInViewPort) {
			return;
		}

		var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
		var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
		let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

		if (g_canScrollHorizontally) {
			containerInViewPort.querySelector('main').scrollLeft += deltaY;
		}
	}


	/* eleven_box 頁籤框架 */
	$(".tag_box .tag").click(function(){
		$(this).siblings(".tag").removeClass("click");
		$(this).addClass("click");
	});
	$(".tag_box .tag").click(function(){
		$(this).parent().siblings(".item_box").children("").hide();
	});
	$(".tag_box .tag.no1").click(function(){
		$(this).parent().siblings(".item_box").children(".no1").show();
		$(this).parent().parent().parent().siblings(".bottom_box").hide();
		$(this).parent().parent().parent().siblings(".bottom_box.no1").show();
		$(this).parent().parent().parent().siblings(".right_box").hide();
		$(this).parent().parent().parent().siblings(".right_box.no1").show();
	});
	$(".tag_box .tag.no2").click(function(){
		$(this).parent().siblings(".item_box").children(".no2").show();
		$(this).parent().parent().parent().siblings(".bottom_box").hide();
		$(this).parent().parent().parent().siblings(".bottom_box.no2").show();
		$(this).parent().parent().parent().siblings(".right_box").hide();
		$(this).parent().parent().parent().siblings(".right_box.no2").show();
	});


	/* eleven_box vidio */
	$(".eleven_box .left_box .item.no1 .vedio_name.no1,.eleven_box .bottom_box.no1 .vedio_1").click(function(){
		$(".eleven_box .bottom_box.no1").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no1").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no1").children(".icon_box.no1").addClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no1").children(".vidio_box.no1").addClass("on");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name.no1").addClass("click");
	});
	$(".eleven_box .left_box .item.no1 .vedio_name.no2,.eleven_box .bottom_box.no1 .vedio_2").click(function(){
		$(".eleven_box .bottom_box.no1").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no1").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no1").children(".icon_box.no2").addClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no1").children(".vidio_box.no2").addClass("on");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name.no2").addClass("click");
	});
	$(".eleven_box .left_box .item.no1 .vedio_name.no3,.eleven_box .bottom_box.no1 .vedio_3,.am_action_video").click(function(){
		$(".eleven_box .bottom_box.no1").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no1").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no1").children(".icon_box.no3").addClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no1").children(".vidio_box.no3").addClass("on");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name.no3").addClass("click");
	});
	$(".eleven_box .left_box .item.no1 .vedio_name.no4,.eleven_box .bottom_box.no1 .vedio_4").click(function(){
		$(".eleven_box .bottom_box.no1").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no1").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no1").children(".icon_box.no4").addClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no1").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no1").children(".vidio_box.no4").addClass("on");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no1").children(".vedio_name.no4").addClass("click");
	});
	
	$(".eleven_box .left_box .item.no2 .vedio_name.no1,.eleven_box .bottom_box.no2 .vedio_1").click(function(){
		$(".eleven_box .bottom_box.no2").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no2").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no2").children(".icon_box.no1").addClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no2").children(".vidio_box.no1").addClass("on");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name.no1").addClass("click");
	});
	$(".eleven_box .left_box .item.no2 .vedio_name.no2,.eleven_box .bottom_box.no2 .vedio_2").click(function(){
		$(".eleven_box .bottom_box.no2").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no2").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no2").children(".icon_box.no2").addClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no2").children(".vidio_box.no2").addClass("on");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name.no2").addClass("click");
	});
	$(".eleven_box .left_box .item.no2 .vedio_name.no3,.eleven_box .bottom_box.no2 .vedio_3").click(function(){
		$(".eleven_box .bottom_box.no2").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no2").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no2").children(".icon_box.no3").addClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no2").children(".vidio_box.no3").addClass("on");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name.no3").addClass("click");
	});
	$(".eleven_box .left_box .item.no2 .vedio_name.no4,.eleven_box .bottom_box.no2 .vedio_4").click(function(){
		$(".eleven_box .bottom_box.no2").children(".icon_box").removeClass("on");
		$(".eleven_box .bottom_box.no2").children(".icon_box").addClass("off");
		$(".eleven_box .bottom_box.no2").children(".icon_box.no4").addClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").removeClass("on");
		$(".eleven_box .right_box.no2").children(".vidio_box").addClass("off");
		$(".eleven_box .right_box.no2").children(".vidio_box.no4").addClass("on");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name").removeClass("click");
		$(".eleven_box .left_box .item_box .item.no2").children(".vedio_name.no4").addClass("click");
	});


	/* twelve_box hover */
	$(".item_origin").hover(
		function () {
			$(this).siblings(".am_item").addClass("on");
			$(this).children(".origin_icon.no2").addClass("on");
		},
		function () {
			$(this).siblings(".am_item").removeClass("on");
			$(this).children(".origin_icon.no2").removeClass("on");
		}
	); 



});
