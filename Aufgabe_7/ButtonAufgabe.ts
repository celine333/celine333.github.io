window.addEventListener("load", function (){
    document.querySelector("#Button1").addEventListener("mousedown", function(){playSample("kick.mp3");});
    document.querySelector("#Button2").addEventListener("mousedown", function(){playSample("snare.mp3");});
    document.querySelector("#Button3").addEventListener("mousedown", function(){playSample("hihat.mp3");});
    document.querySelector("#Button4").addEventListener("mousedown", function(){playSample("F.mp3");});
    document.querySelector("#Button5").addEventListener("mousedown", function(){playSample("G.mp3");});
    document.querySelector("#Button6").addEventListener("mousedown", function(){playSample("A.mp3");});
    document.querySelector("#Button7").addEventListener("mousedown", function(){playSample("C.mp3");});
    document.querySelector("#Button8").addEventListener("mousedown", function(){playSample("laugh-1.mp3");});
    document.querySelector("#Button9").addEventListener("mousedown", function(){playSample("laugh-2.mp3");});
    document.querySelector("#PlayButton").addEventListener("click", StartBeat) 
});

function playSample(myMP3: string)  {
    var sound:HTMLAudioElement = new Audio("assets/" + myMP3);
    sound.play();   
};


function StartBeat () {
    var Kick = setInterval(myBeat, 300);
    var index:number = 0;
    var Beat: string [] = ["assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
    function myBeat (){
        var mySound:HTMLAudioElement = new Audio(Beat [index]);
        mySound.play();
        index += 1;
        if (index>3) index=0;
        console.log(Beat [index] );
        
    
    };
};
    


