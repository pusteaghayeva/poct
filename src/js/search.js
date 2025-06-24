$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function (e) {
    if ($('.search-toggle').hasClass('closed')) {
        $('.search-toggle').removeClass('closed').addClass('opened');
        $('.search-toggle, .search-container').addClass('opened');
        $('#search-terms').focus();
    } else {
        $('.search-toggle').removeClass('opened').addClass('closed');
        $('.search-toggle, .search-container').removeClass('opened');
    }
});

// 2

    document.addEventListener("DOMContentLoaded", function () {
    const searchBtnSmall = document.querySelector(".search-blog-small .search");
    const searchFormSmall = document.querySelector(".search-blog-small .search-form");

    searchBtnSmall.addEventListener("click", function (e) {
        e.preventDefault();
    searchFormSmall.classList.toggle("is-visible");
    });
  });
