

//console.log(Math.pow(bellow_length, 2));
//console.log(Math.pow(focal_length, 2));

$("button").click(function() {
    var focal_length = $("#focal_length").val();
    var bellow_length = $("#bellow_length").val();
    var bellow_length2 = Math.pow(bellow_length, 2);
    var focal_length2 = Math.pow(focal_length, 2);
    var bellow_factor = bellow_length2 / focal_length2;
    console.log("focal =" + focal_length);
    console.log("bellow =" + bellow_length);
    console.log(bellow_factor);
    $("output").html(bellow_factor);
});
