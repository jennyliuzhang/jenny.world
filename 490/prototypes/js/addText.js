function addText(currentSlide) {
  console.log(currentSlide);
  // counts # of children
  var objectCount = $(currentSlide).children().size();
  var textBoxName = "text_"+objectCount;

  // adds the div, name based on #
  currentSlide.append("<div class='"+textBoxName+"'>What's up! Drag me</div>");

  // text box is draggable
  $('.'+textBoxName).draggable();
}
