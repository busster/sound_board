
$('#instrument').on('mouseover', '*', function() {
  var note = document.getElementById(this.id + 'Audio');
  note.currentTime = 0;
  note.play();
})
$('#button-list').on('mouseover', '*', function() {
  var note = document.getElementById(this.id + 'Audio');
  note.currentTime = 0;
  note.play();
})

$('#button-list').on('click', '.buttons', function() {
  if (this.id === 'info') {
    $('.modal').show()
  } else {
    var $div = $("<div>", {id: this.id, "class": "box"});
    $div.draggable().resizable({ handles: 'ne, se, sw, nw' });
    $("#instrument").append($div);
  }
})

$('.escape').on('click', function() {
  $('.modal').hide()
})


$('#instrument').on('mouseup', '*', function() {
  var trashPosition = $('.trash').position();
  var position = $(this).position();
  // var width = $(this).width();
  var height = $(this).height();

  var midHeight = position.top + (height / 2);
  // var midWidth = position.left + (width / 2);

  if (midHeight > trashPosition.top) {
    $(this).remove();
  }
})