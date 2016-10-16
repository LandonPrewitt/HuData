var images = ['1_stop_sign.jpg', '2_granny.jpg','3_green_light.jpg', '4_Yield.png', '5_road.jpg', '6_people-crossing.jpg', '7_green_light.jpg', '8_highway.jpg'];
var descriptions = ['Is there a stop-sign in this picture?', 'Is there a personin the way?', 'Is the light green?', 'Does this picture have a yeild sign in it?', 'Is there an obsruction in the road?', 'Is the road clear to proceed?', 'Is the light red?', 'Is there an obstruction in the way?'];
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
  $('#description').text(descriptions[i]);
};

$('#yes').on('click', function() {
  $.ajax({
      type: 'POST',
      url: 'http://bhallasaurabh.com/add',
      data: {
        image: i,
        result: 1
      },
      crossDomain: true,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        nextImage();
        nextDescription();
      }
  });
});

$('#no').on('click', function() {
  $.ajax({
      type: 'POST',
      url: 'http://bhallasaurabh.com/add',
      data: {
        image: i,
        result: 1
      },
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data) {
        console.log(data);
        nextImage();
        nextDescription();
      }
  });
});