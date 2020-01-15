// Everything below this line is do stuff Logic:

var add = function(number1, number2) {
    return number1 + number2;
  };

var subtract = function(number1, number2) {
      return number1 - number2;
  };

var multiply = function(number1, number2) {
    return number1 * number2;
};

var divide = function(number1, number2) {
    return number1 / number2;
};

// Everything below this line is show stuff logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#outputAdd").text(result);
  });
  $("form#Subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#Subtract1").val());
    var number2 = parseInt($("#Subtract2").val());
    var result = subtract(number1, number2);
    $("#outputSubtract").text(result);
  });
  $("form#Multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#Multiply1").val());
    var number2 = parseInt($("#Multiply2").val());
    var result = multiply(number1, number2);
    $("#outputMultiply").text(result);
  });
  $("form#Divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#Divide1").val());
    var number2 = parseInt($("#Divide2").val());
    var result = divide(number1, number2);
    $("#outputDivide").text(result);
  });
});