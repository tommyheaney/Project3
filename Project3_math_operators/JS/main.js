// Changes initial script to Orange

var orange = "Simple Math!";
var orange = orange.fontcolor("orange");
document.write(orange);

// Script for the answering questions Button

  function addition_Function() {
      var addition = 2 + 2;
      document.getElementById("Math").innerHTML= "2 + 2 = " + addition;
  }

  function substraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML= "5 - 2 = " + subtraction;
}

// Note: Names such as multiplication can be named differently if preffered

function multiplication() {
    var multiplication = 6 * 8;
    document.getElementById("multiplication").innerHTML= "6 x 8 = " + multiplication;
}

// Note: text in red qoutation marks will be visable to end user
// Note: answer how the end user would expect with the recognisable multiply and division sign

function division() {
    var division = 48 / 6;
    document.getElementById("division").innerHTML= "48 ÷ 6 = " + division;
}

//Multiple Operations
function simplemath() {
    var simplemath = (1+3)*10/2-5;
    document.getElementById("simplemath").innerHTML= "1+3, x10 ÷2 -5= " + simplemath;
}

//Multiple Operations
function kermit() {
    var kermit = 25 % 6;
    document.getElementById("kermit").innerHTML= "When you divide 25 by 6 you have a remainder of: " + kermit;
}

window.alert(Math.random());