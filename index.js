const arr1 = ["Q1", 340, 604, 38, 335, 365, 35, 336, 484, 80];

const arr2 = ["Q2", 680, 583, 10, 684, 490, 48, 595, 594, 39];

const arr3 = ["Q3", 535, 490, 50, 389, 385, 15, 366, 385, 20];

// 2D Array
const arr = [arr1, arr2, arr3];
// Table Display
let table = `<table>
  <tr>
  <th colspan="4">Location = "Kolkata"</th>
  <th colspan="3">Location = "Delhi"</th>
  <th colspan="3">Location = "Mumbai"</th>
  </tr>
  <tr>
  <th colspan="4">"Item"</th>
  <th colspan="3">"Item"</th>
  <th colspan="3">"Item"</th>
  </tr>
  <tr>
  <th>Time</th>
  <th>Milk</th>
  <th>Egg</th>
  <th>Bread</th> 
  <th>Milk</th><th>Egg</th><th>Bread</th>
  <th>Milk</th><th>Egg</th><th>Bread</th>
  </tr>`;
// Display Table Using Loop
for (let i = 0; i < arr.length; i++) {
  table += `<tr>`;
  for (let j = 0; j < arr[i].length; j++) {
    table += `<td>${arr[i][j]}</td>`;
  }
  table += `</tr>`;
}
table += `</table>`;
document.getElementById("display").innerHTML = table;

// Calculate Maximum sale of Egg from array
let maxValue = 0;
let minValue = 1999999999;
let temp = 0;
let temp2 = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j <= arr[i].length; j++) {
    temp = arr[i][2] + arr[i][5] + arr[i][8];
    if (temp > maxValue) {
      maxValue = temp;
    }
  }
}

document.getElementById("max").innerHTML = maxValue;
// Identify the Location with minimum consumption of Milk from array
let Kolkata = 0;
let Delhi = 0;
let Mumbai = 0;
for (let i = 0; i < arr.length; i++) {
  Kolkata += arr[i][1];
  Delhi += arr[i][4];
  Mumbai += arr[i][7];
  if (Kolkata < Delhi || Kolkata < Mumbai) {
    minValue = Kolkata;
  } else if (Mumbai < Kolkata) {
    minValue = Mumbai;
  } else {
    minValue = Delhi;
  }
}
document.getElementById("min").innerHTML = minValue + " Mumbai";

// Delete location with Minimum sale of Bread from array
let temp3 = 0;
let minBread = 999999;

Kolkata = 0;
Delhi = 0;
Mumbai = 0;

for (let i = 0; i < arr.length; i++) {
  Kolkata += arr[i][3];
  Delhi += arr[i][6];
  Mumbai += arr[i][8];
  if (Kolkata < Delhi || Kolkata < Mumbai) {
    minBread = Kolkata;
  } else if (Mumbai < Kolkata) {
    minBread = Mumbai;
  } else {
    minBread = Delhi;
  }
}

let newArr = arr.map(function (val) {
  return val.splice(4, 3);
});

let newTable = `<table>
<tr>
<th colspan="4">Location = "Kolkata"</th>
<th colspan="3">Location = "Mumbai"</th>
</tr>
<tr>
<th colspan="4">"Item"</th>
<th colspan="3">"Item"</th>
</tr>
<tr>
<th>Time</th>
<th>Milk</th>
<th>Egg</th>
<th>Bread</th> 
<th>Milk</th><th>Egg</th><th>Bread</th>
</tr>`;

for (let i = 0; i < arr.length; i++) {
  newTable += `<tr>`;
  for (let j = 0; j < arr[i].length; j++) {
    newTable += `<td>${arr[i][j]}</td>`;
  }
  newTable += `</tr>`;
}
newTable += `</table>`;

document.getElementById("newTable").innerHTML = newTable;
