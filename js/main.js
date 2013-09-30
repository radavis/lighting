function updateCount() {
  var lightsOn = $('.on').length;
  var totalLights = $('.lighting-list a').length;
  $('#lights-on-total strong').text(lightsOn);
  $('#lights-off-total strong').text(totalLights - lightsOn);
}

$(document).ready(function() {
  updateCount();

  // handle clicking on lights matrix
  $('.matrix li a').bind('click', function(e) {
    $(this).toggleClass('on');
    updateCount();
  });

  // handle clicking on light buttons
  $('.actions input').bind('click', function(e) {
    var command = this.id.split('-');
    var selector = '.lighting-list';

    if (command.length === 3) {
      selector += ' .' + command[1];
    }
    selector += ' a';  // selector = '.lighting-list .interior a'

    if (command[command.length - 1] === 'on') {
      $(selector).addClass('on');
    } else { // command.last === 'off'
      $(selector).removeClass('on');
    }
    updateCount();
  });
});
