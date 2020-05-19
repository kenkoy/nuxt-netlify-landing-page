$(document).ready(function() {	
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,				
        responsive: [{
        breakpoint: 1024,
        settings: {
            autoplay:true,
            slidesToShow: 3,
            infinite: true
        }
        }]
    });
    
    //Set Url to all buttons
    var signUpUrl = document.getElementById('signup-btn').getAttribute('href');
    var list, index;
    list = document.getElementsByClassName('signup-btn');
    for (index = 0; index < list.length; ++index) {
        list[index].setAttribute('href', signUpUrl);
    }
});