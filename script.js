let tipCustom = 0;
let inputTip = 0;

function selectTip05() {
  inputTip = 0.05;
  console.log("1.tip05", inputTip);
}
function selectTip10() {
  inputTip = 0.1;
  console.log("2.tip10", inputTip);
}
function selectTip15() {
  inputTip = 0.15;
  console.log("3.tip15", inputTip);
}
function selectTip25() {
  inputTip = 0.25;
  console.log("4.tip25", inputTip);
}
function selectTip50() {
  inputTip = 0.5;
  console.log("5.tip50", inputTip);
}
function customTip() {
  tipCustom = document.getElementById("customTip").value / 100;
  inputTip = tipCustom;
  console.log("6.custom selected", inputTip);
}

function calculateTip() {
  var inputBill = document.getElementById("inputBill").value;
  console.log("input-bill :", inputBill);

  var numOfPeople = parseInt(document.getElementById("inputPeople").value);
  console.log("number of people :", numOfPeople);

  if (inputTip === "") {
    customTip = inputTip;
  }

  if (!Number.isInteger(numOfPeople) || numOfPeople == 0) {
    document.getElementById("alert").innerHTML = "Invalid number";
    document.getElementById("inputPeople").style.border = "3px solid red";
    return;
  } else document.getElementById("alert").innerHTML = "";
  document.getElementById("inputPeople").style.border = "none";

  var tipPerPerson = (inputBill * inputTip) / numOfPeople;
  console.log("tip per person :", tipPerPerson);

  document.getElementById("tipPerPerson").style.color = "white";
  document.getElementById("tipPerPerson").innerHTML =
    "$" + tipPerPerson.toFixed(2);

  var totalPerPerson = inputBill / numOfPeople + tipPerPerson;
  console.log("total per person :", totalPerPerson);

  document.getElementById("totalPerPerson").style.color = "white";
  document.getElementById("totalPerPerson").innerHTML =
    "$" + totalPerPerson.toFixed(2);

  //   var totalPerPerson = console.log("tip per person :", tipPerPerson);
}

function reset() {
  console.log("reset buttom clicked?", reset);

  document.getElementById("inputBill").value = "";
  inputTip = "";
  console.log("after-reset-tip", inputTip);
  document.getElementById("customTip").value = "";
  document.getElementById("inputPeople").value = "";
  document.getElementById("alert").innerHTML = "";
  document.getElementById("inputPeople").style.border = "none";
  document.getElementById("tipPerPerson").innerHTML = "$0.00";
  document.getElementById("totalPerPerson").innerHTML = "$0.00";
}
