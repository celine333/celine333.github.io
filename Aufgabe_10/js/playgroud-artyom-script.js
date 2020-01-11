function RecognizeSpeech() {
    var artyom = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["erstelle Aufgabe *"],
        action: function (i, wildcard) {
            console.log("hey there...");
            /* if (i == 0) {
                artyom.say(wildcard);
            }; */
            var inputDOMElement;
            inputDOMElement = document.querySelector("#inputTodo");
            inputDOMElement.value = wildcard;
            addTodo();
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
}
;
//# sourceMappingURL=playgroud-artyom-script.js.map