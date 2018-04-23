function addText(currentSlide) {

  // counts # of children
  var objectCount = $(currentSlide).children().size();
  var textBoxName = $(currentSlide).attr('id')+"_text_"+objectCount;

  console.log(textBoxName);

  // adds the div, name based on #
  // currentSlide.append("<div class='"+textBoxName+"'>What's up! Drag me</div>");

  $(currentSlide).append("<div class='textbox' id='"+textBoxName+"'><textarea placeholder='Type your content here'></textarea></div>");

  // <div className="toolbox">
  //   <div className="icon bold" onClick={this._onBoldClick.bind(this)}>B</div>
  //   <div className="icon italic" onClick={this._onItalicClick.bind(this)}>I</div>
  //   <div className="icon underline" onClick={this._onUnderlineClick.bind(this)}>U</div>
  //   <div className="icon strikethrough" onClick={this._onStrikethoughClick.bind(this)}>S</div>
  // </div>

  // text box is draggable
  $('#'+textBoxName).draggable();
}
