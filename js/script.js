//Слайдер
//Настройки слайдера на для ПК, планшета і мобільного
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

//Мобільне меню
//Шукаємо елементи меню та мобільного меню
let burgerMenu = document.querySelector(".burger-menu");
let menu1 = document.querySelector(".menu-1");
let menu2 = document.querySelector(".menu-2");
let fixedHeader = document.querySelector(".fixed-header");
let header = document.querySelector(".header__top");

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

//Модальне вікно

let modalWindow = document.querySelector(".modal");
let downloadCode = document.querySelector(".download");
let closeBtn = document.querySelector(".modal .btn-close");

function closeModal() {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
}

function openModal() {
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");
}

downloadCode.addEventListener("click", function() {
    openModal();
})

modalWindow.addEventListener("click", function(e) {
    if(e.target == modalWindow) {
        closeModal();
    }
})

closeBtn.addEventListener("click", closeModal);