<<<<<<< HEAD
=======



>>>>>>> 69815476df7e0a253458288d1b4a8f4abbfe7ece
$(document).ready(function () {
  $("#useful-links").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      },
      1025: {
        items: 3
      }
    }
  });
});

// back to top
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
// management carousel
jQuery(document).ready(function ($) {
  var owl = $("#owl-demo-2");
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
        // nav: true
      },
      320: {
        items: 1,
        nav: false
      },
      480: {
        items: 2,
        nav: false
      },
      768: {
        items: 2,
        // nav: true,
        loop: false
      },
      992: {
        items: 3,
        // nav: true,
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



// More

document.addEventListener("DOMContentLoaded", function () {
  function setupToggle(sectionSelector, itemSelector, toggleBtnId, defaultCount = 3, increment = 3) {
    const items = document.querySelectorAll(sectionSelector + " " + itemSelector);
    const toggleBtn = document.getElementById(toggleBtnId);
    if (!toggleBtn) return;

    const toggleText = toggleBtn.querySelector('span');
    let visibleCount = defaultCount;

    function updateVisibility() {
      items.forEach((item, index) => {
        if (index < visibleCount) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });

      if (visibleCount >= items.length) {
        toggleText.textContent = "Daha az";
      } else {
        toggleText.textContent = "Daha çox";
      }
    }

    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();

      if (visibleCount >= items.length) {
        visibleCount = defaultCount;
      } else {
        visibleCount += increment;
        if (visibleCount > items.length) visibleCount = items.length;
      }

      updateVisibility();
    });

    updateVisibility();
  }

<<<<<<< HEAD
  setupToggle('.vacancy-blog', '.vacancy-flex', 'toggleVacancies', 2, 5);
  setupToggle('.faqs .container', '.faq-drawer', 'toggleFaqs', 3, 3);
  setupToggle('.announcement-blog', '.announcement-flex', 'toggleAnnouncements', 3, 5);


  setupToggle('.financial_statements .row', '.postal_convention_left', 'toggleFinancialStatements', 4, 3);
});

// SON

// mezenne

=======
  // Əvvəlki çağırışlar...
  setupToggle('.vacancy-blog', '.vacancy-flex', 'toggleVacancies', 2, 5);
  setupToggle('.faqs .container', '.faq-drawer', 'toggleFaqs', 3, 3);

  // Maliyyə hesabatları üçün yeni çağırış
  setupToggle('.financial_statements .row', '.postal_convention_left', 'toggleFinancialStatements', 4, 3);
});

// mezenne

(function() {
  let supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      }
    }));
  } catch(e) {}

  const origAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(type, listener, options) {
    if (type === 'touchstart' || type === 'touchmove') {
      if (options === undefined) options = { passive: true };
      else if (typeof options === 'boolean') options = { passive: true };
      else if (typeof options === 'object') options.passive = true;
    }
    origAddEventListener.call(this, type, listener, options);
  };
})();
// scrolla bagli consoleda cixan xeta ucun
>>>>>>> 69815476df7e0a253458288d1b4a8f4abbfe7ece
