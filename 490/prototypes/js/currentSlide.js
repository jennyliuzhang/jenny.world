var currentSlide;

$(document).ready(function() {
  $('#content div').click(function(event) {
      var currentSlide = this;
      $(currentSlide).addClass('highlight').siblings().removeClass('highlight');
      console.log(currentSlide);
  });
});
