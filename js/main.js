$(document).ready(function () {
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                },
            },
            {
                breakpoint: 529,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });



    $('[client-testimonial]').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
    });


});




$(".filter-open-btn").click(function () {
    $(".filter-sidebar").addClass("filter-sidebar-show")
    $("#overlay").show();
})


$("#overlay").click(function () {
    $(".filter-sidebar").removeClass("filter-sidebar-show")
    $(this).hide();
})