$("#size").change(function() {

  var size = $(this).val();
  var size_value = size + "px";

  $(".circle").css("height", size_value);
  $(".circle").css("width", size_value);

});

$("#size").change(function() {

  var size = $(this).val();
  var size_value = size + "px";

  $(".words").css("height", size_value);
  $(".words").css("width", size_value);

});

$("#size").change(function() {

  var size = $(this).val();
  var size_value = size + "px";

  $("p").css("font-size", size_value);

});
