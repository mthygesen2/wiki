$(document).ready(function(){

  $("#blanks form").submit(function (event){
    var nameInput = $("input#name").val();
    $(".outputname").append(nameInput);

    event.preventDefault();
    });
});
