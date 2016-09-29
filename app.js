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
