$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
});