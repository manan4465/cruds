// // reverse function
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// const x = "hello";
// const reversedString = reverseString(x);
// console.log(reversedString);

// //  Write a function that counts the number of vowels in a string

// function countVowels(str) {
//   return str.replace(/[^hello]/gi, "").length;
// }
// console.log(countVowels("hello"));

// // Write a function to find the longest word in a sentence

// function longestword(str) {
//   let longestword = "";
//   const word = str.split("");
//   word.forEach((word) => {
//     if (word.length >= longestword.length) {
//       longestword = word;
//     }
//   });
//   return longestword;
// }
// console.log(longestword("longest word in srting "));

// // Write a function to capitalize the first letter of each word in a string

// function myFunction() {
//   let text = document.getElementById("ok").innerHTML;
//   document.getElementById("ok").innerHTML = text.toUpperCase();
// }

// //  Write a function that replaces all "o" letters with "a" letters in a string

// function changeIt(str) {
//   return str.replace(/o/, "a");
// }
// const orginal = "halo";
// const modifield = changeIt(orginal);
// console.log(modifield);

// // Write a function to convert a string into an array of words
// let text = "How are you doing today?";
// const myArray = text.split(" ");

// document.getElementById("array").innerHTML = myArray;

// // . Write a function that trims the whitespace from both ends of a string

// let texts = "       hello       ";
// const changeIts = texts.trim();
// document.getElementById("trim").innerHTML = changeIts;

// //. Write a function to convert a string to camel case

// function myFunctions() {
//   let text = document.getElementById("ok2").innerHTML;
//   document.getElementById("ok2").innerHTML = text.toCamelCase();
// }

// //
// // for (let i in myObject.car){
// //     x += "<h2>" + myObject.cars[i].name + "</h2"
// //     for (let j in myObject.cars[i].model){
// //         x += myObject.cars[i].model[j] + "<br>";
// //     }
// // }

// function myFunctionss() {
//   let age = document.getElementById("age").value;
//   let voteable = age < 18 ? "to young " : "old enogh";
//   document.getElementById("dema").innerHTML = voteable + "to vote";
// }
var selectedRow = null;

function onformsubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

// retrive the data
function readFormData() {
  var formData = {};
  formData["productcode"] = document.getElementById("productcode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

// inert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productcode;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  console.log(cell4, "dssdds");

  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

// edit the date
function onEdit(td) {
  console.log(td.parentElement, "tbdfdsf");
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productcode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
  console.log(selectedRow, "selectedRow.cells[3].innerHTML");
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productcode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

// detete the data
function onDelete(td) {
  if (confirm("Do You want to delete this record")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

// reset the data
function resetForm() {
  document.getElementById("productcode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
}
