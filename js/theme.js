var transform = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    },1000);
} 

var currentTheme = sessionStorage.getItem('currentTheme');
if(currentTheme != null) {
    console.log('not nulll');
}
transform();
document.documentElement.setAttribute('data-theme',currentTheme);


