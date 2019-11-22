window.addEventListener('load', () => {
    setTimeout(function(){
                $('.preloader p').addClass('loaded').text('Sixty Nine');
                $('.line_loader').addClass('loaded');
                setTimeout(function(){ $('.preloader').addClass('preloader_hide'); },200);
                setTimeout(function(){ $('.overlay , .overlay2').addClass('change');
                    setTimeout(function(){ $('.overlay , .overlay2 , .preloader').fadeOut(); },1000);
                 },600);
    },650);
})