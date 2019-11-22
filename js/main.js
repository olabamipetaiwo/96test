$(document).ready(() => {
    // var checkbox = document.getElementById('switch');

    // checkbox.addEventListener('change', () => {
    //     var currentTheme = document.documentElement.getAttribute('data-theme');
    //     if (currentTheme === 'light') {
    //         trans();
    //         localStorage.setItem('currentTheme',"dark");
    //         document.documentElement.setAttribute('data-theme','dark');
    //     }else {
    //         trans();      
    //         localStorage.setItem('currentTheme',"light");
    //         document.documentElement.setAttribute('data-theme','light');
    //     }
    // });
    
    // let trans = () => {
    //     document.documentElement.classList.add('transition');
    //     window.setTimeout(() => {
    //         document.documentElement.classList.remove('transition');
    //     },1000);
    // } 


    $("#button").click(() => {
        $(".hamburger").toggleClass("focus");
        $(".content").toggleClass("show");
    });
  
    $('.js-images-loaded').imagesLoaded(() => {
        $('.js-masonry').masonry({
            itemSelector: '.js-masonry-item'
        });
    }); 

    baguetteBox.run('.tz-gallery');

    var sync2 = $("#sync2");
    sync2.owlCarousel({
            items : 1,
            smartSpeed: 200,
            slideSpeed : 1000,
            slideBy:1, 
            responsiveRefreshRate : 100,
            nav: true,
            autoplay: true,
            loop: true
    });
});