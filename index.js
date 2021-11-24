var array=document.querySelectorAll("button");
for(var i=0;i< array.length;i++)

{
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var ButtonPressed= this.textContent;
    soundPlay(ButtonPressed);
    buttonAnimation(ButtonPressed);
});
document.addEventListener("keypress",function(event)
{
  soundPlay(event.key);
  buttonAnimation(event.key);
} );
}

function buttonAnimation(current)
{
document.querySelector("."+ current).classList.add("pressed");
setTimeout(function(){ document.querySelector("."+ current).classList.remove("pressed"); }, 100);
}
function soundPlay( char)
{
  switch (char) {
    case "w":
    var audio= new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio= new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "k":
    var audio= new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "l":
    var audio= new Audio("sounds/kick-bass.mp3")
    audio.play();
    break;

    default:

  }
}
