$(document).ready(function () {
    "use strict";

    /* ==================================
    * Author        : "ThemeSine"
    * Template Name : Khanas HTML Template
    * Version       : 1.0
    ==================================== */


    /* =========== TABLE OF CONTENTS ===========
    1. Scroll To Top
    2. Smooth Scroll spy
    3. Progress-bar
    4. owl carousel
    5. welcome animation support
    ====================================== */

    // 1. Scroll To Top 
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });


    // 2. Smooth Scroll spy

    $('.header-area').sticky({
        topSpacing: 0
    });

    //=============

    $('li.smooth-menu a').bind("click", function (event) {
        event.preventDefault();
        const anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 65
        }, 1200, 'easeInOutExpo');
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 100
    });


    // 3. Progress-bar

    const dataToggleTooTip = $('[data-toggle="tooltip"]');
    const progressBar = $(".progress-bar");
    if (progressBar.length) {
        progressBar.appear(function () {
            dataToggleTooTip.tooltip({
                trigger: 'manual'
            }).tooltip('show');
            progressBar.each(function () {
                const each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width + '%');
            });
        });
    }

    // 4. owl carousel

    // i. client (carousel)

    $('#client').owlCarousel({
        items: 3,
        loop: true,
        smartSpeed: 1000,
        autoplay: true,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            415: {
                items: 2
            },
            600: {
                items: 4

            },
            1199: {
                items: 4
            },
            1200: {
                items: 7
            }
        }
    });


    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })


    // 5. welcome animation support

    $(window).load(function () {
        $(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity': '0'});
        $(".header-text a").removeClass("animated fadeInDown").css({'opacity': '0'});
    });

    $(window).load(function () {
        $(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity': '0'});
        $(".header-text a").addClass("animated fadeInDown").css({'opacity': '0'});
    });

    let serializeForm = function (form) {
        let obj = {};
        let formData = new FormData(form);
        for (let key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        return obj;
    };
    // emailJS parameters
    const publicKey = "7QOt4wMCjEc653VT-";
    const serviceID = 'service_qqew0oj';
    const templateID = 'template_eqlf1a2';
    emailjs.init(publicKey);

    // submit email
    const contactForm = document.querySelector('#contactForm');
    const submitButton = document.querySelector('.contact-btn')
    contactForm.addEventListener('submit', function (event) {
        // Prevent form default behaviour
        event.preventDefault();
        // change button text
        submitButton.innerText = 'Just A Moment...';
        const templateParams = serializeForm(event.target);
        emailjs.send(serviceID, templateID, templateParams)
            .then(function () {
                // change button text
                submitButton.innerText = 'Message Sent Successfully!';
                // clear form
                contactForm.reset();
            }, function (error) {
                console.warn(error);
                // change button text
                submitButton.innerText = 'Failed to send message! Try again.';
            });
    });
});
	
