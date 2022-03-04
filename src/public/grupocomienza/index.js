/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

ScrollReveal().reveal('.topnav');
ScrollReveal().reveal('.web-cover');
ScrollReveal().reveal('.secondTitle', { delay: 300 });
ScrollReveal().reveal('.secondSubtitle', { delay: 300 });
ScrollReveal().reveal('.new1', { delay: 500 });
ScrollReveal().reveal('.new2', { delay: 600 });
ScrollReveal().reveal('.new3', { delay: 700 });

function responsiveMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
    var shrinkHeader = 200;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.topnav').addClass('shrink');
        } else {
            $('.topnav').removeClass('shrink');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

$('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
        // get button data-slide
        next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
        return false;
    } else {
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    }
});

var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
    allowTouchMove: true,
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: true,
    spaceBetween: 30,
    keyboardControl: true,
    speed: 1000,
    pagination: {
        el: null
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
        snapOnRelease: true
    },
    mousewheel: {
        enable: true
    },
    keyboard: {
        enabled: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        767: {
            scrollbar: {
                hide: true
            },
            spaceBetween: 0,
            autoHeight: true,
            centeredSlides: false,
            slidesOffsetAfter: 85
        }
    },
    on: {
        resize: function() {
            var windowWidth = $(window).width();
            if (windowWidth <= 767) {
                swiperBottomScrollbarFull.direction('vertical');
                swiperBottomScrollbarFull.detachEvents();
            } else {
                swiperBottomScrollbarFull.direction('horizontal');
                swiperBottomScrollbarFull.attachEvents();
            }
            swiperBottomScrollbarFull.update();
        }
    }
});

// Testing---------------------------