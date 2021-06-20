
// btn.addEventListener("click", handleclick); //?parenthesis are not used in function call in addEventListener

var numberofiterations = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofiterations;i++)

{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var value = this.innerHTML;
        
        play_sound(value);
        buttonAnimation(value);
    });
   
}
document.addEventListener("keydown", function(event){
        
    play_sound(event.key);
    buttonAnimation(event.key);

});

function play_sound(key)
{
   
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                 break;
                case "s":
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    
                    break;
                    case "d":
                        var audio = new Audio('sounds/tom-4.mp3');
                        audio.play();
                        
                        break;
                        case "j":
                            var audio = new Audio('sounds/snare.mp3');
                            audio.play();
                            
                            break;
    
                            case "k":
                                var audio = new Audio('sounds/kick-bass.mp3');
                                audio.play();
                                
                                break;
    
                                case "l":
                                    var audio = new Audio('sounds/crash.mp3');
                                    audio.play();
                                    
                                    break;
                                    case "p":
                                    var audio = new Audio('sounds/kick-2.mp3');
                                    audio.play();
                                    
                                    break;
            
        default:
            break;
    }
}


function buttonAnimation( currentkey)
{
   var activebutton=  document.querySelector("." + currentkey);
   activebutton.classList.add("pressed");
   setTimeout(() => {
       activebutton.classList.remove("pressed");
   }, 100);

}