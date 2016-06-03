$(document).ready(function() {
  $("form#userOptions").submit(function(event){
    event.preventDefault();
  var ansClimate = $("#climate").val();
  var ansActivity = $("#activity").val();
  var ansLanguage = $("#language").val();
    $('.submit').hide();
    $('#userOptions').fadeToggle();
    $('#again').show();
    if (ansClimate === 'mordor' || ansActivity === 'orcs') {
      $('#mordorMiddle').delay(600).fadeToggle();
    } else if (ansClimate === 'snowy' && ansLanguage != 'spanish') {
      $('#aspenCo').delay(600).fadeToggle();
    } else {
      $('#madridSpain').delay(600).fadeToggle();
    }
  });
});
$(document).ready(function() {
  $(".lead").click(function() {
    $('#userOptions').slideToggle();
    $('#headertron').slideToggle();
  });
});
$(document).ready(function() {
  $("#mordorBtn").click(function() {
    $('#mordorMiddle').fadeToggle();
    $('.simply').delay(400).fadeToggle();
  });
});
