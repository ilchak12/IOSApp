let header = document.querySelector(".header__top");

// window.addEventListener("scroll", function() {
//     if(pageYOffset > 50) {
//         header.classList.add("byScroll");
//     } else {
//         header.classList.remove("byScroll")
//     }
// })


$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,               
    dots: false,
    arrows: false,
    infinite: true, 
    centerMode:true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1
            }
        }
    ]
});

let burgerMenu = document.querySelector(".burger-menu");
let menu1 = document.querySelector(".menu-1");
let menu2 = document.querySelector(".menu-2");
let fixedHeader = document.querySelector(".fixed-header");

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle("active-menu");
    if(burgerMenu.classList.contains("active-menu")) {
        menu1.classList.add("active-menu")
        menu2.classList.add("active-menu")
        header.classList.add("byScroll");
        fixedHeader.classList.add("active-menu")
    } else {
        menu1.classList.remove("active-menu")
        menu2.classList.remove("active-menu")
        header.classList.remove("byScroll")
        fixedHeader.classList.remove("active-menu")
    }
})