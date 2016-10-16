var images = ['stop-sign.jpg', 'granny.jpg', 'road.jpg'];
var descriptions = ['a stop-sign', 'a person', 'a car'];
i = 0;

var nextImage = function() {
  i++;
  if(i === images.length) {
    window.location.replace('graphs.html');
  } else {
    $('#image').attr('src', 'img/' + images[i]);
  }
};

var nextDescription = function() {
  $('#description').text('Is there ' + descriptions[i] + ' in the way?');
};

$('#yes').on('click', function() {
  nextImage();
  nextDescription();
});

$('#no').on('click', function() {
  nextImage();
  nextDescription();
});