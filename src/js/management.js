$(document).ready(function () {
  $("#owl-demo-7").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});
