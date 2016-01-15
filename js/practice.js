$(document).ready(function(event){

  // for(var index = 99; index >= 0; index -= 1){
  //   $("#beer").append("<p>" + index + "bottles of beer on the wall" + "</p>");
  // });
  //
  // $("#beerbutton").click(function(){
  //   $("#beer").toggle().show();
  //     event.preventDefault();
  // });

  for(var index = 99; index >= 0; index -= 1){
      $(".beer").append("<p>"+index+" bottles of beer on the wall "+index+" bottles of beer. Take one down, pass it around" + index);
  }
  for(var index1 = 98; index1 >= 0; index1 -= 1) {
      $(".beer").append(index1+" bottle of beer on the wall"+"</p>");
    }
    $("#99bofb").click(function() {
      $(".beer").toggle();
  });

  var names = ["bob", "joe", "mike"]
  
});
