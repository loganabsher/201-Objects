'use strict';
// declaring model array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total', 'average'];
// stores information
function Location(name, minCust, maxCust, avrg){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrg = avrg;
  this.data = randomAverage(this.name, this.minCust, this.maxCust);
}
// creating stores at different locations and different customer ranges
var firstAndPike = new Location('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Location('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 28, 3.7);
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new Location('Alki Beach', 2, 16, 4.8);
// making an array of all store elements
var tableArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alkiBeach];
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
  // adding the average to the data array
  average = Math.round(total / (hours.length - 2));
  data.push(average);
  return data;
}
// creates an hourly total based on all stores created in location
function hourlyTotal(tableArray){
  var total = [];
  var counter = 0;
  // references the data arrays of all store locations and creates a total
  for(var i = 0; i < tableArray[0].data.length; i++){
    for(var j = 0; j < tableArray.length; j++){
      counter = counter + parseInt(tableArray[j].data[i]);
    }
    console.log(tableArray[0].data.length);
    if(i === tableArray[0].data.length - 1){
      // creating average of all averages
      total.push(counter / tableArray.length);
      console.log(total);
    }
    else{
      // creating hourly totals and making an array
      total.push(counter);
      counter = 0;
    }
  }
  return total;
}
// constructs a table using an array of data
function Table(obj, hourlyTotal){
  var tableEl = document.getElementById('cookies');
  console.log(obj, hourlyTotal);
  //creating header based on the working hours
  for(var k = -1; k < hours.length + 1; k++){
    var headEl = document.createElement('th');
    headEl.textContent = hours[k];
    tableEl.appendChild(headEl);
  }
  for(var j = 0; j < obj.length; j++){
    // referencing sales.html table element
    // creating core tr items
    var nameEl = document.createElement('tr');
    // referencing the string name stored in location
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
  // creating footer from hourly totals
  var footerEl = document.createElement('tfoot');
  footerEl.textContent = 'Totals Per Hour';
  for(var l = 0; l < hourlyTotal.length; l++){
    var footEl = hourlyTotal[l];
    var totalEl = document.createElement('td');
    totalEl.textContent = footEl;
    footerEl.appendChild(totalEl);
  }
  tableEl.appendChild(footerEl);
}
// passing table array into table constructor
var salmonTable = new Table(tableArray, hourlyTotal(tableArray));
salmonTable;
// referencing the form in sales.html
var userEl = document.getElementById('userForm');
// beginning user input event
var user = function(event){
  // preventing page refresh
  event.preventDefault();
  event.stopPropagation();
  // finding input values within the form and creating varibales to go with them
  var userStore = event.target.username.value;
  var userMaxCust = event.target.userMaxCust.value;
  var userMinCust = event.target.userMinCust.value;
  // creating new location from user input
  var userStore = new Location(userStore, parseInt(userMaxCust), parseInt(userMinCust), 0);
  // adding new store to table list
  tableArray.push(userStore);
  console.log(userStore);
};
// creating an event listener
userEl.addEventListener('submit', user, false);
