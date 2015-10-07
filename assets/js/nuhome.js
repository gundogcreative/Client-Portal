// Default Bootstrap Tooltip Initialize
$(document).ready(function() {
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});


// Mobile Navigation Object

// On Browser Window Resize Add/Remove Collapse Class to Navigation Wrapper
window.onresize = function() {
  if (window.innerWidth >= 991) {
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