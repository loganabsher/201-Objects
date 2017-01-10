'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// takes in paramiters for random number range and creates and returns an array of 17 elements
function randomAverage(name, minCust, maxCust, avrg){
  var average = 0;
  var data = [];
  document.write('<h2 id="location">' + name + ':<br>');
  for(var i = 0; i <= hours.length - 1; i++){
    var random = Math.round((Math.random() * (maxCust - minCust) + minCust));
    console.log(random + ' cookies at ' + hours[i]);
    data.push(random);
    average = average + random;
    console.log(average);
  }
  // average is the total number of cookies during the day at this point, adding it to data array
  data.push(average);
  console.log(average);
  // changing average to the actual average, rounding it, then adding it to the data array
  Math.round(average = average / hours.length);
  data.push(average);
  console.log(average);
  return data;
}
function printList(data){
  var list = document.getElementById('data-list');
  for(var i = hours.length; i > 0; i--){
    console.log(data[i]);
    var listEl = document.createElement('li');
    listEl.textContent = data[i] + ' is the content at index: ' + i;
    list.appendChild(listEl);
  }
}
var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avrg: 6.3,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
    printList(data);
    console.log(data);
  }
};

console.log(firstAndPike);
firstAndPike.table();

var seaTacAirport = {
  name: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avrg: 1.2,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
    console.log(data);
  }
};

console.log(seaTacAirport);
seaTacAirport.table();

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avrg: 3.7,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
    console.log(data);
  }
};

console.log(seattleCenter);
seattleCenter.table();

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avrg: 2.3,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
    console.log(data);
  }
};

console.log(capitolHill);
capitolHill.table();

var alki = {
  name: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  avrg: 4.8,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
    console.log(data);
  }
};

console.log(alki);
alki.table();
