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
