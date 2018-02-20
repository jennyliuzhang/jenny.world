$(document).ready(function() {
  if (getCookie("youveBeenHere") == "yep") {
    console.log("You've been here before!");
  }
  else {
    $('#loading').css("display", "block");
    $('#loading').delay(8000).fadeOut(1000);
    $('#gif').delay(7000).fadeOut(1000);
    Cookies.set("youveBeenHere", "yep");
  }
});

function toggleProject (event,project) {
  event.preventDefault();
  event.stopPropagation();
  var sectionName = '#section-content-'+project;
  var sectionUXName = '#proj-ux-'+project;
  $(sectionName).slideToggle("slow");
  $(sectionUXName).slideToggle("slow");
}

$(document).ready(function() {
});
