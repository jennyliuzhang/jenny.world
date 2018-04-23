// what happens when u click a slide
$(document).ready(function() {

  $('#editor-slides div').click(function(event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');

    // allows actual slide to also be highlighted
    var currentSlideID = $(this).attr('id');
    var currentContentSlide = $('#content #' + currentSlideID);
    $(currentContentSlide).addClass('highlight').siblings().removeClass('highlight');


    currentSlide = $(this);
    nextSlide = $(this).next();
  });

  //adding border to highlighted stuffs
  $('#content div').click(function(event) {

    // allows slide editor thumbnail to also be highlighted
    var currentSlideID = $(this).attr('id');
    var currentSlideEditorSlide = $('#editor-slides #' + currentSlideID);
    $(currentSlideEditorSlide).addClass('highlight').siblings().removeClass('highlight');

    // sets current, prev, next
    currentSlide = $(this);
    nextSlide = $(this).next();

    if($(this).hasClass('resizeBar')) {

    }
    else {
      $(currentSlide).addClass('highlight').siblings().removeClass('highlight');
      // console.log(currentSlide);
    }
  });

  // what happens when u tryna resize a slide
  var dragging = false;
  $('#content .resizeBar').mousedown(function(e) {
    var currentSlide = $(this).prev();
    var nextSlide = $(this).next();
    console.log(currentSlide);

    $(this).mousedown(function(e){
       e.preventDefault();
       dragging = true;
       var ghostbar = $('<div>',
                        {id: 'ghostbar',
                         css: {
                                position: 'absolute',
                                width: '100%'
                               }
                        }).appendTo('#content');
        $(document).mousemove(function(e){
          ghostbar.css("top",e.pageY);
       });
    });

    $(document).mouseup(function(e){
       if (dragging)
       {
          console.log('drag me ');

          var currentHeight = $(currentSlide).height();
          var howMuchToMinus = Math.abs(currentHeight - e.pageY);

          console.log('current height: ' + currentHeight);
          console.log('how much to minus ' + howMuchToMinus);

          $(currentSlide).css("height",currentHeight - howMuchToMinus);
          $(nextSlide).css("top",0);

          $('#ghostbar').remove();
          $(document).unbind('mousemove');
          dragging = false;
       }
     });
  });
});
