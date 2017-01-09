'use strict';

function randomAverage(){
  var average = 0;
  var total = 0;
  for(var i = 6; i <= 12; i++){
    var r = Math.round((Math.random() * 120 + 1));
    document.write();
    console.log(r + ' cookies at ' + i + ' am');
    document.write(i + 'am: ' + r + ' cookies<br>');
    average = average + r;
    console.log(average);
    total++;
    console.log(total);
  }
  for(var i = 1; i <= 8; i++){
    var r = Math.round((Math.random() * 120 + 1));
    document.write();
    console.log(r + ' cookies at ' + i + ' pm');
    document.write(i + 'pm: ' + r + ' cookies<br>');
    average = average + r;
    console.log(average);
    total++;
    console.log(total);
  }
  document.write('Total: ' + average + ' cookies<br>');
  console.log(average);
  Math.round(average = average / total);
  console.log(average);
  document.write('Average: ' + average + ' cookies<br>');
}
randomAverage();

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avrg: 6.3,
  table: function(){
    randomAverage();
    average();
  }
};

var seaTacAirport = {
  name: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avrg: 1.2,
  table: function(){
    randomAverage();
    average();
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avrg: 3.7,
  table: function(){
    randomAverage();
    average();
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avrg: 2.3,
  table: function(){
    randomAverage();
    average();
  }
};

var alki = {
  name: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  avrg: 4.8,
  table: function(){
    randomAverage();
    average();
  }
};
