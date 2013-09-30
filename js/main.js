$('li > a').click(function() {
  $(this).toggleClass('on');
});

$('#all-on').click(function() {
  $('li > a').addClass('on');
});

$('#all-off').click(function() {
  $('li > a').removeClass('on');
});

$('#all-exteriors-on').click(function() {
  $('.exterior > a').addClass('on');
});

$('#all-exteriors-off').click(function() {
  $('.exterior > a').removeClass('on');
});

$('#all-interiors-on').click(function() {
  $('.interior > a').addClass('on');
});

$('#all-interiors-off').click(function() {
  $('.interior > a').removeClass('on');
});

$('#all-bathroom-on').click(function() {
  $('.bathroom > a').addClass('on');
});

$('#all-bathroom-off').click(function() {
  $('.bathroom > a').removeClass('on');
});

function updateCount() {
  var lightsOn = $('.on').length;
  var totalLights = $('.lighting-list a').length;

  $('lights-on-total strong').text(lightsOn);
  $('lights-off-total strong').text(totalLights - lightsOn);
}

$(document).ready(function() {
  updateCount();
});
