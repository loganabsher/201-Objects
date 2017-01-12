'use strict';
// declaring model array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total', 'average'];
// stores information
function location(name, minCust, maxCust, avrg, data){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrg = avrg;
  this.data = data;
}
// creating stores at different locations and different customer ranges
var headOfTable = new location('Store Location', null, null, null, hours);
var firstAndPike = new location('First and Pike', 23, 65, 6.3, randomAverage('First and Pike', 23, 65));
var seaTacAirport = new location('Seatac Airport', 3, 24, 1.2, randomAverage('Seatac Airport', 3, 24));
var seattleCenter = new location('Seattle Center', 11, 28, 3.7, randomAverage('Seattle Center', 11, 28));
var capitolHill = new location('Capitol Hill', 20, 38, 2.3, randomAverage('Capitol Hill', 20, 38));
var alkiBeach = new location('Alki Beach', 2, 16, 4.8, randomAverage('Alki Beach', 2, 16));
var totalsPerHour = new location('Totals', null, null, null, hourlyTotal(firstAndPike, seaTacAirport, seattleCenter, capitolHill, alkiBeach));
// takes in paramiters for random number range and creates and returns an array of 17 elements
function randomAverage(name, minCust, maxCust){
  var average = 0;
  var total = 0;
  var data = [];
  for(var i = 0; i <= hours.length - 3; i++){
    // creating random variable based on input
    var random = Math.round((Math.random() * (maxCust - minCust) + minCust));
    // counting total
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
// creates an hourly total based on all stores created in location
function hourlyTotal(firstAndPike, seaTacAirport, seattleCenter, capitolHill, alkiBeach){
  var total = [];
  // references the data arrays of all store locations and creates a total
  for(var i = 0; i < firstAndPike.data.length; i++){
    // creates the total average
    if(i === firstAndPike.data.length - 1){
      total.push((firstAndPike.data[i] + seaTacAirport.data[i] + seattleCenter.data[i] + capitolHill.data[i] + alkiBeach.data[i]) / 5);
      break;
    }
    // pushes total of all arrays into a new array
    total.push(firstAndPike.data[i] + seaTacAirport.data[i] + seattleCenter.data[i] + capitolHill.data[i] + alkiBeach.data[i]);
  }
  return total;
}
// making an array of all table elements
var tableArray = [headOfTable, firstAndPike, seaTacAirport, seattleCenter, capitolHill, alkiBeach, totalsPerHour];
// constructs a table using an array of data
function table(obj){
  console.log(obj);
  for(var j = 0; j < obj.length; j++){
    // referencing sales.html table element
    var tableEl = document.getElementById('cookies');
    if(j === 0){
      // creating the table header
      var nameEl = document.createElement('thead');
    }
    else if(j === obj.length - 1){
      // creating the table footer
      var nameEl = document.createElement('tfoot');
    }
    else{
      // creating core tr items
      var nameEl = document.createElement('tr');
      // referencing the string name stored in location
    }
    var name = obj[j].name;
    // giving tr items the string "name"
    nameEl.textContent = name;
    // creating td items from data arrays stored earlier in location
    for(var i = 0; i < obj[j].data.length; i++){
      var content = obj[j].data[i];
      var dataEl = document.createElement('td');
      dataEl.textContent = content;
      // assigning td to tr
      nameEl.appendChild(dataEl);
    }
    // assigning tr to the <table> element in sales.html
    tableEl.appendChild(nameEl);
  }
}
// passing table array into table constructor
table(tableArray);
