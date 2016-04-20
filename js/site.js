$(function() {
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	var slides = document.querySelectorAll(".page");

	// Pin every slide at top of viewport
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
		.setPin(slides[i])
		.addTo(controller);
	}

	// Panel Dropdown

	var preview = $(".panel-preview");
	var body = $(".panel-body");
	var arrow = $('.arrow');
	var isOpen = true;

	preview.click(function(){
		if(isOpen) {
			body.velocity("slideUp", { duration: 200 });
			isOpen = false;
			arrow.velocity("stop")
			arrow.velocity({rotateX: [180, 0]}, {delay:0, duration: 500});
		}
		else
		{
			body.velocity("slideDown", { duration: 400 });
			isOpen = true;
			arrow.velocity("stop")
			arrow.velocity({rotateX: [0, 180]}, {delay:0, duration: 500});
		}
	});

	// Toggle Scroll

	$(".panel").velocity("fadeIn", function(){
		$(".scroll-button").velocity(
			{ translateY: "8px" },
			{ duration: 800, loop: true }
		);
	});

	$('.scroll-button').on("click", function(e) {
		var idArray = ["#explore-jordan", "#jerash-bg", "#amman-bg", "#deadsea-bg", "#wadiHessa-bg", "#petra-bg", "#wadi-rum-bg" ];
		var id = $(this).parent().parent().parent().attr('id');
		var temp = "#" + id.toString();
		for(i = 0; i<idArray.length;i++){
			if(temp === idArray[i]){
				return controller.scrollTo(idArray[i+1]);
			}
		}
	});

	//  Bind scroll to anchor links
	$('a[href*="#"]').on("click", function(e) {
		e.preventDefault();
	  var id = $(this).attr("href");
		controller.scrollTo(id)
	});

	// Img Modal
	// Lightbox credit of http://ashleydw.github.io/lightbox/

	$(document).ready(function ($) {

		// delegate calls to data-toggle="lightbox"
		$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
			event.preventDefault();
			return $(this).ekkoLightbox({
				always_show_close: true
			});
		});

	});

	// Load ScrollBars

	$(window).load(function(){
    $(".content").mCustomScrollbar();
  });


	// Update CSS for Map Overlay pages first slide
	var toggleMap = new ScrollMagic.Scene({triggerElement: "#jerash-bg"})
	.setVelocity('.map-container', { right:0 },300,"easeOutExpo")
	.setClassToggle(".map-container", "map-fixed")
	.addTo(controller);


	// update pins
	var jerash = new ScrollMagic.Scene({triggerElement: "#jerash-bg"})
	.setClassToggle("#jerash-pin", "pin-toggle")
	jerash.duration(function(){
		return window.innerHeight + 300;
	})
	.addTo(controller);

	var amman = new ScrollMagic.Scene({triggerElement: "#amman-bg"})
	.setClassToggle("#amman-pin", "pin-toggle")
	amman.duration(function(){
			return window.innerHeight + 300;
	})
	.addTo(controller);

	var deadsea = new ScrollMagic.Scene({triggerElement: "#deadsea-bg"})
	.setClassToggle("#deadsea-pin", "pin-toggle")
	deadsea.duration(function(){
		return window.innerHeight + 300;
	})
	.addTo(controller);

	var wadiHessa = new ScrollMagic.Scene({triggerElement: "#wadiHessa-bg"})
	.setClassToggle("#hessa-pin", "pin-toggle")
	wadiHessa.duration(function(){
		return window.innerHeight + 300;
	})
	.addTo(controller);

	var petra = new ScrollMagic.Scene({triggerElement: "#petra-bg"})
	.setClassToggle("#petra-pin", "pin-toggle")
	petra.duration(function(){
		return window.innerHeight + 300;
	})
	.addTo(controller);

	var wadiRum = new ScrollMagic.Scene({triggerElement: "#wadi-rum-bg"})
	.setClassToggle("#rum-pin", "pin-toggle")
	wadiRum.duration(function(){
		return window.innerHeight + 300;
	})
	.addTo(controller);


});
