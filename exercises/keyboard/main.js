// this is where you write your javascript

$(window).keydown(function(e){

  //"var" declares a variable//
  //e.key = a key that triggers the event//

  var key = e.key;
  var color = "blue";

  // print to browser console//
  console.log(key);

  //= assignment operator//
  //== comparison operator//

  if (key == "a") {
    $(".message").html("Apple");
    $("body").css("background-color", "red");
  }
  else if (key == "b") {
    $(".message").html("Bagpipes");
    $("body").css("background-color", "blue");
  }
  else if (key == "c") {
    $(".message").html("Cadillac");
    $("body").css("background-color", "gold");
  }
  else if (key == "d") {
    $(".message").html("Dice");
    $("body").css("background-color", "green");
  }
  else if (key == "e") {
    $(".message").html("EEE");
  }
  else if (key == "f") {
    $(".message").html("FFF");
  }
  else if (key == "z") {
    $("body").append("ZZ");
  }
  else {
    $("body").css("background-color", "initial");
  }
});
