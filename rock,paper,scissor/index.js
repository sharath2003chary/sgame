var randomNumber1  = Math.floor(Math.random()*3);
var images=["paper","rock","scissor"];
var randomImage1=images[randomNumber1];
var randomImageSource1="images/"+randomImage1+".jpg";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);


var randomNumber2  = Math.floor(Math.random()*3);
var images=["paper","rock","scissor"];
var randomImage2=images[randomNumber2];
var randomImageSource2="images/"+randomImage2+".jpg"
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource2);




// const options = ['rock', 'paper', 'scissors'];
// const h1 = document.querySelector('h1');

// function play() {
//   // Generate random move for player
//   const playerMove = options[Math.floor(Math.random() * options.length)];

//   // Generate random move for computer
//   const randomImage2 = options[Math.floor(Math.random() * options.length)];

  // Compare moves to determine winner
  if (randomImage1 === randomImage2) {
    // h1.textContent = 'It was a tie!';
    document.querySelector("h1").innerHTML="Draws🎌";
  }
   else if ((randomImage1 === 'rock' && randomImage2 === 'scissors') ||
   (randomImage1 === 'paper' && randomImage2 === 'rock') ||
   (randomImage1 === 'scissors' && randomImage2 === 'paper')) 
  {
    // h1.textContent = 'Player 1 wins!';
    document.querySelector("h1").innerHTML="Players 1 Wins.🚩";
  }
   else 
   {
    // h1.textContent = 'Computer wins!';
    document.querySelector("h1").innerHTML="Players 2 Wins.🚩";
  }
// }

// Add event listener to button to play game
// const button = document.querySelector('button');
// button.addEventListener('click', play);







 


 
//  if(randomNumber1>randomNumber2)
//  {
//     document.querySelector("h1").innerHTML="Players 1 Wins.🚩";
//  }
//  else if(randomNumber1<randomNumber2)
//  {
    
//     document.querySelector("h1").innerHTML="Players 2 Wins🚩.";
//  }
//  else{
//     document.querySelector("h1").innerHTML="🚩draws🚩";
//  }