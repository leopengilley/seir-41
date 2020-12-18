$(document).ready(function () {
  $('#name').on('keyup', function () {
    const input = $('#name').val();
    $('header h1').text('Welcome ' + input);
  }).on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  });

  $(window).on('mousemove', function (event) {
    $('img').css('opacity', event.clientY / window.innerHeight); // Values in range 0 - 1
  });
});
