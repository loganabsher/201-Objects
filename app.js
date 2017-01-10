'use strict';

function randomAverage(name, minCust, maxCust, avrg){
  var average = 0;
  var hours = 0;
  var data = [];
  document.write('<h2 id="location">' + name + ':<br>');
  for(var i = 6; i <= 12; i++){
    var random = Math.round((Math.random() * maxCust + minCust));
    console.log(random + ' cookies at ' + i + ' am');
    document.write('<p class="data">' + i + 'am: ' + random + ' cookies<br>');
    data.push(random);
    console.log(data);
    average = average + random;
    console.log(average);
    hours++;
    console.log(hours);
  }
  for(var i = 1; i <= 8; i++){
    var r = Math.round((Math.random() * maxCust + minCust));
    console.log(r + ' cookies at ' + i + ' pm');
    document.write('<p class="data">' + i + 'pm: ' + r + ' cookies<br>');
    data.push(r);
    console.log(data);
    average = average + random;
    console.log(average);
    hours++;
    console.log(hours);
  }
  document.write('<p class="data">Total: ' + average + ' cookies<br>');
  console.log(average);
  Math.round(average = average / hours);
  console.log(average);
  document.write('<p class="data">Average: ' + average + ' cookies<br>');
  return data;
}
// var t = 'this place';
// var min = 13;
// var max = 99;
// var avrg = 2.2;
// randomAverage(t, min, max, avrg);

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avrg: 6.3,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
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
  }
};

console.log(firstAndPike);
seaTacAirport.table();

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avrg: 3.7,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
  }
};

console.log(firstAndPike);
seattleCenter.table();

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avrg: 2.3,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
  }
};

console.log(firstAndPike);
capitolHill.table();

var alki = {
  name: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  avrg: 4.8,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
  }
};

console.log(firstAndPike);
alki.table();
