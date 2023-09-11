$(function () {
    const FORM_CONTACT_KEY = "FORM-CONTACT"
    let container = document.querySelector('#pano');
    let exitButton = $('.x-exit')
    const panorama = new PANOLENS.ImagePanorama('https://l13.alamy.com/360/RRPMM4/full-seamless-panorama-360-degrees-angle-view-in-interior-fabric-salon-of-prestige-modern-car-in-equirectangular-equidistant-spherical-projection-sky-RRPMM4.jpg');
    const viewer = new PANOLENS.Viewer({
        container: container
    });

    viewer.add(panorama);
    let isRotationEnabled = false;

    const debounce = (fn) => {
        let frame;
        return (...params) => {
            if (frame) {
                cancelAnimationFrame(frame);
            }
            frame = requestAnimationFrame(() => {
                fn(...params);
            });
        }
    };
    const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY;
    }
    document.addEventListener('scroll', debounce(storeScroll), {passive: true});
    storeScroll();

    getContactFromStorage();

    $("#submit-button").on('click',function () {
        storeContactInformation();
    });

    viewer.addUpdateCallback(function () {
        if (!isRotationEnabled) {
            viewer.panorama.rotation.y += 0.001;
        }
    });

    $('#test-pano').on('click', function () {
        showPanorama()
    });

    exitButton.on('click', function () {
        hidePanorama()
    });

    $(window).scroll(function () {
        if ($('#is-visible').visible(true)) {
            $(".camera-objective-img").toggleClass('camera-objective-img-hidden camera-objective-img');
        } else {
            $(".camera-objective-img-hidden").toggleClass('camera-objective-img camera-objective-img-hidden');
        }
    });

    $("#service").on('click', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#services").offset().top
        }, 2000);
    });

    $("#test-panorama").on('click', function () {
        showPanorama()
        $([document.documentElement, document.body]).animate({
            scrollTop: $("html").offset().top
        }, 1500);
    });

    $("#contact").on('click', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contact-form-container").offset().top
        }, 1500);
    });

    function showPanorama() {
        isRotationEnabled = true;
        $('.pano-fade').hide();
        exitButton.css({
            "visibility": "visible"
        });
        exitButton.show();
        $('.nav_bar').hide();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function hidePanorama() {
        isRotationEnabled = false;
        exitButton.hide();
        $('.pano-fade').show();
        $('.nav_bar').show();
    }

    function storeContactInformation(){
        const form = {
            companyName: $("input[name='company-name']").val(),
            fullName: $("input[name='full-name']").val(),
            phoneNumber: $("input[name='phone-number']").val(),
            email: $("input[name='email']").val(),
            message: $("textarea[name='message']").val()
        };
        localStorage.setItem(FORM_CONTACT_KEY, JSON.stringify(form));
    }

    function getContactFromStorage(){
        // try {
            let contact = JSON.parse(localStorage.getItem(FORM_CONTACT_KEY))
            $("input[name='company-name']").val(contact.companyName)
            $("input[name='full-name']").val(contact.fullName)
            $("input[name='phone-number']").val(contact.phoneNumber)
            $("input[name='email']").val(contact.email)
            $("textarea[name='message']").val(contact.message)
        // }catch (e) {}
    }
});