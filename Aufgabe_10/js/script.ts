interface Todo {
    TextTodo: string,
    Checked: boolean
}



var TodoObject: Todo[] = [];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var voiceCommandDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    voiceCommandDOMElement = document.querySelector("#voiceCommand")
    addButtonDOMElement.addEventListener("click", addTodo);
    voiceCommandDOMElement.addEventListener("click", RecognizeSpeech);
    
    drawListToDOM();
});

function drawListToDOM(): void {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";

    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
      for (let index: number = 0; index < TodoObject.length; index++) {     
        console.log(TodoObject[index].TextTodo);
  
    // Neues DIV-Element erstellen
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + TodoObject[index].Checked + "'><i class='fas fa-check'></i></span>"
        + TodoObject[index].TextTodo +
        "<span class='trash fas fa-trash-alt'></span>";

        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }
    
    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = TodoObject.length + " in total | ";
    var CompletedTodos: number = 0;
    var OpenTodos: number = 0;
    for (let index: number = 0; index < TodoObject.length; index++) {
        if (TodoObject[index].Checked == true) {
           CompletedTodos++;
        } else {
            OpenTodos++;
        };
        
    }
   
    document.querySelector("#done").innerHTML = CompletedTodos + " done |";
    document.querySelector("#open").innerHTML = OpenTodos + " open";
    
}


// Ein neues ToDo wird erstellt:
function addTodo(): void {
    // Zunächst wird geprüft, ob das Input-Feld nicht leer ist
    if (inputDOMElement.value != "") {
        var NewTodo: Todo =
        {
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
function toggleCheckState(index: number): void {

    TodoObject[index].Checked = !TodoObject[index].Checked;
    
    drawListToDOM();
    
};

// Diese Funktion löscht ein ToDo:
function deleteTodo(index: number): void {
    TodoObject.splice(index, 1);
    drawListToDOM();
}



