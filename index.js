var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Method 1:
// remove + 1 on math random.
// var imgs = [
//   "./images/dice1.png",
//   "./images/dice2.png",
//   "./images/dice3.png",
//   "./images/dice4.png",
//   "./images/dice5.png",
//   "./images/dice6.png",
// ];
// document.querySelector(".img1").src = imgs[randomNumber1];

// Method 2:
// if (randomNumber1 === 1) {
//   document.querySelector(".img1").src = "./images/dice1.png";
// } else if (randomNumber1 === 2) {
//   document.querySelector(".img1").src = "./images/dice2.png";
// } else if (randomNumber1 === 3) {
//   document.querySelector(".img1").src = "./images/dice3.png";
// } else if (randomNumber1 === 4) {
//   document.querySelector(".img1").src = "./images/dice4.png";
// } else if (randomNumber1 === 5) {
//   document.querySelector(".img1").src = "./images/dice5.png";
// } else {
//   document.querySelector(".img1").src = "./images/dice6.png";
// }

// Method 3:
var firstImgSrc = "./images/dice" + randomNumber1 + ".png";
var secondImgSrc = "./images/dice" + randomNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src", firstImgSrc);
document.querySelector("img.img2").setAttribute("src", secondImgSrc);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#128681; Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! &#128681;";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
