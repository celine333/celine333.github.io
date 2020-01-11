declare var Artyom: any;

function RecognizeSpeech(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        smart:true,
        indexes: ["erstelle Aufgabe *"],
        action: function(i: any, wildcard: string): void {
            console.log("hey there...");
            /* if (i == 0) {
                artyom.say(wildcard);
            }; */
          
        var inputDOMElement: HTMLInputElement;
        inputDOMElement = document.querySelector("#inputTodo");
        inputDOMElement.value = wildcard;
        addTodo();
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
};


