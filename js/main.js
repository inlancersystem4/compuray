$(document).ready(function() {

    AOS.init();


    $(".dropdown .selected-option").click(function() {
        var dropdown = $(this).closest('.dropdown');
        dropdown.find(".dropdown-list").slideToggle();
        dropdown.find(".bi").toggleClass("rotate_180deg");
    });

    $(".dropdown .dropdown-list li").click(function() {
        var selectedOption = $(this).text();
        var dropdown = $(this).closest('.dropdown');
        dropdown.find(".selected-option").html(selectedOption + ' <i class="bi bi-chevron-down"></i>');
        dropdown.find(".dropdown-list").slideUp();
        dropdown.find(".bi").removeClass("rotate_180deg");
    });


    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [{
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
        dots: true,
        arrows: false,
    });


});


$(".passwordBtn").on("click", function() {
    var passwordInput = $("#passwordInput");
    var icon = $(this).find(".password_hide");

    if (passwordInput.attr("type") === "password") {
        passwordInput.attr("type", "text");
        icon.show();
        $(this).find(".password_show").hide();
    } else {
        passwordInput.attr("type", "password");
        icon.hide();
        $(this).find(".password_show").show();
    }
});


$(".filter-open-btn").click(function() {
    $(".filter-sidebar").addClass("filter-sidebar-show")
    $("#overlay").show();
})


$("#overlay").click(function() {
    $(".filter-sidebar").removeClass("filter-sidebar-show")
    $(this).hide();
})


$(".filter-sidebar-closeBtn").click(function() {
    $(".filter-sidebar").removeClass("filter-sidebar-show")
    $("#overlay").hide();
})