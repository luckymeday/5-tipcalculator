function calculateTip() {
  var inputBill = document.getElementById("inputBill").value;
  console.log("input-bill :", inputBill);
  var selectTip = document.getElementById("selectTip").value;
  console.log("select-tip :", selectTip);

  var customTip = document.getElementById("inputCustom").value / 100;
  console.log("input-custom-tip :", customTip);

  var numOfPeople = document.getElementById("inputPeople").value;
  console.log("number of people :", numOfPeople);

  if (numOfPeople === "") {
    document.getElementById("alert").innerHTML = "Can't be zero";
    document.getElementById("inputPeople").style.border = "3px solid red";
    return;
  } else document.getElementById("alert").innerHTML = "";

  var tipPerPerson = (inputBill * selectTip) / numOfPeople;
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
  document.getElementById("selectTip").value = "";
  document.getElementById("inputCustom").value = "";
  document.getElementById("inputPeople").value = "";
  document.getElementById("tipPerPerson").innerHTML = "$0.00";
  document.getElementById("totalPerPerson").innerHTML = "$0.00";
}
