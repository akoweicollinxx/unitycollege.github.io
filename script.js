$(document).ready(function(){
    $('.navbar-toggler-open').click(function(){
        $('.navbar-collapse').addClass('navbarShow');
    });

    $('.navbar-toggler-close').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });
});


var timer;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

  clearTimeout(timer);
timer = setTimeout(() => plusSlides(1), 2000);
}
