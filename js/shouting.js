$(document).ready(function(){
  $("#blanks form").submit(function(event){
    $(".speech").text($("input#speech").val().toUpperCase());

    //$("#computer").show();
    event.preventDefault();
  });
});
