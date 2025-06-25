
        let navbar = document.querySelector(".navbar");
        let searchBox = document.querySelector(".search-box .bx-search");

        searchBox.addEventListener("click", () => {
            navbar.classList.toggle("showInput");
            if (navbar.classList.contains("showInput")) {
                searchBox.classList.replace("bx-search", "bx-x");
            } else {
                searchBox.classList.replace("bx-x", "bx-search");
            }
        });

        let navLinks = document.querySelector(".nav-links");
        let menuOpenBtn = document.querySelector(".navbar .bx-menu");
        let menuCloseBtn = document.querySelector(".nav-links .bx-x");

        menuOpenBtn.onclick = function () {
            navLinks.style.left = "0";
        }
        menuCloseBtn.onclick = function () {
            navLinks.style.left = "-100%";
        }

      

//         let arrows = document.querySelectorAll(".arrow");

// arrows.forEach(arrow => {
//   arrow.addEventListener("click", (e) => {
//     let arrowParent = e.target.closest("li");
//     arrowParent.classList.toggle("showMenu");
//   });
// });


let arrowParents = document.querySelectorAll(".links li");

arrowParents.forEach(li => {
    let arrow = li.querySelector(".arrow");
    let link = li.querySelector("a");
    let submenu = li.querySelector(".sub-menu");

    if (submenu) {
        // Ox iconuna klik
        arrow?.addEventListener("click", (e) => {
            e.preventDefault();
            li.classList.toggle("showMenu");
        });

        // Menü adının özünə klik (mobil ekran üçün)
        link?.addEventListener("click", (e) => {
            if (window.innerWidth <= 800) {
                e.preventDefault();
                li.classList.toggle("showMenu");
            }
        });
    }
});

