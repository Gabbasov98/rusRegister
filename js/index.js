function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },

        }
    })
}




$(document).ready(function() {
    $("select").niceSelect()
    $(".nice-select .list").mCustomScrollbar();

    $(".nav__item-show").click(function() {
        if (window.innerWidth < 992) {
            $(this).toggleClass("nav__item-show--active")
        }
    })

    if (window.innerWidth > 992) {
        $(".nav__item").hover(onIn, onOut);
    }



    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__logo").toggleClass("header__logo--active")
        $(".nav").slideToggle()
        $(".header__phone").toggleClass("header__phone--hide")
    })

    $(".modal").on('shown.bs.modal', function() {
        hideLabel()
        hideLabelTextarea()
    })

})

function hideLabel() {
    $(".modal input").change(function() {
        if ($(this).val()) {
            $(this).siblings("label").hide()
        } else {
            $(this).siblings("label").show()
        }
    })
}

function hideLabelTextarea() {
    $(".modal textarea").change(function() {
        if ($(this).val()) {
            $(this).siblings("label").hide()
        } else {
            $(this).siblings("label").show()
        }
    })
}

function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.children(".nav__item-show").addClass("nav__item-show--active")
                el.children(".nav__item-hidden").show()
            }

        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
        $(this).children(".nav__item-hidden").hide()
    }
}