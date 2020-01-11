var TodoObject = [];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var voiceCommandDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    voiceCommandDOMElement = document.querySelector("#voiceCommand");
    addButtonDOMElement.addEventListener("click", addTodo);
    voiceCommandDOMElement.addEventListener("click", RecognizeSpeech);
    drawListToDOM();
});
function drawListToDOM() {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        console.log(TodoObject[index].TextTodo);
        // Neues DIV-Element erstellen
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + TodoObject[index].Checked + "'><i class='fas fa-check'></i></span>"
            + TodoObject[index].TextTodo +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (var index = 0; index < TodoObject.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = TodoObject.length + " in total | ";
    var CompletedTodos = 0;
    var OpenTodos = 0;
    for (var index = 0; index < TodoObject.length; index++) {
        if (TodoObject[index].Checked == true) {
            CompletedTodos++;
        }
        else {
            OpenTodos++;
        }
        ;
    }
    document.querySelector("#done").innerHTML = CompletedTodos + " done |";
    document.querySelector("#open").innerHTML = OpenTodos + " open";
}
// Ein neues ToDo wird erstellt:
function addTodo() {
    // Zunächst wird geprüft, ob das Input-Feld nicht leer ist
    if (inputDOMElement.value != "") {
        var NewTodo = {
            TextTodo: inputDOMElement.value,
            Checked: false
        };
        TodoObject.unshift(NewTodo);
        console.log(NewTodo);
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
// Der check- / unchecked Zustand eines ToDo:
function toggleCheckState(index) {
    TodoObject[index].Checked = !TodoObject[index].Checked;
    drawListToDOM();
}
;
// Diese Funktion löscht ein ToDo:
function deleteTodo(index) {
    TodoObject.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map