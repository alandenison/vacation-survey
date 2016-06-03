$(document).ready(function() {
  $("form#userOptions").submit(function(event){
    event.preventDefault();
  var ansClimate = $("#climate").val();
  var ansActivity = $("#activity").val();
  var ansLanguage = $("#language").val();
    $('.submit').hide();
    $('#again').show();
    if (ansClimate === 'mordor' || ansActivity === 'orcs') {
      $('#mordorMiddle').show();
    } else if (ansClimate === 'snowy' && ansLanguage != 'spanish') {
      $('#aspenCo').show();
    } else {
      $('#madridSpain').show();
    }
  });
});
$(document).ready(function() {
  $(".lead").click(function() {
    $('#userOptions').show();
  });
});
