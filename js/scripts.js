$(document).ready(function(){


  var myList = [["markdown.html", "Markdown"]];

  myList.forEach(function(term){
    $(".vocab").append("<li>"+ "<a href=" + term[0] + ">" + term[1]+"</a>"+"</li>");
  });
});
