$(document).ready(function(){
  $("#blanks form").submit(function(event){
    $(".from").text($("input#from").val());
    $(".fromAddress1").text($("input#fromAddress1").val());
    $(".fromAddress2").text($("input#fromAddress2").val());
    $(".date").text($("input#date").val());
    $(".to").text($("input#to").val());
    $(".toAddress1").text($("input#toAddress1").val());
    $(".toAddress2").text($("input#toAddress2").val());
    $(".toName").text($("input#toName").val());
    $(".fromName").text($("input#fromName").val());

    $("#letter").show();
    event.preventDefault();

  });
});
