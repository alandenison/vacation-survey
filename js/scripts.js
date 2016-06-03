$(document).ready(function() {
  $("form#userOptions").submit(function(event){
    event.preventDefault();
  var ansClimate = $("#climate").val();
  alert(ansClimate);
  });
});
