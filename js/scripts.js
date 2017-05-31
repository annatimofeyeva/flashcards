$(function() {
  $(".functionClick").click(function() {
    $("#functionsCard").toggle();
  });
  $(".methodsClick").click(function() {
    $("#methodCard").toggle();
  });



  $(".close").click(function() {
    $(".card").hide();
  });
});
