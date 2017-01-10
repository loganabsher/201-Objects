'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomAverage(name, minCust, maxCust, avrg){
  var average = 0;
  var data = [];
  document.write('<h2 id="location">' + name + ':<br>');
  for(var i = 0; i <= hours.length - 1; i++){
    var random = Math.round((Math.random() * (maxCust - minCust) + minCust));
    console.log(random + ' cookies at ' + hours[i]);
    document.write('<p class="data">' + hours[i] + ' : ' + random + ' cookies<br>');
    data.push(random);
    average = average + random;
    console.log(average);
  }
  document.write('<p class="data">Total: ' + average + ' cookies<br>');
  console.log(average);
  Math.round(average = average / hours.length);
  console.log(average);
  document.write('<p class="data">Average: ' + average + ' cookies<br>');
  return data;
}

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avrg: 6.3,
  table: function(){
    console.log(this.name);
    var data = randomAverage(this.name, this.minCust, this.maxCust, this.avrg);
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
