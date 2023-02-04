$('.single-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    speed: 1000,
    prevArrow: '<aside class="slick-arrow slick-prev animation"><span><img src="/template/theme-one/images/slider_left_arrow.png" class="arrow-img-car2"></span></aside>',
    nextArrow: '<aside class="slick-arrow slick-next animation"><span><img src="/template/theme-one/images/slider_right_arrow.png" class="arrow-img-car2"></span></aside>'
});

$('.events').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<aside class="slick-prev animation gray"><span><img src="/template/theme-one/images/slider_left_arrow.png" class="arrow-img-car2"></span></aside>',
    nextArrow: '<aside class="slick-next animation gray"><span><img src="/template/theme-one/images/slider_right_arrow.png" class="arrow-img-car2"></aside>',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.partners').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '',
    nextArrow: '',
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

$('.useful-links').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    prevArrow: '<aside class="slick-arrow slick-prev animation gray"><span><i class="fa fa-angle-left" aria-hidden="true"></i></span></aside>',
    nextArrow: '<aside class="slick-arrow slick-next animation gray"><span><i class="fa fa-angle-right" aria-hidden="true"></i></span></aside>',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
$('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    speed: 1000,
});
var slideIndex = 1;

$(function () {
    $("#eventBanner").modal('show');
    showSlides(slideIndex);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    $("body").css('overflow-y','hidden');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("body").css('overflow-y','scroll');
}




// Next/previous controls
function plusSlides(n, tlen) {
    console.log('slideIndex--', slideIndex);
    
  showSlides(slideIndex += n, tlen);
}

// Thumbnail image controls
function currentSlide(n, tlen) {
    console.log(' current slideIndex--', n);
        showSlides(slideIndex = n, tlen); 
  
}

function showSlides(n, tlen) {
    console.log('n--', n)
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > tlen) {slideIndex = 1}
  if (n < 1) {slideIndex = tlen}
  for (i = 0; i < tlen; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < tlen; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


