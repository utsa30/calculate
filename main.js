function myFunc1() {
  var x = document.getElementById("input1").value;
  var y = document.getElementById("input2").value;
  var sum = parseInt(x) + parseInt(y);

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " " + sum;
}

function myFunc2() {
  var x = document.getElementById("input1").value;
  var y = document.getElementById("input2").value;
  var sub = parseInt(x) - parseInt(y);

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " " + sub;
}

function myFunc3() {
  var x = document.getElementById("input1").value;
  var y = document.getElementById("input2").value;
  var mal = parseInt(x) * parseInt(y);

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " " + mal;
}

function myFunc4() {
  var x = document.getElementById("input1").value;
  var y = document.getElementById("input2").value;
  var div = parseInt(x) / parseInt(y);

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " " + div;
}

function myFunc5() {
  var a = document.getElementById("i1").value;
  var n = document.getElementById("i2").value;
  var d = document.getElementById("i3").value;
  var nth = parseInt(a) +( parseInt(n) - 1) * parseInt(d);

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " "+ nth;
}
function myFunc6() {
  var a = document.getElementById("i1").value;
  var n = document.getElementById("i2").value;
  var d = document.getElementById("i3").value;
  var nth = (parseInt(n)/2)*( (2*parseInt(a))+(parseInt(n) - 1) * parseInt(d));

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " "+ nth;
}
function myFunc7() {
  var a = document.getElementById("i1").value;
  var n = document.getElementById("i2").value;
  var r = document.getElementById("i3").value;
  var nthGP = parseInt(a)*( parseInt(r)** (parseInt(n)-1));

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " "+ nthGP;
}
function myFunc8() {
  var a = document.getElementById("i1").value;
  var n = document.getElementById("i2").value;
  var r = document.getElementById("i3").value;
  var sumGP = (parseInt(a)*((parseInt(r)**parseInt(n))-1))/(parseInt(r)-1);

  document.getElementById("demo").innerHTML = "Your Answer Is :" + " "+ sumGP;
}