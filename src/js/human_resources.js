jQuery(document).ready(function ($) {
	var owl = $("#owl-demo-3");
	owl.owlCarousel({
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		items: 3,
		loop: true,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {
			0: {
				items: 1
			},
			320: {
				items: 1,
				nav:false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				loop: false
			},
			992: {
				items: 3,
				loop: false
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: "swing",
		info: false,
		nestedItemSelector: false,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab",
		autoHeight: false,
		lazyLoad: false
	});

	$(".next").click(function () {
		owl.trigger("owl.next");
	});
	$(".prev").click(function () {
		owl.trigger("owl.prev");
	});
});  


// more read
  document.querySelectorAll(".caption-more").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const text = btn.previousElementSibling; 
            const isOpen = text.classList.contains("open");

            text.classList.toggle("open");

            btn.textContent = isOpen ? "Daha çox oxu" : "Gizlət";
        });
    });
