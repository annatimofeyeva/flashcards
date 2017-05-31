$(function() {
  $(".functionClick").click(function() {
    $("#functionsCard").toggle();
  });
  $(".methodsClick").click(function() {
    $("#methodCard").toggle();
  });
  $(".varClick").click(function() {
    $("#variablesCard").toggle();
  });
  $(".operClick").click(function() {
    $("#operatorsCard").toggle();
  });



  $(".close").click(function() {
    $(".card").hide();
  });
});
