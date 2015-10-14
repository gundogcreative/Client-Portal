// Default Bootstrap Tooltip Initialize
$(document).ready(function() {
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});


// Mobile Navigation Object

// On Browser Window Resize Add/Remove Collapse Class to Navigation Wrapper
window.onresize = function() {
  if (window.innerWidth >= 992) {
    $('#navWrap').removeClass('collapse');
  } else if (window.innerWidth <= 991) {
    $('#navWrap').addClass('collapse');
  }
};

// On Page Load Add/Remove Collapse Class to Main Navigation
$(document).ready(function(e) { 
  if (window.innerWidth >= 991) {
    $('#navWrap').removeClass('collapse');
  } else if (window.innerWidth <= 991) {
    $('#navWrap').addClass('collapse');
  }
});

// Toggle Google Material Icon on Mobile NavTrigger Click
$(document).ready(function() {
  $('#mobileNavController').click(function(){
    $('#mobileNavController').html($('#mobileNavController').text() == 'menu' ? 'close' : 'menu');
  });
})

// Slick.js Card Charts Responsive Slider
$(document).ready(function(){
    $('#responsiveCards').slick({
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
});




















