// alert("Hello");

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// });

// For single element
// document.querySelectorAll("button")[6].addEventListener("click", function(){
//     alert("I got clicked");
// });

//  ************************    For Multiple using for loop     ************************

// Using Tag Name

// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });
// }

// Using class name

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     // console.log(this.innerHTML);

//     // document.querySelectorAll("button")[i].style.backgroundColor = "white"; // This doesn't Works
//     // console.log(this.style.color = "white");

//     // console.log(this.style.color = "white");

//     this.style.color = "white";

//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
//   });
// }

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var buttonInnerHTML = this.innerHTML;

//     // var audio = new Audio("sounds/crash.mp3");
//     // audio.play();

//     switch (buttonInnerHTML) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;

//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;

//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;

//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;

//       case "j":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;

//       case "k":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;

//       case "l":
//         var king = new Audio("sounds/kick-bass.mp3");
//         king.play();
//         break;

//       default:
//     }
//   });
// }

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("keypress", function () {
//     var buttonInnerHTML = this.innerHTML;

//     // var audio = new Audio("sounds/crash.mp3");
//     // audio.play();

//     switch (buttonInnerHTML) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;

//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;

//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;

//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;

//       case "j":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;

//       case "k":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break; 

//       case "l":
//         var king = new Audio("sounds/kick-bass.mp3");
//         king.play();
//         break;

//       default:
//     }
//   });
// }

// document.addEventListener("keypress", function () {
//   alert("Key was pressed");
// });

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    // var buttonInnerHTML = document.querySelectorAll(".drum")[i].innerHTML;

    makeSound(buttonInnerHTML);

    // var audio = new Audio("sounds/crash.mp3");
    // audio.play();
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(pressedKey) {
  switch (pressedKey) {
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "f":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var king = new Audio("sounds/kick-bass.mp3");
      king.play();
      break;

    default:
  }
} 