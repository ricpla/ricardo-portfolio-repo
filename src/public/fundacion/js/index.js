$(document).ready(function () {

    ScrollReveal().reveal('.scroll1');
    ScrollReveal().reveal('.scroll2', { delay: 500 });
    ScrollReveal().reveal('.scroll3', { delay: 600 });
    ScrollReveal().reveal('.scroll4', { delay: 700 });

    $('.loop').owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $('.mostrar1').hide();
    $('.mostrar2').hide();
    $('.mostrar3').hide();
    $('.mostrar4').hide();
    $('.mostrar5').hide();
    $('.mostrar6').hide();
    $('.mostrar7').hide();
    $('.mostrar8').hide();
    $('.mostrar9').hide();
    $('.mostrar10').hide();
    $('.mostrar11').hide();
    $('.mostrar12').hide();

    $('.show1').click(function () {
        $('.mostrar1').show();
        $('.show1').hide();
    });

    $('.show2').click(function () {
        $('.mostrar2').show();
        $('.show2').hide();
    });
    $('.show3').click(function () {
        $('.mostrar3').show();
        $('.show3').hide();
    });
    $('.show4').click(function () {
        $('.mostrar4').show();
        $('.show4').hide();
    });
    $('.show5').click(function () {
        $('.mostrar5').show();
        $('.show5').hide();
    });
    $('.show6').click(function () {
        $('.mostrar6').show();
        $('.show6').hide();
    });
    $('.show7').click(function () {
        $('.mostrar7').show();
        $('.show7').hide();
    });
    $('.show8').click(function () {
        $('.mostrar8').show();
        $('.show8').hide();
    });
    $('.show9').click(function () {
        $('.mostrar9').show();
        $('.show9').hide();
    });
    $('.show10').click(function () {
        $('.mostrar10').show();
        $('.show10').hide();
    });
    $('.show11').click(function () {
        $('.mostrar11').show();
        $('.show11').hide();
    });
    $('.show12').click(function () {
        $('.mostrar12').show();
        $('.show12').hide();
    });
});