
$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});

// $(window).scroll(function () {
// 	if ($(document).scrollTop() > 50) {
// 		$('.nav').addClass('affix');
// 		console.log("OK");
// 	} else {
// 		$('.nav').removeClass('affix');
// 	}
// });

// owl-carousel
// jQuery("#carousel").owlCarousel({
// 	autoplay: true,
// 	rewind: true, /* use rewind if you don't want loop */
// 	margin: 20,
// 	/*
//    animateOut: 'fadeOut',
//    animateIn: 'fadeIn',
//    */
// 	responsiveClass: true,
// 	autoHeight: true,
// 	autoplayTimeout: 7000,
// 	smartSpeed: 800,
// 	nav: true,
// 	responsive: {
// 		0: {
// 			items: 1
// 		},

// 		600: {
// 			items: 3
// 		},

// 		1024: {
// 			items: 4
// 		},

// 		1366: {
// 			items: 4
// 		}
// 	}
// });

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

// search


// new nav
const pageHeader = document.querySelector(".page-header");
const openMobMenu = document.querySelector(".open-mobile-menu");
const closeMobMenu = document.querySelector(".close-mobile-menu");
const toggleSearchForm = document.querySelector(".search");
const searchForm = document.querySelector(".page-header form");
const topMenuWrapper = document.querySelector(".top-menu-wrapper");
const isVisible = "is-visible";
const showOffCanvas = "show-offcanvas";
const noTransition = "no-transition";
let resize;

openMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.add(showOffCanvas);
});

closeMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.remove(showOffCanvas);
});

toggleSearchForm.addEventListener("click", () => {
  searchForm.classList.toggle(isVisible);
});

window.addEventListener("resize", () => {
  pageHeader.querySelectorAll("*").forEach(function (el) {
    el.classList.add(noTransition);
  });
  clearTimeout(resize);
  resize = setTimeout(resizingComplete, 500);
});

function resizingComplete() {
  pageHeader.querySelectorAll("*").forEach(function (el) {
    el.classList.remove(noTransition);
  });
}



// bu
// document.addEventListener('DOMContentLoaded', function () {
//   const isMobile = window.innerWidth < 992;

//   if (isMobile) {
//     const dropdowns = document.querySelectorAll('.has-dropdown > a');

//     dropdowns.forEach(link => {
//       link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const submenu = this.nextElementSibling;
//         const icon = this.querySelector('i');

//         // Açıq olanları bağla (submenu və rotate class)
//         document.querySelectorAll('.sub-menu.active').forEach(menu => {
//           if (menu !== submenu) {
//             menu.classList.remove('active');
//             const activeIcon = menu.parentElement.querySelector('i');
//             activeIcon?.classList.remove('rotate');
//           }
//         });

//         // Açılacaqsa class əlavə et, bağlanacaqsa sil
//         if (submenu && submenu.classList.contains('sub-menu')) {
//           submenu.classList.toggle('active');
//           icon.classList.toggle('rotate');
//         }

//       });
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const isMobile = window.innerWidth < 992;

  if (isMobile) {
    const dropdownLinks = document.querySelectorAll('.has-dropdown > a');

    dropdownLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const currentSubmenu = this.nextElementSibling;
        const currentIcon = this.querySelector('i');

        // Əvvəlcə bütün açıq submenu-ları və rotate-ləri bağla
        document.querySelectorAll('.sub-menu').forEach(menu => {
          if (menu !== currentSubmenu) {
            menu.classList.remove('active');
            const parentIcon = menu.parentElement.querySelector('a i');
            parentIcon?.classList.remove('rotate');
          }
        });

        // Özünü toggle et
        currentSubmenu.classList.toggle('active');
        currentIcon.classList.toggle('rotate');
      });
    });
  }
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

// calc
