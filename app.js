// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeSpeed();
});

// Constants
var START_SPEED = 60;
var END_SPEED = 130;
var INTERVAL = 10;
var CONVERSION_FACTOR = 0.6214;

// variables
var kph;      // Kilometers per hour
var mph;      // Miles per hour


function computeSpeed() {
  // Display the table of speeds
  for (kph = START_SPEED; kph <= END_SPEED; kph += INTERVAL) {
    // Calculate miles per hour.
    mph = kph * CONVERSION_FACTOR;

    // Display to console the conversion.
    console.log(kph + " KPH is the same as " + mph.toFixed(2) + " MPH");
  }
  // Display the last speed conversion
  document.getElementById('outSpeed').innerHTML = kph + " KPH is the same as " +
    mph.toFixed(2) + " MPH";
}
