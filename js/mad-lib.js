$(document).ready(function(){
  $("#blanks form").submit(function(event){
    $(".groupOfPeople1").text($("input#groupOfPeople1").val());
    $(".pluralNoun1").text($("input#pluralNoun1").val());
    $(".groupOfPeople2").text($("input#groupOfPeople2").val());
    $(".pluralNoun2").text($("input#pluralNoun2").val());
    $(".emotion").text($("input#emotion").val());
    $(".groupOfPeople1").text($("input#groupOfPeople1").val());

    $("#mad-lib").show();
    event.preventDefault();

  });
});
