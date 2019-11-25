var transform = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    },1000);
} 

var currentTheme = sessionStorage.getItem('currentTheme');
transform();
document.documentElement.setAttribute('data-theme',currentTheme);


