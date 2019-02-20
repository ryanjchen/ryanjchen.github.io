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
        setTimeout(typewriter, 200);
    }
}
window.onload=setTimeout(typewriter,3000);
