function click(){
    var buttonSounds=this.innerHTML;
    keyboard(buttonSounds);
    buttonAnimation(buttonSounds);
}

var total=document.querySelectorAll(".drum").length;
for(var i=0;i<total;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",click);
}
document.addEventListener("keypress",function(event){
keyboard(event.key);
buttonAnimation(event.key);
});
function keyboard(key){
    switch(key){
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom1=new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;
        case "s":
            var tom1=new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;
        case "d":
            var tom1=new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;
        case "j":
            var tom1=new Audio('sounds/snare.mp3');
            tom1.play();
            break;
            case "k":
            var tom1=new Audio('sounds/kick-bass.mp3');
            tom1.play();
            break;
            case "l":
            var tom1=new Audio('sounds/crash.mp3');
            tom1.play();
            break;
            default:
                alert("dead");
    }
}
function buttonAnimation(currentKey){
    var ani=document.querySelector("." +currentKey);
    ani.classList.add("pressed");
    setTimeout(function(){
        ani.classList.remove("pressed");
    },100);
    
}