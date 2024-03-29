$(document).ready(() => {
    var checkbox = document.getElementById('switch');
    var logo = sessionStorage.getItem('logo');
    var modeText = document.getElementById('mode_text');
    var currentThemeDefault = sessionStorage.getItem('currentTheme');

    if(logo) {
        document.getElementById('logo').setAttribute('src',logo);
    }

    if(currentThemeDefault != null) {
        if (currentTheme === 'light') { 
            modeText.innerText = "Dark Mode";
        }else {
            modeText.innerText = "Light Mode";
        }
    }else {
        modeText.innerText = "Light Mode";
    }

    checkbox.addEventListener('change', () => {
       changeTheme();
    });

    let changeTheme= () => {
        var currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            trans();
            modeText.innerText = "Light Mode";
            sessionStorage.setItem('logo','images/69.png');
            document.getElementById('logo').setAttribute('src','images/69.png');
            sessionStorage.setItem('currentTheme',"dark");
            document.documentElement.setAttribute('data-theme','dark');
        }else {
            trans();     
            modeText.innerText = "Dark Mode"; 
            sessionStorage.setItem('logo','images/69light.png');
            document.getElementById('logo').setAttribute('src','images/69light.png');
            sessionStorage.setItem('currentTheme',"light");
            document.documentElement.setAttribute('data-theme','light');
        }
    }
    
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        },1000);
    } 


    $("#button").click(() => {
        $(".hamburger").toggleClass("focus");
        $(".content").toggleClass("show");
    });
  
    $('.js-images-loaded').imagesLoaded(() => {
        $('.js-masonry').masonry({
            itemSelector: '.js-masonry-item'
        });
    }); 

    $("#top").click(()=> {
        // window.scrollTo(0,0);
        // window.scrollTo({
        //     top:0,
        //     left:0,
        //     behaviour:"smooth"
        // });
        $("html,body").animate({
            scrollTop:0
        },"slow");
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