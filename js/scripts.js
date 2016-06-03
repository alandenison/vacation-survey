$(document).ready(function() {
  $("form#userOptions").submit(function(event){
    event.preventDefault();
  var ansClimate = $("#climate").val();
  var ansActivity = $("#activity").val();
  var ansLanguage = $("#language").val();
    if (ansClimate === 'mordor' || ansActivity === 'orcs') {
      $('#mordorMiddle').show();
    } else if (ansClimate === 'snowy') {
      $('#aspenCo').show();
    } else {
      $('#madridSpain').show()
    }
  });
});
