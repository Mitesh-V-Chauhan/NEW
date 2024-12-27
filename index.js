function playsound(sond){
    var audio= new Audio(sond);
    audio.play();
}

for (let i=1; i<=7; i++){
    let sond="";
    if(i<=4){
        sond=`./sounds/tom-${i}.mp3`;
    }

    else if(i==5){
        sond=`./sounds/snare.mp3`;
    }   
    
    else if(i==6){
        sond=`./sounds/crash.mp3`;
    } 

    else if(i==7){
        sond=`./sounds/kick-bass.mp3`;
    } 
    document.querySelectorAll(".drum")[i-1].addEventListener("click", function(){
        playsound(sond)});
    
}

