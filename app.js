'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total', 'average'];

// takes in paramiters for random number range and creates and returns an array of 17 elements
function randomAverage(name, minCust, maxCust){
  var average = 0;
  var total = 0;
  var data = [];
  for(var i = 0; i <= hours.length - 3; i++){
    // creating random variable based on input
    var random = Math.round((Math.random() * (maxCust - minCust) + minCust));
    total = total + random;
    data.push(random);
  }
  // total is the total number of customers during the day, it is added to data array
  data.push(total);
  // adding the final average to the data array
  average = Math.round(total / (hours.length - 2));
  data.push(average);
  return data;
}
// creating stores at different locations and different customer ranges
var headOfTable = new location('Store Location', null, null, null, hours);
console.log(headOfTable);
table(headOfTable);
var firstAndPike = new location('First and Pike', 23, 65, 6.3, randomAverage('First and Pike', 23, 65));
console.log(firstAndPike);
table(firstAndPike);
var seaTacAirport = new location('Seatac Airport', 3, 24, 1.2, randomAverage('Seatac Airport', 3, 24));
console.log(seaTacAirport);
table(seaTacAirport);
var seattleCenter = new location('Seattle Center', 11, 28, 3.7, randomAverage('Seattle Center', 11, 28));
console.log(seattleCenter);
table(seattleCenter);
var capitolHill = new location('Capitol Hill', 20, 38, 2.3, randomAverage('Capitol Hill', 20, 38));
console.log(capitolHill);
table(capitolHill);
var alkiBeach = new location('Alki Beach', 2, 16, 4.8, randomAverage('Alki Beach', 2, 16));
console.log(alkiBeach);
table(alkiBeach);
var totalsPerHour = new location('Totals', null, null, null, );
console.log(totalsPerHour);
table(totalsPerHour);

function location(name, minCust, maxCust, avrg, data){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrg = avrg;
  this.data = data;
}

// constructs a table using an array of data
function table(obj){
  var name = obj.name;
  console.log(name);
  var tableEl = document.getElementById('cookies');
  console.log(obj.data.length);
  var nameEl = document.createElement('tr');
  nameEl.textContent = name;
  for(var i = 0; i < obj.data.length; i++){
    var content = obj.data[i];
    console.log(obj.data[i]);
    var rowEl = document.createElement('td');
    rowEl.textContent = content;
    nameEl.appendChild(rowEl);
  }
  tableEl.appendChild(nameEl);
}
function hourlyTotal(hours){

}

// var tableEl = document.getElementById('coockie-table');
// console.log('table: ', tableEl);
// for(var i = 0; i < tableData.length; i++){
//   var rowData = tableData[i];
//   var rowEl = document.createElement('tr');
//   for(var j = 0; j < rowData.length; j++){
//     var content = rowData[j];
//     var dataEl = document.createElement('td');
//     dataEl.textContent = content;
//     rowEl.appendChild(dataEl);
//   }
//   tableEl.appendChild(rowEl);
// }

// var firstAndPike = {
//   name: 'First and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avrg: 6.3,
//   table: function(){
//     console.log(this.name);
//     var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
//     console.log(data);
//   }
// };
//
// console.log(firstAndPike);
// firstAndPike.table();
//
// var seaTacAirport = {
//   name: 'Seatac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avrg: 1.2,
//   table: function(){
//     console.log(this.name);
//     var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
//     console.log(data);
//   }
// };
//
// console.log(seaTacAirport);
// seaTacAirport.table();
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avrg: 3.7,
//   table: function(){
//     console.log(this.name);
//     var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
//     console.log(data);
//   }
// };
//
// console.log(seattleCenter);
// seattleCenter.table();
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avrg: 2.3,
//   table: function(){
//     console.log(this.name);
//     var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
//     console.log(data);
//   }
// };
//
// console.log(capitolHill);
// capitolHill.table();
//
// var alkiBeach = {
//   name: 'Alki Beach',
//   minCust: 2,
//   maxCust: 16,
//   avrg: 4.8,
//   table: function(){
//     console.log(this.name);
//     var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
//     console.log(data);
//   }
// };
//
// console.log(alkiBeack);
// alkiBeach.table();
//
// var russel = new person('russel', 27, 'russel@gohawks.com');
// var adamwallraff = new person('Adam', 30, 'adamwallraff@gmail.com');
// function person(name, age, email){
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }
