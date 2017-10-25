    $( function() {
      $( ".thing" ).draggable();
      $( ".emoji" ).draggable();
    } );

    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: 'screen',
      width: width,
      height: height
    });
    var layer = new Konva.Layer();
    stage.add(layer);

    var canvas = document.createElement('canvas');
    canvas.width = stage.width();
    canvas.height = stage.height();

    var image = new Konva.Image({
        image: canvas,
        x : 0,
        y : 0
    });
    layer.add(image);
    stage.draw();

    // conditionals
    var isPaint = false;
    var lastPointerPosition;
    var mode = 'brush';

    // the brush
    var context = canvas.getContext('2d');
    context.strokeStyle = "#444";
    context.lineJoin = "round";
    context.lineWidth = 1;

    // allows for drawing
    stage.on('contentMousedown.proto', function() {
      isPaint = true;
      lastPointerPosition = stage.getPointerPosition();
    });
    stage.on('contentMouseup.proto', function() {
        isPaint = false;
    });
    stage.on('contentMousemove.proto', function() {
      if (!isPaint) {
        return;
      }

      // creates brush path based on mouse. Thanks Konva
      context.beginPath();
      var localPos = {
        x: lastPointerPosition.x - image.x(),
        y: lastPointerPosition.y - image.y()
      };

      context.moveTo(localPos.x, localPos.y);
      var pos = stage.getPointerPosition();
      localPos = {
        x: pos.x - image.x(),
        y: pos.y - image.y()
      };
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();
      lastPointerPosition = pos;

      layer.draw();
    });
    $('.circle-med').click(function() {
        context.strokeStyle = $(this).css('backgroundColor');
      });