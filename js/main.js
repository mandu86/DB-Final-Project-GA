console.log('it works');

$( document ).ready(function() {
  // Handler for .ready() called.
});

$(function() {
    var images = ['images/BG1.jpg', 'images/BG2.jpg'];
    $('#background').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
   });