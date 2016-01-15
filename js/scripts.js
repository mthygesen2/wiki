$(document).ready(function(){


  var myList = [["markdown.html", "Markdown"], ["forms.html", "Forms"],["looping.html", "Looping"],["branching.html", "Branching"],["arrays.html", "Arrays"], ["javascriptarithmetic.html", "JavaScript Arithmetic"]];


  myList.forEach(function(term){
    $(".vocab").append("<li>"+ "<a href=" + term[0] + ">" + term[1]+"</a>"+"</li>");
  });
});
