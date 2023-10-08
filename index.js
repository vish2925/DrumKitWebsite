var n = document.querySelectorAll(".drum").length;
var audio1 = new Audio("sounds/crash.mp3");
var audio2 = new Audio("sounds/kick-bass.mp3");
var audio3 = new Audio("sounds/snare.mp3");
var audio4 = new Audio("sounds/tom-1.mp3");
var audio5 = new Audio("sounds/tom-2.mp3");
var audio6 = new Audio("sounds/tom-3.mp3");
var audio7 = new Audio("sounds/tom-4.mp3");


//detection of click
for (var i = 0; i < n; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handleclick() {
      makeSound(this.innerHTML);
      animateThis(this.innerHTML);
    });
}

//detection of keypress
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  animateThis(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      audio6.play();
      break;
    case "a":
      audio1.play();
      break;
    case "s":
      audio2.play();
      break;
    case "d":
      audio3.play();
      break;
    case "j":
      audio4.play();
      break;
    case "k":
      audio5.play();
      break;
    case "l":
      audio7.play();
      break;
  }
}
function animateThis(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
// var iplus=i+1;
//       var a="audio"+iplus;
//       a.play();
