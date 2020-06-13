var slideIndex=0;
showSlides();
function showSlides() {
    var i;
    var slides=document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex=1}
    slides[slideIndex-1].style.display = "inline";
    setTimeout(showSlides,7000);
}

var i = 0;
var text = " hi there, I'm"
function typewriter() {
    if (i <text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        document.querySelector("h3").innerHTML = text.substring(0, i+1) + '<span class="blinker" aria-hidden="true"></span>';
        setTimeout(typewriter, 150);
    }
}
window.onload=setTimeout(typewriter,2800);

var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
        elems = document.querySelectorAll('.hardskills');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition() {
        for (var i=0; i <elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace('hiddenSFDC', 'SFDC');
                elems[i].className = elems[i].className.replace('hiddenHTML-CSS', 'HTML-CSS');
                elems[i].className = elems[i].className.replace('hiddenJS', 'JS');
                elems[i].className = elems[i].className.replace('hiddenSOQL', 'SOQL');
                elems[i].className = elems[i].className.replace('hiddenApex','Apex');
                }
            }
        }
    return {
        init: init
    };
};
animateHTML().init();