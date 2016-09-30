/*******************************************************************************
This is an application that simulates the tossing of a coin. Each time the user
tosses the coin, the application uses the Math.random() function (which returns
a floating-point pseudo-random number) to get a random integer in the roange of
0 through 1.  If the random number is 0, it means the tails side of the coin is
up, and if the random number is 1, it means the heads side is up. The
application displays an image of a coin shwoing either heads or tails, depending
on the value of the random number.
********************************************************************************/

// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  coinToss();
});

function coinToss() {
  // Return a random number between 1 and 2
  var sideUp = Math.floor((Math.random() * 2) + 1);
  console.log(sideUp);

  // Display the side that is up
  if (sideUp === 1) {
    // Display tails up
    document.getElementById('myImage').src='tails.png';
  } else {
    // Display heads up
    document.getElementById('myImage').src='heads.jpg';
  }
}
