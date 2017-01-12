$(document).ready(function(){
  $("#blanks form").submit(function(event){
    $(".confirmation").text("Your appointment has been scheduled for " + $("input#date").val() + " at " + $("input#time").val());

    //$("#computer").show();
    event.preventDefault();
  });
});
